const express = require('express')
const app = express()
const {trips} = require('./db')
const cors = require('cors');

app.use(cors());


app.get('/trips', (req, res) => {
  res.json(trips)
})

app.get('/api/trips', (req, res) => {
  const keyword = req.query.keyword
  let filter = []
  for (const [key, value] of Object.entries(trips)) {
    let checkTag = false
    for(const tag of value.tags){
      if(tag.includes(keyword)){
        checkTag = true
        break;
      }
    }

    if(checkTag || value.title.includes(keyword) || value.description.includes(keyword)){
      filter.push(value)
    }
  }
  res.json({"trips":filter})
})

app.get('/', (req, res) => {
  res.send('Start server linemanXwongnai')
})

app.listen(3333, () => {
  console.log('Start server at port 3333.')
})