const cipher = 'ZBOX EXLLHG LXGMXGVX LAKBFI'
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// Calculate true modulo (Javascript has a weird modulo operator ====> see https://dev.to/codeguppy/javascript-modulo-operation-and-the-caesar-cipher-107m)
function mod(n, p) {
  if ( n < 0 ) {
    n = p - Math.abs(n) % p;
  }

  return n % p;
}

function caesarDecipher(cipherText) {
  for (let c = 0; c < alphabet.length; c++) {
    let decipher = '';
    
    const shift = c+1; // number of places to shift alphabet letters
    for (let i = 0; i < cipherText.length; i++) {
      if(cipherText[i] !== ' ') { // skip whitespaces

        // get correct alphabet letter (after shifting)
        const index = alphabet.indexOf(cipherText[i])
        const cipherIndex = mod((index - shift), 26);
        decipher += alphabet[cipherIndex];
      } else {
        decipher += ' ';
      }
      
    }
    console.log(`Decipher #${c} =`, decipher)
  }

}

caesarDecipher(cipher)

// Basically, you need to run the decryption calculation 25 times 
// on each of the cipher letters (because you can only shift alphabet letters 25 times)
// Encrypt(x) = (x + n) mod 26
// Decrypt(x) = (x – n) mod 26

// where:
// x = alphabet letter
// n = number of shifts