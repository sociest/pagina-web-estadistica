import React from 'react'

const MiniChart = ({ color = '#ea580c', className = 'w-16 h-12 opacity-30' }) => (
  <svg className={className} viewBox="0 0 50 30">
    <path d="M0 25 L10 20 L20 22 L30 10 L40 15 L50 5" fill="none" stroke={color} strokeWidth="2" />
    <circle cx="50" cy="5" r="2" fill={color} />
  </svg>
)

export default MiniChart
