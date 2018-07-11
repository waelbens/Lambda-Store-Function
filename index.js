const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({region: 'us-east-2', apiVersion: '2012-08-10'});

exports.handler = function(event, context){
    const params = {
        Item: {
            "userID": {
                S: "" + event.userID + Math.random()
            },
            "days": {
                N: "" + event.days
            },
            "income": {
                N: "" + event.income
            },
            "client_name": {
                S: "" + event.client_name
            },
            "client_address": {
                S: "" + event.client_address
            },
            "bill_description": {
                S: "" + event.bill_description
            }
        },
        TableName: "bill-yourself"
    };
    dynamodb.putItem(params, function (err, data){
        if (err) {
            console.log(err);
            context.done(err)
        } else {
            console.log(data);
            context.done(null, data)
        }
    });
};
