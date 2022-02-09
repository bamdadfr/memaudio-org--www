/**
 * Shuffle array with Fisher-Yates algorithm
 *
 * @param {Array.<*>} array - Array to shuffle
 * @returns {Array.<*>} - Shuffled array
 */
export function shuffleArray(array) {
  let currentIndex = array.length;
  let temporaryValue = null;
  let randomIndex = null;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);

    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];

    array[currentIndex] = array[randomIndex];

    array[randomIndex] = temporaryValue;
  }

  return array;
}
