
mapboxgl.accessToken = 'pk.eyJ1IjoiamF0aW5tYWl0aHVsIiwiYSI6ImNrbHFrenZrejFkcTkyb2w2YjRlOHdqeGkifQ.zjXFDCNjzBbywSjbKLVV_A';
var map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [74.82161238212426,26.48608982905810], // starting position [lng, lat]
zoom: 9,
 // starting zoom

});
var marker = new mapboxgl.Marker()
.setLngLat([74.82161238212426, 26.48608982905810])
.addTo(map);

const clickBtn = document.getElementById("button1");


clickBtn.addEventListener("click",() =>{
  alert("The Info is been successfully submitted");
})