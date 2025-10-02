const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

// Create Logs directory if not exists
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

// Change current process to Logs directory
process.chdir(logsDir);

// Create 10 log files
for (let i = 1; i <= 10; i++) {
  const fileName = `log${i}.txt`;
  fs.writeFileSync(fileName, `This is log file number ${i}\n`);
  console.log(`Created: ${fileName}`);
}
