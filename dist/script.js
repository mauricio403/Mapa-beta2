var map = L.map('map').setView([-0.225069,-78.5168959], 8)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

	
L.control.scale().addTo(map);

var marker = L.marker([-0.225069,-78.5168959]).addTo(map)
.bindPopup('Aqui esta el instituto') //instituto

L.marker([-0.071850, -78.435068]).addTo(map)
.bindPopup('Casa de Francisco')//estudiante1Francisco

L.marker([-0.2235145,-78.5113281]).addTo(map)
.bindPopup('Casa de Jennifer')//estudiante2Jennifer

L.marker([-0.290397, -78.552108]).addTo(map)
.bindPopup('Casa del Quemag')//estudiante3Quemag

L.marker([-0.241768, -78.526977]).addTo(map)
.bindPopup('Casa del Pastrana')//estudiante4Pastrana

L.marker([-0.352055, -78.528046]).addTo(map)
.bindPopup('Casa de Mauricio')//estudiante5Mauricio

L.marker([-0.257128, -78.546270]).addTo(map)
.bindPopup('Casa de Kevin')//estudiante6Maistro

L.marker([-0.355708, -78.528793]).addTo(map)
.bindPopup('Casa de Jazmin')//estudiante7Jazz

// lineas
//instituto-francisco
var Linea = L.polyline([
      [-0.225069,-78.5168959],
      [-0.071850, -78.435068],
  ]).addTo(map);

//instituto-Jeniffer
var Linea = L.polyline([
      [-0.225069,-78.5168959],
      [-0.2235145,-78.5113281],
  ]).addTo(map);

//Instituto-Quemag
var Linea = L.polyline([
      [-0.225069,-78.5168959],
      [-0.290397, -78.552108],
  ]).addTo(map);

//Instituto-Pastrana
var Linea = L.polyline([
      [-0.225069,-78.5168959],
      [-0.241768, -78.526977],
  ]).addTo(map);

//Instituto-Mauricio
var Linea = L.polyline([
      [-0.225069,-78.5168959],
      [-0.352055, -78.528046],
  ]).addTo(map);

//Instituto-Kevin
var Linea = L.polyline([
      [-0.225069,-78.5168959],
      [-0.257128, -78.546270],
  ]).addTo(map);

//Instituto-Jazmin
var Linea = L.polyline([
      [-0.225069,-78.5168959],
      [-0.355708, -78.528793],
  ]).addTo(map);