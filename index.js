const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PostCode = require('./src/models/postcode');
const Customer = require('./src/models/customer');
require('./src/db/conn');

const spath = path.join(__dirname, "/public");

app.use(cors())
app.use(express.static(spath));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.write("<h1>hello from this side</h1>");
    res.write("hi how are you");
    res.render('');
    res.send();
})

app.post('/form', async (req, res) => {
    try {
        console.log(req.body);
        const { state, name, postal, address, dob } = req.body;
        if (state==="" || name==="" || postal==="" || address==="" || dob===""){
            return res.status(404).send("fill all the field properly");
        }
        console.log(typeof postcode)
        const newCustomer = new Customer({ name, address, dob, postcode_id: postal });
        console.log(newCustomer);
        await newCustomer.save();

        const newPostCode = new PostCode({ state, postcode: postal });
        console.log(newPostCode);
        await newPostCode.save();

        res.status(200).json({ ...newPostCode, ...newCustomer });
    }
    catch (err) {
        console.log(err);
        res.status(404).json({ err: err.message });
    }
})

app.listen(8000, () => {
    console.log('listening the port at ' + 8000);
})