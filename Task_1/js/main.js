//owl
$(".owl-carousel").owlCarousel({
  merge:true,
  loop:true,
  video:true,
  image:true
}); 

  
let thumbnail = document.getElementsByClassName('thumbnail')

let activeImages = document.getElementsByClassName('active')

for (var i=0; i < thumbnail.length; i++){

  thumbnail[i].addEventListener('mouseover', function(){
    console.log(activeImages)

    document.getElementById('featured').src = this.src
  })
}
/*G-map*/ 
jQuery(function ($) {
    // Google Maps setup
    var googlemap = new google.maps.Map(
        document.getElementById('googlemap'),
        {
            center: new google.maps.LatLng(44.5403, -78.5463),
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    );
});
