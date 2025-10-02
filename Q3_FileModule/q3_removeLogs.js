const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

if (fs.existsSync(logsDir)) {
  // Read all files in Logs directory
  fs.readdirSync(logsDir).forEach(file => {
    fs.unlinkSync(path.join(logsDir, file));
    console.log(`Deleted: ${file}`);
  });

  // Remove Logs directory
  fs.rmdirSync(logsDir);
  console.log("Logs directory removed.");
} else {
  console.log("Logs directory does not exist.");
}
