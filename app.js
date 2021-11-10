const express = require ('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/btc.html')
})

app.get('/nft', (req,res) => {
    res.sendFile(__dirname + '/views/nft.html')
})

app.get('/eth', (req,res) => {
    res.sendFile(__dirname + '/views/eth.html')
})


app.listen(port)
