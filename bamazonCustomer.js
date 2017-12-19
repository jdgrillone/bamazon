var mysql = require("mysql");
var inquirer = require("inquirer");
var fs = require("fs");
var columnify = require('columnify')

// Required for security
var keys = require("./keys.js");

// Creates SQl connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: keys.password,
    database: "bamazon_db"
});

// On connect, runs start() function
connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    start();
});

function start() {
    // Grabs all information from table
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        // Logs information to console, uses 'columnify' for formatting.
        console.log(columnify(results));

        // Runs inquirer prompt to determine which item to purchase and how many
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
            // Creates variable to hold chosen item's ID
            var chosenItem;
            // Searches table results for chosen item's ID
            for (var i = 0; i < results.length; i++) {
                if (results[i].item_id === parseInt(answer.choice)) {
                    chosenItem = results[i];
                }
            }
            // Checks entered quantity against stored quantity of chosen item
            if (chosenItem.stock_quantity > parseInt(answer.amount)){
                var stock = chosenItem.stock_quantity;
                // Updates DB table to new quantity
                connection.query(
                    "UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock_quantity: (stock - answer.amount)
                        },
                        {
                            item_id: chosenItem.item_id
                        }
                    ],
                    function(error) {
                        if (error) throw error;
                        var total = (chosenItem.price*answer.amount);
                        console.log("Thank you for your purchase!");
                        console.log("Your total is $" + total);
                        start();
                    }
                )
            // If requested quantity doesn't exist...
            }else if (chosenItem.stock_quantity < parseInt(answer.amount)){
                console.log("Insufficient quantity!");
                start();
            }
            // Handles invalid inputs.
            if (chosenItem === undefined) {
                console.log("Invalid Input. Try Again.");
                start();
            }

        });
    });
}