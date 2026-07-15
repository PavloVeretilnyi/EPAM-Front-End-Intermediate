function sumSequence(n) {
  if (n <= 0) {
    return `0.00`;
  }else{
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += (1/2)**i;
    }
  return sum.toFixed(2);
  }
}

function mergeArrays(...arr) {
  let newArr = [...arr];
  return newArr.reduce((acc, cur) => acc.concat(cur), []);;
}

function isPalindrome(str) {
    function possiblePalindrome(s) {
        let left = 0;
        let right = s.length - 1;
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    if (possiblePalindrome(str)) {
        return true;
    }

    const charCount = {};

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let oddCount = 0;
    for (let count of Object.values(charCount)) {
        if (count % 2 !== 0) {
            oddCount++;
        }
    }
    return oddCount <= 1;
}

function countLetters(str) {

  const cleanedStr = str.replace(/\s+(?!$)/g, '');
  
  const lettersCount = {};

    for (let letter of cleanedStr) {
        lettersCount[letter] = (lettersCount[letter] || 0) + 1;

    }
  return lettersCount;
}

function divideArrays(arr, size) {

    if (size <= 0) return [];
    
    if (arr.length <= size) return [arr];

    const result = [];

    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

function encrypt(str, n) {

    if (n <= 0) return str;

    let result = '';
  
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let newCharCode = ((char.charCodeAt(0) - 'A'.charCodeAt(0) - n + 26) % 26) + 'A'.charCodeAt(0);
        result += String.fromCharCode(newCharCode);
    }
    return result;
}