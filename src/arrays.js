const getNthElement = (index, array) => {
  // return array[index >= array.length ? index - array.length : index];
  // return index >= array.length ? array[index - array.length] : array[index];
  if (index >= array.length) {
    return array[index - array.length];
  }
  return array[index];
};

const arrayToCSVString = (array) => {
  return array.toString();
};

const csvStringToArray = (string) => {
  return string.split(",");
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  // return array.slice().push(element);
  const newArray = array.slice(); // this clones the array
  newArray.push(element);
  return newArray;
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = (numbers) => {
  return numbers.map((number) => {
    return number.toString();
  });
};

const uppercaseWordsInArray = (strings) => {
  return strings.map((item) => {
    return item.toUpperCase();
  });
};

const reverseWordsInArray = (strings) => {
  return strings.map((item) => {
    const letterArray = item.split(""); // converted to array of letter and split
    const reverseLetterArray = letterArray.reverse(); // reversed array
    return reverseLetterArray.join(""); // joined items of array back into string
  });
};

const onlyEven = (numbers) => {
  return numbers.filter((item) => item % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  const newArray = array.slice();
  // newArray.splice(index, 1);
  removeNthElement(index, newArray);
  return newArray;
};

const elementsStartingWithAVowel = (strings) => {
  // maps array and returns elements starting with a vowel returning upper and lowercase
};

const removeSpaces = (string) => {
  // converts string to array then splices to remove spaces
};

const sumNumbers = (numbers) => {
  // maps array and returns numbers then perfoms function to add
};

const sortByLastLetter = (strings) => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
};
