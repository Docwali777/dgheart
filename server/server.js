import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
const app = express();
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, '../public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


app.get('/*', (req, res)=>{
  res.sendFile(path.resolve(__dirname, '../public', 'index.html'))
})

app.listen(PORT, ()=>{
  console.log(`server on PORT: ${PORT}`);
})