// brings in the words and jokes from words.js to allow for cleaner and shorter code in this file
import { verbs, nouns, adjectives, location, jokes } from "./words.js";

// allows the program to pick a random word in the array
const pickRandomWord = (listOfWords) => {
  const randomNum = Math.floor(Math.random() * listOfWords.length);
  return listOfWords[randomNum];
};

// generates the users choice at random
function generateRandomPhrase() {
  let choice = document.querySelector("#choice").value;

  // if choice is "joke" then the code will return a joke
  if (choice === "joke") {
    return `${pickRandomWord(jokes)}`;
  }
  // if choice is "sentence" then the code will return a random sentence
  else if (choice === "sentence") {
    return `The ${pickRandomWord(adjectives)} ${pickRandomWord(
      nouns
    )} ${pickRandomWord(verbs)} because they had to go to the ${pickRandomWord(
      location
    )}!`;
  }
  // if the user types neither choice, then the code outputs an error message
  else {
    return `ERROR: Please enter a valid choice`;
  }
}

// allows for the phrase to appear on the page
function displayPhrase() {
  const phrase = generateRandomPhrase();
  const headerElem = document.querySelector(".phrase");
  headerElem.innerText = phrase;
}

// lets code know what to do when you click on the button
function listenToCLicks() {
  const button = document.querySelector(".generate");

  button.addEventListener("click", displayPhrase);
}

listenToCLicks();
