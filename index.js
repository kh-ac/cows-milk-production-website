const express = require("express");
const session = require("express-session");


// express app
const app = express();

// for POST requests (Required)
app.use(express.urlencoded({
    extended: true
}));

// 
app.use(session({
    secret: "key that will sign cookie",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 60 // 1 day 
    }
}))

// Set view engine
app.set("view engine", "pug");

// Set views folder
app.set("views", "./views");

// Set static folder
app.use(express.static('./public'));

// Routes
app.use("/", require("./routers/login"))
app.use("/dashboard", require("./routers/dashboard"))
app.use("/cow", require("./routers/cow"))
app.use("/birth", require("./routers/birth"))
app.use("/milk", require("./routers/milk"))
app.use("/examination", require("./routers/examination"))
app.use("/logout", require("./routers/logout"))
app.use(require("./routers/404"))

app.listen(4000)
