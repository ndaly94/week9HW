const express = require('express')

const app = express()
const PORT = 3000;

app.get('/greeting/', async (req, res) => {
    res.send(`<h1> What up Dude! </h1>`);
   })

app.get('/greeting/:name', async (req, res) => {
 res.send(`<h1> What up  ${req.params.name} </h1>`);
})
app.get('/tip/:total/:tipPercentage', (req, res) => {
    const {
      total,
      tipPercentage
    } = req.params
    res.json({
      total,
      tipPercentage
    });
  });
  
app.get('/magic/:question', async (req, res) => {
    const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

    res.send(`<h1>${req.params.question}</h1> <h2>${responses[Math.floor(Math.random()*responses.length)]}</h2>`);
})


//Fibonacci

app.get('/fibonacci/:number', async (req, res) => {
    const fibonacciNums = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
    if(fibonacciNums.includes(req.params.number)){
        res.send(`<h1>Very good. It is Fibonacci.</h1>`)
    } else {
        res.send(`<h1>I can tell this is not a fibonacci number.</h1>`)
    }
})

app.listen(PORT,  () => {
    console.log(`listening on port ${PORT}`)
})