'use client'
import { useState } from 'react'

const Avatar = ({ data }) => {
  const [state, setState] = useState(data)
  return (
    <div>
      <p>{JSON.stringify(state)}</p>
    </div>
  )
}

export default Avatar
