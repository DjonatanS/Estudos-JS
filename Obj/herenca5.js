console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}


console.log('Djonatan'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([0,1,2,5,4,6].first())