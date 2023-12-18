export function getRandomIndexFromArray(array: any[], except: number): number {
  let randomIndex: number;

  do {
    randomIndex = Math.floor(Math.random() * array.length);
  } while (randomIndex === except);

  return randomIndex;
}
