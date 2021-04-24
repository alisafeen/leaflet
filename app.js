var map = L.map('mapid').setView([33.33970700424029, 44.51660156250001], 3);

map.createPane('labels');
map.getPane('labels').style.zIndex = 650;
map.getPane('labels').style.pointerEvents = 'none';


L.tileLayer('https://api.mapbox.com/styles/v1/alisabbas/cknqioal701ex17p8j8d5kb7r/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWxpc2FiYmFzIiwiYSI6ImNrbmRrdzBkaDBwNzIycG83cXhhbnFraWEifQ.4sFm1oQ8C42lVnBa6geNEA', {
    //id: 'mapbox/light-v9',
    //attribution: ...,
    tileSize: 512,
    zoomOffset: -1,
}).addTo(map);





var photoImg = '<img src="https://static.pexels.com/photos/189349/pexels-photo-189349.jpeg" height="150px" width="150px"/>';

function showDetail(e){
    var feature = e.target.feature;
    e.target
    .bindPopup('Name: '+feature.properties.Adm1Name+'<br/>'+photoImg)
    .openPopup();
}



function onEachFeature(feature, layer){
    layer.on({
        click: showDetail
    });   



}

var geoJsonIraq = L.geoJSON(IraqGovsData, {
    onEachFeature: onEachFeature

}).addTo(map);

map.fitBounds(geoJsonIraq.getBounds());



