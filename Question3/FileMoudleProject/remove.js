const fs = require('fs');
const path = require('path');


const logsDir = path.join(__dirname, 'Logs');

// Check if the Logs directory exists
if (fs.existsSync(logsDir)) {
    // Read all files in the Logs directory
    const files = fs.readdirSync(logsDir);

    // Loop through and delete each file
    files.forEach(file => {
        const filePath = path.join(logsDir, file);
        fs.unlinkSync(filePath);
        console.log('Deleted file: ${ file }');
    });


    fs.rmdirSync(logsDir);
    console.log('Logs directory removed.');
} else {
    console.log('Logs directory does not exist.');
}