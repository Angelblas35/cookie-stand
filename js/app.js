'use strict';

// var days= ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
var openHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

function Store( minCustomersPerHour, maxCustomersPerHour, averageCookiesPerCustomer, locationName)

this.customerEachHour= [];
this.cookiesEachHour= [];
this.totalDailyCookies= 0;
this.minCustomersPerHour= minCustomersPerHour;
this.maxCustomersPerHour= maxCustomersPerHour;
this.averageCookiesPerCustomer= averageCookiesPerCustomer
this.locationName= locationName


new Store('23','65','6.3','firstAndPike')



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
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  averageCookiesPerCustomer: 3.7,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
};

seattleCenter.calcCustomerEachHour = function(){
  for(var i = 0; i < openHours.length; i++){
    var randomCustomersPerHour = Math.floor(Math.random() * this.maxCustomersPerHour ) + this.minCustomersPerHour;
    this.customersEachHour.push(randomCustomersPerHour);
  }
};



seattleCenter.calcCookieEachHour = function() {
  seattleCenter.calcCustomerEachHour();
  for (var i = 0; i < openHours.length; i++) {
    //calc cookies
    var hourlyCookies = Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer);
    // put number in an array
    this.cookiesEachHour.push(hourlyCookies);

  }
};

seattleCenter.calcTotalDailyCookies = function() {
  seattleCenter.calcCookieEachHour();
  for ( var i = 0; i < this.cookiesEachHour.length; i++){

    this.totalDailyCookies += this.cookiesEachHour[i];

  }
  return this.totalDailyCookies;
};
seattleCenter.calcTotalDailyCookies();


seattleCenter.render = function() {
  var ulEl = document.getElementById('center');

  for(var i = 0; i < this.cookiesEachHour.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${openHours[i]}: ${this.cookiesEachHour[i]}`;
    ulEl.appendChild(liEl);
  }
  liEl.textContent = `Total Cookies : ${this.totalDailyCookies}`;
  ulEl.appendChild(liEl);

};

seattleCenter.render();


//4th store

var capitolHill = {
  minCustomersPerHour: 20,
  maxCustomersPerHour: 38,
  averageCookiesPerCustomer: 2.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
};

capitolHill.calcCustomerEachHour = function(){
    for(var i = 0; i < openHours.length; i++){
      var randomCustomersPerHour = Math.floor(Math.random() * this.maxCustomersPerHour ) + this.minCustomersPerHour;
      this.customersEachHour.push(randomCustomersPerHour);
    }
  };

  capitolHill.calcCookieEachHour = function() {
    capitolHill.calcCustomerEachHour();
    for (var i = 0; i < openHours.length; i++) {
      //calc cookies
      var hourlyCookies = Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer);
      // put number in an array
      this.cookiesEachHour.push(hourlyCookies);
  
    }
  };  


  capitolHill.calcTotalDailyCookies = function() {
    capitolHill.calcCookieEachHour();
    for ( var i = 0; i < this.cookiesEachHour.length; i++){
  
      this.totalDailyCookies += this.cookiesEachHour[i];
  
    }
    return this.totalDailyCookies;
  };
  capitolHill.calcTotalDailyCookies();


  capitolHill.render = function() {
    var ulEl = document.getElementById('hill');
  
    for(var i = 0; i < this.cookiesEachHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${openHours[i]}: ${this.cookiesEachHour[i]}`;
      ulEl.appendChild(liEl);
    }
    liEl.textContent = `Total Cookies : ${this.totalDailyCookies}`;
    ulEl.appendChild(liEl);
  
  };
  
  capitolHill.render();


  //5th store


  var alki = {
    minCustomersPerHour: 2,
    maxCustomersPerHour: 16,
    averageCookiesPerCustomer: 4.6,
    customersEachHour: [],
    cookiesEachHour: [],
    totalDailyCookies: 0,
  };

  alki.calcCustomerEachHour = function(){
    for(var i = 0; i < openHours.length; i++){
      var randomCustomersPerHour = Math.floor(Math.random() * this.maxCustomersPerHour ) + this.minCustomersPerHour;
      this.customersEachHour.push(randomCustomersPerHour);
    }
  };

  alki.calcCookieEachHour = function() {
    alki.calcCustomerEachHour();
    for (var i = 0; i < openHours.length; i++) {
      //calc cookies
      var hourlyCookies = Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer);
      // put number in an array
      this.cookiesEachHour.push(hourlyCookies);
  
    }
  }; 

  alki.calcTotalDailyCookies = function() {
    alki.calcCookieEachHour();
    for ( var i = 0; i < this.cookiesEachHour.length; i++){
  
      this.totalDailyCookies += this.cookiesEachHour[i];
  
    }
    return this.totalDailyCookies;
  };
  alki.calcTotalDailyCookies();

  
  alki.render = function() {
    var ulEl = document.getElementById('alki');
  
    for(var i = 0; i < this.cookiesEachHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${openHours[i]}: ${this.cookiesEachHour[i]}`;
      ulEl.appendChild(liEl);
    }
    liEl.textContent = `Total Cookies : ${this.totalDailyCookies}`;
    ulEl.appendChild(liEl);
  
  };
  
  alki.render();










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