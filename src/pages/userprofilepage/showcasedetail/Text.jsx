import React from 'react'

export default function Text({text}) {
  return (
    <p className="line-clamp-2 text-textNavy font-semibold text-center">
        {text}
    </p>
  )
}
