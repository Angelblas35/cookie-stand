'use strict';

var openHours = ['8am','9am'] 
var firstAndPike= {
  minCustomersPerHour: 23,
  maxCustomersPerHour: 60,
  averageCookiesPerCustomer: 6.3,
  randomCustomersPerHour: function(min, max) {
    
    return true;
  },
  getCookiesPerHour: function(){
    // for (let i = 0; i < openHours.length; i++) {
    // var customers = array[i];
    // this.cookiesPerHour.push(randomCustomersPerHour() * this.averageCookiePerCustomer)
    // }
  },
  customersPerHour: [],
  cookiesPerHour: [],
}

// var storeTwo= {
//     name: 'SeaTac Airport'
//     days: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday']

// }

// var storeThree= {
//     name: 'Seattle Center'
//     days: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
// }

// var storeFour= {
//     name= 'Capitol Hill'

// }

// var storeFive= {
//     name= 'Alki'
// }

// function getRandomInt(max) {
//     return Math.floor(Math.random()) * Math.floor(max);
// }

console.log(firstAndPike.randomCustomersPerHour())
console.log(firstAndPike.getCookiesPerHour())