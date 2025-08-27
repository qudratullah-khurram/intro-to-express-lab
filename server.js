const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


app.get('/greetings/:name', (req, res) => {
    const name = req.params.name;
    res.send(`<h1>Hello there, ${name}!</h1>`);
    // res.send(`What a delight it is to see you once more, ${name}.`);
});
////////////////////////////////////////////////////////////////////////////////////

app.get('/roll/:number', (req, res) =>{
    let number = req.params.number;
    if (isNaN(number)) {
       return res.send("You must specify a number.");
    }
    number = parseInt(number);

    let randomNumber = Math.floor(Math.random() * (number + 1));

    res.send("You rolled a " + randomNumber);
});

/////////////////////////////////////////////////////////////

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];

app.get('/collectibles/:index', (req, res) =>{
    let index = req.params.index;
    index = parseInt(index);

   
    if (isNaN(index) || index < 0 || index >= collectibles.length) {
       return res.send("This item is not yet in stock. Check back soon!");  
    }
    const item = collectibles[index];
    res.send("<h1>So, you want the " + item.name + "? For " + item.price + ", it can be yours!</h1>");
});

////////////////////////////////////////////////////////////////////////////

app.get ("/hello", (req, res) => {
    const name = req.params.name;
    const age = req.params.age;
  res.send(`Hello there, ${req.query.name}! I hear you are ${req.query.age} years old!`)
});

////////////////////////////////////////////////////////////////

 

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get("/shoes", (req, res) => {
    const minPrice = req.query["min-price"];
    const maxPrice = req.query["max-price"];
    const type = req.query.type;

    let result = shoes;
    if (minPrice) {
        result = result.filter(function (shoe) {
            return shoe.price >= Number(minPrice);
        });
    }
    if (maxPrice) {
        result = result.filter(function (shoe) {
            return shoe.price <= Number(maxPrice);
        });
    }
    if (type) {
        result = result.filter(function (shoe) {
            return shoe.type === type;
        });
    }

    res.send(result);
});

