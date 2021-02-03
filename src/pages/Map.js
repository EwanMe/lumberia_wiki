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
    e = e || window.event
    e.preventDefault()
    let target = e.target || e.srcElement

    this.scale += e.deltaY * -0.05

    // Restrict scale
    const farthestZoom = 1
    const nearestZoom = 4

    this.scale = Math.min(Math.max(farthestZoom, this.scale), nearestZoom)

    // Apply scale transform
    target.style.transform = `scale(${this.scale})`
  }

  grabElement = e => {
    e = e || window.event
    e.preventDefault()
    let target = e.target || e.srcElement
    console.log(target.offsetWidth, target.offsetHeight)

    target.style.cursor = "grabbing"

    this.startX = e.clientX
    this.startY = e.clientY

    document.onmouseup = this.releaseElement
    document.onmousemove = this.dragElement
  }

  dragElement = e => {
    e = e || window.event
    e.preventDefault()
    let target = e.target || e.srcElement

    this.endX = this.startX - e.clientX
    this.endY = this.startY - e.clientY
    this.startX = e.clientX
    this.startY = e.clientY

    target.style.left = target.offsetLeft - this.endX + "px"
    target.style.top = target.offsetTop - this.endY + "px"
  }

  releaseElement = e => {
    e.target.style.cursor = "grab"

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
        />
      </div>
    )
  }
}

export default Map
