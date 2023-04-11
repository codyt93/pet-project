var baseUrl = "https://developer.nps.gov/api/v1/activities/parks/?api_key=Be3qryBfw3ZahG9SWYAs2MtP36Zklb2VGxOl8y1p"
var trails = document.querySelector("#hiking-results")

function fetchTrails(){
    fetch(baseUrl,  {
      
    }).then(res => res.json())
    .then(data => {
      var trailResults =data.data[17].parks[72].url
      console.log(trailResults);
      // create element
      var trailEl = document.createElement("a");


      // modify content
      trailEl.textContent = "random hiking trail"
      trailEl.setAttribute("href", trailResults);

      // append to page
      trails.appendChild(trailEl)
    })
  }


fetchTrails()


