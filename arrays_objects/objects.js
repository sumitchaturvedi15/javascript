// //two type of declaration-> 1) literals, 2) constructor (singleton)

// //--------Object using literals
// const JsUser={
//     name: 'Sumit',
//     age: 22,
//     location: 'Indore',
//     isLoggedIn: false,
//     plays: ['Football', 'Carrom', 'Cricket'],
//     "full name": 'Sumit Chaturvedi'
// }

// console.log(JsUser.name);//Sumit
// console.log(JsUser.age);//22
// console.log(JsUser["full name"]);//Sumit Chaturvedi
// console.log(JsUser.isLoggedIn);//false
// console.log(JsUser.plays);//[ 'Football', 'Carrom', 'Cricket' ]

//making symbol as object and displaying
// const mySym= Symbol("Key")
const Obj={
    // [mySym]: "changed key",
    email:"s@gmail.com",
    name:'Sumit'
}
// console.log(Obj[mySym])
// console.log(typeof Obj[mySym])
// console.log(Obj.email);
// Obj.email="sumit@gmail.com"
// console.log(Obj.email);
// //freezing the object so no value will get alter or change
// Object.freeze(Obj)
// Obj.name='rakesh'
// console.log(Obj.name);
// console.log(Obj[mySym]);
// console.log(Obj.email);

// Obj.greeting=function(){
//     console.log(`Hello user, ${this.name}`);
// }
// console.log(Obj.greeting())//Hello user, Sumit

//using constructors
// const tinder=new Object()
// tinder.id='12345'
// tinder.name='sumit'
// tinder.isLoggedIn=false
// console.log(tinder);

//merging two objects

// const obj1={
//     name:"sumit",
//     class:3,
//     year:2026
// }
// const obj2={
//     work:"it",
//     course: "BE"
// }
// // const obj3=Object.assign({},obj1, obj2)
// const obj3={...obj1, ...obj2}
// console.log(obj3);

//destructure
// const course={
//     courseName:"js in hindi",
//     coursePrice:999,
//     courseTutor:"sumit"
// }

// const{courseTutor:ct}=course
// console.log(ct);//sumit

//api
// {
//     "name":"sumit",
//     "class":"BE 3rd year"
// }
// [
//     {},
//     {},
//     {}
// ]

