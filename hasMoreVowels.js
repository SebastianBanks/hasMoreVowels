function hasMoreVowels(word) {
    let safeWord = String(word).toLowerCase()
    let vowels = /[aeiou]/gi
    let result = safeWord.match(vowels)
    let count = result.length
    
    if (count > safeWord.length / 2) {
        return true
    } else {
        return false
    }
    
}

console.log(hasMoreVowels("moose"))
