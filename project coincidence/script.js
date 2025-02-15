// script.js

let dialoguePosts = []; 
let postIndex = 0;
let isTyping = false;
let skipTyping = false;

/**
 * Types text into an element letter by letter.
 * If skipTyping is true, it immediately fills in the current sentence.
 * After appending each letter, it auto-scrolls to the bottom.
 */
function typeText(element, text, index = 0, callback) {
  if (skipTyping) {
    element.textContent = text;
    skipTyping = false; // Reset for future sentences
    // Auto-scroll after showing the full sentence
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    if (callback) callback();
    return;
  }
  if (index < text.length) {
    element.textContent += text[index];
    // Auto-scroll after each letter
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    setTimeout(() => typeText(element, text, index + 1, callback), 50);
  } else {
    if (callback) callback();
  }
}

/**
 * Displays a dialogue post given an array of sentences.
 * Each new sentence replaces the previous one in a single <p> element.
 * After a sentence is finished, a click is awaited before moving on.
 */
function displayDialoguePost(sentences, onComplete) {
  const container = document.createElement("div");
  container.className = "dialogue-container";
  
  // Single paragraph element to show the current sentence.
  const sentenceEl = document.createElement("p");
  sentenceEl.className = "dialogue-sentence";
  container.appendChild(sentenceEl);
  
  let currentSentence = 0;
  
  function showNextSentence() {
    if (currentSentence < sentences.length) {
      // Clear previous sentence.
      sentenceEl.textContent = "";
      isTyping = true;
      typeText(sentenceEl, sentences[currentSentence].trim(), 0, () => {
        isTyping = false;
        currentSentence++;
        // Wait for a click to proceed.
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
 * Appends the next dialogue post from dialoguePosts to the feed.
 */
function appendDialoguePost() {
  if (postIndex >= dialoguePosts.length) return;
  
  const feed = document.querySelector(".feed");
  const post = document.createElement("article");
  post.className = "post";
  
  const currentPost = dialoguePosts[postIndex];
  let username;
  if (currentPost.id.toLowerCase().includes("narration")) {
    username = "@narrator";
  } else if (currentPost.id.toLowerCase().includes("character")) {
    username = "@character";
  } else {
    username = "@unknown";
  }
  
  // Create post header.
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
  
  // Auto-scroll so new post is visible.
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
  
  // Display the dialogue content.
  const dialogueEl = displayDialoguePost(currentPost.sentences, () => {
    // Once finished, load next post after a short delay.
    setTimeout(() => {
      appendDialoguePost();
    }, 500);
  });
  post.appendChild(dialogueEl);
  
  postIndex++;
}

/**
 * Loads dialogues from the JSON file and begins delivery.
 * (Ensure you're running on a local server so fetch works correctly.)
 */
function loadDialogues() {
  fetch('dialogues.json')
    .then(response => response.json())
    .then(data => {
      dialoguePosts = data;
      appendDialoguePost();
    })
    .catch(err => console.error("Error loading dialogues:", err));
}

// Global click listener: If typing is in progress, clicking skips the remainder of the current sentence.
document.addEventListener("click", () => {
  if (isTyping) {
    skipTyping = true;
  }
});

window.addEventListener("load", () => {
  loadDialogues();
});