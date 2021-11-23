const express = require("express")
const app = express();

console.log(app);

app.listen(4519, function(){
    app.get("/", (request, response) =>{
        return response.send("Welcome to Masai School")
    })

    const data = require("./MOCK_DATA.json")
    const output = data.map(({user, text}) => ({user}));

    console.log(output);

    console.log("Listening to port 4536");
});
