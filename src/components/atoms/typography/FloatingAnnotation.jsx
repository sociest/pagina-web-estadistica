import React from 'react'

const FloatingAnnotation = ({ label, value, top, right, bottom, left }) => (
  <div 
    className="absolute font-mono text-[10px] text-white/30 uppercase tracking-[0.2em] pointer-events-none select-none z-20" 
    style={{ top, right, bottom, left }}
  >
    <span className="text-[#ea580c] font-black mr-2">{label}</span> {value}
  </div>
)

export default FloatingAnnotation
