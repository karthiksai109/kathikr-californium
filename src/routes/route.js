const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const logg=require('../logger/logger') 
const helper=require('../util/helper')
const format=require('../validator/formatter')
const _ = require('underscore')
const $=require('lodash')

router.get('/test-me', function (req, res) {
    // console.log("email from introduction module", intro.myEmail)
    // intro.myFunction('Sabiha')
    // console.log("email from employee module", employee.myEmail)

    // const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    // let result = _.first(days, 4)
    // console.log(`Result from underscore function is ${result}`)

//problem1
console.log(`problem1: \"${logg.welcome()}\"`)

//problem2
//a
console.log(`problem2: day -\"${helper.mydate()}\"`)
//b
console.log(`problem2: Month -\"${helper.myMonth()}\"`)
//c
console.log(`problem2: BatchInfo -\"${helper.batchInfo()}\"`)

//problem3
//a
console.log(`problem3: trim ' functionUp '  -\"${format.a()}\"`)
//b
console.log(`problem3: toLowercase -\"${format.Lower('HaRi')}\"`)
//c
console.log(`problem3: toUppercase -\"${format.Upper('kartHIK')}\"`)

//problem 4
//a
console.log('problem 4 using ladsh.chunk() method')
const ar=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
console.log($.chunk(ar,3))  

//b
console.log('problem 4 using ladsh.tail() method')
let nums=[] 
for(let i=1;i<=20;i++){
if(i%2!==0){
    nums.push(i)
}
}
console.log($.tail(nums,[9]))

//problem 5
//a
console.log('problem5a : using union combining array without any duplicate/repeted elements in resultant array')
console.log($.union([1,2],[2,3],[3,4],[4,5]))

//b
console.log('problem5 creating an object from an array')
let keyVal= [['horror','The Shining'],
    ['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth'] ]
let newObj=$.fromPairs(keyVal)
console.log(newObj)

res.send('any dummy text')
});


router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("very important text")
})


module.exports = router;