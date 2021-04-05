import React from 'react'
import './style.css'

export default function Loading7() {
  return (
    <div className="loading-wrapper">
      <div className="title">Loading 7</div>
      <div className="loading-7">
        <div className="spinner-1 spinner">
          <div className="spinner-1_inner"></div>
        </div>
        <div className="spinner-2 spinner">
          <div className="spinner-2_inner"></div>
        </div>
      </div>
    </div>
  )
}
