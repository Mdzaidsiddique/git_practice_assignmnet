function checkPalindrome(str) {
    let bag = '';
    for (let i = str.length - 1; i >= 0; i--){
        bag+=str[i]
    }
    if (bag == str) {
        console.log('Yes', str, 'is Palindrome!')
    }
    else {
        console.log('No',str,'is not a Palindrome!')
    }
}
let str = 'racecar';
checkPalindrome(str)
