// password generator 
// atleast one lowercase
// atleast one uppercase
// atleast one integer
// atleast one non-alphanumeric character

//number: 48-57
//uppercase: 65-90
//lowercase: 97-122
// symbols [!@#$%^&*+?]

function generateParts(lowerLimit, upperLimit, length, type = "default") {
    let symbolss = "!@#$%^&*+?><"
    let result = ''
    if (type === 'symbol') {
        while (result.length < length) {
            let index = Math.floor(Math.random() * symbolss.length)
            result += symbolss[index]
        }
        return result
    }
    while (result.length < length) {
        let randromAscii = lowerLimit + Math.floor(Math.random() * ((upperLimit - lowerLimit) + 1))
        result += String.fromCharCode(randromAscii)
    }
    return result
}

function shufflePassword(password) {
    let oldPassword = password.split('')
    for (let i = 0, j = password.length - 1; i < password.length / 2; i += 2, j -= 2) {
        let temp = oldPassword[i]
        oldPassword[i] = oldPassword[j]
        oldPassword[j] = temp
    }

    return oldPassword.join('')
}


function generatePassword(length) {
    let len = length / 4
    let lowerChars = generateParts(97, 122, len)
    let upperChars = generateParts(65, 90, len)
    let numberChars = generateParts(48, 57, len)
    let symbolChars = generateParts('', '', len, 'symbol')

    let password = shufflePassword(lowerChars + upperChars + numberChars + symbolChars)
    return password
}
for (let i = 0; i < 100; i++)console.log(generatePassword(16))