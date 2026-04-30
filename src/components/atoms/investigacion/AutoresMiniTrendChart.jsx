const AutoresMiniTrendChart = ({ color = '#ea580c' }) => (
  <svg className="pointer-events-none absolute bottom-6 right-6 h-16 w-20 opacity-[0.15]" viewBox="0 0 60 40" fill="none" aria-hidden="true">
    <path d="M5 30 L15 25 L25 20 L35 15 L45 10 L55 5" stroke={color} strokeWidth="2" strokeLinecap="round" />
    {[5, 15, 25, 35, 45, 55].map((x, index) => (
      <circle key={`${x}-${index}`} cx={x} cy={30 - index * 5} r="2" fill={color} />
    ))}
  </svg>
)

export default AutoresMiniTrendChart
