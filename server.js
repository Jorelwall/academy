const express = require("express");
const app = express();
const PORT = 3000;

app.use("/public", express.static("public"));

app.set("view engine", "ejs");

app.get("/", (required, response) => {
    response.render("pages/index");
});

app.get("/plans", (required, response) => {
    response.render("pages/plans");
});

app.get("/app", (required, response) => {
    response.render("pages/app");
});

app.listen(PORT, (e) => {
    if(e){
        console.log(e);
    }else{
        console.log("Executado com sucesso")
    };
});