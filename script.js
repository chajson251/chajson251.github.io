var map = L.map('map').setView([50.866427241362565, 20.627648651884503], 9);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

    var circle = L.circle([50.866427241362565, 20.627648651884503], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 40000
    }).addTo(map);