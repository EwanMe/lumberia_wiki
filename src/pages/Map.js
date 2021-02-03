import React, { Component } from "react"

import LumberiaMap from "../images/map/test_map.jpg"
import "../components/Map.css"

// TODO:
// Zoom in on cursor position. This will be achieved by looking at position of curson on the image.

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

    // --- Zooming in on cursor ---

    // Getting rectangle for map element
    const mapRect = target.getBoundingClientRect()

    // Calculating where on the map the cursor is (in pixels)
    const mapX = e.clientX - mapRect.left
    const mapY = e.clientY - mapRect.top

    // Translating pixels into percentage from left/top
    const cursorX = (mapX * 100) / mapRect.width
    const cursorY = (mapY * 100) / mapRect.height

    // Apply where to zoom on map
    target.style.transformOrigin = `${cursorX}% ${cursorY}%`

    // --- Zooming scaling ---

    // Zoom speed.
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
    console.log(target.getBoundingClientRect())

    // Makes curson into a grabbing hand
    target.style.cursor = "grabbing"

    // Getting current cursor position.
    this.startX = e.clientX
    this.startY = e.clientY

    // Sets event listeners
    document.onmouseup = this.releaseElement
    document.onmousemove = this.dragElement
  }

  dragElement = e => {
    e = e || window.event
    e.preventDefault()
    let target = e.target || e.srcElement

    // Replaces the element based on the cursor position.
    this.endX = this.startX - e.clientX
    this.endY = this.startY - e.clientY
    this.startX = e.clientX
    this.startY = e.clientY

    target.style.left = target.offsetLeft - this.endX + "px"
    target.style.top = target.offsetTop - this.endY + "px"

    // Handles if the mouse goes ouside the window
    if (target.releasePointerCapture) {
      target.releaseCapture()
    }

    if (target.setPointerCapture) {
      target.setCapture()
    }
  }

  releaseElement = e => {
    e = e || window.event
    e.preventDefault()
    let target = e.target || e.srcElement

    // Changes cursor back to open hand.
    target.style.cursor = "grab"

    // Releases the events
    document.onmouseup = null
    document.onmousemove = null

    // Handles if the mouse goes ouside the window
    if (target.releasePointerCapture) {
      target.releaseCapture()
    }

    if (target.setPointerCapture) {
      target.setCapture()
    }
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
