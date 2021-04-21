import React, { useRef, useState } from 'react'
import useInterval from '../../hooks/useInterval'
import useClickOutside from '../../hooks/useClickOutside'

export default function Hook() {

  const [time, setTime] = useState(0)
  const ref = useRef(null)

  useInterval(() => {setTime(prev => prev + 1)}, 1000)
  useClickOutside(ref, () => {
    ref.current.style.background = 'white'
  })

  return (
    <div style={{background: 'red'}} ref={ref}>
      <h3>Hook</h3>
      <span>{time}</span>
    </div>
  )
}
