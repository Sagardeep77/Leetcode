/******************1st Approach*********************/
const vowels = ["a", "e", "i", "o", "u"];

const countVowels = function (s: string): number {
  let counter = 0;

  for (const char of s) {
    if (vowels.includes(char)) counter++;
  }
  return counter;
};
function halvesAreAlike(str: string): boolean {
  const s = str.toLowerCase();
  const a = s.substring(0, s.length / 2);
  const b = s.substring(s.length / 2);

  return countVowels(a) === countVowels(b);
}



/******************2nd Approach*********************/

function halvesAreAlike2(str: string): boolean {
    const s = str.toLowerCase();
    let leftCounter = 0;
    let rightCounter = 0;
    let index = 0;
    for (const char of s) {
      if (index < s.length / 2) {
        if (vowels.includes(char)) leftCounter++;
      } else {
        if (vowels.includes(char)) rightCounter++;
      }
      index++;
    }
  
    return leftCounter === rightCounter;
  }