const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const mentorModule = require('../abc/xyz/myModule'); 
const req = require('express/lib/request');
const { route } = require('express/lib/application');



// problem1:Create an API for GET /movies that returns a list of movies. Define an array of movies in your code and return the value in response.
let ar=['spiderman','Game Of Thrones','batman vs superman','Captain America']
router.get('/movies',function(req,res){
    res.send(ar)
    
})

// problem2)Create an API GET /movies/:indexNumber (For example GET /movies/1 is a valid request and it should return the movie in your array at index 1). You can define an array of movies again in your api
router.get('/movies/:indexNumber',function(req,res){
    let arr=[]
    for(let i=0;i<ar.length;i++){
        if(i==req.params.indexNumber){
            arr.push(ar[i])
        }
        }
    if(arr.length==1){
        res.send(arr[0])
        // console.log(req)

//problem 3:Handle a scenario in problem 2 where if the index is greater than the valid maximum value a message is returned that tells the user to use a valid index in an error message. 
    }else{
        res.send('Enter valid Index Number')
    }
    })
    


/* Problem 4:  Write another api called GET /films. Instead of an array of strings define an array of movie objects this time. Each movie object should have values - id, name. An example of movies array is 
   Return the entire array in this api’s response
   */

  const filims=
[ 
    {
    'id': 1,
    'name': 'The Shining'
   }, {
    'id': 2,
    'name': 'Incendies'
   }, {
    'id': 3,
    'name': 'Rang de Basanti'
   }, {
    'id': 4,
    'name': 'Finding Nemo'
   }
]
router.get('/films',function(req,res){
    res.send(filims)
})

/* problem 5 :Write api GET /films/:filmId where filmId is the value received in request path params. Use this value to return a movie object with this id. In case there is no such movie present in the array, return a suitable message in the response body. Example for a request GET /films/3 should return the movie object 
{
 “id”: 3,
 “name”: “Rang de Basanti”
}
Similarly for a request GET /films/9 the response can be something like - ‘No movie exists with this id’
*/
router.get('/films/:filmId',function(req,res){
    let a=[]
    filims.forEach((x,y,z)=>{
        if(x['id']==req.params.filmId){
            a.push(x)
        }
    })
    if(a.length==1){
        res.send(a)
    }else{
        res.send('No movie exists with this id')
    }
})

// let s=[
//     {
//         'brand':'puma',
//         'size':3
//     },
//     {
//         'brand':'puma',
//         'size':4
//     },
//     {
//         'brand':'nike',
//         'size':2
//     }
//     ]
    // router.get('/shoes?size=2&brand=nike',function(req,res){
    //     console.log(req.query)
    
    // })


// router.get("/profile-details", function(req, res){
//     // Write the LOGIC here
//     res.send('dummy response')
// })

// router.get('/test-me', function (req, res) {
//     console.log("email from introduction module", intro.myEmail)
//     intro.myFunction('Sabiha')
//     console.log("email from employee module", employee.myEmail)

//     const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
//     let result = _.first(days, 4)
//     console.log(`Result from underscore function is ${result}`)
//     console.log(`The mentor of the day is ${mentorModule.mentor}`)

//     res.send('any dummy text from route handler 1')
// });


// router.get('/test-me', function(req, res){
//     console.log("I am here")
//     res.send("any dummy text from route handler 2")
// })

// router.get('/students', function (req, res){
//     let students = ['Sabiha', 'Neha', 'Akash']
//     res.send(students)
// })

// // PATH Param example
// router.get('/student-details/:name', function(req, res){
//     /*
//     params is an attribute inside request that contains 
//     dynamic values.
//     This value comes from the request url in the form of an 
//     object where key is the variable defined in code 
//     and value is what is sent in the request
//     */

//     let requestParams = req.params

//     // JSON strigify function helps to print an entire object
//     // We can use many ways to print an object in Javascript, JSON stringify is one of them
//     console.log("This is the request "+ JSON.stringify(requestParams))
//     let studentName = requestParams.name
//     console.log('Name of the student is ', studentName)
    
//     res.send('Dummy response')
// })

// // PATH Param example
// router.get("/profile/:name", function(req, res){
//     console.log('Printing the request to find out wjere name is stored',req.params)
//     console.log('user name is',req.params.name)
//     //console.log(`User requesting for profile is ${name}`)
//     res.send("dummy details")
// })

// // Query Param example
// let shoes=[{'brand':'nike',
//             'size':2   },
//     {'brand':'nike',
//     'size':3 },
//     {'brand':'addidas',
//     'size':2 }]
// router.get("/shoes", function(req, res){
//     console.log("The filter options for shoes are -",req.query)
//     // req.query.size
//     // req.query.brand
//     res.send(req)
// })

// router.get('/cars',function(req,res){
//     res.send(req.query)
// })




router.get("/sol1", function (req, res) {
    let arr= [1,2,3,5,6,7]
    let sum=0
    arr.forEach((x)=>sum+=x)
    let result=(arr[arr.length-1])*(arr[arr.length-1]+1)/2
    let obj={'datamissing' : result-sum}
    res.send(obj)
    
})

router.get("/sol2", function (req, res) {
    
    let ar= [33, 34, 35, 37, 38]
    let sum2=0
    ar.forEach((x)=>sum2+=x)
    let result2=((ar.length+1)*(ar[0]+ar[ar.length-1])/2)
    let obj2={'datamissing' : result2-sum2}
    res.send(obj2)


})




// router.get('/cars',function(req,res){
//     res.send(req.query)
// })
module.exports = router;