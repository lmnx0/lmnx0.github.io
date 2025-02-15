// script.js

let dialoguePosts = []; 
let postIndex = 0;
let isTyping = false;
let skipTyping = false;
let currentScene = null; // Clears the feed on scene change

/**
 * Clears the feed container.
 */
function clearFeed() {
  document.querySelector(".feed").innerHTML = "";
}

/**
 * Smoothly scrolls to the bottom.
 */
function autoScroll() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

/**
 * Starts an interval to update the post's time display every 5 seconds.
 * Each update increments the display by 1 minute (if not typing).
 * @param {HTMLElement} post - The post element.
 */
function startTimeInterval(post) {
  const timeSpan = post.querySelector(".post-time");
  let minutes = 0;
  timeSpan.textContent = "just now";
  
  setInterval(() => {
    if (!isTyping) {
      minutes++;
      timeSpan.textContent = minutes + "m ago";
    } else {
      timeSpan.textContent = "just now";
    }
  }, 5000);
}

/**
 * Types text into an element letter by letter.
 * If skipTyping is true, it immediately completes the current sentence.
 */
function typeText(element, text, index = 0, callback) {
  if (skipTyping) {
    element.textContent = text;
    skipTyping = false; // Reset for future sentences
    autoScroll();
    if (callback) callback();
    return;
  }
  if (index < text.length) {
    element.textContent += text[index];
    autoScroll();
    setTimeout(() => typeText(element, text, index + 1, callback), 50);
  } else {
    if (callback) callback();
  }
}

/**
 * Displays a dialogue post by delivering one sentence at a time
 * in a single <p> element that resets with each new sentence.
 * Only one sentence is visible at a time.
 * @param {Array} sentences - Array of sentence strings.
 * @param {function} onComplete - Callback when all sentences have been delivered.
 * @returns {HTMLElement} - The dialogue container.
 */
function displayDialoguePostReset(sentences, onComplete) {
  const container = document.createElement("div");
  container.className = "dialogue-container";
  
  const sentenceEl = document.createElement("p");
  sentenceEl.className = "dialogue-sentence";
  container.appendChild(sentenceEl);
  
  let currentSentence = 0;
  isTyping = true;
  
  function showNextSentence() {
    if (currentSentence < sentences.length) {
      sentenceEl.textContent = "";
      isTyping = true;
      typeText(sentenceEl, sentences[currentSentence].trim(), 0, () => {
        isTyping = false;
        currentSentence++;
        // Wait for a click to proceed to the next sentence.
        document.addEventListener("click", function onSentenceClick() {
          document.removeEventListener("click", onSentenceClick);
          showNextSentence();
        });
      });
    } else {
      if (onComplete) onComplete();
    }
  }
  
  showNextSentence();
  return container;
}

/**
 * Shows a reusable choice modal.
 * @param {string} title - Modal title.
 * @param {Array} choices - Array of objects { label, id }.
 * @param {function} onChoice - Callback receiving the chosen id.
 */
function showChoiceBox(title, choices, onChoice) {
  const choiceBox = document.getElementById("choiceBox");
  const choiceBoxTitle = document.getElementById("choiceBoxTitle");
  const choiceBoxButtons = document.getElementById("choiceBoxButtons");
  
  choiceBoxTitle.textContent = title;
  choiceBoxButtons.innerHTML = "";
  choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.label;
    btn.addEventListener("click", () => {
      hideChoiceBox();
      setTimeout(() => onChoice(choice.id), 100);
    });
    choiceBoxButtons.appendChild(btn);
  });
  choiceBox.style.display = "block";
}

/**
 * Hides the reusable choice modal.
 */
function hideChoiceBox() {
  const choiceBox = document.getElementById("choiceBox");
  choiceBox.style.display = "none";
}

/**
 * Appends a dialogue post (by its ID) to the feed.
 * If the new post belongs to a new scene (determined by the prefix),
 * the feed is cleared before appending the new post.
 * @param {string} postId - The ID of the post to append.
 * @param {function} callback - Callback when post delivery is complete.
 */
function appendPostById(postId, callback) {
  const feed = document.querySelector(".feed");
  const postData = dialoguePosts.find(p => p.id === postId);
  if (!postData) return;
  
  // Determine scene prefix (e.g. "scene1", "scene2")
  let newScene = postData.id.split("_")[0];
  if (currentScene !== newScene) {
    clearFeed();
    currentScene = newScene;
  }
  
  const post = document.createElement("article");
  post.className = "post";
  post.dataset.postId = postData.id;
  
  let username;
  if (postData.id.toLowerCase().includes("narration")) {
    username = "@narrator";
  } else if (postData.id.toLowerCase().includes("character")) {
    username = "@unknown";
  } else {
    username = "@unknown";
  }
  
  post.innerHTML = `
    <div class="post-header">
      <div class="post-profile-pic"></div>
      <div class="post-user-info">
        <span class="post-username">${username}</span>
        <span class="post-time">just now</span>
      </div>
    </div>
  `;
  
  feed.appendChild(post);
  autoScroll();
  
  let sentences = postData.sentences;
  if (postData.id === "scene2_intro_narration") {
    sentences = sentences.filter(sentence => !sentence.includes("interactive moment"));
  }
  
  const dialogueEl = displayDialoguePostReset(sentences, () => {
    startTimeInterval(post);
    if (callback) callback();
  });
  
  post.appendChild(dialogueEl);
}

/**
 * Appends a reply post (by its ID) as a nested reply within the given parent post,
 * with the username @empty_:
 */
function appendReplyById(replyId, parentPost, callback) {
  const replyData = dialoguePosts.find(p => p.id === replyId);
  if (!replyData) return;
  
  let repliesContainer = parentPost.querySelector(".replies");
  if (!repliesContainer) {
    repliesContainer = document.createElement("div");
    repliesContainer.className = "replies";
    parentPost.appendChild(repliesContainer);
  }
  
  const replyPost = document.createElement("article");
  replyPost.className = "post reply";
  replyPost.dataset.postId = replyData.id;
  
  // Use @empty_: as the username for replies
  const username = "@empty_:";
  
  replyPost.innerHTML = `
    <div class="post-header">
      <div class="post-profile-pic"></div>
      <div class="post-user-info">
        <span class="post-username">${username}</span>
        <span class="post-time">just now</span>
      </div>
    </div>
  `;
  
  repliesContainer.appendChild(replyPost);
  autoScroll();
  
  const dialogueEl = displayDialoguePostReset(replyData.sentences, () => {
    startTimeInterval(replyPost);
    if (callback) callback();
  });
  
  replyPost.appendChild(dialogueEl);
}

/**
 * Processes a sequence of post IDs in order.
 * @param {Array} sequence - Array of post IDs.
 * @param {function} callback - Called when sequence is done.
 */
function processSequence(sequence, callback) {
  function next(i) {
    if (i < sequence.length) {
      appendPostById(sequence[i], () => {
        setTimeout(() => next(i + 1), 500);
      });
    } else {
      if (callback) callback();
    }
  }
  next(0);
}

/**
 * Branching logic for Scene 2 choices.
 * For scene2_option1, we process scene2_option1_1, scene2_option1_2,
 * then append scene2_option1_3 as a reply to scene2_option1_2, then scene2_option1_4.
 */
function branchSequence(chosenId) {
  if (chosenId === "scene2_option1") {
    const branch = ["scene2_option1_1", "scene2_option1_2"];
    processSequence(branch, () => {
      let parentPost = document.querySelector('article.post[data-post-id="scene2_option1_2"]');
      if (parentPost) {
        // Append the reply post scene2_option1_3
        appendReplyById("scene2_option1_3", parentPost, () => {
          // After the reply is finished, append scene2_option1_4 as a main post
          setTimeout(() => {
            appendPostById("scene2_option1_4");
          }, 500);
        });
      }
    });
  } else {
    let branch;
    switch(chosenId) {
      case "scene2_option2":
        branch = ["scene2_option2"];
        break;
      case "scene2_option3":
        branch = ["scene2_option3"];
        break;
      default:
        branch = [];
    }
    processSequence(branch);
  }
}

/**
 * Loads dialogues, processes the initial sequence, then shows the choice modal for branching.
 */
function loadDialogues() {
  fetch('dialogues.json')
    .then(response => response.json())
    .then(data => {
      dialoguePosts = data;
      const sequence = [
        "scene1_narration",
        "scene1_character",
        "scene2_intro_narration"
      ];
      
      processSequence(sequence, () => {
        showChoiceBox("Choose an action", [
          { label: "Post a Cryptic Message", id: "scene2_option1" },
          //{ label: "Scroll Through the Feed", id: "scene2_option2" },
          //{ label: "Sit in Silence", id: "scene2_option3" }
        ], (chosenId) => {
          branchSequence(chosenId);
        });
      });
    })
    .catch(err => console.error("Error loading dialogues:", err));
}

// Global click listener to skip the current sentence's typing.
document.addEventListener("click", () => {
  if (isTyping) {
    skipTyping = true;
  }
});

window.addEventListener("load", () => {
  loadDialogues();
});