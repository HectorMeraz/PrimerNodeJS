// let username = "fazt"
// let age = 30
// let hasHobbies = false
// let points = [10, 20,30]
// let user = {
//     name: 'ryan',
//     lastname: 'ray'
// }
// const PI = 3.1415

// console.log(username)
// console.log(age)
// console.log(hasHobbies)
// console.log(user)

// const age = 30

// if (age >= 18){
//     console.log("You are a adult")
// }else if(age >= 13){
//     console.log("You are an teenerger")
// }else{
//     console.log("You are a child")
// }

// const names = ['hector' , 'jose', 'martin']
// for(let i = 0; i < names.length; i++){
//     console.log(names[i])
// }

// function showUserInfo(userName , userAge){
//     return "The username is "+userName+", the user is "+userAge+" years old"
// }

// function showUserInfo(userName , userAge){
//     return `The username is ${userName}, the user is ${userAge} years old`
// }

const showUserInfo = (userName, userAge) =>
  `The username is ${userName}, the user is ${userAge} years old`;

console.log(showUserInfo("hector", "21"));
