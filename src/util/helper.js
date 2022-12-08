function printDate(){
    const date=new Date()
    return date.getDate()
}
function printMonth(){
    const date=new Date()
    return date.getMonth()
}
function getBatchInfo(){
    return 'Californium, W3D4, the topic for today is Nodejs module system'
}
module.exports.mydate =printDate
module.exports.myMonth =printMonth
module.exports.batchInfo=getBatchInfo
