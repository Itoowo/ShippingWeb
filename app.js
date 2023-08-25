const express = require('express');
const router = require('./routers/userRoute');
const app = express();

app.use(router);

app.listen(3000);