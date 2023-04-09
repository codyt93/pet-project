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
  fetchDog(data.access_token)
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