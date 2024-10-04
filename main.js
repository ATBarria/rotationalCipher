// trying rotation Cipher

console.log("halllo welt ");

/* 

Plain:  abcdefghijklmnopqrstuvwxyz
Cipher: nopqrstuvwxyzabcdefghijklm

*/

const rotate = (item, number) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetUpper = alphabet.toUpperCase();

  const index = (alphabet.indexOf(item) + number) % 26;
  console.log(item, alphabet[index]);
};

rotate("a", 2);

// with words , working with strings intead of arr
const rotate2 = (item = "", number) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetUpper = alphabet.toUpperCase();
  let encryptedWord = "";

  for (let i = 0; i < item.length; i++) {
    console.log(typeof item[i]);
    if (alphabetUpper.includes(item[i])) {
      const index = (alphabetUpper.indexOf(item[i]) + number) % 26;

      encryptedWord += alphabetUpper[index];
    } else if (alphabet.includes(item[i])) {
      const index = (alphabet.indexOf(item[i]) + number) % 26;
      encryptedWord += alphabet[index];
    } else {
      encryptedWord += item[i];
    }
  }
  console.log(encryptedWord);
  return encryptedWord;
};

rotate2("D O_G", 1);

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
