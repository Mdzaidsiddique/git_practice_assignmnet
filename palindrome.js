let str = 'racecar';
function checkpalindrome(str) {
    let bag = '';
    for (let i = 0; i < str; i++){
        bag+=str[i]
    }
    if (bag == str) {
        return true;
    }
    else {
        return false
    }
}
