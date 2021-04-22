import React, { useCallback, useRef, useState } from 'react'
import useInterval from '../../hooks/useInterval'
import useClickOutside from '../../hooks/useClickOutside'
import useScrollDirection from '../../hooks/useScrollDirection'

export default function Hook() {

  const [time, setTime] = useState(0)
  const ref = useRef(null)

  useInterval(() => {setTime(prev => prev + 1)}, 1000)
  useClickOutside(ref, () => {
    ref.current.style.background = 'white'
  })

  console.log(useScrollDirection('down', 0, true))

  return (
    <div style={{background: 'red'}} ref={ref}>
      <h3>Hook</h3>
      <span>{time}</span>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
      <p>This is a line</p>
    </div>
  )
}
