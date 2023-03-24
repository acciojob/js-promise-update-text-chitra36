function myDisplayer(some) {
  document.getElementById("output").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;



  if (x == 0) {
    myResolve("Hello, world!");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);