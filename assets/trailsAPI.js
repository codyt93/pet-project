var baseUrl = "https://developer.nps.gov/api/v1/activities/parks/?api_key=Be3qryBfw3ZahG9SWYAs2MtP36Zklb2VGxOl8y1p"
var trails = document.querySelector("#hiking-results")


var trailsLink = document.querySelector("#trails-btn");
console.log(trailsLink)

function fetchTrails() {
  fetch(baseUrl, {

  }).then(res => res.json())
    .then(data => {
      var trailResults = data.data[17]
      var parks = trailResults.parks
      
      // Generate a random index
      var randomIndex = Math.floor(Math.random() * parks.length);
      console.log(randomIndex);

      // item at the random index
      var randomItem = parks[randomIndex];

      console.log(randomItem);


      trailsLink.href = randomItem.url

    })
}


fetchTrails()


