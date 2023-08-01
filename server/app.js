const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());
const dbConfig = require("./config/databaseConfig");
const port = process.env.PORT || 5000;


const usersRoute = require("./routes/usersRoute");
const projectsRoute = require("./routes/projectsRoute");
const tasksRoute = require("./routes/tasksRoute");
const notificationsRoute = require("./routes/notificationsRoute");

app.use("/api/users", usersRoute);
app.use("/api/projects", projectsRoute);
app.use("/api/tasks", tasksRoute);
app.use("/api/notifications", notificationsRoute);






//this is for using react to express
const path = require("path");
__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
    //for all static path
  app.use(express.static(path.join(__dirname, "/client/build")));
  //to response for all routes
  app.get("*", (req, res) => {
    //then sending the data for directory of client/build
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Node JS server listening on port ${port}`));
