function makeArray(firstArray, secondArray, maxLength) {
    return allAray = firstArray.concat(secondArray).length > maxLength ? firstArray.concat(secondArray).slice(0, maxLength) : firstArray.concat(secondArray);
}