var mysql = require("mysql");
var inquirer = require("inquirer");
var fs = require("fs");
var columnify = require('columnify')

var keys = require("./keys.js");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: keys.password,
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    start();
});

function start() {
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        console.log(columnify(results));

        inquirer.prompt([
            {
                name: "choice",
                type: "input",
                message: "Insert the ID of the product you would like to buy."
            },
            {
                name: "amount",
                type: "input",
                message: "How many would you like to buy?"
            }
        ]).then(function (answer) {
            var chosenItem;
            console.log("A");
            for (var i = 0; i < results.length; i++) {
                if (results[i].item_id === parseInt(answer.choice)) {
                    chosenItem = results[i];
                    console.log(chosenItem.product_name);
                }
            }
            if (chosenItem === undefined) {
                console.log("Invalid Input. Try Again.");
                start();
            }
        
        });
});
}