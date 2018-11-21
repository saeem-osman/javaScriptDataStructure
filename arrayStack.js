//making an array for stack
var letters = [];
//check the word is palindrome or not.
var word = "racecar";

var reverseWord = "";

for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

for (var i = 0; i < word.length; i++) {
  reverseWord += letters.pop();
}

if (word == reverseWord) {
  console.log(word + " is a palindrome. ");
} else {
  console.log(word + " is not a palindrome. ");
}
