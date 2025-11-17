import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const ServiceCenters = useLoaderData();
  const position = [23.6849, 90.3563];
  //   console.log(ServiceCenters);
  const mapRef = useRef(null);
  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = ServiceCenters.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase())
    );
    if (district) {
      const coord = [district.latitude, district.longitude];
      console.log(district, coord);
      mapRef.current.flyTo(coord, 14);
    }
  };
  return (
    <section className="mt-9 p-20 bg-white rounded-2xl">
      <h2 className="text-5xl font-extrabold">
        We are available in 64 districts
      </h2>
      <div className="my-12">
        <form onSubmit={handleSearch} className="relative">
          <label className="input rounded-full bg-[#f0f3f6]">
            <svg
              className="h-[1em] opacity-90"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              name="location"
              type="search"
              className="grow focus:outline-none focus:ring-0  "
              placeholder="Search"
            />
          </label>
          <button className="btn rounded-full btn-primary text-black font-bold absolute left-70 z-50 ">
            Search
          </button>
        </form>
      </div>
      <div className="divider mb-10"></div>
      <h4 className="text-3xl font-extrabold text-secondary mb-12">
        We deliver almost all over Bangladesh
      </h4>
      <div className=" w-full h-[800px] border">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-[800px]"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {ServiceCenters.map((center, i) => (
            <Marker key={i} position={[center.latitude, center.longitude]}>
              <Popup>
                {" "}
                <strong>{center.district}</strong> <br /> Service Area:{" "}
                {center.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
};

export default Coverage;
