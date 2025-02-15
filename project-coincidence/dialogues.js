// dialogues.js

/**
 * Types text into an element letter by letter.
 * If window.skipTyping is true, it instantly completes the current sentence.
 */
function typeText(element, text, index = 0, callback) {
  if (window.skipTyping) {
    element.textContent = text;
    window.skipTyping = false;
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    if (callback) callback();
    return;
  }
  if (index < text.length) {
    element.textContent += text[index];
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    setTimeout(() => typeText(element, text, index + 1, callback), 50);
  } else {
    if (callback) callback();
  }
}

/**
 * Displays a dialogue post by delivering one sentence at a time in a single <p>.
 * Each new sentence replaces the previous one.
 * @param {Array} sentences - Array of sentence strings.
 * @param {function} onComplete - Callback when all sentences have been delivered.
 * @returns {HTMLElement} - The dialogue container.
 */
function displayDialoguePost(sentences, onComplete) {
  const container = document.createElement("div");
  container.className = "dialogue-container";
  
  // Use one paragraph element that will be updated.
  const sentenceEl = document.createElement("p");
  sentenceEl.className = "dialogue-sentence";
  container.appendChild(sentenceEl);
  
  let currentSentence = 0;
  window.isTyping = true;
  
  function showNextSentence() {
    if (currentSentence < sentences.length) {
      sentenceEl.textContent = "";
      window.isTyping = true;
      typeText(sentenceEl, sentences[currentSentence].trim(), 0, () => {
        window.isTyping = false;
        currentSentence++;
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
 * @param {function} onChoice - Callback receiving chosen id.
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
 * Hides the choice modal.
 */
function hideChoiceBox() {
  const choiceBox = document.getElementById("choiceBox");
  choiceBox.style.display = "none";
}