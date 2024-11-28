/* eslint-disable no-undef */
// Globals
// let companyId;
let token;
const ROOT_URL = 'https://project-api-boycotting-injustice-1.onrender.com/api/records';
// const ROOT_URL = 'http://localhost:9000/api/records';

describe('Final Project: API Testing for Company model', () => {
  // it('should create a company record', () => {
  //   cy.request({
  //     method: 'POST',
  //     headers: { authorization: token },
  //     url: `${ROOT_URL}/companies`,
  //     body: {
  //       companyName: 'lastName',
  //       categorizedScores: {
  //         climateAndSustainability: {
  //           score: 'A+',
  //           explanation: 'This company is big on environmental sustainability.',
  //         },
  //         livableWage: {
  //           score: 'A',
  //           explanation: 'The company ensures all employees are paid a livable wage.',
  //         },
  //         childLabor: {
  //           score: 'B+',
  //           explanation: 'There are some concerns, but overall compliance is good.',
  //         },
  //         humanRightsViolations: {
  //           score: 'B',
  //           explanation: 'The company has been involved in some controversies but is taking steps to improve.',
  //         },
  //         animalCruelty: {
  //           score: 'C+',
  //           explanation: 'The company has made some efforts, but there is still room for improvement.',
  //         },
  //       },
  //       productCategories: ['food', 'Beverages', 'medicine', 'makeup'],
  //       overallScore: 'D+',
  //       summary: 'they try their best',
  //       logoImage: 'image not found',
  //     },
  //   }).then((response) => {
  //     expect(response.status).to.eq(200);
  //     companyId = response.body._id;
  //   });
  // });

  // it('should handle bad company id and return 404', () => {
  //   cy.request({
  //     failOnStatusCode: false,
  //     method: 'GET',
  //     headers: { authorization: token },
  //     url: `${ROOT_URL}/companies/foobar`,
  //   }).then((response) => {
  //     expect(response.status).to.eq(404);
  //   });
  // });

  // it('should update a company record', () => {
  //   cy.request({
  //     method: 'PUT',
  //     headers: { authorization: token },
  //     url: `${ROOT_URL}/companies/${companyId}`,
  //     body: {
  //       companyName: 'updatedName',
  //       categorizedScores: {
  //         climateAndSustainability: {
  //           score: 'A',
  //           explanation: 'The company uses 100% renewable energy for its operations.',
  //         },
  //         livableWage: {
  //           score: 'B+',
  //           explanation: 'Most employees are paid above the minimum wage, but there are some regional discrepancies.',
  //         },
  //         childLabor: {
  //           score: 'A-',
  //           explanation: 'The company has stringent policies against child labor and enforces them rigorously.',
  //         },
  //         humanRightsViolations: {
  //           score: 'C',
  //           explanation: 'There have been some reports of poor working conditions in certain factories.',
  //         },
  //         animalCruelty: {
  //           score: 'B+',
  //           explanation: 'The company is largely cruelty-free but has some products that require further verification.',
  //         },
  //       },
  //       productCategories: ['clothing', 'home goods', 'electronics'],
  //       overallScore: 'B',
  //       summary: 'they try their best',
  //       logoImage: 'image now found',
  //     },
  //   }).then((response) => {
  //     expect(response.status).to.eq(200);
  //     expect(response.body.companyName).to.eq('updatedName');
  //   });
  // });

  // it('should delete a company record', () => {
  //   cy.request({
  //     method: 'DELETE',
  //     headers: { authorization: token },
  //     url: `${ROOT_URL}/companies/${companyId}`,
  //   }).then((response) => {
  //     expect(response.status).to.eq(200);
  //   });
  // });

  // it('should handle retrieval of deleted company record and return 404', () => {
  //   cy.request({
  //     failOnStatusCode: false,
  //     method: 'GET',
  //     headers: { authorization: token },
  //     url: `${ROOT_URL}/companies/${companyId}`,
  //   }).then((response) => {
  //     expect(response.status).to.eq(404);
  //   });
  // });

  // it('should retrieve all company records', () => {
  //   cy.request({
  //     method: 'GET',
  //     headers: { authorization: token },
  //     url: `${ROOT_URL}/companies`,
  //   }).then((response) => {
  //     expect(response.status).to.eq(200);
  //   });
  // });

  // it('should retrieve the popular companies in the specified category with overall score of B+ or better', () => {
  //   cy.request({
  //     failOnStatusCode: false,
  //     method: 'GET',
  //     headers: { authorization: token },
  //     url: `${ROOT_URL}/getPopularCompanies/Packaged Foods`,
  //   }).then((response) => {
  //     expect(response.status).to.eq(200);
  //   });
  // });

  // it('should retrieve the boycotted companies in the specified category with overall score of B or lower', () => {
  //   cy.request({
  //     failOnStatusCode: false,
  //     method: 'GET',
  //     headers: { authorization: token },
  //     url: `${ROOT_URL}/getBoycottedCompanies/food`,
  //   }).then((response) => {
  //     expect(response.status).to.eq(200);
  //   });
  // });

  // it('should retrieve the company\'s info from ChatGPT', () => {
  //   cy.request({
  //     failOnStatusCode: false,
  //     method: 'GET',
  //     headers: { authorization: token },
  //     url: `${ROOT_URL}/getCompanyInfo/Apple`,
  //   }).then((response) => {
  //     console.log('\nThe response is: ', response);
  //     expect(response.status).to.eq(200);
  //   });
  // });

  it('should fetch from ChatGPT the info about the specified list of companies and add it to the database', () => {
    const companies = [
      // // // Technology
      // 'Apple', 'Microsoft', 'Google', 'Amazon', 'Facebook (Meta)', 'IBM', 'Intel', 'Cisco Systems',
      // 'Oracle', 'SAP', 'Dell Technologies', 'HP Inc.', 'Adobe Systems', 'Salesforce', 'NVIDIA',
      // 'Tesla', 'Twitter', 'LinkedIn', 'Uber', 'Airbnb',

      // // Healthcare
      // 'Johnson & Johnson', 'Pfizer', 'Merck & Co.',
      // 'Abbott Laboratories', 'Medtronic', 'Amgen',
      // 'Gilead Sciences', 'GlaxoSmithKline', 'Novartis', 'AstraZeneca', 'Bayer', 'Eli Lilly',
      // 'Bristol-Myers Squibb', 'Sanofi', 'Biogen', 'AbbVie', 'Roche', 'Baxter International',
      // 'Boston Scientific', 'Stryker',

      // // Financial Services
      // 'JPMorgan Chase', 'Bank of America', 'Wells Fargo', 'Citigroup', 'Goldman Sachs',
      // 'Morgan Stanley', 'American Express', 'Visa', 'Mastercard', 'PayPal', 'Charles Schwab',
      // 'Capital One', 'HSBC', 'Barclays',
      // 'Deutsche Bank', 'UBS', 'Credit Suisse', 'BlackRock',
      // 'Fidelity Investments', 'Vanguard Group',

      // Consumer Goods
      // 'Procter & Gamble', 'Unilever', 'Coca-Cola',
      // 'PepsiCo', 'Nestlé', 'L\'Oréal', 'Colgate-Palmolive',
      // 'Kimberly-Clark', 'Reckitt Benckiser', 'Clorox',
      // 'Johnson & Johnson', 'Mondelez International',
      // 'General Mills', 'Kellogg\'s',
      // 'Kraft Heinz', 'Estée Lauder', 'Avon Products', 'Henkel',
      // 'Church & Dwight',
      // 'Beiersdorf',

      // // Retail
      // 'Walmart', 'Amazon', 'Costco', 'The Home Depot', 'Kroger', 'Walgreens Boots Alliance',
      // 'CVS Health', 'Target', 'Lowe\'s', 'Best Buy', 'Aldi', 'IKEA', 'Macy\'s',
      // 'Nordstrom',
      // 'Kohl\'s', 'Dollar General', 'Dollar Tree', 'TJX Companies',
      // 'Bed Bath & Beyond', 'Ross Stores',

      // // Automotive
      // 'Toyota', 'Volkswagen',
      // 'Ford', 'Honda', 'General Motors', 'BMW', 'Mercedes-Benz (Daimler AG)',
      // 'Nissan', 'Hyundai',
      // 'Subaru', 'Tesla', 'Fiat Chrysler Automobiles', 'Renault', 'Kia Motors',
      // 'Mazda', 'Mitsubishi Motors', 'Volvo', 'Ferrari', 'Aston Martin',
      // 'Land Rover',

      // // Energy
      // 'ExxonMobil', 'Chevron', 'Royal Dutch Shell', 'BP', 'TotalEnergies', 'ConocoPhillips', 'Eni',
      // 'Petrobras', 'Saudi Aramco', 'Gazprom', 'Rosneft', 'Equinor',
      // 'Occidental Petroleum',
      // 'Phillips 66', 'Valero Energy', 'Marathon Petroleum', 'Reliance Industries', 'Repsol',
      // 'Hess Corporation', 'Suncor Energy',

      // Telecommunications
      // 'AT&T', 'Verizon Communications', 'T-Mobile', 'Sprint (Now part of T-Mobile)',
      // 'Comcast',
      // 'Charter Communications', 'Vodafone', 'Orange',
      // 'Telefónica', 'Deutsche Telekom', 'BT Group',
      // 'Telstra', 'NTT Docomo', 'China Mobile', 'China Telecom', 'KDDI',
      // 'Singtel', 'América Móvil', 'Rogers Communications',
      'Bell Canada',

      // // Food and Beverage
      // 'Nestlé', 'PepsiCo', 'Coca-Cola', 'Unilever', 'Anheuser-Busch InBev', 'Kraft Heinz',
      // 'Mondelez International', 'General Mills', 'Kellogg\'s', 'Danone', 'Conagra Brands',
      // 'Tyson Foods', 'JBS', 'Hormel Foods', 'McDonald\'s',
      // 'Yum! Brands', 'Starbucks',
      // 'Chipotle Mexican Grill', 'Domino\'s Pizza', 'Darden Restaurants',

      // // Transportation and Logistics
      // 'FedEx', 'UPS', 'DHL',
      'Maersk', 'CSX', 'Union Pacific', 'Norfolk Southern',
      'Canadian National Railway', 'Canadian Pacific Railway', 'SNCF', 'Deutsche Bahn',
    ];

    companies.forEach((company) => {
      cy.request({
        failOnStatusCode: false,
        method: 'GET',
        headers: { authorization: token },
        url: `${ROOT_URL}/getCompanyInfo/${company}`,
      }).then((response) => {
        console.log('\nThe response for', company, 'is: ', response);
        expect(response.status).to.eq(200);
      });
    });
  });
});
