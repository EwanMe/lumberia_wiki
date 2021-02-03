import React from "react"

import LumberiaMap from "../images/map/test_map.jpg"

function zoom(e) {
  e.preventDefault()

  scale += e.deltaY * -0.01

  // Restrict scale
  scale = Math.min(Math.max(0.125, scale), 4)

  // Apply scale transform
  map.style.transform = `scale(${scale})`
}

let scale = 1
const map = document.querySelector("#map")
map.onwheel = zoom

const Map = () => {
  return (
    <div
      className="mapWrapper"
      style={{
        minHeight: "100vh",
        margin: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        id="map"
        src={LumberiaMap}
        width="3492"
        height="2480"
        onwheel={zoom}
        alt="Eastern Lumberia"
      />
    </div>
  )
}

export default Map
