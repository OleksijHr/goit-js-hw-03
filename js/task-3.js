function filterArray(numbers, value) {
    let arrayNumbers = [];
    for (const i of numbers) {
        if (i > value) {
            arrayNumbers.push(i);
        }
    }
    return arrayNumbers;
}

    
