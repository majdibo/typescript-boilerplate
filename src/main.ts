const foodMap = new Map<string, string>([
  ["🍕", "delicious"],
  ["🍔", "cheesy"]
]);
/**
 * return a given food impression about how it tastes
 * @param {string} food - the food that you want to know how it tastes.
 * @returns {string} - the taste of the given food
 */
export const taste = async (food: string): Promise<string> => {
  console.log('tasting...')
  // it takes time to eat...
  await new Promise(resolve => setTimeout(resolve, 1000))

  return new Promise((resolve, reject) => {
    if (foodMap.has(food)) {
      resolve(foodMap.get(food) as string);
    } else {
      reject(new Error(`${food} has no taste`));
    }
  });

}
