const express = require('express');
const app: any = express();
const PORT: String = process.env.PORT || "3000";
const User: any = require('./User');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// require('./connection')

app.post("/user", (req: any, res: any) => {

    let { username, password } = req.body
    let newUser = new User({
        username, password
    });

    newUser.save((err: any) => {
        if (err) {
            res.send(`${err}`)
        } else {
            res.send("Success")
        }
    })
})

app.put('/user', (req: any, res: any) => {
    let { username, newPassword } = req.body
    User.findOne({ username }, (err: any, user: any) => {
        if (err) {
            res.send(`${err}`)
        } else {
            user.password = newPassword;
            // user.haha="123"
            user.save()
            res.send(user)
        }
    })
})

app.delete('/user', (req: any, res: any) => {
    let { username } = req.body
    User.deleteOne({ username }, (err: any) => {
        if (err) {
            res.send(`${err}`)
        } else {
            res.send("Success")
        }
    });
})

// CRUD
app.listen(PORT, () => {
    console.log(`app is listening on ${PORT}`)
})

// transaction
// update thong tin ca nhan :
// update latest... update ...

// mongoose
// mongodb
// https://mlab.com/
// docker
// docker run -d -p 27017:27017 mongo

// https://mongoosejs.com/docs/index.html

//docker ps
// docker exec -it <containerId> bash