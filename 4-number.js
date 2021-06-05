let myNumber = 12
let myFloat = 12.25
let notANumber = NaN // ไม่ใช่จำนวน
let myInfinite = Infinity // ไม่มีที่สิ้นสุด

let myName = 'Nakorn'
let myAge = '18'

console.log('myName:', Number(myName))
console.log('myAge:', Number(myAge))

console.log('5 + 4 = ', 5 + 4)
console.log('5 - 4 = ', 5 - 4)
console.log('5 + -4 = ', 5 + -4)
console.log('5 * 2 = ', 5 * 2)
console.log('5 / 2 = ', 5 / 2)

console.log('5 ** 3 = ', 5 ** 3)
console.log('5 % 2 = ', 5 % 2)

let countNumber = 1
console.log('countNumber:', countNumber)

// countNumber = countNumber + 1 // 1 + 1
// countNumber += 1
countNumber++ // countNumber += 1
console.log('countNumber:', countNumber)

// countNumber = countNumber + 1 // 2 + 1
// countNumber += 1
countNumber++ // countNumber += 1
console.log('countNumber:', countNumber)

// countNumber = countNumber + 1 // 3 + 1
// countNumber += 1
countNumber++ // countNumber += 1
console.log('countNumber:', countNumber)

// countNumber = countNumber + 1 // 4 + 1
// countNumber += 1
countNumber++ // countNumber += 1
console.log('countNumber:', countNumber)

let after = 5
let before = 5

console.log('after:', after)
console.log('after:', after++)
console.log('after:', after)

console.log('before:', before)
console.log('before:', ++before)
console.log('before:', before)
