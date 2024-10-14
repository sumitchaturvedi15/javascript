//Date

// const myDate = new Date();
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())

// let myBirthDate = new Date(2002, 05, 15)
// let myBirthDate = new Date(2002, 05, 15, 12, 00)
// let myBirthDate = new Date("2002-06-15")
let myBirthDate = new Date("06-15-2002")
console.log(myBirthDate.toLocaleString());
let today = Date.now()
console.log(myBirthDate.getTime());
console.log(today);
myBirthDate.toLocaleString(`default`, {
    weekday: "long"
})
console.log(myBirthDate);



