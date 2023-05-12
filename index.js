const express = require('express');
const app = express();
const cors = require('cors');
const { sequelize } = require('./config/db');
const userRoutes = require('./routes/userroutes');

sequelize.sync().then(() => {
    app.use(cors());
    app.use(express.json());

    app.get("/", (req, res) => {
        res.send("Api test funcionando!");
    });

    app.use('/users', userRoutes);

    const port = 3001;
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    });
});