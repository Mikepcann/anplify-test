import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())

app.get('/ping', (req, res) =>{
    res.send('pong!\n')
})

app.all('*', (req,res) =>{
    res.send({
        message: 'No Route Found',
        url: req.url,
        method: req.method,
        host: req.hostname
    })
})


app.listen(PORT, ()=>{
    console.log(`Server listening on http://localhost:${PORT}`)
})
