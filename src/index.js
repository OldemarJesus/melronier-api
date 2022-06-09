// importing the dependencies
const sentEmail = require('./services/send-email');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

require('dotenv').config();

// defining the Express app
const app = express();
// defining an array to work as the database (temporary solution)
const ads = [
  {title: 'Hello, world (again)!'}
];

// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads
app.get('/', (req, res) => {
    console.log(process.env);
  res.send(ads);
});

app.post('/send-email', (req, res) => {
    var data = {};
    data = (typeof(req.body) == "object")?(req.body):{};

    let errors = [];

    //validation
    if(("name" in data)==false){
        errors.push({
            name: "Is missing \"name\""
        });
    }

    if(("email" in data)==false){
        errors.push({
            email: "Is missing \"email\""
        });
    }

    if(("people" in data)==false){
        errors.push({
            people: "Is missing \"people\""
        });
    }

    if(("date" in data)==false){
        errors.push({
            date: "Is missing \"date\""
        });
    }

    if(("time" in data)==false){
        errors.push({
            time: "Is missing \"time\""
        });
    }

    if(("phone" in data)==false){
        errors.push({
            phone: "Is missing \"phone\""
        });
    }

    if(("message" in data)==false){
        errors.push({
            message: "Is missing \"message\""
        });
    }

    if(errors.length > 0){
        return res.send({errors: errors});
    }

    sentEmail(data);

    res.send([
        {
            message: "Mail Sent!"
        }
    ]);
});

const PORT = process.env.PORT || 67;
// starting the server
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});