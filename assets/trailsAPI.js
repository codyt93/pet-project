var baseUrl = "https://developer.nps.gov/api/v1/activities/parks/?api_key=Be3qryBfw3ZahG9SWYAs2MtP36Zklb2VGxOl8y1p"

function fetchTrails(){
    fetch(baseUrl,  {
      
    }).then(res => res.json())
    .then(data => {
    for (var i = 0; i < data.data.length; i++) {
    var trailResults =data.data[17].parks[72].url

      
    }
      console.log(trailResults);
      console.log(data);
    })
  }


fetchTrails()


