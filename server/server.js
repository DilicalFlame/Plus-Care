const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require("./models")

const landingPage = require('./routes/landing-page');
app.use("/", landingPage);

const hospitalRegistration = require('./routes/hospitalRegistration');
app.use("/hospitalRegistration", hospitalRegistration);

const aboutRouter = require('./routes/about');
app.use("/about", aboutRouter);

const communityRouter = require('./routes/community');
app.use('/community', communityRouter);

const dashboardRouter = require('./routes/dashboard');
app.use('/dashboard', dashboardRouter);

const profileRouter = require('./routes/profile');
app.use('/profile', profileRouter);

const settingsRouter = require('./routes/settings');
app.use ('/settings', settingsRouter);

const signinRouter = require('./routes/signin');
app.use('/signin', signinRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server is running: http://localhost:3001");
    });
});