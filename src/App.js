import "./App.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import axios from "axios";
import { useState } from "react";

function App() {
  const [branches, setBranches] = useState([]);

  const getAllShop = async () => {
    try {
      const res = await axios.get("http://localhost:8010/restaurants");
      setBranches(res.data.restaurants);
      console.log(res.data.restaurants);
    } catch (error) {}
  };
  return (
    <div className="App">
      <h1>газрын зураг</h1>
      <div>
        <button onClick={getAllShop}>All coffe shop</button>
        <button>ugugdsun zaid oiriig haruulah</button>
      </div>
      <div style={{ width: "100%", height: "90vh" }}>
        map
        <MapContainer
          style={{ width: "100%", height: "90vh" }}
          center={[47.923742823223996, 106.93408876169889]}
          zoom={17}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {branches.length > 0 &&
            branches.map((r, index) => (
              <Marker
                key={index}
                position={[
                  r.location.coordinates[1],
                  r.location.coordinates[0],
                ]}
              >
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
