var apiKey = "h4wf8DBUeKwOsqWiLWoU7VN06DEPb7llyE8Sk3Stb1Kyr5ecda"
var secret = "KMjhTXuUMtsH7IsUq6eKKcWUkTGBA5JbrHCgil4R"
var petDistance = document.getElementById ("petDistance")
var enterLocation = document.getElementById ("locale")
var token;


// --------------BELOW-----------
// might be able to search by zip code
// --------------BELOW-----------

// function fetchDogLocation(zip){
//     fetch("https://api.petfinder.com/v2/animals?location=" + zip,{
//       headers:{
//         Authorization:`Bearer ${token}`
//       }
//     }).then(res => res.json())
//     .then(data => {
//       console.log(data)
//     })
//   }

  // petDistance.addEventListener("click", function (event){
  //   event.preventDefault ()
  //   fetchDogLocation(token, enterLocation.value)
  // })





// --------------BELOW-----------
// pulling in an empty table from HTML
// --------------BELOW-----------
var petInfoTable = document.getElementById("table");


// --------------BELOW-----------
// Setting our Petfinder API credentials to be called
// --------------BELOW-----------
function retrieveToken()  {
  return fetch("https://api.petfinder.com/v2/oauth2/token", {
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
  // this where we access the token for later
  token=data.access_token

  fetchFeaturedPet1();
  fetchFeaturedPet2();
  fetchFeaturedPet3();
})
}

retrieveToken();


// --------------BELOW-----------
// pulling each individual card by ID to alleviate confusion with multiple classes in HTML
// --------------BELOW-----------
var featuredCard1 = document.getElementById("card1")
var featuredCard2 = document.getElementById("card2")
var featuredCard3 = document.getElementById("card3")


// --------------BELOW-----------
// Step 1: Created function in order to call later inside the retrieveToken() function
// Step 2: Fetched singular random pet that is both senior and special needs
// Step 3: Looping over data
// Step 4: Creating <h3> element of pet's name
// Step 5: Creating <img> element of pet
// Step 6: Within the loop: Create Element, Add Content, Append to Page
// Step 7: Assign CLASS to each element
// Step 8: Appended data to individual card by ID
// --------------BELOW-----------
function fetchFeaturedPet1() {
  fetch("https://api.petfinder.com/v2/animals?sort=random&age=senior&location=98195&distance=100&special_needs=1&limit=1",{
    headers:{
      Authorization:`Bearer ${token}`
    }
  }).then(function (response) {
        return response.json();
      })
      .then(function (data) {
        for (var i = 0; i < data.animals.length; i++) {

          // var returnedFeaturedPet = data.animals[i];
          var featuredPetPic = document.createElement("img");
          var featuredPetName = document.createElement("h3");
          var featuredPetBio = document.createElement("p");
          var petUrl = document.createElement("a");

          featuredPetName.textContent = data.animals[i].name;
          featuredPetPic.setAttribute("src", data.animals[i].primary_photo_cropped.medium);
          featuredPetBio.textContent = data.animals[i].description;
          petUrl.innerHTML = "Take me to Pet Profile";
          petUrl.href = data.animals[i].url;
          petUrl.setAttribute("target", "_blank");

          featuredPetPic.classList.add("featured-pet-pics");
          featuredPetName.classList.add("featured-pet-name");
          featuredPetBio.classList.add("featured-pet-bio");
// --------------BELOW-----------
// Since created elements are being manipulated by CSS by adding class, do we still need these?
// --------------BELOW-----------
          featuredCard1.appendChild(featuredPetPic);
          featuredCard1.appendChild(featuredPetName);
          featuredCard1.appendChild(featuredPetBio);
          petInfoTable.appendChild(petUrl);
        }
      })
    }


    // --------------BELOW-----------
// Step 1: Created function in order to call later inside the retrieveToken() function
// Step 2: Fetched singular random pet that is both senior and special needs
// Step 3: Looping over data
// Step 4: Creating <h3> element of pet's name
// Step 5: Creating <img> element of pet
// Step 6: Within the loop: Create Element, Add Content, Append to Page
// Step 7: Assign CLASS to each element
// Step 8: Appended data to individual card by ID
// --------------BELOW-----------
function fetchFeaturedPet2() {
fetch("https://api.petfinder.com/v2/animals?sort=random&age=senior&location=98195&distance=100&special_needs=1&limit=1",{
  headers:{
    Authorization:`Bearer ${token}`
  }
}).then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.animals.length; i++) {

        var featuredPetPic = document.createElement("img");
        var featuredPetName = document.createElement("h3");
        var featuredPetBio = document.createElement("p");
        var petUrl = document.createElement("a");

        featuredPetName.textContent = data.animals[i].name;
        featuredPetPic.setAttribute("src", data.animals[i].primary_photo_cropped.medium);
        featuredPetBio.textContent = data.animals[i].description;
        petUrl.innerHTML = "Take me to Pet Profile";
        petUrl.href = data.animals[i].url;
        petUrl.setAttribute("target", "_blank");

        featuredPetPic.classList.add("featured-pet-pics");
        featuredPetName.classList.add("featured-pet-name");
        featuredPetBio.classList.add("featured-pet-bio");
// --------------BELOW-----------
// Since created elements are being manipulated by CSS by adding class, do we still need these?
// --------------BELOW-----------
        featuredCard2.appendChild(featuredPetPic);
        featuredCard2.appendChild(featuredPetName);
        featuredCard2.appendChild(featuredPetBio);
        petInfoTable.appendChild(petUrl);
      }
    })
}


// --------------BELOW-----------
// Step 1: Created function in order to call later inside the retrieveToken() function
// Step 2: Fetched singular random pet that is both senior and special needs
// Step 3: Looping over data
// Step 4: Creating <h3> element of pet's name
// Step 5: Creating <img> element of pet
// Step 6: Within the loop: Create Element, Add Content, Append to Page
// Step 7: Assign CLASS to each element
// Step 8: Appended data to individual card by ID
// --------------BELOW-----------
function fetchFeaturedPet3() {
    fetch("https://api.petfinder.com/v2/animals?sort=random&age=senior&location=98195&distance=100&special_needs=1&limit=1",{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then(function (response) {
          return response.json();
        })
        .then(function (data) {
          for (var i = 0; i < data.animals.length; i++) {
  
            var featuredPetPic = document.createElement("img");
            var featuredPetName = document.createElement("h3");
            var featuredPetBio = document.createElement("p");
            var petUrl = document.createElement("a");
  
            featuredPetName.textContent = data.animals[i].name;
            featuredPetPic.setAttribute("src", data.animals[i].primary_photo_cropped.medium);
            featuredPetBio.textContent = data.animals[i].description;
            petUrl.innerHTML = "Take me to Pet Profile";
            petUrl.href = data.animals[i].url;
            petUrl.setAttribute("target", "_blank");
  
            featuredPetPic.classList.add("featured-pet-pics");
            featuredPetName.classList.add("featured-pet-name");
            featuredPetBio.classList.add("featured-pet-bio");
  // --------------BELOW-----------
  // Since created elements are being manipulated by CSS by adding class, do we still need these?
  // --------------BELOW-----------
            featuredCard3.appendChild(featuredPetPic);
            featuredCard3.appendChild(featuredPetName);
            featuredCard3.appendChild(featuredPetBio);
            petInfoTable.appendChild(petUrl);
          }
        })
      }


// --------------BELOW-----------
// creating function to clear the table as soon as search for pet type button is clicked
// --------------BELOW-----------
function clearTable() {
  var petInfoTable = document.getElementById("table");
  petInfoTable.innerHTML = "";
}


// --------------BELOW-----------
// Step 1: Pulling the search button for pet type in from HTML 
// Step 2: Creating function to run when Pet Type search button is clicked
// Step 3: Calling function to clear table upon click
// Step 4: Fetching data
// Step 5: Looping over data 
// Step 6: Within the loop: Create Element, Add Content, Append to Page
// Step 7: Declared a click event listener to run the fetch
// --------------BELOW-----------
var seniorDogBtn = document.getElementById("senior-dog-btn");

function fetchSeniorDog(event) {

  clearTable();

  fetch("https://api.petfinder.com/v2/animals?type=dog&sort=random&age=senior&location=98195&distance=100",{
    headers:{
      Authorization:`Bearer ${token}`
    }
  }).then(function (response) {
        return response.json();
      })
      .then(function (data) {
        for (var i = 0; i < data.animals.length; i++) {

          var petPic = document.createElement("img")
          var petName = document.createElement("h3");
          var petBio = document.createElement("p");
          var petUrl = document.createElement("a");
          // var bio = data.animals[i].description
          // var filterBio = bio.replaceAll("&amp;#39;","'").replaceAll("&#039;", "'").replaceAll("amp;#34", "'");
          // petBio.textContent = filterBio
          // if (bio exists)
          // create element
          // filter bio bio
          // append
          // orrrrrrr... append bio and set bio text to "No bio found"
          // console.log(bio)
          // console.log(filterBio)
          
          petName.textContent = data.animals[i].name;
          petPic.setAttribute("src", data.animals[i].primary_photo_cropped.medium);
          petBio.textContent = data.animals[i].description;
          petUrl.innerHTML = "Take me to Pet Profile";
          petUrl.href = data.animals[i].url;
          petUrl.setAttribute("target", "_blank");

          petInfoTable.appendChild(petName);
          petInfoTable.appendChild(petPic);
          petInfoTable.appendChild(petBio);
          petInfoTable.appendChild(petUrl);
                          // how can I omit bios that have special characters?

                          // how can I omit names that have too many characters?

          console.log(data.animals[i]);
        }
      })
    }

seniorDogBtn.addEventListener("click", fetchSeniorDog);


// --------------BELOW-----------
// Step 1: pulling the search button for pet type in from HTML 
// Step 2: creating function to run when Pet Type search button is clicked
// Step 3: calling function to clear table upon click
// Step 4: Fetching data
// Step 5: Looping over data 
// Step 6: Within the loop: Create Element, Add Content, Append to Page
// Step 7: Declared a click event listener to run the fetch
// --------------BELOW-----------
var seniorCatBtn = document.getElementById("senior-cat-btn");

function fetchSeniorCat() {

  clearTable();

  fetch("https://api.petfinder.com/v2/animals?type=cat&sort=random&age=senior&location=98195&distance=100",{
    headers:{
      Authorization:`Bearer ${token}`
    }
  }).then(function (response) {
        return response.json();
      })
      .then(function (data) {
        for (var i = 0; i < data.animals.length; i++) {

          var petPic = document.createElement("img")
          var petName = document.createElement("h3");
          var petBio = document.createElement("p");
          var petUrl = document.createElement("a");


          petName.textContent = data.animals[i].name;
          petPic.setAttribute("src", data.animals[i].primary_photo_cropped.medium);
          petBio.textContent = data.animals[i].description;
          petUrl.innerHTML = "Take me to Pet Profile";
          petUrl.href = data.animals[i].url;
          petUrl.setAttribute("target", "_blank");

          petInfoTable.appendChild(petName);
          petInfoTable.appendChild(petPic);
          petInfoTable.appendChild(petBio);
          petInfoTable.appendChild(petUrl);

                          // how can I omit names that have too many characters?

        }
      })
    }

    seniorCatBtn.addEventListener("click", fetchSeniorCat);


// --------------BELOW-----------
// Step 1: pulling the search button for pet type in from HTML 
// Step 2: creating function to run when Pet Type search button is clicked
// Step 3: calling function to clear table upon click
// Step 4: Fetching data
// Step 5: Looping over data 
// Step 6: Within the loop: Create Element, Add Content, Append to Page
// Step 7: Declared a click event listener to run the fetch
// --------------BELOW-----------
var specialNeedsCatBtn = document.getElementById("special-needs-cat-btn");

function fetchSpecialNeedsCat() {

  clearTable();

  fetch("https://api.petfinder.com/v2/animals?type=cat&sort=random&special_needs=1&location=98195&distance=100",{
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
          var petUrl = document.createElement("a");


          petName.textContent = data.animals[i].name;
          petPic.setAttribute("src", data.animals[i].primary_photo_cropped.medium);
          petBio.textContent = data.animals[i].description;
          petUrl.innerHTML = "Take me to Pet Profile";
          petUrl.href = data.animals[i].url;
          petUrl.setAttribute("target", "_blank");

          petInfoTable.appendChild(petName);
          petInfoTable.appendChild(petPic);
          petInfoTable.appendChild(petBio);
          petInfoTable.appendChild(petUrl);

                          // how can I omit names that have too many characters?

        }
      })
    }

    specialNeedsCatBtn.addEventListener("click", fetchSpecialNeedsCat);


// --------------BELOW-----------
// Step 1: pulling the search button for pet type in from HTML 
// Step 2: creating function to run when Pet Type search button is clicked
// Step 3: calling function to clear table upon click
// Step 4: Fetching data
// Step 5: Looping over data 
// Step 6: Within the loop: Create Element, Add Content, Append to Page
// Step 7: Declared a click event listener to run the fetch
// --------------BELOW-----------
var specialNeedsDogBtn = document.getElementById("special-needs-dog-btn");

function fetchSpecialNeedsDog() {

  clearTable();
  
  fetch("https://api.petfinder.com/v2/animals?type=dog&sort=random&special_needs=1&location=98195&distance=100",{
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
          var petUrl = document.createElement("a");


          petName.textContent = data.animals[i].name;
          petPic.setAttribute("src", data.animals[i].primary_photo_cropped.medium);
          petBio.textContent = data.animals[i].description;
          petUrl.innerHTML = "Take me to Pet Profile";
          petUrl.href = data.animals[i].url;
          petUrl.setAttribute("target", "_blank");

          petInfoTable.appendChild(petName);
          petInfoTable.appendChild(petPic);
          petInfoTable.appendChild(petBio);
          petInfoTable.appendChild(petUrl);

                          // how can I omit names that have too many characters?

        }
      })
    }

    specialNeedsDogBtn.addEventListener("click", fetchSpecialNeedsDog);
