"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

console.log("Aditya");

const getCountryData = function (country) {
  //   console.log(`function called with ${country}`);
  fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(function (
    response
  ) {
    console.log(response);
    return response.json();
  });
};

getCountryData("portugal");
