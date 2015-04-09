var topo2 = L.tileLayer('http://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=topo2&zoom={z}&x={x}&y={y}', {
    minZoom: 5,
    maxZoom: 18,
    attribution: '<a href="http://nkart.no">nkart.no</a>, <span class="screenOnly"><a href="https://itunes.apple.com/no/app/norgeskart/id727189627?mt=8">iPhone / iPad</a>, <a href="https://play.google.com/store/apps/details?id=com.kartapps.norgeskart">Android</a>, <a href="http://apps.microsoft.com/windows/nb-no/app/norgeskart/4668f9cf-1120-492e-b101-6f073f30c374">Windows 8 </a>,</span> Made with &#9829; by <a href="http://sasak.sk">Sasak</a> ©Kartverket',
    detectRetina: true
});

var toporaster2 = L.tileLayer('http://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=toporaster2&zoom={z}&x={x}&y={y}', {
    minZoom: 5,
    maxZoom: 18,
    attribution: '<a href="http://nkart.no">nkart.no</a>, <span class="screenOnly"><a href="https://itunes.apple.com/no/app/norgeskart/id727189627?mt=8">iPhone / iPad</a>, <a href="https://play.google.com/store/apps/details?id=com.kartapps.norgeskart">Android</a>, <a href="http://apps.microsoft.com/windows/nb-no/app/norgeskart/4668f9cf-1120-492e-b101-6f073f30c374">Windows 8 </a>,</span> Made with &#9829; by <a href="http://sasak.sk">Sasak</a> ©Kartverket',
    detectRetina: true
});

var norges_grunnkart = L.tileLayer('http://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=norges_grunnkart&zoom={z}&x={x}&y={y}', {
    minZoom: 5,
    maxZoom: 18,
    attribution: '<a href="http://nkart.no">nkart.no</a>, <span class="screenOnly"><a href="https://itunes.apple.com/no/app/norgeskart/id727189627?mt=8">iPhone / iPad</a>, <a href="https://play.google.com/store/apps/details?id=com.kartapps.norgeskart">Android</a>, <a href="http://apps.microsoft.com/windows/nb-no/app/norgeskart/4668f9cf-1120-492e-b101-6f073f30c374">Windows 8 </a>,</span> Made with &#9829; by <a href="http://sasak.sk">Sasak</a> ©Kartverket',
    detectRetina: true
});
/*
matrikkel_bakgrunn
topo2
topo2graatone
Europakart
topo2_direkte
toporaster2
sjo_hovedkart2
kartdata2
ERM
Arcticerm
norges_grunnkart
toporaster2_rik
norges_grunnkart_graatone
arcticsdi_wmts
elf_basemap
Europeiske grunnkart egk
terreng_norgeskart
Havbunn grunnkart havbunn_grunnkart
elf_basemap
vegnett
sjokartraster
*/


var map = L.map('map', {
    center: [60.6, 7.5],
    zoom: 8,
    maxBounds: [
        [73.3, -10.5],
        [54, 46]
    ],
    attributionControl: true,
    layers: [topo2]
});

L.control.layers({
    Topo2: topo2,
    Toporaster2: toporaster2,
    'Grunnkart': norges_grunnkart
}).addTo(map);

map.attributionControl.setPrefix(false);

var tip = L.popup({
        autoPan: false
    })
    .setLatLng(map.getCenter())
    .setContent('<h1>Skriv ut ditt eget kart</h1><p>Den oransje firkanten er på størrelse med et vanlig A4-ark. Plasser og zoom kartet slik at det ønskede området dekkes av denne firkanten, og trykk deretter på <b>Utskrift</b>.</p>')
    .openOn(map);

map.on('move', function () {
    map.closePopup();
});

L.control.scale({
    imperial: false
}).addTo(map);

var close = document.getElementById('close').addEventListener('click', function () {
    document.getElementById('printWindow').style.display = 'none';
    document.getElementById('close').style.display = 'none';
    return false;
}, false);