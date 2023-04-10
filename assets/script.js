var urlBreeds = "https://api.petfinder.com/v2/oauth2/token?grant_type=client_credentials&client_id=h4wf8DBUeKwOsqWiLWoU7VN06DEPb7llyE8Sk3Stb1Kyr5ecda&client_secret=KMjhTXuUMtsH7IsUq6eKKcWUkTGBA5JbrHCgil4R"
var apiKey = "h4wf8DBUeKwOsqWiLWoU7VN06DEPb7llyE8Sk3Stb1Kyr5ecda"
var secret = "KMjhTXuUMtsH7IsUq6eKKcWUkTGBA5JbrHCgil4R"
var petDistance = document.getElementById ("petDistance")
var enterLocation = document.getElementById ("locale")
var token;

fetch("https://api.petfinder.com/v2/oauth2/token", {
    body: `grant_type=client_credentials&client_id=${apiKey}&client_secret=${secret}`,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "POST"
})
.then(res => res.json())
.then(data => {
  console.log(data)
  token=data.access_token
  fetchDog(data.access_token)
  fetchDogLocation(data.access_token,"98258")
})
function fetchDog(token){
  fetch("https://api.petfinder.com/v2/animals?type=dog",{
    headers:{
      Authorization:`Bearer ${token}`
    }
  }).then(res => res.json())
  .then(data => {
    console.log(data)
  })
}
function fetchDogLocation(token, zip){
    fetch("https://api.petfinder.com/v2/animals?location=" + zip,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }

  petDistance.addEventListener("click", function (event){
    event.preventDefault ()
    fetchDogLocation(token, enterLocation.value)
  })
