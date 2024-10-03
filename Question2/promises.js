const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: 'delayed success!' });
        }, 500);
    });
};


const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({ error: 'delayed exception!' });
        }, 500);
    });
};


resolvedPromise()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });

// Call the rejected promise
rejectedPromise()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });