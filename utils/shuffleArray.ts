/**
 * Shuffles a copy of an array using [Durstenfeld's algorithm](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle#The_modern_algorithm) and returns it.
 *
 * @param array the array to return a shuffled copy of
 */
export function shuffleArray<T>(array: T[]): T[] {
  const newArray = array.slice(0);

  for (let i = newArray.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
}
