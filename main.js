// trying rotation Cipher

console.log("halllo welt ");

/* 

Plain:  abcdefghijklmnopqrstuvwxyz
Cipher: nopqrstuvwxyzabcdefghijklm

*/

const rotate = (item, number) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const index = (alphabet.indexOf(item) + number) % 26;
  console.log(item, alphabet[index]);
};

rotate("a", 2);

// with words , working with strings intead of arr
const rotate2 = (item = "", number) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let encryptedWord = "";

  for (const char of item) {
    console.log(char);

    encryptedWord += alphabet[index];
  }
  console.log(encryptedWord);
  return encryptedWord;
};

rotate2("CAT", 5);

/*  this work now but not before in exercism because the i wasnt defined!!!!

const rotate2 = (item = "", number) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let encryptedWord = "";

  for (let i = 0; i < item.length; i++) {
    const index = (alphabet.indexOf(item[i]) + number) % 26;

    encryptedWord += alphabet[index];
  }
  
  return encryptedWord;
};

rotate2("cat", 25);

*/
