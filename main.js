// const items = [
//     { name: 'Bike',     price: 100  },
//     { name: 'TV',       price: 200  },
//     { name: 'Album',    price: 10   },
//     { name: 'Book',     price: 5    },
//     { name: 'Phone',    price: 500  },
//     { name: 'Computer', price: 1000 },
//     { name: 'Keyboard', price: 25   },
// ];

// Filter() methode
// const filteredItems = items.filter((item) => {
//     return item.price <= 100;
// });
//
// console.log(items); // dit geeft de hele bovenstaande Array weer
// console.log(filteredItems); // geeft de producten weer die maximaal 100 kosten
//
// const itemNames = items.map((item) => {
//     return item.name;
// });
//
// console.log(itemNames); // geeft alleen de naam van de items weer
//
// const prices = items.map((item) => {
//     return item.price;
// });
// console.log(prices) // geeft alleen de prijzen weer

// Find() methode
// const foundItem = items.find((item) => {
//     return item.name === 'Book';
// });
// console.log(foundItem)
//
// items.forEach((item) => {
//     console.log(item.name, item.price); // verkorte methode om de gegevens te kunnen zien
// });

// Some() methode
// const hasInexpensiveItems = items.some((item) => {
//     return item.price <= 100
// })
// console.log(hasInexpensiveItems)    // geeft een boolean, geeft aan dat er prijzen onder 100 inzitten

// // Every methode
// const hasInexpensiveItems = items.every((item) => {
//     return item.price <= 1000;
// });
// console.log(hasInexpensiveItems)  // geeft boolean, geeft aan dat er items inzitten onder de 1000

// // Reduce() methode
// const total = items.reduce((currentTotal, item) => {
//   return item.price + currentTotal
// }, 0);
// console.log(total);

// // Includes() methode ---> heeft een eigen array
// const items = [1, 2, 3, 4, 5];
// const includesTwo = items.includes(2);
//
// console.log(includesTwo)        // geeft aan of de waarde erin vermeld is


const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2013},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach() methode
// for (let i = 0; i < companies.length; i++) {        // For loop is hetzelfde als onderstaande forEach()
//     console.log(companies[i]);
// };
//
// companies.forEach(function(company) {             // index = hele lijst (hetzelfde als company)
//     console.log(company.name)
// });

// Filter() methode
// Zoek iedereen die ouder is dan 21
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {         // For loop voor de filter()
//    if (ages[i] >= 21) {
//        canDrink.push(ages[i]);
//    }
// }
// console.log(canDrink);
//
// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

// Filter retail companies
// const retailCompanies = companies.filter(function(company) {
//     if (company.category === 'Retail') {
//         return true;
//     }
// });
// console.log(retailCompanies);
//
// const retailCompanies = companies.filter(company => company.category === 'Retail')
// console.log(retailCompanies);

// Filter: Get 80's companies
// const eightiesCompanies = companies.filter(company =>(company.start >= 1980 && company.start < 1990));
// console.log(eightiesCompanies);

// Filter: Get companies that lasted 10 years or more
// const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
// console.log(lastedTenYears

// Map() methode
// Create array of company names
// const companyNames = companies.map(function(company) {
//     return company.name;
// });
// console.log(companyNames)
//
// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// // console.log(testMap);
//
// const agesSquare = ages.map(age => Math.sqrt(age));
// console.log(agesSquare)
//
// const agesTimesTwo = ages.map(age => age * 2);
// console.log(agesTimesTwo)
//
// const mapAge = ages
//     .map(age => Math.sqrt(age))             // SQUARE + MULTIPLY
//     .map(age => age * 2);
//
// console.log(mapAge)

// Sort() methode
//              // SORT COMPANIES BY START YEAR
// const sortedCompanies = companies.sort(function(c1, c2) {
//     if(c1.start > c2.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// });
//  zelfde manier als hierboven maar makkelijker
//
//                                     ? = de conditie van de vergelijking aan
//                                     1 = true
//                                     : = else
//                                     -1 = false
// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies)
//
// // SORT AGES
// const sortAges = ages.sort((a, b) => b - a);        // AFLOPEND b - a
// console.log(sortAges)                                         // OPLOPEND a - b

// Reduce Methode
//
//          // FOR LOOP
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//     ageSum += ages[i];
// }
//
// const ageSum = ages.reduce(function(total, age) {           // LANGE MANIER
//     return total + age;
// }, 0);
//
//
// const ageSum = ages.reduce((total, age) => total + age, 0)      // VERKORTE MANIER
// console.log(ageSum)
//
//
// GET TOTAL YEARS FOR ALL COMPANIES
//
// const totalYears = companies.reduce(function(total, company) {
//     return total + (company.end - company.start);
// }, 0);                                                      // zonder de 0 werkt het niet en geeft het object weer!!
//
//
// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
// console.log(totalYears)

// COMBINE METHODES
// const combined = ages
//     .map(age => age * 2)                    // LEEFTIJD X 2
//     .filter(age => age >= 40)               // LEEFTIJDEN VAN 40 OF MEER
//     .sort((a, b) => a - b)        // SORTEREN VAN LAAG NAAR HOOG
//     .reduce((a, b) => a + b, 0);            // TELT HET ALLEMAAL BIJ ELKAAR OP
//
// console.log(combined)