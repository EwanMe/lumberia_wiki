import React, { Component } from "react"

import LumberiaMap from "../images/map/test_map.jpg"
import "../components/Map.css"

class Map extends Component {
  constructor() {
    super()

    // Init scale of map to original size.
    this.scale = 1

    // Init cursor positions
    this.startX = this.startY = this.endX = this.endY = 0
  }

  zoom = e => {
    e.preventDefault()
    this.scale += e.deltaY * -0.05

    // Restrict scale
    const farthestZoom = 1
    const nearestZoom = 4

    this.scale = Math.min(Math.max(farthestZoom, this.scale), nearestZoom)

    // Apply scale transform
    this.mapElement.style.transform = `scale(${this.scale})`
  }

  grabElement = e => {
    e.preventDefault()

    this.mapElement.style.cursor = "grabbing"

    this.startX = e.clientX
    this.startY = e.clientY

    document.onmouseup = this.releaseElement
    document.onmousemove = this.dragElement
  }

  dragElement = e => {
    e.preventDefault()

    this.endX = this.startX - e.clientX
    this.endY = this.startY - e.clientY
    this.startX = e.clientX
    this.startY = e.clientY

    this.mapElement.style.left = this.mapElement.offsetLeft - this.endX + "px"
    this.mapElement.style.top = this.mapElement.offsetTop - this.endY + "px"
  }

  releaseElement = e => {
    this.mapElement.style.cursor = "grab"

    document.onmouseup = null
    document.onmousemove = null

    return false
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
          width="3492px"
          height="2480px"
          alt="Eastern Lumberia"
          onWheel={this.zoom}
          onMouseDown={this.grabElement}
          ref={el => (this.mapElement = el)}
        />
      </div>
    )
  }
}

export default Map
