const express  = require( 'express')
const path  = require('path')
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, '../public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.get('/*', (req, res)=>{
  res.sendFile(path.resolve(__dirname, '../public', 'index.html'))
})

app.listen(PORT, ()=>{
  console.log(`server on PORT: ${PORT}`);
})
