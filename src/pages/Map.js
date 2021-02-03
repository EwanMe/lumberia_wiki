import React, { Component } from "react"

import LumberiaMap from "../images/map/test_map.jpg"
import "../components/Map.css"

let scale = 1

class Map extends Component {
  constructor(props) {
    super(props)

    this.zoom = this.zoom.bind(this)
  }

  zoom(e) {
    e.preventDefault()

    scale += e.deltaY * -0.01

    // Restrict scale
    scale = Math.min(Math.max(0.125, scale), 4)

    // Apply scale transform
    this.mapElement.style.transform = `scale(${scale})`
  }

  render() {
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
          alt="Eastern Lumberia"
          onWheel={this.zoom}
          ref={el => (this.mapElement = el)}
        />
      </div>
    )
  }
}

export default Map
