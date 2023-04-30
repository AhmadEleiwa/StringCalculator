
const add = (str) =>{
    const token = str.split('+')
    let sum = 0
    for(let item of token){
        sum  += parseInt(item)
    }
    return sum
}

exports.add = add