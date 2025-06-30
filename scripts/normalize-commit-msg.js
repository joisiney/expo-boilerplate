const fs = require('fs');

const commitMsgFile = process.argv[2];
let msg = fs.readFileSync(commitMsgFile, 'utf8');

// Substitui \n por quebras de linha reais
msg = msg.replace(/\\n/g, '\n');

fs.writeFileSync(commitMsgFile, msg);
