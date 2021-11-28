function iniciarMap(){
    var coord = {lat:15.9829018 ,lng: -97.0877806};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}