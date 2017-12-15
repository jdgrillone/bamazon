DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products
(
    item_id INT NOT NULL
    AUTO_INCREMENT, 
	product_name VARCHAR
    (100) NOT NULL,
    department_name VARCHAR
    (100) NOT NULL,
    price DECIMAL (10, 2) NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY
    (item_id)
    );

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Black Leather Bifold Wallet", "Accessories", 45.50, 200);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Mega Man Amiibo", "Toys", 12.95, 20);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Desk Lamp", "Appliances", 20.25, 75);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Nintendo Switch", "Electronics", 299.99, 8);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Christmas Sweater", "Apparel", 15.00, 300);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Toothbrush", "Hygiene", 3.25, 893);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Box of Potatoes", "Food", 5.65, 50);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Bleach", "Cleaning Supplies", 9.86, 75);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Soft Blanket", "Home Goods", 18.25, 150);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Chrismas Tree", "Decor", 80.75, 120);