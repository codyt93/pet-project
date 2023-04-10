              // where and how store these secret keys?
var apiKey = "h4wf8DBUeKwOsqWiLWoU7VN06DEPb7llyE8Sk3Stb1Kyr5ecda"
var secret = "KMjhTXuUMtsH7IsUq6eKKcWUkTGBA5JbrHCgil4R"


// heres the api key + secret + token
fetch("https://api.petfinder.com/v2/oauth2/token", {
    body: `grant_type=client_credentials&client_id=${apiKey}&client_secret=${secret}`,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "POST"
})
.then(function (response) {
  return response.json();
})
.then(function (data) {
  fetchSeniorDog(data.access_token)
})


var petInfoTable = document.getElementById("table");


function fetchSeniorDog(token) {
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
          // how get images to show? It's in an array
          // Image.src = data.animals[i].photos[0].medium;
          // petPic.setAttribute("img", data.animals[i].primary_photo_cropped);

          petInfoTable.appendChild(petPic);
          petInfoTable.appendChild(petName);
          petInfoTable.appendChild(petBio);
                          // how can I omit bios that have special characters?

                          // how can I omit names that have too many characters?

          console.log(returnedData);
        }
      })
    }






    // function getToken() {

//   function retrieve()  {
//     return fetch("https://api.petfinder.com/v2/oauth2/token", {
//       body: `grant_type=client_credentials&client_id=${apiKey}&client_secret=${secret}`,
//       headers: {
//           "Content-Type": "application/x-www-form-urlencoded"
//       },
//       method: "POST"
//   })
//   .then(res => res.json())
//   .then(json => (json.access_token))
//   }
//     return retrieve().then(data => console.log(data));
//   }

  
    // var token = getToken();
    // console.log(token);
    // fetchSeniorDog(token);
  
