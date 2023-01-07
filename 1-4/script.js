function getInt() {
    var intStr = prompt ("Give a number")
    var int = parseInt(intStr)
    const numbers = []

    for (let i = 0; i <= int; i++) {
        numbers.push(i)
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0)
    
    console.log(sum)
}