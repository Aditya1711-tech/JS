// What is advantage of using cookies, local storage and session storage?
// Cookies, Local Storage and Session Storage are used to store the data in the browser. So, we can use it to store the data in the browser.

// How these are affecting the performance of the website?
// Insted of sending the request to server for every request we can store the data in the browser and use it whenever we need it.
// So it will reduce the number of request to server and hence it will improve the performance of the website.

console.log("This is Aditya...");

/*----------------- Storing key value pair in localstorage and retrive it -----------------*/

// localStorage.setItem("name", "Aditya");
/*NOTE: Once it is stored into storage then no need to store it every time, Data will stay untill we explicitly delets it.*/
let name = localStorage.getItem("name");
console.log(name);

/*----------------- Store oibject in local storage and retrive it -----------------*/
/* NOTE: Note one thing here that we can only store strings in local storage so first convert object into string and then store into local storage of browser.
And same for retriving the object from local storage, first get the string from local storage and then convert it into object.

And also data is available to all the tabs of the browser.

Memory: Local storage is stored in hard disk of the computer.

Memory limit: 10MB
*/

const user = {
  name: "Poojan",
  age: 20,
};
// localStorage.setItem("user", JSON.stringify(user));
let localStorageUser = JSON.parse(localStorage.getItem("user"));
console.log(localStorageUser);

/*
NOTE: This data stored in local storage will be there until we clear the local storage or delete the data from local storage.

// Clearing the local storage
localStorage.clear();
// or
localStorage.removeItem("name");
localStorage.removeItem("user");
*/

/*----------------- Storing and retriving from session storage -----------------*/

/*NOTE: In case of session storage we have store again and again because data will lost when use closes the tab.
And also this data is limites to the tab only, if we open new tab then we have to store the data again.
Otherwise we will get null.

So, session storage is used for storing the data for a particular session.

Memory: Session storage is stored in RAM memory of the computer.

Memory limit: 5MB
*/
sessionStorage.setItem("name", "Aditya");
let nameFromSession = sessionStorage.getItem("name");
console.log(nameFromSession);

/*----------------- Storing and retrive from cookies -------------*/

/*NOTE: Cookies are also used to store the data in the browser but it is not used to store the large amount of data.*/

document.cookie = "name=Aditya";
document.cookie = "age=20";
let cookie = document.cookie;
console.log(cookie); //name=Aditya; age=20; csrftoken=49vWfAy2EJMyCjRfoZ4oPPUfRKln6CdV2Ca5q2uK38wyXf5Ui7rnxOecPMTsqSXJ

/* NOTE: Here as commented above we can't retrive single value stored in cookie we will get whole string consisting of all the values stored in cookies, We have to extract information what we need*/

/*NOTE: Whatever is stored in Cokkie is sent to server with every request to server that is not the case in LocalStorage and SessionStorage*/
