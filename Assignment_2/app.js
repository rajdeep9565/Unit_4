const express1 = require('express');
const app = express1();
const express = require('express');

app.use(express.json());

const books = require('./books')


app.get("/", (req, res) =>{
    res.send({ books})
});

app.get("/book/:author", (req,res) => {
    const newBook = books.filter((book ) => book.author === req.params.author)
    res.send(newBook)
   console.log(newBook)

});

app.delete("/:author", (req,res) => {
    const newUsers = books.filter(( user ) => user.author !== req.params.author)
    res.send(newUsers)

});

app.patch("/:author/:published_year", (req,res) => {
     console.log(req.params.published_year);
    const newBook = books.map( (book) => {

        if(req.params.author === book.author  || req.params.published_year === book.published_year  ){
        
     
            if(req?.body?.author) book.author = req.body.author;
            if(req?.body?.last_name) book.last_name = req.body.last_name;
            if(req?.body?.book_name) book.book_name = req.body.book_name;
            if(req?.body?.published_year) book.published_year = req.body.published_year;
           
    }
        return  book
    });
    res.send(newBook);
});


app.post("/books", (req, res) => {
    const newBook = [...books,req.body]
    res.send(newBook);
    console.log(req.body)
});



app.listen("8271", function() {
    console.log("Listening on 8271")
})