// 249_consumingPromises.mjs
import fetch from "node-fetch";

const fetchData = function (country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(function (
    response
  ) {
    console.log(response);
  });
};

fetchData("india");
