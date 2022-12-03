const express = require('express');
const app = express();
const port = process.env.PORT || 7000;
const categories = require('./data/categories.json')
const news = require('./data/news.json')
const cors = require('cors');

app.use(cors());

app.get('/', (req, res)=>{
    res.send('Hello');
})

app.get('/categories', (req, res)=>{
    res.send(categories);
})

app.get('/category/:id', (req, res)=>{
    const id = req.params.id;
    if(id === '08'){
        res.send(news)
    }
    else{
        const selected_cat = news.filter(i => i.category_id === id);
        res.send(selected_cat);
    }
})

app.get('/news/:id', (req, res)=>{
    const id = req.params.id;
    const selected_news = news.find(i => i._id === id);
    res.send(selected_news);

})

app.get('/news', (req, res)=>{
    res.send(news);

})

app.listen(port);