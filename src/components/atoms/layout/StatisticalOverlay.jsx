import React from 'react'

const StatisticalOverlay = ({ color = "#001d3d", opacity = "0.04" }) => (
  <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0" style={{ opacity }}>
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none" preserveAspectRatio="none">
      <path d="M0 150 Q100 50 200 150 T400 150" stroke={color} strokeWidth="2" />
      <path d="M0 130 Q150 10 300 130 T400 130" stroke={color} strokeWidth="1" opacity="0.5" />
      {[...Array(15)].map((_, i) => (
        <line key={i} x1={i * 30} y1="0" x2={i * 30} y2="300" stroke={color} strokeWidth="0.5" opacity="0.2" />
      ))}
      {[...Array(10)].map((_, i) => (
        <line key={i} x1="0" y1={i * 30} x2="400" y2={i * 30} stroke={color} strokeWidth="0.5" opacity="0.2" />
      ))}
    </svg>
  </div>
)

export default StatisticalOverlay
