# Boycotting Injustice

![Team Photo](https://github.com/dartmouth-cs52-24s/project-client-boycotting-injustice/assets/34690647/854a29a0-f791-4b1d-bc77-b7da53deb94a)

Our project provides consumers with an intuitive platform for making informed purchasing decisions. Whether searching by company name or scanning a product barcode, users gain access to detailed ethical scores across six critical categories: climate sustainability, human rights violations, child labor practices, livable wages, diversity, equity, and inclusion (DEI), and animal welfare. By having these scores readily available, consumers can align their purchases with their values, supporting companies that prioritize ethical practices and driving positive social and environmental impact.

* [Deployed API URL](https://project-api-boycotting-injustice-1.onrender.com)

## Architecture

Our project's backend API is crafted with React, Express, and Node.js, supported by a MongoDB database.
For this API, we integrate two distinct external APIs:

 - OpenAI API: Used to retrieve all relevant company information, including ethical scores and detailed explanations across various categories, for this project.
 - Clearbit API: Utilized for fetching company logos.
 - Barcode Lookup API: Enables retrieval of product information, including the manufacturer's name, based on a product's barcode number.

## Setup

To set up the project development environment locally, simply run **npm install** to install all necessary packages, followed by **npm start** to start the server. Our server operates on port 9000 by default. If another project is already running on this port, you can either adjust the port number in the `server.js` file or terminate the existing process. To find the process ID (PID) of the process running on port 9000, use the command **netstat -ano | findstr :9000**. Then, kill the process using **taskkill /PID <processId> /F**.

## Deployment

Our project API has been deployed using **render.com**, and you can now access it [here](https://project-api-boycotting-injustice-1.onrender.com)

Please note that since we are using Render's free version, there might be a slight delay of around 10 seconds up until a minute for the information to fully load on our app's homepage when you first access it via the frontend.

## Authors

* Aya Hajjeh
* Dahlia Igiraneza
* Jennifer Zhao
* Marvin Escobar Barajas
* Tasnim Chowdhury

## Acknowledgments

* Tim Tregubov
* All sources utilized in our project are duly credited within the source code files.
