const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');

const publicPath = path.join(__dirname, './www');
const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(publicPath));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.send('index.html');
});

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
