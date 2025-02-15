// dialogues.js

/**
 * Splits text into sentences using punctuation followed by whitespace
 * and then an uppercase letter or a quotation mark.
 * This helps keep quotes and periods with the correct sentence.
 */
function splitIntoSentences(text) {
    // Adjust the regex to fit your specific punctuation or style needs.
    return text.split(/(?<=[.?!])\s+(?=[A-Z"“])/);
  }
  
  /**
   * Prepares an array of dialogue objects by splitting each rawContent into sentences.
   * Returns a new array with { id, rawContent, sentences } for each post.
   */
  function prepareDialogues(data) {
    return data.map(item => {
      return {
        id: item.id,
        rawContent: item.rawContent,
        sentences: splitIntoSentences(item.rawContent)
      };
    });
  }  