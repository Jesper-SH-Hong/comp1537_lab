const express = require('express') //importing express
const app = express()
// const https = require('https'); //step5 HTTPS module. 첨 보징 ㅎㅎ import해서 걍 https로 부를게

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({
	extended: true
}));