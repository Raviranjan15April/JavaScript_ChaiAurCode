// Below code we are not using the resolve method so it will not connect with then. 
const promiseOne = new Promise(function (resolve, reject){
    setTimeout(()=>{
      console.log("async operation one ")
    }, 1000)
  });
  promiseOne.then(function(){
      console.log("promise resolve");
  })
  
  // Below code we are using the resolve method so it will connect with then. 
  new Promise(function(resolve, reject){
      setTimeout(()=>{
          console.log("async operation two");
          resolve();
      }, 1000)
  }).then(function(){
      console.log("promise resolve");
  })
  
  // sending data in resolve will get inside the then method.
  const promiseThree = new Promise(function(resolve, reject){
      setTimeout(() => {
          resolve({ usename: "Ravi", age:29})
      }, 1000);
  })
  promiseThree.then(function(res){
      console.log(res);
  })
  
  // below is example of promise chaining 
  const promiseFour = new Promise(function(resolve, reject){
      setTimeout(()=>{
          const error =true;
          if(!error){
              resolve({ usename: "Raviranjan", age:29})
          } else{
              reject("there is something wrong")
          }
      }, 1000)
  })
  promiseFour.then(function(res){
      console.log(res);
      return res.usename;
  }).then(function(res){
      console.log(res);
  }).catch((err)=>{
      console.log(err);
  }).finally(()=>{
      console.log("finally get called !")
  })
  
  // async and await will handle error in try and catch method.
  const promiseFive = new Promise((resolve, reject) =>{
      setTimeout(()=>{
          let isError = true;
          if(!isError){
              resolve({userName: "Raviranjan Kumar", password: 123});
          } else{
              reject("Error: Something is wrong");
          }
      }, 1000);
  })
  
  async function promiseFiveConsumption(){
      try{
          const response = await promiseFive;
          console.log(response);
      } catch(err){
          console.log(err);
      }
  }
  promiseFiveConsumption()
  
  // fetching the data from the api by using the fetch method an async & await.
  async function apiCallUsingFetch(){
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const responseInJson = await response.json();
      console.log(responseInJson);
  }
  
  apiCallUsingFetch()
  
  // fetching the data from the api by using the fetch and consuming by using the then and catch method.
  const response = fetch("https://jsonplaceholder.typicode.com/users");
  response.then((res)=>{
      // console.log(res);
      return res.json()
  }).then((res)=>{
      console.log(res);
  })
  .catch((err)=>{
      console.log(err);
  });
  
  // Note:- Fetch promise is only rejects when a network error is encountered(which is usally when there is permission issue or similar). A fetch() promise does not reject on HTTP error(404, etc). 