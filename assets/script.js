var apiKey = "h4wf8DBUeKwOsqWiLWoU7VN06DEPb7llyE8Sk3Stb1Kyr5ecda"
var secret = "KMjhTXuUMtsH7IsUq6eKKcWUkTGBA5JbrHCgil4R"
var petDistance = document.getElementById ("petDistance")
var enterLocation = document.getElementById ("locale")
var token;





function fetchDogLocation(zip){
    fetch("https://api.petfinder.com/v2/animals?location=" + zip,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }

  // petDistance.addEventListener("click", function (event){
  //   event.preventDefault ()
  //   fetchDogLocation(token, enterLocation.value)
  // })







var petInfoTable = document.getElementById("table");



function retrieveToken()  {
  return fetch("https://api.petfinder.com/v2/oauth2/token", {
    body: `grant_type=client_credentials&client_id=${apiKey}&client_secret=${secret}`,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "POST"
})
.then(res => res.json())
.then(function (data) {
  // this where we access the token
  token=data.access_token
  // fetchSeniorDog();
  // fetchSeniorCat();
  // fetchSpecialNeedsCat();
  fetchSpecialNeedsDog();
})
}

retrieveToken();




function fetchSeniorDog() {
  fetch("https://api.petfinder.com/v2/animals?type=dog&sort=random&age=senior",{
    headers:{
      Authorization:`Bearer ${token}`
    }
  }).then(function (response) {
        return response.json();
      })
      .then(function (data) {
        for (var i = 0; i < data.animals.length; i++) {

          var returnedData = data.animals[i];
          var petPic = document.createElement("img")
          var petName = document.createElement("h3");
          var petBio = document.createElement("p");


          petName.textContent = data.animals[i].name;
          petBio.textContent = data.animals[i].description;
          petPic.setAttribute("src", data.animals[i].primary_photo_cropped.medium);

          petInfoTable.appendChild(petName);
          petInfoTable.appendChild(petPic);
          petInfoTable.appendChild(petBio);
                          // how can I omit bios that have special characters?

                          // how can I omit names that have too many characters?

          console.log(returnedData);
        }
      })
    }





function fetchSeniorCat() {
  fetch("https://api.petfinder.com/v2/animals?type=cat&sort=random&age=senior",{
    headers:{
      Authorization:`Bearer ${token}`
    }
  }).then(function (response) {
        return response.json();
      })
      .then(function (data) {
        for (var i = 0; i < data.animals.length; i++) {

          var returnedData = data.animals[i];
          var petPic = document.createElement("img")
          var petName = document.createElement("h3");
          var petBio = document.createElement("p");


          petName.textContent = data.animals[i].name;
          petBio.textContent = data.animals[i].description;
          petPic.setAttribute("src", data.animals[i].primary_photo_cropped.medium);

          petInfoTable.appendChild(petName);
          petInfoTable.appendChild(petPic);
          petInfoTable.appendChild(petBio);
                          // how can I omit bios that have special characters?

                          // how can I omit names that have too many characters?

          console.log(returnedData);
        }
      })
    }




function fetchSpecialNeedsCat() {
  fetch("https://api.petfinder.com/v2/animals?type=cat&sort=random&special_needs=1",{
    headers:{
      Authorization:`Bearer ${token}`
    }
  }).then(function (response) {
        return response.json();
      })
      .then(function (data) {
        for (var i = 0; i < data.animals.length; i++) {

          var returnedData = data.animals[i];
          var petPic = document.createElement("img")
          var petName = document.createElement("h3");
          var petBio = document.createElement("p");


          petName.textContent = data.animals[i].name;
          petBio.textContent = data.animals[i].description;
          petPic.setAttribute("src", data.animals[i].primary_photo_cropped.medium);

          petInfoTable.appendChild(petName);
          petInfoTable.appendChild(petPic);
          petInfoTable.appendChild(petBio);
                          // how can I omit bios that have special characters?

                          // how can I omit names that have too many characters?

          console.log(returnedData);
        }
      })
    }




function fetchSpecialNeedsDog() {
  fetch("https://api.petfinder.com/v2/animals?type=dog&sort=random&special_needs=1",{
    headers:{
      Authorization:`Bearer ${token}`
    }
  }).then(function (response) {
        return response.json();
      })
      .then(function (data) {
        for (var i = 0; i < data.animals.length; i++) {

          var returnedData = data.animals[i];
          var petPic = document.createElement("img")
          var petName = document.createElement("h3");
          var petBio = document.createElement("p");


          petName.textContent = data.animals[i].name;
          petBio.textContent = data.animals[i].description;
          petPic.setAttribute("src", data.animals[i].primary_photo_cropped.medium);

          petInfoTable.appendChild(petName);
          petInfoTable.appendChild(petPic);
          petInfoTable.appendChild(petBio);
                          // how can I omit bios that have special characters?

                          // how can I omit names that have too many characters?

          console.log(returnedData);
        }
      })
    }




    // var token = getToken();
    // console.log(token);
    // fetchSeniorDog(token);



    // function fetchDog(){
    //   fetch("https://api.petfinder.com/v2/animals?type=dog",{
    //     headers:{
    //       Authorization:`Bearer ${token}`
    //     }
    //   }).then(res => res.json())
    //   .then(data => {
    //     // create elements, append to page
    //     console.log(data)
    //   })
    // }
    

// fetch("https://api.petfinder.com/v2/oauth2/token", {
//     body: `grant_type=client_credentials&client_id=${apiKey}&client_secret=${secret}`,
//     headers: {
//         "Content-Type": "application/x-www-form-urlencoded"
//     },
//     method: "POST"
// })
// .then(res => res.json())
// .then(data => {
//   console.log(data)
//   token=data.access_token
//   fetchDog(data.access_token)
//   fetchDogLocation(data.access_token,"98258")
// })
