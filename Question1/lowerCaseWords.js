function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject(new Error('Input must be an array'));
        } else {
            const lowerCaseArray = mixedArray
                .filter(item => typeof item === 'string')
                .map(item => item.toLowerCase());
            resolve(lowerCaseArray);
        }
    });
}


const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray).then(result => console.log(result)).catch(err => console.error(err));