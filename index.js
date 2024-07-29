const express = require('express');
const app = express();

app.use(express.json());

app.get("/", (req, res) =>{
    res.send('This is the response of the get request')
})

app.post("/post", (req, res) =>{
    const body = req.body
    res.json(body);
})

app.put("/update", (req, res) =>{
    res.send('Update successful')
})

app.delete("/delete", (req, res) =>{
    res.send('You have successfully deleted this user')
})


app.listen(5000, (req, res) => {
    console.log(`app is running on port 5000`);
})