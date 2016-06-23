const MongoClient = require('mongodb').MongoClient;

let mongoDB;
MongoClient.connect('mongodb://127.0.0.1:27017/library', function (err, db) {
    if (err) throw err;
    mongoDB = db;
    console.log('Connected to db2');
    let collection = db.collection('authorBook');
    let collection2 = db.collection('book');
    let collection3 = db.collection('author');
    // collection.find().toArray((err,result)=>{
    //     console.log('authorBook:'+result.length)
    // });
    // collection2.find().toArray((err,result)=>{
    //     console.log('books:'+result.length)
    // });
    // collection3.find().toArray((err,result)=>{
    //     console.log('author:'+result.length)
    // });
    getBooksByGenre('horror').then((result)=> {
        console.log(result);
    })
});

let getBooksByGenre = (genre)=> {
    let collection = mongoDB.collection('book');
    return collection.find({genre: genre}).toArray()
};

let getBooksByAuthorId = (authorId)=> {
    let collection = mongoDB.collection('authorBook');
    collection.find({authorId: authorId}).toArray().then((result)=> {
        if (result) {
            let booksIds = [];

            for (let i = 0, length = result.length; i < length; i++) {
                booksIds.push(result.bookId);
            }
            return 
        }
    })
}

module.exports = {
    getData: () => {
        return new Promise((resolve, reject)=> {
            console.log('request to db is sent');
            let collection = mongoDB.collection('people');
            collection.find().toArray((err, result)=> {
                if (err) {
                    console.log('err');
                    reject(err);
                } else {
                    console.log('resolved');
                    resolve(result);
                }
            })
        })
    }
};