function numberReverser(number) {
    let result = parseInt(number.toString().split('').reverse().join(''));
    console.log(result);
}

numberReverser(1337);