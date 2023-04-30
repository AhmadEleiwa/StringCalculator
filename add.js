
const add = (str) =>{
    const token = str.split('+')
    let [x,y] = token
    return parseInt(x)+ parseInt(y)
}

exports.add = add