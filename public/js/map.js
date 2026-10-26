mapboxgl.accessToken = mapToken;

console.log("Map token loaded:", !!mapToken);
console.log("Coordinates:", coordinates);

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  center: coordinates,
  zoom: 9,
});

new mapboxgl.Marker({ color: "red" })
  .setLngLat(coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h4>${locationName}</h4>
       <p>Exact location provided after booking</p>`,
    ),
  )
  .addTo(map);
