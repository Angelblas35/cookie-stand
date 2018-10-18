'use strict';

// var days= ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
var openHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var allStores = [];
var cookieTable = document.getElementById('cookietable');


// var storeTable = document.getElementById('store');


function Store( minCustomersPerHour, maxCustomersPerHour, averageCookiesPerCustomer, locationName) {

  this.customerEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailyCookies = 0;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.locationName = locationName;
  allStores.push(this);
}


new Store(23, 65, 6.3,'firstAndPike');
new Store(3,24,1.2,'seatac');
new Store(11,38,3.7,'seattleCenter');
new Store(20,38,2.3,'capitolHill');
new Store(2,16,4.6,'alki');


//all prototype functions
Store.prototype.calcCustomerEachHour = function(){
  for(var i = 0; i < openHours.length; i++){
    var randomCustomersPerHour = Math.floor(Math.random() * this.maxCustomersPerHour ) + this.minCustomersPerHour;
    this.customerEachHour.push(randomCustomersPerHour);
    // console.log(randomCustomersPerHour);
  }
//   console.log(randomCustomersPerHour);
};

Store.prototype.calcCookieEachHour = function() {

  for (var i = 0; i < openHours.length; i++) {
    //calc cookies
    var hourlyCookies = Math.ceil(this.customerEachHour[i] * this.averageCookiesPerCustomer);
    // put number in an array
    this.cookiesEachHour.push(hourlyCookies);

  }
};

Store.prototype.calcTotalDailyCookies = function() {
  for ( var i = 0; i < this.cookiesEachHour.length; i++){

    this.totalDailyCookies += this.cookiesEachHour[i];
  }
  return this.totalDailyCookies;
};

function callingAllStores() {

  for( var i = 0; i < allStores.length; i++) {

    allStores[i].calcCustomerEachHour();
    allStores[i].calcCookieEachHour();
    allStores[i].calcTotalDailyCookies();
  }
}
callingAllStores();


function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Store locations';
  trEl.appendChild(thEl);
  cookieTable.appendChild(trEl);

  for (var i = 0; i < openHours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = openHours[i];
    trEl.appendChild(tdEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);
  cookieTable.appendChild(trEl);
}
makeHeaderRow();



Store.prototype.render = function() {


  var trEl = document.createElement('tr');

  var tdEl = document.createElement('td');

  trEl.textContent = this.locationName;

  tdEl.appendChild(trEl);

  cookieTable.appendChild(trEl);

  //FOR THE COOKIES/HOUR
  for (let i = 0; i < this.cookiesEachHour.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesEachHour[i];
    trEl.appendChild(tdEl);
  }
  //CREATING TOTALS
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalDailyCookies;
  trEl.appendChild(tdEl);
  cookieTable.appendChild(trEl);

};

function renderAllStores() {
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
}
renderAllStores();



function footerTotals(){
  var dailyLocationTotal = 0;
  var totalsForAllTheStore = [];

  for (var i = 0; i < openHours.length; i++) {
    var intialTotal = 0;
    for( var j = 0; j < allStores.length; j++) {
      intialTotal += allStores[j].cookiesEachHour[i];
    }
    dailyLocationTotal += intialTotal;
    totalsForAllTheStore.push(intialTotal);
  }
  totalsForAllTheStore.push(dailyLocationTotal);

  //we are appending the totals to the dom
  var trEl = document.createElement('tr');
  trEl.setAttribute('id','footer');
  var thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);
  cookieTable.appendChild(trEl);

  for (var k = 0; k < totalsForAllTheStore.length; k++){
    var tdEl = document.createElement('td');
    tdEl.textContent = totalsForAllTheStore[k];
    trEl.appendChild(tdEl);
    cookieTable.appendChild(trEl);
  }

}
footerTotals();


var newStoreLocation = document.getElementById('chat-form');
newStoreLocation.addEventListener('submit', cookieForm);

function cookieForm(event) {
  event.preventDefault(); // gotta have it for this purpose. prevents page reload on a 'submit' event

  //  // Validation to prevent empty form fields
  //  if (!event.target.storeLocation.value || !event.target.who.value || ) {
  //   return alert('Fields cannot be empty!');
  // }

  //populate the instances

  var name = event.target.storeLocation.value;
  var mincus = event.target.minCustomersPerHour.value;
  var maxcus = event.target.maxCustomersPerHour.value;
  var avgcustomer = event.target.averageCustomerPerCustomer.value;

  var newLocation = new Store (name, mincus, maxcus, avgcustomer);

  name = event.target.storeLocation.value = null;
  mincus = event.target.minCustomersPerHour.value = null;
  maxcus = event.target.maxCustomersPerHour.value = null;
  avgcustomer = event.target.averageCustomerPerCustomer.value = null;

  cookieTable.innerHTML = '';

  makeHeaderRow();

  newLocation.calcCustomerEachHour();

  newLocation.calcCookieEachHour();

  newLocation.totalDailyCookies();

  renderAllStores();

  footerTotals();










  //create the new instance

  //call functions

}


// var locList = document.getElementById('loc-list');
// var storeForm = document.getElementById('store-form');
// var clearList = document.getElementById('clear-list');
// var allComments = [];

// var Comment = function(locationName, text) {
//   this.locationName = locationName;
//   this.text = text;
// };

// Comment.prototype.render = function() {

// }

// function renderAllComments() {
//   locList.innerHTML = '';

//   for( var i = 0; i < allComments.length; i++) {
//     locList.appendChild(allComments[i].render());
//   }
// }

// function handleSubmit() {}

// event.preventDefault();

// cookieForm.addEventListener('click, handleSubmit');

// clearList.addEventListener('click', function() {}

// eventSubmit.addEventListener('click', handleSubmitClick);

// function handleSubmitClick(eventSubmit) {

//   console.log('This is functioning');
// }





// var cookieTable = document.getElementById('cookietable');







