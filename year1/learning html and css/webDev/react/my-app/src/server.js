const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const dataFilePath = 'UserData.json';

// Read the initial data from the JSON file
let data = JSON.parse(fs.readFileSync(dataFilePath));

app.post('/modify', (req, res) => {
  const { newMessage } = req.body;

  // Modify the data object
  data.message = newMessage;

  // Write the modified data back to the JSON file
  fs.writeFileSync(dataFilePath, JSON.stringify(data));

  res.json({ success: true });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
