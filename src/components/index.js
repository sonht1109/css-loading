import React from 'react'
import Loading1 from './Loading1/Loading1'
import Loading2 from './Loading2'
import Loading3 from './Loading3'
import Loading4 from './Loading4'
import './style.css'

export default function Loading() {
  return (
    <div className="container">
      <Loading1 />
      <Loading2 />
      <Loading3 />
      <Loading4 />
    </div>
  )
}
