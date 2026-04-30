const FloatingSymbols = () => (
  <>
    <div className="hidden lg:block absolute top-20 right-20 select-none pointer-events-none font-serif text-8xl italic font-black text-[#00447e] opacity-[0.03]" aria-hidden="true">
      Sum
    </div>
    <div className="hidden lg:block absolute bottom-32 left-16 select-none pointer-events-none font-serif text-7xl italic font-black text-[#c2410c] opacity-[0.03]" aria-hidden="true">
      mu
    </div>
    <div className="hidden md:block absolute top-1/2 left-1/4 select-none pointer-events-none font-serif text-6xl italic font-black text-[#00447e] opacity-[0.02]" aria-hidden="true">
      chi2
    </div>
    <div className="hidden md:block absolute top-1/3 right-1/4 select-none pointer-events-none font-serif text-6xl italic font-black text-[#c2410c] opacity-[0.02]" aria-hidden="true">
      beta
    </div>
  </>
)

export default FloatingSymbols
