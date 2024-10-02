// trying rotation Cipher

console.log("halllo welt ");

/* 

Plain:  abcdefghijklmnopqrstuvwxyz
Cipher: nopqrstuvwxyzabcdefghijklm

*/

const rotate1 = (item, number) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  if (number > 25) {
    const indexNumb = number - 26;
    const index = alphabet.indexOf(item) + indexNumb;
    console.log(item, alphabet[index]);
  } else {
    const index = alphabet.indexOf(item) + number;
    console.log(item, alphabet[index]);
  }
};

rotate1("dog");

// with words , working with strings intead of arr
const rotate2 = (item = "", number) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const encryptedWord = "";

  for (i = 0; i < item.length; i++) {
    const index = alphabet.indexOf(item[i]) + number;
    console.log(index);
  }
  console.log(item);
};

rotate2("cat", 1);
