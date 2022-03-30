// creation du serveur                                //* EXTENTION 'thunder client'
const express = require('express')
// import file system
const fs= require('fs')
const path=require('path')
// instanciation des methodes express
const app = express()
// definir le port and not 3000 (react reserved)
const port = 6400
//set the view engine to ejs
app.set('view engine', 'ejs');

// EN ECOUTE 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// 
// app.get('/', (req, res) => {
//     res.send('Hello')
    
//   })
// app.get('/home', (req, res) => {
//     fs.readFile('./public/navig.html','utf-8',(error,data)=>
//         error? console.log(error): res.send(data)
// )
    
//   })
//   app.get('/home',(req,res)=>{
//       res.sendFile('public/navig.html',{
//         root: __dirname
//     })

//   })

// app.get('/home',(req,res)=>{
//     res.sendFile( __dirname+'/public/navig.html')
   

// })
// app.get('/contact',(req,res)=>{
//   res.sendFile( __dirname+'/public/contact.html')
 

// })


app.use(function (req, res, next) {
  const d = new Date();
let day = d.getDay();
let hour=d.getHours();

  console.log('day:', day,hour,d.getMinutes());
if ((day==6|| day==7) && (hour<9 || hour>17)) {
 
  return res.send(' we are closed')   
}

return next();
});

app.use(express.static(path.join(__dirname,'public')))
app.get('/about', function(req, res) {
  res.render('about');
});