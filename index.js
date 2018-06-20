const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({region: 'us-east-2', apiVersion: '2012-08-10'});

exports.handler = function(event, context){
    const params = {
        Item: {
            "userID": {
                S: ""+ event.userID
            },
            "days": {
                N: ""+ event.days
            },
            "income": {
                N: ""+ event.income
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
