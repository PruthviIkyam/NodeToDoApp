const MangodbClient  = require('mongodb').MongoClient;

MangodbClient.connect('mongodb://localhost:27017/ToDoApp',{ useNewUrlParser: true },(err,client )=>{

    if(err)
    {
        return console.log('unable to connect mangodb' + err);
    }

    const db  = client.db('ToDoApp');
    console.log('successfuly connected mongodb');

    // db.collection('ToDoApp').insertOne({
    //     text : "something to do",
    //     completed : false},
    //     (err,result)=>{

    //         if(err)
    //         {
    //             console.log('unable to insert' + err);
    //         }else{
    //             console.log('insertwed successfuly');
    //         }

    //     });

    db.collection('Users').insertOne({
            name : "Krishna",
            age : 98,
            location:'Bangalore vijaya nagar'
        },
            (err,result)=>{
    
                if(err)
                {
                    console.log('unable to insert' + err);
                }else{
                    console.log(' user inserted successfuly');
                }
    
            });

    client.close();
});