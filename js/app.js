'use strict';

// var days= ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
var openHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var firstAndPike = {
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  averageCookiesPerCustomer: 6.3,
  locationName: 'First and Pike',
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
};

firstAndPike.calcCustomerEachHour = function(){
  for(var i = 0; i < openHours.length; i++){
    var randomCustomersPerHour = Math.floor(Math.random() * this.maxCustomersPerHour ) + this.minCustomersPerHour;
    this.customersEachHour.push(randomCustomersPerHour);
  }
};

firstAndPike.calcCookieEachHour = function() {
  firstAndPike.calcCustomerEachHour();
  for (var i = 0; i < openHours.length; i++) {
    //calc cookies
    var hourlyCookies = Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer);
    // put number in an array
    this.cookiesEachHour.push(hourlyCookies);

  }
};


firstAndPike.calcTotalDailyCookies = function() {
  firstAndPike.calcCookieEachHour();
  for ( var i = 0; i < this.cookiesEachHour.length; i++){

    this.totalDailyCookies += this.cookiesEachHour[i];

  }
  return this.totalDailyCookies;
};
firstAndPike.calcTotalDailyCookies();

firstAndPike.render = function() {
  var ulEl = document.getElementById('pike');

  for(var i = 0; i < this.cookiesEachHour.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${openHours[i]}: ${this.cookiesEachHour[i]}`;
    ulEl.appendChild(liEl);
  }
  liEl.textContent = `Total Cookies : ${this.totalDailyCookies}`;
  ulEl.appendChild(liEl);

};

firstAndPike.render();

//2nd store
var seatac = {
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  averageCookiesPerCustomer: 1.2,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
};

seatac.calcCustomerEachHour = function(){
  for(var i = 0; i < openHours.length; i++){
    var randomCustomersPerHour = Math.floor(Math.random() * this.maxCustomersPerHour ) + this.minCustomersPerHour;
    this.customersEachHour.push(randomCustomersPerHour);
  }
};

seatac.calcCookieEachHour = function() {
  seatac.calcCustomerEachHour();
  for (var i = 0; i < openHours.length; i++) {
    //calc cookies
    var hourlyCookies = Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer);
    // put number in an array
    this.cookiesEachHour.push(hourlyCookies);

  }
};


seatac.calcTotalDailyCookies = function() {
  seatac.calcCookieEachHour();
  for ( var i = 0; i < this.cookiesEachHour.length; i++){

    this.totalDailyCookies += this.cookiesEachHour[i];

  }
  return this.totalDailyCookies;
};
seatac.calcTotalDailyCookies();

seatac.render = function() {
  var ulEl = document.getElementById('airport');

  for(var i = 0; i < this.cookiesEachHour.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${openHours[i]}: ${this.cookiesEachHour[i]}`;
    ulEl.appendChild(liEl);
  }
  liEl.textContent = `Total Cookies : ${this.totalDailyCookies}`;
  ulEl.appendChild(liEl);

};

seatac.render();


// 3rd store

var seattleCenter = {
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  averageCookiesPerCustomer: 1.2,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
};













// var seattleCenter={
//     minCustomersPerHour: 23,
//     maxCustomersPerHour: 60,
//     averageCookiesPerCustomer: 6.3,
//     randomCustomersPerHour: function(min, max)
//     {function getRandomInt(max)
//         {
//             console.log (getRandomInt())
//       return Math.floor(Math.random()) * Math.floor(max);
// }
// // var storeThree= {
// //     name: 'Seattle Center'
// //     days: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
// // }


// var capitolHill={
//     minCustomersPerHour: 23,
//     maxCustomersPerHour: 60,
//     averageCookiesPerCustomer: 6.3,
//     randomCustomersPerHour: function(min, max)
//     {function getRandomInt(max)
//         {
//             console.log (getRandomInt())
//       return Math.floor(Math.random()) * Math.floor(max);
// }
// // var storeFour= {
// //     name= 'Capitol Hill'

// // }


// var alki= {
//     minCustomersPerHour: 23,
//     maxCustomersPerHour: 60,
//     averageCookiesPerCustomer: 6.3,
//     randomCustomersPerHour: function(min, max)
//     {function getRandomInt(max)
//         {
//             console.log (getRandomInt())
//       return Math.floor(Math.random()) * Math.floor(max);
// }
// // var storeFive= {
// //     name= 'Alki'
// // }

// function getRandomInt(max) {
//     return Math.floor(Math.random()) * Math.floor(max);
// }

// getCookiesPerHour: function(){
//     for (let i = 0; i < openHours.length; i++) {
//     var customers = array[i];
//     this.cookiesPerHour.push(randomCustomersPerHour() * this.averageCookiePerCustomer)
//     }
//   },
//   customersPerHour: [],
//   cookiesPerHour: [],
// }

// console.log(firstAndPike.randomCustomersPerHour())
// console.log(firstAndPike.getCookiesPerHour())