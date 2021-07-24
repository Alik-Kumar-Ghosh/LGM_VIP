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
