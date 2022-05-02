
   
function iniciarMap(){
    var coord = {lat: -31.4080648 ,lng: -64.1330785};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}