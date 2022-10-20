# e-commerce-application
Module 13 Object-Relational Mapping (ORM) Challenge: E-commerce Back End

## Description
Internet retail, also known as e-commerce, is the largest sector of the electronics industry, having generated an estimated US$29 trillion in 2017 (Source: United Nations Conference on Trade and Development). E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to the prevalence of these platforms, developers should understand the fundamental architecture of e-commerce sites.

This is the back end for an e-commerce site using Express.js API and Sequelize to interact with a MySQL database.

## Instructions
<b>User Story:</b><br />
```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

<b>Acceptance Criteria:</b><br />
```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```
## Mock-Up
The following animations show examples of the application's API routes being tested in Insomnia.

The first animation shows GET routes to return all categories, all products, and all tags being tested in Insomnia:
![image](https://user-images.githubusercontent.com/4752879/196969063-41c1b836-5439-4393-a266-5ca0fdd77a9b.png)

The second animation shows GET routes to return a single category, a single product, and a single tag being tested in Insomnia:
![image](https://user-images.githubusercontent.com/4752879/196969114-2fc8b210-d0ae-45d1-894c-1c79823c2510.png)

The final animation shows the POST, PUT, and DELETE routes for categories being tested in Insomnia:
![image](https://user-images.githubusercontent.com/4752879/196969192-f93d5a60-8e12-4634-8c2a-f544c830aeb9.png)

## Repo
```
https://github.com/dtierney21/e-commerce-application
```
## Demo Video
```
https://drive.google.com/file/d/10QdZs84_yT-9RngmHZH8y00WFHrwkcZJ/view
