
const add = (str) =>{
    const token = str.split('+')
    let sum = 0
    let errString = ""
    for(let item of token){
        let no =  parseInt(item)
        if(no < -1){
            errString +=`negatives not allowed ${no} , `
        }
        if(no > 1000)
            continue
        sum  += no
    }
    if(errString !== "")
        throw new Error(errString)

    return sum
}

exports.add = add