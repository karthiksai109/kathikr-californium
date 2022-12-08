function trim(){
     let a='  functionUp  '
     return a.trim(a)
}
function changetoLowerCase(x){
    return x.toLowerCase()
    
    
}
function changetoUpperCase(x){
    return x.toUpperCase()
    
    
}

module.exports.Upper=changetoUpperCase
module.exports.Lower=changetoLowerCase
module.exports.a=trim