const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT||5000;
//data requiring
const  chefData =require('./data/chefData.json');
const  details=require('./data/ChefDetails.json');
app.use(cors());

app.get('/', (req, res) => {
    res.send('BongoChef!')
  })
  //data getting
  app.get('/chefData', (req, res) => {
    res.send(chefData);
  })
  //data getting
  app.get('/details', (req, res) => {
    res.send(details);
  })
  //with id
  app.get('/details/:id', (req, res) => {
    // res.send(details);
    const id=req.params.id;
    console.log(id);
    const selectedRecipeDetails=details.find(n=>n.id==id);
    res.send(selectedRecipeDetails)
  })


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })