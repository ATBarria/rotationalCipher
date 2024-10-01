// trying rotation Cipher

console.log("halllo welt");

/* 

Plain:  abcdefghijklmnopqrstuvwxyz
Cipher: nopqrstuvwxyzabcdefghijklm

*/

const rotate1 = (item, number) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const index = alphabet.indexOf(item) + number;

  console.log(item, alphabet[index]);
};

rotate1("x", 2);

// with words
const rotate2 = (item, number) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const arrAlpha = alphabet.split("");
  const newItem = item.split("");
};

rotate2("dog", 1);
