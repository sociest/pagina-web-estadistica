import svgPaths from "./svg-6z168835yt";

function Icon() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p3c5e4600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.91667" />
          <path d="M25.6667 11.6667V18.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.91667" />
          <path d={svgPaths.pc2e7900} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.91667" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-gradient-to-b from-[#00a5a8] relative rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 size-[48px] to-[#1a6b1a]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Heading 1">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] min-h-px min-w-px not-italic relative text-[#1e293b] text-[20px]">Carrera de Estadística</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">Facultad de Ciencias Puras y Naturales - UMSA</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[48px] relative shrink-0 w-[287.641px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[rgba(0,165,168,0.1)] h-[100px] items-start left-0 pb-[4px] pt-[24px] px-[151px] to-[rgba(26,107,26,0.1)] top-0 via-1/2 via-white w-[1534px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#00a5a8] border-b-4 border-solid inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}

function Text() {
  return <div className="absolute bg-[#1a6b1a] left-[16px] rounded-[33554400px] size-[8px] top-[10px]" data-name="Text" />;
}

function StatusBadge() {
  return (
    <div className="absolute bg-[rgba(26,107,26,0.25)] border-2 border-[rgba(26,107,26,0.5)] border-solid h-[32px] left-0 rounded-[33554400px] top-0 w-[165.391px]" data-name="StatusBadge">
      <Text />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[89.5px] not-italic text-[#1a6b1a] text-[12px] text-center top-[6px] whitespace-nowrap">Clean Blueprint 2025</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[32px] left-[533.3px] top-0 w-[165.391px]" data-name="Container">
      <StatusBadge />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[48px] left-0 top-[48px] w-[1232px]" data-name="Heading 2">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[48px] left-[616.63px] not-italic text-[#1e293b] text-[48px] text-center top-[-3px] whitespace-nowrap">Clean Blueprint</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[58.5px] left-[280px] top-[112px] w-[672px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-[336.11px] not-italic text-[#475569] text-[18px] text-center top-[-1px] w-[615px]">Sistema de diseño con papel técnico de alta calidad, grabados estadísticos de precisión y estilo flat profesional.</p>
    </div>
  );
}

function Section() {
  return (
    <div className="h-[170.5px] relative shrink-0 w-full" data-name="Section">
      <Container3 />
      <Heading1 />
      <Paragraph1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[13.5px] left-[13px] opacity-50 top-[9px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">σ = 2.15</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[13.5px] left-[1174.45px] opacity-50 top-[9px] w-[44.547px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">R² = 1.00</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[13.5px] left-[1179.41px] opacity-50 top-[377.5px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">n = 9928</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute h-[398px] left-px top-px w-[1230px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1230 398">
        <g clipPath="url(#clip0_1_1309)" id="Icon" opacity="0.08">
          <path d={svgPaths.p154b1800} id="Vector" stroke="var(--stroke-0, #00A5A8)" strokeWidth="4.94742" />
          <path d={svgPaths.p94cfe00} id="Vector_2" opacity="0.7" stroke="var(--stroke-0, #00A5A8)" strokeWidth="3.71057" />
          <path d={svgPaths.p16b07300} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #00A5A8)" strokeWidth="3.71057" />
        </g>
        <defs>
          <clipPath id="clip0_1_1309">
            <rect fill="white" height="398" width="1230" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CardTitle() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="CardTitle">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[#1e293b] text-[18px] top-[-1px] whitespace-nowrap">Arquitectura de Color: Papel Técnico de Alta Calidad</p>
    </div>
  );
}

function CardDescription() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="CardDescription">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#475569] text-[16px] top-[-2px] whitespace-nowrap">Paleta institucional con fondos blancos, bordes grises sutiles y máxima legibilidad académica</p>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="h-[101px] relative shrink-0 w-full" data-name="CardHeader">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[20px] px-[24px] relative size-full">
        <CardTitle />
        <CardDescription />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[16px] min-h-px min-w-px not-italic relative text-[#475569] text-[12px] tracking-[0.3px] uppercase">Arquitectura Base</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[#1e293b] text-[14px]">#FFFFFF</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Blanco Puro</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[36px] relative shrink-0 w-[63.266px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph3 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[#1e293b] text-[14px]">#F8FAFC</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Gris Humo Ultra-Claro</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[36px] relative shrink-0 w-[117.594px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph5 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#e2e8f0] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[#1e293b] text-[14px]">#E2E8F0</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Gris de Datos (Bordes)</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[36px] relative shrink-0 w-[118.078px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph7 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[168px] items-start relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container13 />
      <Container16 />
    </div>
  );
}

function Container8() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[12px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Paragraph2 />
      <Container9 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[16px] min-h-px min-w-px not-italic relative text-[#475569] text-[12px] tracking-[0.3px] uppercase">Texto y Legibilidad</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[#1e293b] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[#1e293b] text-[14px]">#1E293B</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Azul Pizarra (Títulos)</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[36px] relative shrink-0 w-[107.375px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph10 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[#475569] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[#1e293b] text-[14px]">#475569</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Gris Grafito (Párrafos)</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[36px] relative shrink-0 w-[113.234px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph12 />
        <Paragraph13 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[#94a3b8] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#1e293b] text-[14px] whitespace-nowrap">#94A3B8</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Placeholder</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[36px] relative shrink-0 w-[61.797px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph14 />
        <Paragraph15 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[168px] items-start relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Container24 />
      <Container27 />
    </div>
  );
}

function Container19() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[12px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Paragraph9 />
      <Container20 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[16px] min-h-px min-w-px not-italic relative text-[#475569] text-[12px] tracking-[0.3px] uppercase">Paleta Institucional</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[#00a5a8] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[#1e293b] text-[14px]">#00A5A8</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Turquesa Mate</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[36px] relative shrink-0 w-[79.094px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph17 />
        <Paragraph18 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[#1a6b1a] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[#1e293b] text-[14px]">#1a6b1a</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Verde Mate</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[36px] relative shrink-0 w-[61px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph19 />
        <Paragraph20 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-[#cc7000] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[#1e293b] text-[14px]">#cc7000</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Naranja Mate</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[36px] relative shrink-0 w-[71.672px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph21 />
        <Paragraph22 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Container39 />
      <Container40 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[168px] items-start relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Container35 />
      <Container38 />
    </div>
  );
}

function Container30() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[12px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Paragraph16 />
      <Container31 />
    </div>
  );
}

function App1() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[196px] relative shrink-0 w-full" data-name="App">
      <Container8 />
      <Container19 />
      <Container30 />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[0] min-h-px min-w-px not-italic relative text-[#1e293b] text-[0px] text-[14px] text-center">
        <span className="leading-[20px]">Nota:</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[#475569]">{` Colores aplicados con opacidad 8-10% en efectos de fondo para grabados sutiles tipo papel de seguridad.`}</span>
      </p>
    </div>
  );
}

function App2() {
  return (
    <div className="content-stretch flex flex-col h-[45px] items-start pt-[25px] relative shrink-0 w-full" data-name="App">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-solid border-t inset-0 pointer-events-none" />
      <Paragraph23 />
    </div>
  );
}

function CardContent() {
  return (
    <div className="h-[297px] relative shrink-0 w-full" data-name="CardContent">
      <div className="content-stretch flex flex-col gap-[32px] items-start px-[24px] relative size-full">
        <App1 />
        <App2 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[398px] items-start left-px top-px w-[1230px]" data-name="Container">
      <CardHeader />
      <CardContent />
    </div>
  );
}

function Card() {
  return (
    <div className="h-[400px] relative rounded-[12px] shrink-0 w-full" data-name="Card" style={{ backgroundImage: "linear-gradient(162.013deg, rgba(0, 165, 168, 0.12) 0%, rgba(0, 165, 168, 0.05) 100%)" }}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container4 />
        <Container5 />
        <Container6 />
        <Icon1 />
        <Container7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,165,168,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] left-0 not-italic text-[#1e293b] text-[30px] top-[-2px] whitespace-nowrap">Botones Flat con Sombras Sutiles</p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#475569] text-[16px] top-[-2px] whitespace-nowrap">Gradientes mate suaves con acabado flat elegante, hover con shadow-md y focus ring turquesa</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[68px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Paragraph24 />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute h-[13.5px] left-[13px] opacity-50 top-[9px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">σ = 1.56</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[13.5px] left-[232.45px] opacity-50 top-[9px] w-[44.547px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">R² = 0.86</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[13.5px] left-[237.41px] opacity-50 top-[246.5px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">n = 8425</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute h-[267px] left-px top-px w-[288px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 288 267">
        <g clipPath="url(#clip0_1_1337)" id="Icon" opacity="0.08">
          <path d={svgPaths.p25bb7a80} id="Vector" stroke="var(--stroke-0, #00A5A8)" strokeWidth="1.96082" />
          <path d={svgPaths.p3743b5e8} id="Vector_2" opacity="0.7" stroke="var(--stroke-0, #00A5A8)" strokeWidth="1.47061" />
          <path d={svgPaths.p168f8380} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #00A5A8)" strokeWidth="1.47061" />
        </g>
        <defs>
          <clipPath id="clip0_1_1337">
            <rect fill="white" height="267" width="288" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="CardTitle">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[#1e293b] text-[18px] top-[-1px] whitespace-nowrap">Gradiente Mate</p>
    </div>
  );
}

function CardDescription1() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="CardDescription">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#475569] text-[16px] top-[-2px] w-[217px]">Turquesa a Turquesa Profundo con hover shadow-md</p>
    </div>
  );
}

function CardHeader1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[127px] items-start left-0 pt-[20px] px-[24px] top-0 w-[288px]" data-name="CardHeader">
      <CardTitle1 />
      <CardDescription1 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-gradient-to-b border border-[rgba(0,0,0,0)] border-solid from-[#00a5a8] h-[50px] left-0 overflow-clip rounded-[12px] to-[#008b8d] top-0 w-[175.563px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[87px] not-italic text-[16px] text-center text-white top-[10px] whitespace-nowrap">Acceder a Kardex</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-gradient-to-b border border-[rgba(0,0,0,0)] border-solid from-[#00a5a8] h-[50px] left-0 opacity-40 overflow-clip rounded-[12px] to-[#008b8d] top-[66px] w-[192.438px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[95px] not-italic text-[16px] text-center text-white top-[10px] whitespace-nowrap">Procesando Datos...</p>
    </div>
  );
}

function App3() {
  return (
    <div className="absolute h-[116px] left-[24px] top-[127px] w-[240px]" data-name="App">
      <Button />
      <Button1 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[267px] left-px top-px w-[288px]" data-name="Container">
      <CardHeader1 />
      <App3 />
    </div>
  );
}

function Card1() {
  return (
    <div className="col-1 justify-self-stretch relative rounded-[12px] row-1 self-stretch shrink-0" data-name="Card" style={{ backgroundImage: "linear-gradient(137.151deg, rgba(0, 165, 168, 0.12) 0%, rgba(0, 165, 168, 0.05) 100%)" }}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container43 />
        <Container44 />
        <Container45 />
        <Icon2 />
        <Container46 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,165,168,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute h-[13.5px] left-[13px] opacity-50 top-[9px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">σ = 0.66</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute h-[13.5px] left-[232.45px] opacity-50 top-[9px] w-[44.547px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">R² = 0.98</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute h-[13.5px] left-[237.41px] opacity-50 top-[246.5px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">n = 1743</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute h-[267px] left-px top-px w-[288px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 288 267">
        <g clipPath="url(#clip0_1_1337)" id="Icon" opacity="0.08">
          <path d={svgPaths.p25bb7a80} id="Vector" stroke="var(--stroke-0, #00A5A8)" strokeWidth="1.96082" />
          <path d={svgPaths.p3743b5e8} id="Vector_2" opacity="0.7" stroke="var(--stroke-0, #00A5A8)" strokeWidth="1.47061" />
          <path d={svgPaths.p168f8380} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #00A5A8)" strokeWidth="1.47061" />
        </g>
        <defs>
          <clipPath id="clip0_1_1337">
            <rect fill="white" height="267" width="288" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CardTitle2() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="CardTitle">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[#1e293b] text-[18px] top-[-1px] whitespace-nowrap">Blueprint</p>
    </div>
  );
}

function CardDescription2() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="CardDescription">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#475569] text-[16px] top-[-2px] w-[211px]">Curva de Gauss integrada con acabado flat</p>
    </div>
  );
}

function CardHeader2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[127px] items-start left-0 pt-[20px] px-[24px] top-0 w-[288px]" data-name="CardHeader">
      <CardTitle2 />
      <CardDescription2 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[184.234px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 184.234 48">
        <g clipPath="url(#clip0_1_1402)" id="Icon" opacity="0.1">
          <path d={svgPaths.pc3d4400} id="Vector" stroke="var(--stroke-0, white)" />
        </g>
        <defs>
          <clipPath id="clip0_1_1402">
            <rect fill="white" height="48" width="184.234" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-gradient-to-b border border-[rgba(0,0,0,0)] border-solid from-[#00a5a8] h-[50px] left-0 overflow-clip rounded-[12px] to-[#008b8d] top-0 w-[186.234px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[92px] not-italic text-[16px] text-center text-white top-[10px] whitespace-nowrap">Análisis Estadístico</p>
      <Icon4 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[193.328px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 193.328 48">
        <g clipPath="url(#clip0_1_1361)" id="Icon" opacity="0.1">
          <path d={svgPaths.pc3d4400} id="Vector" stroke="var(--stroke-0, white)" />
        </g>
        <defs>
          <clipPath id="clip0_1_1361">
            <rect fill="white" height="48" width="193.328" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-gradient-to-b border border-[rgba(0,0,0,0)] border-solid from-[#00a5a8] h-[50px] left-0 overflow-clip rounded-[12px] to-[#008b8d] top-[66px] w-[195.328px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[97px] not-italic text-[16px] text-center text-white top-[10px] whitespace-nowrap">Modelos Avanzados</p>
      <Icon5 />
    </div>
  );
}

function App4() {
  return (
    <div className="absolute h-[116px] left-[24px] top-[127px] w-[240px]" data-name="App">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute h-[267px] left-px top-px w-[288px]" data-name="Container">
      <CardHeader2 />
      <App4 />
    </div>
  );
}

function Card2() {
  return (
    <div className="col-2 justify-self-stretch relative rounded-[12px] row-1 self-stretch shrink-0" data-name="Card" style={{ backgroundImage: "linear-gradient(137.151deg, rgba(0, 165, 168, 0.12) 0%, rgba(0, 165, 168, 0.05) 100%)" }}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container47 />
        <Container48 />
        <Container49 />
        <Icon3 />
        <Container50 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,165,168,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute h-[13.5px] left-[13px] opacity-50 top-[9px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">σ = 1.02</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute h-[13.5px] left-[232.45px] opacity-50 top-[9px] w-[44.547px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">R² = 0.93</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute h-[13.5px] left-[237.41px] opacity-50 top-[246.5px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">n = 3074</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute h-[267px] left-px top-px w-[288px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 288 267">
        <g clipPath="url(#clip0_1_1337)" id="Icon" opacity="0.08">
          <path d={svgPaths.p25bb7a80} id="Vector" stroke="var(--stroke-0, #00A5A8)" strokeWidth="1.96082" />
          <path d={svgPaths.p3743b5e8} id="Vector_2" opacity="0.7" stroke="var(--stroke-0, #00A5A8)" strokeWidth="1.47061" />
          <path d={svgPaths.p168f8380} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #00A5A8)" strokeWidth="1.47061" />
        </g>
        <defs>
          <clipPath id="clip0_1_1337">
            <rect fill="white" height="267" width="288" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CardTitle3() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="CardTitle">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[#1e293b] text-[18px] top-[-1px] whitespace-nowrap">Academic</p>
    </div>
  );
}

function CardDescription3() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="CardDescription">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#475569] text-[16px] top-[-2px] w-[238px]">Fondo blanco con hover turquesa sutil</p>
    </div>
  );
}

function CardHeader3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[127px] items-start left-0 pt-[20px] px-[24px] top-0 w-[288px]" data-name="CardHeader">
      <CardTitle3 />
      <CardDescription3 />
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[50px] left-0 overflow-clip rounded-[12px] top-0 w-[185.844px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[92px] not-italic text-[#1e293b] text-[16px] text-center top-[10px] whitespace-nowrap">Consultar Horarios</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[50px] left-0 overflow-clip rounded-[12px] top-[66px] w-[172.422px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[85px] not-italic text-[#1e293b] text-[16px] text-center top-[10px] whitespace-nowrap">Ver Reglamentos</p>
    </div>
  );
}

function App5() {
  return (
    <div className="absolute h-[116px] left-[24px] top-[127px] w-[240px]" data-name="App">
      <Button4 />
      <Button5 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute h-[267px] left-px top-px w-[288px]" data-name="Container">
      <CardHeader3 />
      <App5 />
    </div>
  );
}

function Card3() {
  return (
    <div className="col-3 justify-self-stretch relative rounded-[12px] row-1 self-stretch shrink-0" data-name="Card" style={{ backgroundImage: "linear-gradient(137.151deg, rgba(0, 165, 168, 0.12) 0%, rgba(0, 165, 168, 0.05) 100%)" }}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container51 />
        <Container52 />
        <Container53 />
        <Icon6 />
        <Container54 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,165,168,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute h-[13.5px] left-[13px] opacity-50 top-[9px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">σ = 0.96</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute h-[13.5px] left-[232.45px] opacity-50 top-[9px] w-[44.547px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">R² = 0.98</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute h-[13.5px] left-[237.41px] opacity-50 top-[246.5px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">n = 3343</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute h-[267px] left-px top-px w-[288px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 288 267">
        <g clipPath="url(#clip0_1_1337)" id="Icon" opacity="0.08">
          <path d={svgPaths.p25bb7a80} id="Vector" stroke="var(--stroke-0, #00A5A8)" strokeWidth="1.96082" />
          <path d={svgPaths.p3743b5e8} id="Vector_2" opacity="0.7" stroke="var(--stroke-0, #00A5A8)" strokeWidth="1.47061" />
          <path d={svgPaths.p168f8380} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #00A5A8)" strokeWidth="1.47061" />
        </g>
        <defs>
          <clipPath id="clip0_1_1337">
            <rect fill="white" height="267" width="288" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CardTitle4() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="CardTitle">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[#1e293b] text-[18px] top-[-1px] whitespace-nowrap">Outline</p>
    </div>
  );
}

function CardDescription4() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="CardDescription">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#475569] text-[16px] top-[-2px] w-[223px]">Borde turquesa con hover bg al 5%</p>
    </div>
  );
}

function CardHeader4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[127px] items-start left-0 pt-[20px] px-[24px] top-0 w-[288px]" data-name="CardHeader">
      <CardTitle4 />
      <CardDescription4 />
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-white border border-[#00a5a8] border-solid h-[50px] left-0 overflow-clip rounded-[12px] top-0 w-[164.625px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[81.5px] not-italic text-[#00a5a8] text-[16px] text-center top-[10px] whitespace-nowrap">Documentación</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-white border border-[#00a5a8] border-solid h-[50px] left-0 overflow-clip rounded-[12px] top-[66px] w-[145.203px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[72px] not-italic text-[#00a5a8] text-[16px] text-center top-[10px] whitespace-nowrap">Exportar PDF</p>
    </div>
  );
}

function App6() {
  return (
    <div className="absolute h-[116px] left-[24px] top-[127px] w-[240px]" data-name="App">
      <Button6 />
      <Button7 />
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute h-[267px] left-px top-px w-[288px]" data-name="Container">
      <CardHeader4 />
      <App6 />
    </div>
  );
}

function Card4() {
  return (
    <div className="col-4 justify-self-stretch relative rounded-[12px] row-1 self-stretch shrink-0" data-name="Card" style={{ backgroundImage: "linear-gradient(137.151deg, rgba(0, 165, 168, 0.12) 0%, rgba(0, 165, 168, 0.05) 100%)" }}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container55 />
        <Container56 />
        <Container57 />
        <Icon7 />
        <Container58 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,165,168,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container42() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[269px] relative shrink-0 w-full" data-name="Container">
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[369px] items-start relative shrink-0 w-full" data-name="Section">
      <Container41 />
      <Container42 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] left-0 not-italic text-[#1e293b] text-[30px] top-[-2px] whitespace-nowrap">Inputs con Focus Ring Turquesa</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#475569] text-[16px] top-[-2px] whitespace-nowrap">Fondo blanco con borde gris nítido. Focus cambia a turquesa con ring al 20% de opacidad, sin resplandores exagerados.</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[68px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Paragraph25 />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute h-[13.5px] left-[13px] opacity-50 top-[9px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">σ = 0.92</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute h-[13.5px] left-[546.45px] opacity-50 top-[9px] w-[44.547px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">R² = 0.87</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute h-[13.5px] left-[551.41px] opacity-50 top-[398.5px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">n = 9116</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute h-[419px] left-px top-px w-[602px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 602 419">
        <g clipPath="url(#clip0_1_1368)" id="Icon" opacity="0.08">
          <path d={svgPaths.p36b48800} id="Vector" stroke="var(--stroke-0, #00A5A8)" strokeWidth="3.55132" />
          <path d={svgPaths.p67ed300} id="Vector_2" opacity="0.7" stroke="var(--stroke-0, #00A5A8)" strokeWidth="2.66349" />
          <path d={svgPaths.p2c983600} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #00A5A8)" strokeWidth="2.66349" />
        </g>
        <defs>
          <clipPath id="clip0_1_1368">
            <rect fill="white" height="419" width="602" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CardTitle5() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="CardTitle">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[#1e293b] text-[18px] top-[-1px] whitespace-nowrap">Registro Académico</p>
    </div>
  );
}

function CardDescription5() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="CardDescription">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#475569] text-[16px] top-[-2px] whitespace-nowrap">Inputs con histogramas decorativos en el lateral derecho</p>
    </div>
  );
}

function CardHeader5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[101px] items-start left-0 pt-[20px] px-[24px] top-0 w-[602px]" data-name="CardHeader">
      <CardTitle5 />
      <CardDescription5 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[#1e293b] text-[14px]">Registro Universitario</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-gradient-to-r from-[rgba(0,165,168,0.08)] h-[50px] left-0 rounded-[12px] to-[rgba(0,165,168,0.04)] top-0 w-[554px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[16px] whitespace-nowrap">Ejemplo: 123-45678</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,165,168,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container67() {
  return <div className="bg-[#00a5a8] h-[20px] shrink-0 w-[4px]" data-name="Container" />;
}

function Container68() {
  return <div className="bg-[#00a5a8] h-[32.5px] shrink-0 w-[4px]" data-name="Container" />;
}

function Container69() {
  return <div className="bg-[#00a5a8] h-[42.5px] shrink-0 w-[4px]" data-name="Container" />;
}

function Container70() {
  return <div className="bg-[#00a5a8] h-[30px] shrink-0 w-[4px]" data-name="Container" />;
}

function Container71() {
  return <div className="bg-[#00a5a8] h-[22.5px] shrink-0 w-[4px]" data-name="Container" />;
}

function Container66() {
  return (
    <div className="absolute content-stretch flex gap-[2px] h-[50px] items-end left-[506px] opacity-15 overflow-clip pl-[8px] rounded-br-[12px] rounded-tr-[12px] top-0 w-[48px]" data-name="Container">
      <Container67 />
      <Container68 />
      <Container69 />
      <Container70 />
      <Container71 />
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Container">
      <TextInput />
      <Container66 />
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[78px] items-start relative shrink-0 w-full" data-name="Input">
      <Label />
      <Container65 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[#1e293b] text-[14px]">Correo Institucional</p>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="absolute bg-gradient-to-r from-[rgba(0,165,168,0.08)] h-[50px] left-0 rounded-[12px] to-[rgba(0,165,168,0.04)] top-0 w-[554px]" data-name="Email Input">
      <div className="content-stretch flex items-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[16px] whitespace-nowrap">estudiante@est.umsa.bo</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,165,168,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container74() {
  return <div className="bg-[#00a5a8] h-[20px] shrink-0 w-[4px]" data-name="Container" />;
}

function Container75() {
  return <div className="bg-[#00a5a8] h-[32.5px] shrink-0 w-[4px]" data-name="Container" />;
}

function Container76() {
  return <div className="bg-[#00a5a8] h-[42.5px] shrink-0 w-[4px]" data-name="Container" />;
}

function Container77() {
  return <div className="bg-[#00a5a8] h-[30px] shrink-0 w-[4px]" data-name="Container" />;
}

function Container78() {
  return <div className="bg-[#00a5a8] h-[22.5px] shrink-0 w-[4px]" data-name="Container" />;
}

function Container73() {
  return (
    <div className="absolute content-stretch flex gap-[2px] h-[50px] items-end left-[506px] opacity-15 overflow-clip pl-[8px] rounded-br-[12px] rounded-tr-[12px] top-0 w-[48px]" data-name="Container">
      <Container74 />
      <Container75 />
      <Container76 />
      <Container77 />
      <Container78 />
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Container">
      <EmailInput />
      <Container73 />
    </div>
  );
}

function Input1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[78px] items-start relative shrink-0 w-full" data-name="Input">
      <Label1 />
      <Container72 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[#1e293b] text-[14px]">Código de Materia</p>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="absolute bg-gradient-to-r from-[rgba(204,112,0,0.08)] h-[50px] left-0 rounded-[12px] to-[rgba(204,112,0,0.04)] top-0 w-[554px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[16px] whitespace-nowrap">EST-501</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cc7000] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container81() {
  return <div className="bg-[#00a5a8] h-[20px] shrink-0 w-[4px]" data-name="Container" />;
}

function Container82() {
  return <div className="bg-[#00a5a8] h-[32.5px] shrink-0 w-[4px]" data-name="Container" />;
}

function Container83() {
  return <div className="bg-[#00a5a8] h-[42.5px] shrink-0 w-[4px]" data-name="Container" />;
}

function Container84() {
  return <div className="bg-[#00a5a8] h-[30px] shrink-0 w-[4px]" data-name="Container" />;
}

function Container85() {
  return <div className="bg-[#00a5a8] h-[22.5px] shrink-0 w-[4px]" data-name="Container" />;
}

function Container80() {
  return (
    <div className="absolute content-stretch flex gap-[2px] h-[50px] items-end left-[506px] opacity-15 overflow-clip pl-[8px] rounded-br-[12px] rounded-tr-[12px] top-0 w-[48px]" data-name="Container">
      <Container81 />
      <Container82 />
      <Container83 />
      <Container84 />
      <Container85 />
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Container">
      <TextInput1 />
      <Container80 />
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#cc7000] text-[14px]">Formato de código inválido</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[106px] items-start relative shrink-0 w-full" data-name="Input">
      <Label2 />
      <Container79 />
      <Paragraph26 />
    </div>
  );
}

function App7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[294px] items-start left-[24px] top-[101px] w-[554px]" data-name="App">
      <Input />
      <Input1 />
      <Input2 />
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute h-[419px] left-px top-px w-[602px]" data-name="Container">
      <CardHeader5 />
      <App7 />
    </div>
  );
}

function Card5() {
  return (
    <div className="col-1 justify-self-stretch relative rounded-[12px] row-1 self-stretch shrink-0" data-name="Card" style={{ backgroundImage: "linear-gradient(145.123deg, rgba(0, 165, 168, 0.12) 0%, rgba(0, 165, 168, 0.05) 100%)" }}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container61 />
        <Container62 />
        <Container63 />
        <Icon8 />
        <Container64 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,165,168,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute h-[13.5px] left-[13px] opacity-50 top-[9px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">σ = 1.79</p>
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute h-[13.5px] left-[546.45px] opacity-50 top-[9px] w-[44.547px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">R² = 0.96</p>
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute h-[13.5px] left-[551.41px] opacity-50 top-[398.5px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">n = 2706</p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute h-[419px] left-px top-px w-[602px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 602 419">
        <g clipPath="url(#clip0_1_1368)" id="Icon" opacity="0.08">
          <path d={svgPaths.p36b48800} id="Vector" stroke="var(--stroke-0, #00A5A8)" strokeWidth="3.55132" />
          <path d={svgPaths.p67ed300} id="Vector_2" opacity="0.7" stroke="var(--stroke-0, #00A5A8)" strokeWidth="2.66349" />
          <path d={svgPaths.p2c983600} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #00A5A8)" strokeWidth="2.66349" />
        </g>
        <defs>
          <clipPath id="clip0_1_1368">
            <rect fill="white" height="419" width="602" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CardTitle6() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="CardTitle">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[#1e293b] text-[18px] top-[-1px] whitespace-nowrap">Sistema de Búsqueda</p>
    </div>
  );
}

function CardDescription6() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="CardDescription">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#475569] text-[16px] top-[-2px] whitespace-nowrap">Campo de búsqueda con badges tipo píldora al 10% de opacidad</p>
    </div>
  );
}

function CardHeader6() {
  return (
    <div className="h-[101px] relative shrink-0 w-full" data-name="CardHeader">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[20px] px-[24px] relative size-full">
        <CardTitle6 />
        <CardDescription6 />
      </div>
    </div>
  );
}

function TextInput2() {
  return (
    <div className="absolute bg-gradient-to-r from-[rgba(0,165,168,0.08)] h-[50px] left-0 rounded-[12px] to-[rgba(0,165,168,0.04)] top-0 w-[554px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip pl-[44px] pr-[16px] py-[12px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[16px] whitespace-nowrap">Buscar datasets, modelos, algoritmos...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,165,168,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[16px] size-[20px] top-[15px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pcddfd00} id="Vector" stroke="var(--stroke-0, #00A5A8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M17.5 17.5L13.9167 13.9167" id="Vector_2" stroke="var(--stroke-0, #00A5A8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function SearchInput() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="SearchInput">
      <TextInput2 />
      <Icon10 />
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[#1e293b] text-[14px]">Categorías Académicas:</p>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[rgba(0,165,168,0.2)] content-stretch flex h-[32px] items-start left-0 px-[14px] py-[8px] rounded-[33554400px] top-0 w-[138.953px]" data-name="Badge">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,165,168,0.4)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#00a5a8] text-[12px] tracking-[0.3px] uppercase whitespace-nowrap">Regresión Lineal</p>
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-[rgba(26,107,26,0.2)] content-stretch flex h-[32px] items-start left-[146.95px] px-[14px] py-[8px] rounded-[33554400px] top-0 w-[70.938px]" data-name="Badge">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(26,107,26,0.4)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#1a6b1a] text-[12px] tracking-[0.3px] uppercase whitespace-nowrap">ANOVA</p>
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute bg-[rgba(107,70,193,0.2)] content-stretch flex h-[32px] items-start left-[225.89px] px-[14px] py-[8px] rounded-[33554400px] top-0 w-[148.266px]" data-name="Badge">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(107,70,193,0.4)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#6b46c1] text-[12px] tracking-[0.3px] uppercase whitespace-nowrap">Machine Learning</p>
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute bg-[rgba(8,145,178,0.2)] content-stretch flex h-[32px] items-start left-[382.16px] px-[14px] py-[8px] rounded-[33554400px] top-0 w-[92.047px]" data-name="Badge">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(8,145,178,0.4)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#0891b2] text-[12px] tracking-[0.3px] uppercase whitespace-nowrap">Muestreo</p>
    </div>
  );
}

function Badge4() {
  return (
    <div className="absolute bg-[rgba(204,112,0,0.2)] content-stretch flex h-[32px] items-start left-0 px-[14px] py-[8px] rounded-[33554400px] top-[40px] w-[147.016px]" data-name="Badge">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(204,112,0,0.4)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#cc7000] text-[12px] tracking-[0.3px] uppercase whitespace-nowrap">Series Temporales</p>
    </div>
  );
}

function Badge5() {
  return (
    <div className="absolute bg-[rgba(251,113,133,0.2)] content-stretch flex h-[32px] items-start left-[155.02px] px-[14px] py-[8px] rounded-[33554400px] top-[40px] w-[136.734px]" data-name="Badge">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(251,113,133,0.4)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#fb7185] text-[12px] tracking-[0.3px] uppercase whitespace-nowrap">Valores Atípicos</p>
    </div>
  );
}

function Container90() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Container">
      <Badge />
      <Badge1 />
      <Badge2 />
      <Badge3 />
      <Badge4 />
      <Badge5 />
    </div>
  );
}

function App8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[100px] items-start relative shrink-0 w-full" data-name="App">
      <Paragraph27 />
      <Container90 />
    </div>
  );
}

function CardContent1() {
  return (
    <div className="h-[190px] relative shrink-0 w-full" data-name="CardContent">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[24px] relative size-full">
        <SearchInput />
        <App8 />
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute content-stretch flex flex-col h-[291px] items-start left-px top-px w-[602px]" data-name="Container">
      <CardHeader6 />
      <CardContent1 />
    </div>
  );
}

function Card6() {
  return (
    <div className="col-2 justify-self-stretch relative rounded-[12px] row-1 self-stretch shrink-0" data-name="Card" style={{ backgroundImage: "linear-gradient(145.123deg, rgba(0, 165, 168, 0.12) 0%, rgba(0, 165, 168, 0.05) 100%)" }}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container86 />
        <Container87 />
        <Container88 />
        <Icon9 />
        <Container89 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,165,168,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container60() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[421px] relative shrink-0 w-full" data-name="Container">
      <Card5 />
      <Card6 />
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[521px] items-start relative shrink-0 w-full" data-name="Section">
      <Container59 />
      <Container60 />
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute h-[13.5px] left-[13px] opacity-50 top-[9px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">σ = 0.84</p>
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute h-[13.5px] left-[1174.45px] opacity-50 top-[9px] w-[44.547px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">R² = 0.89</p>
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute h-[13.5px] left-[1179.41px] opacity-50 top-[288.5px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">n = 6617</p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute h-[309px] left-px top-px w-[1230px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1230 309">
        <g clipPath="url(#clip0_1_1314)" id="Icon" opacity="0.08">
          <path d={svgPaths.p31bc9b40} id="Vector" stroke="var(--stroke-0, #00A5A8)" strokeWidth="4.3593" />
          <path d={svgPaths.p37708b70} id="Vector_2" opacity="0.7" stroke="var(--stroke-0, #00A5A8)" strokeWidth="3.26948" />
          <path d={svgPaths.p1eabae00} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #00A5A8)" strokeWidth="3.26948" />
        </g>
        <defs>
          <clipPath id="clip0_1_1314">
            <rect fill="white" height="309" width="1230" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CardTitle7() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="CardTitle">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[#1e293b] text-[18px] top-[-1px] whitespace-nowrap">Indicadores Circulares: Sólidos y Nítidos</p>
    </div>
  );
}

function CardDescription7() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="CardDescription">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#475569] text-[16px] top-[-2px] whitespace-nowrap">Anillo de fondo en gris suave (#E2E8F0) con progreso en colores mate de la paleta institucional</p>
    </div>
  );
}

function CardHeader7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[101px] items-start left-0 pt-[20px] px-[24px] top-0 w-[1230px]" data-name="CardHeader">
      <CardTitle7 />
      <CardDescription7 />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[132px] w-[124.203px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#00a5a8] text-[14px] whitespace-nowrap">Tasa de Aprobación</p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative size-[120px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
        <g id="Icon">
          <path d={svgPaths.p1b4b9e00} id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeWidth="10" />
          <path d={svgPaths.p1b4b9e00} id="Vector_2" stroke="var(--stroke-0, #00A5A8)" strokeDasharray="339.29 339.29" strokeLinecap="round" strokeWidth="10" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[48px] relative shrink-0 w-[64.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[48px] left-0 not-italic text-[#00a5a8] text-[32px] top-[-3px] whitespace-nowrap">92%</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-0 size-[120px] top-0" data-name="Container">
      <Text2 />
    </div>
  );
}

function Container95() {
  return (
    <div className="absolute left-[2.09px] size-[120px] top-0" data-name="Container">
      <div className="absolute flex items-center justify-center left-0 size-[120px] top-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Icon12 />
        </div>
      </div>
      <Container96 />
    </div>
  );
}

function CircularProgress() {
  return (
    <div className="absolute h-[152px] left-[212.14px] top-[16px] w-[124.203px]" data-name="CircularProgress">
      <Text1 />
      <Container95 />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[132px] w-[145.469px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#1a6b1a] text-[14px] whitespace-nowrap">Satisfacción Estudiantil</p>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative size-[120px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
        <g id="Icon">
          <path d={svgPaths.p1b4b9e00} id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeWidth="10" />
          <path d={svgPaths.p1b4b9e00} id="Vector_2" stroke="var(--stroke-0, #1A6B1A)" strokeDasharray="339.29 339.29" strokeLinecap="round" strokeWidth="10" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[48px] relative shrink-0 w-[64.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[48px] left-0 not-italic text-[#1a6b1a] text-[32px] top-[-3px] whitespace-nowrap">88%</p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-0 size-[120px] top-0" data-name="Container">
      <Text4 />
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute left-[12.73px] size-[120px] top-0" data-name="Container">
      <div className="absolute flex items-center justify-center left-0 size-[120px] top-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Icon13 />
        </div>
      </div>
      <Container98 />
    </div>
  );
}

function CircularProgress1() {
  return (
    <div className="absolute h-[152px] left-[368.34px] top-[16px] w-[145.469px]" data-name="CircularProgress">
      <Text3 />
      <Container97 />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[14.95px] top-[132px] w-[90.078px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#cc7000] text-[14px] whitespace-nowrap">Empleabilidad</p>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative size-[120px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
        <g id="Icon">
          <path d={svgPaths.p1b4b9e00} id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeWidth="10" />
          <path d={svgPaths.p1b4b9e00} id="Vector_2" stroke="var(--stroke-0, #CC7000)" strokeDasharray="339.29 339.29" strokeLinecap="round" strokeWidth="10" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[48px] relative shrink-0 w-[64.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[48px] left-0 not-italic text-[#cc7000] text-[32px] top-[-3px] whitespace-nowrap">85%</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-0 size-[120px] top-0" data-name="Container">
      <Text6 />
    </div>
  );
}

function Container99() {
  return (
    <div className="absolute left-0 size-[120px] top-0" data-name="Container">
      <div className="absolute flex items-center justify-center left-0 size-[120px] top-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Icon14 />
        </div>
      </div>
      <Container100 />
    </div>
  );
}

function CircularProgress2() {
  return (
    <div className="absolute h-[152px] left-[545.81px] top-[16px] w-[120px]" data-name="CircularProgress">
      <Text5 />
      <Container99 />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[20.33px] top-[132px] w-[79.344px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#6b46c1] text-[14px] whitespace-nowrap">Proyectos IA</p>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative size-[120px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
        <g id="Icon">
          <path d={svgPaths.p1b4b9e00} id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeWidth="10" />
          <path d={svgPaths.p1b4b9e00} id="Vector_2" stroke="var(--stroke-0, #6B46C1)" strokeDasharray="339.29 339.29" strokeLinecap="round" strokeWidth="10" />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[48px] relative shrink-0 w-[64.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[48px] left-0 not-italic text-[#6b46c1] text-[32px] top-[-3px] whitespace-nowrap">79%</p>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-0 size-[120px] top-0" data-name="Container">
      <Text8 />
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute left-0 size-[120px] top-0" data-name="Container">
      <div className="absolute flex items-center justify-center left-0 size-[120px] top-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Icon15 />
        </div>
      </div>
      <Container102 />
    </div>
  );
}

function CircularProgress3() {
  return (
    <div className="absolute h-[152px] left-[697.81px] top-[16px] w-[120px]" data-name="CircularProgress">
      <Text7 />
      <Container101 />
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[132px] w-[120.047px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0891b2] text-[14px] whitespace-nowrap">Precisión Científica</p>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative size-[120px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
        <g id="Icon">
          <path d={svgPaths.p1b4b9e00} id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeWidth="10" />
          <path d={svgPaths.p1b4b9e00} id="Vector_2" stroke="var(--stroke-0, #0891B2)" strokeDasharray="339.29 339.29" strokeLinecap="round" strokeWidth="10" />
        </g>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[48px] relative shrink-0 w-[64.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[48px] left-0 not-italic text-[#0891b2] text-[32px] top-[-3px] whitespace-nowrap">94%</p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-0 size-[120px] top-0" data-name="Container">
      <Text10 />
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute left-[0.02px] size-[120px] top-0" data-name="Container">
      <div className="absolute flex items-center justify-center left-0 size-[120px] top-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Icon16 />
        </div>
      </div>
      <Container104 />
    </div>
  );
}

function CircularProgress4() {
  return (
    <div className="absolute h-[152px] left-[849.81px] top-[16px] w-[120.047px]" data-name="CircularProgress">
      <Text9 />
      <Container103 />
    </div>
  );
}

function App9() {
  return (
    <div className="absolute h-[184px] left-[24px] top-[101px] w-[1182px]" data-name="App">
      <CircularProgress />
      <CircularProgress1 />
      <CircularProgress2 />
      <CircularProgress3 />
      <CircularProgress4 />
    </div>
  );
}

function Container94() {
  return (
    <div className="absolute h-[309px] left-px top-px w-[1230px]" data-name="Container">
      <CardHeader7 />
      <App9 />
    </div>
  );
}

function Card7() {
  return (
    <div className="h-[311px] relative rounded-[12px] shrink-0 w-full" data-name="Card" style={{ backgroundImage: "linear-gradient(165.833deg, rgba(0, 165, 168, 0.12) 0%, rgba(0, 165, 168, 0.05) 100%)" }}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container91 />
        <Container92 />
        <Container93 />
        <Icon11 />
        <Container94 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,165,168,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container105() {
  return (
    <div className="absolute h-[13.5px] left-[13px] opacity-50 top-[9px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">σ = 1.59</p>
    </div>
  );
}

function Container106() {
  return (
    <div className="absolute h-[13.5px] left-[1174.45px] opacity-50 top-[9px] w-[44.547px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">R² = 0.87</p>
    </div>
  );
}

function Container107() {
  return (
    <div className="absolute h-[13.5px] left-[1179.41px] opacity-50 top-[256.5px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">n = 8258</p>
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute h-[277px] left-px top-px w-[1230px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1230 277">
        <g clipPath="url(#clip0_1_1410)" id="Icon" opacity="0.08">
          <path d={svgPaths.pd969280} id="Vector" stroke="var(--stroke-0, #00A5A8)" strokeWidth="4.12741" />
          <path d={svgPaths.pfe6cf80} id="Vector_2" opacity="0.7" stroke="var(--stroke-0, #00A5A8)" strokeWidth="3.09556" />
          <path d={svgPaths.p393ab500} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #00A5A8)" strokeWidth="3.09556" />
        </g>
        <defs>
          <clipPath id="clip0_1_1410">
            <rect fill="white" height="277" width="1230" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CardTitle8() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="CardTitle">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[#1e293b] text-[18px] top-[-1px] whitespace-nowrap">Badges Tipo Píldora con Opacidad 10%</p>
    </div>
  );
}

function CardDescription8() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="CardDescription">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#475569] text-[16px] top-[-2px] whitespace-nowrap">Fondos al 10% de opacidad con texto en color sólido para un look limpio y profesional</p>
    </div>
  );
}

function CardHeader8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[101px] items-start left-0 pt-[20px] px-[24px] top-0 w-[1230px]" data-name="CardHeader">
      <CardTitle8 />
      <CardDescription8 />
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[#1e293b] text-[14px]">Estados del Sistema</p>
    </div>
  );
}

function Text11() {
  return <div className="absolute bg-[#1a6b1a] left-[16px] rounded-[33554400px] size-[8px] top-[10px]" data-name="Text" />;
}

function StatusBadge1() {
  return (
    <div className="absolute bg-[rgba(26,107,26,0.25)] border-2 border-[rgba(26,107,26,0.5)] border-solid h-[32px] left-0 rounded-[33554400px] top-0 w-[151.688px]" data-name="StatusBadge">
      <Text11 />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[32px] not-italic text-[#1a6b1a] text-[12px] top-[6px] whitespace-nowrap">Sistema Operativo</p>
    </div>
  );
}

function Text12() {
  return <div className="absolute bg-[#cc7000] left-[16px] rounded-[33554400px] size-[8px] top-[10px]" data-name="Text" />;
}

function StatusBadge2() {
  return (
    <div className="absolute bg-[rgba(204,112,0,0.25)] border-2 border-[rgba(204,112,0,0.5)] border-solid h-[32px] left-[159.69px] rounded-[33554400px] top-0 w-[176.828px]" data-name="StatusBadge">
      <Text12 />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[32px] not-italic text-[#cc7000] text-[12px] top-[6px] whitespace-nowrap">En Proceso de Revisión</p>
    </div>
  );
}

function Text13() {
  return <div className="absolute bg-[#64748b] left-[16px] rounded-[33554400px] size-[8px] top-[10px]" data-name="Text" />;
}

function StatusBadge3() {
  return (
    <div className="absolute bg-[rgba(100,116,139,0.25)] border-2 border-[rgba(100,116,139,0.5)] border-solid h-[32px] left-[344.52px] rounded-[33554400px] top-0 w-[204.516px]" data-name="StatusBadge">
      <Text13 />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[32px] not-italic text-[#475569] text-[12px] top-[6px] whitespace-nowrap">Cerrado por Mantenimiento</p>
    </div>
  );
}

function Text14() {
  return <div className="absolute bg-[#fb7185] left-[16px] rounded-[33554400px] size-[8px] top-[10px]" data-name="Text" />;
}

function StatusBadge4() {
  return (
    <div className="absolute bg-[rgba(251,113,133,0.25)] border-2 border-[rgba(251,113,133,0.5)] border-solid h-[32px] left-[557.03px] rounded-[33554400px] top-0 w-[174.344px]" data-name="StatusBadge">
      <Text14 />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[32px] not-italic text-[#fb7185] text-[12px] top-[6px] whitespace-nowrap">Alerta Crítica de Datos</p>
    </div>
  );
}

function Container110() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <StatusBadge1 />
      <StatusBadge2 />
      <StatusBadge3 />
      <StatusBadge4 />
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[64px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph28 />
      <Container110 />
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[#1e293b] text-[14px]">Áreas de Especialización</p>
    </div>
  );
}

function Badge6() {
  return (
    <div className="absolute bg-[rgba(0,165,168,0.2)] content-stretch flex h-[32px] items-start left-0 px-[14px] py-[8px] rounded-[33554400px] top-0 w-[181.719px]" data-name="Badge">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,165,168,0.4)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#00a5a8] text-[12px] tracking-[0.3px] uppercase whitespace-nowrap">Estadística Inferencial</p>
    </div>
  );
}

function Badge7() {
  return (
    <div className="absolute bg-[rgba(26,107,26,0.2)] content-stretch flex h-[32px] items-start left-[189.72px] px-[14px] py-[8px] rounded-[33554400px] top-0 w-[164.281px]" data-name="Badge">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(26,107,26,0.4)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#1a6b1a] text-[12px] tracking-[0.3px] uppercase whitespace-nowrap">Diseño Experimental</p>
    </div>
  );
}

function Badge8() {
  return (
    <div className="absolute bg-[rgba(204,112,0,0.2)] content-stretch flex h-[32px] items-start left-[362px] px-[14px] py-[8px] rounded-[33554400px] top-0 w-[115.172px]" data-name="Badge">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(204,112,0,0.4)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#cc7000] text-[12px] tracking-[0.3px] uppercase whitespace-nowrap">Econometría</p>
    </div>
  );
}

function Badge9() {
  return (
    <div className="absolute bg-[rgba(107,70,193,0.2)] content-stretch flex h-[32px] items-start left-[485.17px] px-[14px] py-[8px] rounded-[33554400px] top-0 w-[147.281px]" data-name="Badge">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(107,70,193,0.4)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#6b46c1] text-[12px] tracking-[0.3px] uppercase whitespace-nowrap">Redes Neuronales</p>
    </div>
  );
}

function Badge10() {
  return (
    <div className="absolute bg-[rgba(8,145,178,0.2)] content-stretch flex h-[32px] items-start left-[640.45px] px-[14px] py-[8px] rounded-[33554400px] top-0 w-[136.953px]" data-name="Badge">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(8,145,178,0.4)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#0891b2] text-[12px] tracking-[0.3px] uppercase whitespace-nowrap">Ciencia de Datos</p>
    </div>
  );
}

function Badge11() {
  return (
    <div className="absolute bg-[rgba(251,113,133,0.2)] content-stretch flex h-[32px] items-start left-[785.41px] px-[14px] py-[8px] rounded-[33554400px] top-0 w-[189.5px]" data-name="Badge">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(251,113,133,0.4)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#fb7185] text-[12px] tracking-[0.3px] uppercase whitespace-nowrap">Detección de Anomalías</p>
    </div>
  );
}

function Badge12() {
  return (
    <div className="absolute bg-[rgba(100,116,139,0.2)] content-stretch flex h-[32px] items-start left-[982.91px] px-[14px] py-[8px] rounded-[33554400px] top-0 w-[163.563px]" data-name="Badge">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(100,116,139,0.4)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#475569] text-[12px] tracking-[0.3px] uppercase whitespace-nowrap">Teoría del Muestreo</p>
    </div>
  );
}

function Container112() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <Badge6 />
      <Badge7 />
      <Badge8 />
      <Badge9 />
      <Badge10 />
      <Badge11 />
      <Badge12 />
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[64px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph29 />
      <Container112 />
    </div>
  );
}

function App10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[152px] items-start left-[24px] top-[101px] w-[1182px]" data-name="App">
      <Container109 />
      <Container111 />
    </div>
  );
}

function Container108() {
  return (
    <div className="absolute h-[277px] left-px top-px w-[1230px]" data-name="Container">
      <CardHeader8 />
      <App10 />
    </div>
  );
}

function Card8() {
  return (
    <div className="h-[279px] relative rounded-[12px] shrink-0 w-full" data-name="Card" style={{ backgroundImage: "linear-gradient(167.24deg, rgba(0, 165, 168, 0.12) 0%, rgba(0, 165, 168, 0.05) 100%)" }}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container105 />
        <Container106 />
        <Container107 />
        <Icon17 />
        <Container108 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,165,168,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] left-0 not-italic text-[#1e293b] text-[30px] top-[-2px] whitespace-nowrap">Tarjetas con Grabados Estadísticos (Papel de Seguridad)</p>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#475569] text-[16px] top-[-2px] whitespace-nowrap">Curvas de Gauss, líneas de regresión y scatter plots en turquesa mate al 8-10% de opacidad</p>
    </div>
  );
}

function Container113() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[68px] items-start left-0 top-0 w-[1232px]" data-name="Container">
      <Heading4 />
      <Paragraph30 />
    </div>
  );
}

function Text15() {
  return <div className="absolute bg-[#00a5a8] left-0 rounded-[33554400px] size-[8px] top-[10px]" data-name="Text" />;
}

function Heading5() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <Text15 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-[16px] not-italic text-[#1e293b] text-[18px] top-[-1px] whitespace-nowrap">Default: Curvas de Distribución Normal</p>
    </div>
  );
}

function Container116() {
  return (
    <div className="absolute h-[13.5px] left-[12px] opacity-50 top-[8px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">σ = 1.29</p>
    </div>
  );
}

function Container117() {
  return (
    <div className="absolute h-[13.5px] left-[336.11px] opacity-50 top-[8px] w-[44.547px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">R² = 0.92</p>
    </div>
  );
}

function Container118() {
  return (
    <div className="absolute h-[13.5px] left-[341.06px] opacity-50 top-[230.5px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">n = 5761</p>
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute h-[252px] left-0 top-0 w-[392.656px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 392.656 252">
        <g clipPath="url(#clip0_1_1325)" id="Icon" opacity="0.08">
          <path d={svgPaths.p37841400} id="Vector" stroke="var(--stroke-0, #00A5A8)" strokeWidth="2.22429" />
          <path d={svgPaths.p23113700} id="Vector_2" opacity="0.7" stroke="var(--stroke-0, #00A5A8)" strokeWidth="1.66822" />
          <path d={svgPaths.p2bd9d200} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #00A5A8)" strokeWidth="1.66822" />
        </g>
        <defs>
          <clipPath id="clip0_1_1325">
            <rect fill="white" height="252" width="392.656" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pb47f400} id="Vector" stroke="var(--stroke-0, #00A5A8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p17a13100} id="Vector_2" stroke="var(--stroke-0, #00A5A8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 13H10" id="Vector_3" stroke="var(--stroke-0, #00A5A8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M14 13H16" id="Vector_4" stroke="var(--stroke-0, #00A5A8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 17H10" id="Vector_5" stroke="var(--stroke-0, #00A5A8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M14 17H16" id="Vector_6" stroke="var(--stroke-0, #00A5A8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container120() {
  return (
    <div className="bg-[rgba(0,165,168,0.1)] relative rounded-[14px] shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,165,168,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon19 />
      </div>
    </div>
  );
}

function CardTitle9() {
  return (
    <div className="h-[27px] relative shrink-0 w-[133.578px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[#1e293b] text-[18px] top-[-1px] whitespace-nowrap">Plan de Estudios</p>
      </div>
    </div>
  );
}

function App11() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0 w-full" data-name="App">
      <Container120 />
      <CardTitle9 />
    </div>
  );
}

function CardDescription9() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="CardDescription">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#475569] text-[16px] top-[-2px] w-[303px]">Malla curricular con distribución normal de fondo representando conocimiento estructurado.</p>
    </div>
  );
}

function CardHeader9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[178px] items-start left-0 pt-[20px] px-[24px] top-0 w-[392.656px]" data-name="CardHeader">
      <App11 />
      <CardDescription9 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[342.656px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 342.656 48">
        <g clipPath="url(#clip0_1_1373)" id="Icon" opacity="0.1">
          <path d={svgPaths.pc3d4400} id="Vector" stroke="var(--stroke-0, white)" />
        </g>
        <defs>
          <clipPath id="clip0_1_1373">
            <rect fill="white" height="48" width="342.656" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-gradient-to-b border border-[rgba(0,0,0,0)] border-solid from-[#00a5a8] h-[50px] left-[24px] overflow-clip rounded-[12px] to-[#008b8d] top-[178px] w-[344.656px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[171.61px] not-italic text-[16px] text-center text-white top-[10px] whitespace-nowrap">Ver Malla Completa</p>
      <Icon20 />
    </div>
  );
}

function Container119() {
  return (
    <div className="absolute h-[252px] left-0 top-0 w-[392.656px]" data-name="Container">
      <CardHeader9 />
      <Button8 />
    </div>
  );
}

function Card9() {
  return (
    <div className="absolute border border-[rgba(0,165,168,0.2)] border-solid h-[254px] left-0 overflow-clip rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[394.656px]" data-name="Card" style={{ backgroundImage: "linear-gradient(147.235deg, rgba(0, 165, 168, 0.12) 0%, rgba(0, 165, 168, 0.05) 100%)" }}>
      <Container116 />
      <Container117 />
      <Container118 />
      <Icon18 />
      <Container119 />
    </div>
  );
}

function Container121() {
  return (
    <div className="absolute h-[13.5px] left-[12px] opacity-50 top-[8px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">σ = 1.32</p>
    </div>
  );
}

function Container122() {
  return (
    <div className="absolute h-[13.5px] left-[336.13px] opacity-50 top-[8px] w-[44.547px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">R² = 0.89</p>
    </div>
  );
}

function Container123() {
  return (
    <div className="absolute h-[13.5px] left-[341.08px] opacity-50 top-[230.5px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">n = 1127</p>
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute h-[252px] left-0 top-0 w-[392.672px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 392.672 252">
        <g clipPath="url(#clip0_1_1405)" id="Icon" opacity="0.08">
          <path d={svgPaths.p6ac7d80} id="Vector" stroke="var(--stroke-0, #00A5A8)" strokeWidth="2.22433" />
          <path d={svgPaths.p12197800} id="Vector_2" opacity="0.7" stroke="var(--stroke-0, #00A5A8)" strokeWidth="1.66825" />
          <path d={svgPaths.pbd3f330} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #00A5A8)" strokeWidth="1.66825" />
        </g>
        <defs>
          <clipPath id="clip0_1_1405">
            <rect fill="white" height="252" width="392.672" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p199fee00} id="Vector" stroke="var(--stroke-0, #6B46C1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p18d2fde0} id="Vector_2" stroke="var(--stroke-0, #6B46C1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p30453a80} id="Vector_3" stroke="var(--stroke-0, #6B46C1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p10ece300} id="Vector_4" stroke="var(--stroke-0, #6B46C1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p259d3500} id="Vector_5" stroke="var(--stroke-0, #6B46C1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 13H16" id="Vector_6" stroke="var(--stroke-0, #6B46C1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1aa35400} id="Vector_7" stroke="var(--stroke-0, #6B46C1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 8H20" id="Vector_8" stroke="var(--stroke-0, #6B46C1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3eeb5a80} id="Vector_9" stroke="var(--stroke-0, #6B46C1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p153c4d80} id="Vector_10" stroke="var(--stroke-0, #6B46C1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p18fdbf00} id="Vector_11" stroke="var(--stroke-0, #6B46C1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p9284100} id="Vector_12" stroke="var(--stroke-0, #6B46C1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p24941100} id="Vector_13" stroke="var(--stroke-0, #6B46C1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container125() {
  return (
    <div className="bg-[rgba(107,70,193,0.1)] relative rounded-[14px] shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(107,70,193,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon22 />
      </div>
    </div>
  );
}

function CardTitle10() {
  return (
    <div className="h-[27px] relative shrink-0 w-[168.188px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[#1e293b] text-[18px] top-[-1px] whitespace-nowrap">Inteligencia Artificial</p>
      </div>
    </div>
  );
}

function App12() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0 w-full" data-name="App">
      <Container125 />
      <CardTitle10 />
    </div>
  );
}

function CardDescription10() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="CardDescription">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#475569] text-[16px] top-[-2px] w-[316px]">Algoritmos avanzados con curvas gaussianas simbolizando funciones de activación.</p>
    </div>
  );
}

function CardHeader10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[152px] items-start left-0 pt-[20px] px-[24px] top-0 w-[392.672px]" data-name="CardHeader">
      <App12 />
      <CardDescription10 />
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-gradient-to-b border border-[rgba(0,0,0,0)] border-solid from-[#00a5a8] h-[50px] left-[24px] overflow-clip rounded-[12px] to-[#008b8d] top-[152px] w-[344.672px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[172.23px] not-italic text-[16px] text-center text-white top-[10px] whitespace-nowrap">Explorar Modelos IA</p>
    </div>
  );
}

function Container124() {
  return (
    <div className="absolute h-[226px] left-0 top-0 w-[392.672px]" data-name="Container">
      <CardHeader10 />
      <Button9 />
    </div>
  );
}

function Card10() {
  return (
    <div className="absolute border border-[rgba(0,165,168,0.2)] border-solid h-[254px] left-[418.66px] overflow-clip rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[394.672px]" data-name="Card" style={{ backgroundImage: "linear-gradient(147.236deg, rgba(107, 70, 193, 0.12) 0%, rgba(107, 70, 193, 0.05) 100%)" }}>
      <Container121 />
      <Container122 />
      <Container123 />
      <Icon21 />
      <Container124 />
    </div>
  );
}

function Container126() {
  return (
    <div className="absolute h-[13.5px] left-[12px] opacity-50 top-[8px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">σ = 0.72</p>
    </div>
  );
}

function Container127() {
  return (
    <div className="absolute h-[13.5px] left-[336.11px] opacity-50 top-[8px] w-[44.547px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">R² = 0.97</p>
    </div>
  );
}

function Container128() {
  return (
    <div className="absolute h-[13.5px] left-[341.06px] opacity-50 top-[230.5px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">n = 9223</p>
    </div>
  );
}

function Icon23() {
  return (
    <div className="absolute h-[252px] left-0 top-0 w-[392.656px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 392.656 252">
        <g clipPath="url(#clip0_1_1325)" id="Icon" opacity="0.08">
          <path d={svgPaths.p37841400} id="Vector" stroke="var(--stroke-0, #00A5A8)" strokeWidth="2.22429" />
          <path d={svgPaths.p23113700} id="Vector_2" opacity="0.7" stroke="var(--stroke-0, #00A5A8)" strokeWidth="1.66822" />
          <path d={svgPaths.p2bd9d200} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #00A5A8)" strokeWidth="1.66822" />
        </g>
        <defs>
          <clipPath id="clip0_1_1325">
            <rect fill="white" height="252" width="392.656" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p28b1aae0} id="Vector" stroke="var(--stroke-0, #0891B2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container130() {
  return (
    <div className="bg-[rgba(8,145,178,0.1)] relative rounded-[14px] shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(8,145,178,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon24 />
      </div>
    </div>
  );
}

function CardTitle11() {
  return (
    <div className="h-[27px] relative shrink-0 w-[165.391px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[#1e293b] text-[18px] top-[-1px] whitespace-nowrap">Análisis de Precisión</p>
      </div>
    </div>
  );
}

function App13() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0 w-full" data-name="App">
      <Container130 />
      <CardTitle11 />
    </div>
  );
}

function CardDescription11() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="CardDescription">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#475569] text-[16px] top-[-2px] w-[307px]">Mediciones de alta precisión con validación estadística y control de calidad riguroso.</p>
    </div>
  );
}

function CardHeader11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[152px] items-start left-0 pt-[20px] px-[24px] top-0 w-[392.656px]" data-name="CardHeader">
      <App13 />
      <CardDescription11 />
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[50px] left-[24px] overflow-clip rounded-[12px] top-[152px] w-[344.656px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[171.97px] not-italic text-[#1e293b] text-[16px] text-center top-[10px] whitespace-nowrap">Ver Protocolos</p>
    </div>
  );
}

function Container129() {
  return (
    <div className="absolute h-[226px] left-0 top-0 w-[392.656px]" data-name="Container">
      <CardHeader11 />
      <Button10 />
    </div>
  );
}

function Card11() {
  return (
    <div className="absolute border border-[rgba(0,165,168,0.2)] border-solid h-[254px] left-[837.33px] overflow-clip rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[394.656px]" data-name="Card" style={{ backgroundImage: "linear-gradient(147.235deg, rgba(8, 145, 178, 0.12) 0%, rgba(8, 145, 178, 0.05) 100%)" }}>
      <Container126 />
      <Container127 />
      <Container128 />
      <Icon23 />
      <Container129 />
    </div>
  );
}

function Container115() {
  return (
    <div className="h-[254px] relative shrink-0 w-full" data-name="Container">
      <Card9 />
      <Card10 />
      <Card11 />
    </div>
  );
}

function Container114() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[298px] items-start left-0 top-[100px] w-[1232px]" data-name="Container">
      <Heading5 />
      <Container115 />
    </div>
  );
}

function Text16() {
  return <div className="absolute bg-[#1a6b1a] left-0 rounded-[33554400px] size-[8px] top-[10px]" data-name="Text" />;
}

function Heading6() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <Text16 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-[16px] not-italic text-[#1e293b] text-[18px] top-[-1px] whitespace-nowrap">Regression: Líneas de Plano Técnico</p>
    </div>
  );
}

function Container133() {
  return (
    <div className="absolute h-[13.5px] left-[12px] opacity-50 top-[8px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">σ = 0.74</p>
    </div>
  );
}

function Container134() {
  return (
    <div className="absolute h-[13.5px] left-[336.11px] opacity-50 top-[8px] w-[44.547px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">R² = 0.97</p>
    </div>
  );
}

function Container135() {
  return (
    <div className="absolute h-[13.5px] left-[341.06px] opacity-50 top-[204.5px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">n = 2951</p>
    </div>
  );
}

function Icon25() {
  return (
    <div className="absolute h-[226px] left-0 top-0 w-[392.656px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 392.656 226">
        <g clipPath="url(#clip0_1_1286)" id="Icon" opacity="0.1">
          <path d="M0 226L392.656 0" id="Vector" stroke="var(--stroke-0, #00A5A8)" strokeWidth="5.95786" />
          <path d="M0 192.1L392.656 0" id="Vector_2" opacity="0.6" stroke="var(--stroke-0, #00A5A8)" strokeWidth="4.4684" />
          <path d="M0 226L392.656 33.9" id="Vector_3" opacity="0.6" stroke="var(--stroke-0, #00A5A8)" strokeWidth="4.4684" />
          <path d={svgPaths.p196eb400} fill="var(--fill-0, #00A5A8)" id="Vector_4" opacity="0.6" />
          <path d={svgPaths.p1481fef0} fill="var(--fill-0, #00A5A8)" id="Vector_5" opacity="0.6" />
          <path d={svgPaths.p25c3ef00} fill="var(--fill-0, #00A5A8)" id="Vector_6" opacity="0.6" />
          <path d={svgPaths.p3e0a4a00} fill="var(--fill-0, #00A5A8)" id="Vector_7" opacity="0.6" />
          <path d={svgPaths.p3c668580} fill="var(--fill-0, #00A5A8)" id="Vector_8" opacity="0.6" />
          <path d={svgPaths.p3c096680} fill="var(--fill-0, #00A5A8)" id="Vector_9" opacity="0.6" />
        </g>
        <defs>
          <clipPath id="clip0_1_1286">
            <rect fill="white" height="226" width="392.656" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p13253c0} id="Vector" stroke="var(--stroke-0, #1A6B1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 7H22V13" id="Vector_2" stroke="var(--stroke-0, #1A6B1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container137() {
  return (
    <div className="bg-[rgba(26,107,26,0.1)] relative rounded-[14px] shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(26,107,26,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon26 />
      </div>
    </div>
  );
}

function CardTitle12() {
  return (
    <div className="h-[27px] relative shrink-0 w-[182.234px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[#1e293b] text-[18px] top-[-1px] whitespace-nowrap">Modelos de Regresión</p>
      </div>
    </div>
  );
}

function App14() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0 w-full" data-name="App">
      <Container137 />
      <CardTitle12 />
    </div>
  );
}

function CardDescription12() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="CardDescription">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#475569] text-[16px] top-[-2px] w-[283px]">Regresión lineal y múltiple con líneas de tendencia representando correlaciones.</p>
    </div>
  );
}

function CardHeader12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[152px] items-start left-0 pt-[20px] px-[24px] top-0 w-[392.656px]" data-name="CardHeader">
      <App14 />
      <CardDescription12 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[342.656px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 342.656 48">
        <g clipPath="url(#clip0_1_1373)" id="Icon" opacity="0.1">
          <path d={svgPaths.pc3d4400} id="Vector" stroke="var(--stroke-0, white)" />
        </g>
        <defs>
          <clipPath id="clip0_1_1373">
            <rect fill="white" height="48" width="342.656" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute bg-gradient-to-b border border-[rgba(0,0,0,0)] border-solid from-[#00a5a8] h-[50px] left-[24px] overflow-clip rounded-[12px] to-[#008b8d] top-[152px] w-[344.656px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[171.27px] not-italic text-[16px] text-center text-white top-[10px] whitespace-nowrap">Calcular Regresión</p>
      <Icon27 />
    </div>
  );
}

function Container136() {
  return (
    <div className="absolute h-[226px] left-0 top-0 w-[392.656px]" data-name="Container">
      <CardHeader12 />
      <Button11 />
    </div>
  );
}

function Card12() {
  return (
    <div className="absolute border border-[rgba(0,165,168,0.2)] border-solid h-[228px] left-0 overflow-clip rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[394.656px]" data-name="Card" style={{ backgroundImage: "linear-gradient(149.984deg, rgba(26, 107, 26, 0.12) 0%, rgba(26, 107, 26, 0.05) 100%)" }}>
      <Container133 />
      <Container134 />
      <Container135 />
      <Icon25 />
      <Container136 />
    </div>
  );
}

function Container138() {
  return (
    <div className="absolute h-[13.5px] left-[12px] opacity-50 top-[8px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">σ = 0.73</p>
    </div>
  );
}

function Container139() {
  return (
    <div className="absolute h-[13.5px] left-[336.13px] opacity-50 top-[8px] w-[44.547px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">R² = 0.95</p>
    </div>
  );
}

function Container140() {
  return (
    <div className="absolute h-[13.5px] left-[341.08px] opacity-50 top-[204.5px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">n = 4324</p>
    </div>
  );
}

function Icon28() {
  return (
    <div className="absolute h-[226px] left-0 top-0 w-[392.672px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 392.672 226">
        <g clipPath="url(#clip0_1_1342)" id="Icon" opacity="0.1">
          <path d="M0 226L392.672 0" id="Vector" stroke="var(--stroke-0, #00A5A8)" strokeWidth="5.95798" />
          <path d="M0 192.1L392.672 0" id="Vector_2" opacity="0.6" stroke="var(--stroke-0, #00A5A8)" strokeWidth="4.46849" />
          <path d="M0 226L392.672 33.9" id="Vector_3" opacity="0.6" stroke="var(--stroke-0, #00A5A8)" strokeWidth="4.46849" />
          <path d={svgPaths.p224a7500} fill="var(--fill-0, #00A5A8)" id="Vector_4" opacity="0.6" />
          <path d={svgPaths.p1a76a200} fill="var(--fill-0, #00A5A8)" id="Vector_5" opacity="0.6" />
          <path d={svgPaths.p28730800} fill="var(--fill-0, #00A5A8)" id="Vector_6" opacity="0.6" />
          <path d={svgPaths.p30554c40} fill="var(--fill-0, #00A5A8)" id="Vector_7" opacity="0.6" />
          <path d={svgPaths.p215b7b00} fill="var(--fill-0, #00A5A8)" id="Vector_8" opacity="0.6" />
          <path d={svgPaths.p1b990800} fill="var(--fill-0, #00A5A8)" id="Vector_9" opacity="0.6" />
        </g>
        <defs>
          <clipPath id="clip0_1_1342">
            <rect fill="white" height="226" width="392.672" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p36c5af80} id="Vector" stroke="var(--stroke-0, #CC7000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M18 17V9" id="Vector_2" stroke="var(--stroke-0, #CC7000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M13 17V5" id="Vector_3" stroke="var(--stroke-0, #CC7000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 17V14" id="Vector_4" stroke="var(--stroke-0, #CC7000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container142() {
  return (
    <div className="bg-[rgba(204,112,0,0.1)] relative rounded-[14px] shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(204,112,0,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon29 />
      </div>
    </div>
  );
}

function CardTitle13() {
  return (
    <div className="h-[27px] relative shrink-0 w-[146.375px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[#1e293b] text-[18px] top-[-1px] whitespace-nowrap">Series Temporales</p>
      </div>
    </div>
  );
}

function App15() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0 w-full" data-name="App">
      <Container142 />
      <CardTitle13 />
    </div>
  );
}

function CardDescription13() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="CardDescription">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#475569] text-[16px] top-[-2px] w-[326px]">Análisis predictivo basado en series de tiempo con intervalos de confianza.</p>
    </div>
  );
}

function CardHeader13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[152px] items-start left-0 pt-[20px] px-[24px] top-0 w-[392.672px]" data-name="CardHeader">
      <App15 />
      <CardDescription13 />
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute bg-gradient-to-b border border-[rgba(0,0,0,0)] border-solid from-[#00a5a8] h-[50px] left-[24px] overflow-clip rounded-[12px] to-[#008b8d] top-[152px] w-[344.672px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[171.25px] not-italic text-[16px] text-center text-white top-[10px] whitespace-nowrap">Predecir Valores</p>
    </div>
  );
}

function Container141() {
  return (
    <div className="absolute h-[226px] left-0 top-0 w-[392.672px]" data-name="Container">
      <CardHeader13 />
      <Button12 />
    </div>
  );
}

function Card13() {
  return (
    <div className="absolute border border-[rgba(0,165,168,0.2)] border-solid h-[228px] left-[418.66px] overflow-clip rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[394.672px]" data-name="Card" style={{ backgroundImage: "linear-gradient(149.985deg, rgba(204, 112, 0, 0.12) 0%, rgba(204, 112, 0, 0.05) 100%)" }}>
      <Container138 />
      <Container139 />
      <Container140 />
      <Icon28 />
      <Container141 />
    </div>
  );
}

function Container143() {
  return (
    <div className="absolute h-[13.5px] left-[12px] opacity-50 top-[8px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">σ = 1.36</p>
    </div>
  );
}

function Container144() {
  return (
    <div className="absolute h-[13.5px] left-[336.11px] opacity-50 top-[8px] w-[44.547px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">R² = 0.90</p>
    </div>
  );
}

function Container145() {
  return (
    <div className="absolute h-[13.5px] left-[341.06px] opacity-50 top-[204.5px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">n = 3412</p>
    </div>
  );
}

function Icon30() {
  return (
    <div className="absolute h-[226px] left-0 top-0 w-[392.656px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 392.656 226">
        <g clipPath="url(#clip0_1_1286)" id="Icon" opacity="0.1">
          <path d="M0 226L392.656 0" id="Vector" stroke="var(--stroke-0, #00A5A8)" strokeWidth="5.95786" />
          <path d="M0 192.1L392.656 0" id="Vector_2" opacity="0.6" stroke="var(--stroke-0, #00A5A8)" strokeWidth="4.4684" />
          <path d="M0 226L392.656 33.9" id="Vector_3" opacity="0.6" stroke="var(--stroke-0, #00A5A8)" strokeWidth="4.4684" />
          <path d={svgPaths.p196eb400} fill="var(--fill-0, #00A5A8)" id="Vector_4" opacity="0.6" />
          <path d={svgPaths.p1481fef0} fill="var(--fill-0, #00A5A8)" id="Vector_5" opacity="0.6" />
          <path d={svgPaths.p25c3ef00} fill="var(--fill-0, #00A5A8)" id="Vector_6" opacity="0.6" />
          <path d={svgPaths.p3e0a4a00} fill="var(--fill-0, #00A5A8)" id="Vector_7" opacity="0.6" />
          <path d={svgPaths.p3c668580} fill="var(--fill-0, #00A5A8)" id="Vector_8" opacity="0.6" />
          <path d={svgPaths.p3c096680} fill="var(--fill-0, #00A5A8)" id="Vector_9" opacity="0.6" />
        </g>
        <defs>
          <clipPath id="clip0_1_1286">
            <rect fill="white" height="226" width="392.656" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p11feba00} id="Vector" stroke="var(--stroke-0, #6B46C1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1b1afa80} id="Vector_2" stroke="var(--stroke-0, #6B46C1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3eed8380} id="Vector_3" stroke="var(--stroke-0, #6B46C1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container147() {
  return (
    <div className="bg-[rgba(107,70,193,0.1)] relative rounded-[14px] shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(107,70,193,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon31 />
      </div>
    </div>
  );
}

function CardTitle14() {
  return (
    <div className="h-[27px] relative shrink-0 w-[147.844px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[#1e293b] text-[18px] top-[-1px] whitespace-nowrap">Big Data Analytics</p>
      </div>
    </div>
  );
}

function App16() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0 w-full" data-name="App">
      <Container147 />
      <CardTitle14 />
    </div>
  );
}

function CardDescription14() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="CardDescription">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#475569] text-[16px] top-[-2px] w-[342px]">Procesamiento masivo de datos con modelos de regresión escalables.</p>
    </div>
  );
}

function CardHeader14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[152px] items-start left-0 pt-[20px] px-[24px] top-0 w-[392.656px]" data-name="CardHeader">
      <App16 />
      <CardDescription14 />
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute bg-white border border-[#00a5a8] border-solid h-[50px] left-[24px] overflow-clip rounded-[12px] top-[152px] w-[344.656px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[171.61px] not-italic text-[#00a5a8] text-[16px] text-center top-[10px] whitespace-nowrap">Procesar Dataset</p>
    </div>
  );
}

function Container146() {
  return (
    <div className="absolute h-[226px] left-0 top-0 w-[392.656px]" data-name="Container">
      <CardHeader14 />
      <Button13 />
    </div>
  );
}

function Card14() {
  return (
    <div className="absolute border border-[rgba(0,165,168,0.2)] border-solid h-[228px] left-[837.33px] overflow-clip rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[394.656px]" data-name="Card" style={{ backgroundImage: "linear-gradient(149.984deg, rgba(107, 70, 193, 0.12) 0%, rgba(107, 70, 193, 0.05) 100%)" }}>
      <Container143 />
      <Container144 />
      <Container145 />
      <Icon30 />
      <Container146 />
    </div>
  );
}

function Container132() {
  return (
    <div className="h-[228px] relative shrink-0 w-full" data-name="Container">
      <Card12 />
      <Card13 />
      <Card14 />
    </div>
  );
}

function Container131() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[272px] items-start left-0 top-[446px] w-[1232px]" data-name="Container">
      <Heading6 />
      <Container132 />
    </div>
  );
}

function Text17() {
  return <div className="absolute bg-[#0891b2] left-0 rounded-[33554400px] size-[8px] top-[10px]" data-name="Text" />;
}

function Heading7() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <Text17 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-[16px] not-italic text-[#1e293b] text-[18px] top-[-1px] whitespace-nowrap">Scatter: Textura Científica de Datos</p>
    </div>
  );
}

function Container150() {
  return (
    <div className="absolute h-[13.5px] left-[12px] opacity-50 top-[8px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">σ = 2.10</p>
    </div>
  );
}

function Container151() {
  return (
    <div className="absolute h-[13.5px] left-[336.11px] opacity-50 top-[8px] w-[44.547px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">R² = 0.99</p>
    </div>
  );
}

function Container152() {
  return (
    <div className="absolute h-[13.5px] left-[341.06px] opacity-50 top-[204.5px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">n = 8093</p>
    </div>
  );
}

function Icon32() {
  return (
    <div className="absolute h-[226px] left-0 top-0 w-[392.656px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 392.656 226">
        <g id="Icon" opacity="0.08">
          <path d={svgPaths.p6e49780} fill="var(--fill-0, #00A5A8)" id="Vector" />
          <path d={svgPaths.p32d12c40} fill="var(--fill-0, #00A5A8)" id="Vector_2" />
          <path d={svgPaths.p2a1d5700} fill="var(--fill-0, #00A5A8)" id="Vector_3" />
          <path d={svgPaths.p231e600} fill="var(--fill-0, #00A5A8)" id="Vector_4" />
          <path d={svgPaths.p1d1031f0} fill="var(--fill-0, #00A5A8)" id="Vector_5" />
          <path d={svgPaths.pb26a00} fill="var(--fill-0, #00A5A8)" id="Vector_6" />
          <path d={svgPaths.p3c65f700} fill="var(--fill-0, #00A5A8)" id="Vector_7" />
          <path d={svgPaths.pa293500} fill="var(--fill-0, #00A5A8)" id="Vector_8" />
          <path d={svgPaths.p185b57c0} fill="var(--fill-0, #00A5A8)" id="Vector_9" />
          <path d={svgPaths.p25892b80} fill="var(--fill-0, #00A5A8)" id="Vector_10" />
          <path d={svgPaths.p2f254800} fill="var(--fill-0, #00A5A8)" id="Vector_11" />
          <path d={svgPaths.p22bf52c0} fill="var(--fill-0, #00A5A8)" id="Vector_12" />
          <path d={svgPaths.p3cc164f0} fill="var(--fill-0, #00A5A8)" id="Vector_13" />
          <path d={svgPaths.pb94d000} fill="var(--fill-0, #00A5A8)" id="Vector_14" />
          <path d={svgPaths.p1e51a800} fill="var(--fill-0, #00A5A8)" id="Vector_15" />
          <path d={svgPaths.p2394ea00} fill="var(--fill-0, #00A5A8)" id="Vector_16" />
          <path d={svgPaths.p1e7c3400} fill="var(--fill-0, #00A5A8)" id="Vector_17" />
          <path d={svgPaths.p360fbb80} fill="var(--fill-0, #00A5A8)" id="Vector_18" />
          <path d={svgPaths.p34bf26b1} fill="var(--fill-0, #00A5A8)" id="Vector_19" />
          <path d={svgPaths.p5fa2200} fill="var(--fill-0, #00A5A8)" id="Vector_20" />
          <path d={svgPaths.p3014f800} fill="var(--fill-0, #00A5A8)" id="Vector_21" />
          <path d={svgPaths.p1377d300} fill="var(--fill-0, #00A5A8)" id="Vector_22" />
          <path d={svgPaths.p3d9cb700} fill="var(--fill-0, #00A5A8)" id="Vector_23" />
          <path d={svgPaths.p2782dac0} fill="var(--fill-0, #00A5A8)" id="Vector_24" />
          <path d={svgPaths.p2d548000} fill="var(--fill-0, #00A5A8)" id="Vector_25" />
          <path d={svgPaths.pa7d0580} fill="var(--fill-0, #00A5A8)" id="Vector_26" />
          <path d={svgPaths.p3369ce00} fill="var(--fill-0, #00A5A8)" id="Vector_27" />
          <path d={svgPaths.p1502d100} fill="var(--fill-0, #00A5A8)" id="Vector_28" />
          <path d={svgPaths.p151ed000} fill="var(--fill-0, #00A5A8)" id="Vector_29" />
          <path d={svgPaths.pa3400f0} fill="var(--fill-0, #00A5A8)" id="Vector_30" />
          <path d={svgPaths.p12b9ea80} fill="var(--fill-0, #00A5A8)" id="Vector_31" />
          <path d={svgPaths.p10ab2840} fill="var(--fill-0, #00A5A8)" id="Vector_32" />
          <path d={svgPaths.p4eba440} fill="var(--fill-0, #00A5A8)" id="Vector_33" />
          <path d={svgPaths.p2fbcfa00} fill="var(--fill-0, #00A5A8)" id="Vector_34" />
          <path d={svgPaths.p270be700} fill="var(--fill-0, #00A5A8)" id="Vector_35" />
          <path d={svgPaths.p19c3bd00} fill="var(--fill-0, #00A5A8)" id="Vector_36" />
          <path d={svgPaths.p22938300} fill="var(--fill-0, #00A5A8)" id="Vector_37" />
        </g>
      </svg>
    </div>
  );
}

function Icon33() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pdb17300} id="Vector" stroke="var(--stroke-0, #0891B2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2f6e8c0} id="Vector_2" stroke="var(--stroke-0, #0891B2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p32c0b4c0} id="Vector_3" stroke="var(--stroke-0, #0891B2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container154() {
  return (
    <div className="bg-[rgba(8,145,178,0.1)] relative rounded-[14px] shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(8,145,178,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon33 />
      </div>
    </div>
  );
}

function CardTitle15() {
  return (
    <div className="h-[27px] relative shrink-0 w-[170.203px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[#1e293b] text-[18px] top-[-1px] whitespace-nowrap">Análisis Multivariado</p>
      </div>
    </div>
  );
}

function App17() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0 w-full" data-name="App">
      <Container154 />
      <CardTitle15 />
    </div>
  );
}

function CardDescription15() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="CardDescription">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#475569] text-[16px] top-[-2px] w-[321px]">Exploración de múltiples variables con scatter plots indicando correlaciones.</p>
    </div>
  );
}

function CardHeader15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[152px] items-start left-0 pt-[20px] px-[24px] top-0 w-[392.656px]" data-name="CardHeader">
      <App17 />
      <CardDescription15 />
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute bg-gradient-to-b border border-[rgba(0,0,0,0)] border-solid from-[#00a5a8] h-[50px] left-[24px] overflow-clip rounded-[12px] to-[#008b8d] top-[152px] w-[344.656px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[171.81px] not-italic text-[16px] text-center text-white top-[10px] whitespace-nowrap">Analizar Variables</p>
    </div>
  );
}

function Container153() {
  return (
    <div className="absolute h-[226px] left-0 top-0 w-[392.656px]" data-name="Container">
      <CardHeader15 />
      <Button14 />
    </div>
  );
}

function Card15() {
  return (
    <div className="absolute border border-[rgba(0,165,168,0.2)] border-solid h-[228px] left-0 overflow-clip rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[394.656px]" data-name="Card" style={{ backgroundImage: "linear-gradient(149.984deg, rgba(8, 145, 178, 0.12) 0%, rgba(8, 145, 178, 0.05) 100%)" }}>
      <Container150 />
      <Container151 />
      <Container152 />
      <Icon32 />
      <Container153 />
    </div>
  );
}

function Container155() {
  return (
    <div className="absolute h-[13.5px] left-[12px] opacity-50 top-[8px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">σ = 1.66</p>
    </div>
  );
}

function Container156() {
  return (
    <div className="absolute h-[13.5px] left-[336.13px] opacity-50 top-[8px] w-[44.547px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">R² = 0.91</p>
    </div>
  );
}

function Container157() {
  return (
    <div className="absolute h-[13.5px] left-[341.08px] opacity-50 top-[204.5px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">n = 4430</p>
    </div>
  );
}

function Icon34() {
  return (
    <div className="absolute h-[226px] left-0 top-0 w-[392.672px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 392.672 226">
        <g id="Icon" opacity="0.08">
          <path d={svgPaths.p40dfc0} fill="var(--fill-0, #00A5A8)" id="Vector" />
          <path d={svgPaths.p23202000} fill="var(--fill-0, #00A5A8)" id="Vector_2" />
          <path d={svgPaths.p136e3a80} fill="var(--fill-0, #00A5A8)" id="Vector_3" />
          <path d={svgPaths.p28abde00} fill="var(--fill-0, #00A5A8)" id="Vector_4" />
          <path d={svgPaths.p2c3f6c00} fill="var(--fill-0, #00A5A8)" id="Vector_5" />
          <path d={svgPaths.p26a4c000} fill="var(--fill-0, #00A5A8)" id="Vector_6" />
          <path d={svgPaths.p3398fc00} fill="var(--fill-0, #00A5A8)" id="Vector_7" />
          <path d={svgPaths.p25a52200} fill="var(--fill-0, #00A5A8)" id="Vector_8" />
          <path d={svgPaths.p22e0f3c0} fill="var(--fill-0, #00A5A8)" id="Vector_9" />
          <path d={svgPaths.p1fd530f0} fill="var(--fill-0, #00A5A8)" id="Vector_10" />
          <path d={svgPaths.p1e018800} fill="var(--fill-0, #00A5A8)" id="Vector_11" />
          <path d={svgPaths.p6b7e9c0} fill="var(--fill-0, #00A5A8)" id="Vector_12" />
          <path d={svgPaths.p3d82ca00} fill="var(--fill-0, #00A5A8)" id="Vector_13" />
          <path d={svgPaths.p36009880} fill="var(--fill-0, #00A5A8)" id="Vector_14" />
          <path d={svgPaths.p155d8b00} fill="var(--fill-0, #00A5A8)" id="Vector_15" />
          <path d={svgPaths.p3b1ef980} fill="var(--fill-0, #00A5A8)" id="Vector_16" />
          <path d={svgPaths.p15c6e800} fill="var(--fill-0, #00A5A8)" id="Vector_17" />
          <path d={svgPaths.p2bdbeb00} fill="var(--fill-0, #00A5A8)" id="Vector_18" />
          <path d={svgPaths.p2fbbda80} fill="var(--fill-0, #00A5A8)" id="Vector_19" />
          <path d={svgPaths.p15041d80} fill="var(--fill-0, #00A5A8)" id="Vector_20" />
          <path d={svgPaths.p142b6ab0} fill="var(--fill-0, #00A5A8)" id="Vector_21" />
          <path d={svgPaths.p369f2a70} fill="var(--fill-0, #00A5A8)" id="Vector_22" />
          <path d={svgPaths.p87a9100} fill="var(--fill-0, #00A5A8)" id="Vector_23" />
          <path d={svgPaths.p2b1a5000} fill="var(--fill-0, #00A5A8)" id="Vector_24" />
          <path d={svgPaths.p261d3f80} fill="var(--fill-0, #00A5A8)" id="Vector_25" />
          <path d={svgPaths.p10b10600} fill="var(--fill-0, #00A5A8)" id="Vector_26" />
          <path d={svgPaths.p24200000} fill="var(--fill-0, #00A5A8)" id="Vector_27" />
          <path d={svgPaths.p35da2c00} fill="var(--fill-0, #00A5A8)" id="Vector_28" />
          <path d={svgPaths.p10ddd170} fill="var(--fill-0, #00A5A8)" id="Vector_29" />
          <path d={svgPaths.pa018700} fill="var(--fill-0, #00A5A8)" id="Vector_30" />
          <path d={svgPaths.p3b5e5f00} fill="var(--fill-0, #00A5A8)" id="Vector_31" />
          <path d={svgPaths.p3b9634e0} fill="var(--fill-0, #00A5A8)" id="Vector_32" />
          <path d={svgPaths.p2bcbb780} fill="var(--fill-0, #00A5A8)" id="Vector_33" />
          <path d={svgPaths.p1fdfdb40} fill="var(--fill-0, #00A5A8)" id="Vector_34" />
          <path d={svgPaths.pcb66900} fill="var(--fill-0, #00A5A8)" id="Vector_35" />
          <path d={svgPaths.p1f25f800} fill="var(--fill-0, #00A5A8)" id="Vector_36" />
          <path d={svgPaths.p31563000} fill="var(--fill-0, #00A5A8)" id="Vector_37" />
        </g>
      </svg>
    </div>
  );
}

function Icon35() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1d820380} id="Vector" stroke="var(--stroke-0, #00A5A8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p161d4800} id="Vector_2" stroke="var(--stroke-0, #00A5A8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2981fe00} id="Vector_3" stroke="var(--stroke-0, #00A5A8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p13e20900} id="Vector_4" stroke="var(--stroke-0, #00A5A8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container159() {
  return (
    <div className="bg-[rgba(0,165,168,0.1)] relative rounded-[14px] shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,165,168,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon35 />
      </div>
    </div>
  );
}

function CardTitle16() {
  return (
    <div className="h-[27px] relative shrink-0 w-[116.547px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[#1e293b] text-[18px] top-[-1px] whitespace-nowrap">Segmentación</p>
      </div>
    </div>
  );
}

function App18() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0 w-full" data-name="App">
      <Container159 />
      <CardTitle16 />
    </div>
  );
}

function CardDescription16() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="CardDescription">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#475569] text-[16px] top-[-2px] w-[333px]">Identificación de grupos mediante scatter plots representando distribuciones.</p>
    </div>
  );
}

function CardHeader16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[152px] items-start left-0 pt-[20px] px-[24px] top-0 w-[392.672px]" data-name="CardHeader">
      <App18 />
      <CardDescription16 />
    </div>
  );
}

function Icon36() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[342.672px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 342.672 48">
        <g clipPath="url(#clip0_1_1252)" id="Icon" opacity="0.1">
          <path d={svgPaths.pc3d4400} id="Vector" stroke="var(--stroke-0, white)" />
        </g>
        <defs>
          <clipPath id="clip0_1_1252">
            <rect fill="white" height="48" width="342.672" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute bg-gradient-to-b border border-[rgba(0,0,0,0)] border-solid from-[#00a5a8] h-[50px] left-[24px] overflow-clip rounded-[12px] to-[#008b8d] top-[152px] w-[344.672px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[171.78px] not-italic text-[16px] text-center text-white top-[10px] whitespace-nowrap">Identificar Patrones</p>
      <Icon36 />
    </div>
  );
}

function Container158() {
  return (
    <div className="absolute h-[226px] left-0 top-0 w-[392.672px]" data-name="Container">
      <CardHeader16 />
      <Button15 />
    </div>
  );
}

function Card16() {
  return (
    <div className="absolute border border-[rgba(0,165,168,0.2)] border-solid h-[228px] left-[418.66px] overflow-clip rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[394.672px]" data-name="Card" style={{ backgroundImage: "linear-gradient(149.985deg, rgba(0, 165, 168, 0.12) 0%, rgba(0, 165, 168, 0.05) 100%)" }}>
      <Container155 />
      <Container156 />
      <Container157 />
      <Icon34 />
      <Container158 />
    </div>
  );
}

function Container160() {
  return (
    <div className="absolute h-[13.5px] left-[12px] opacity-50 top-[8px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">σ = 1.43</p>
    </div>
  );
}

function Container161() {
  return (
    <div className="absolute h-[13.5px] left-[336.11px] opacity-50 top-[8px] w-[44.547px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">R² = 0.87</p>
    </div>
  );
}

function Container162() {
  return (
    <div className="absolute h-[13.5px] left-[341.06px] opacity-50 top-[204.5px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">n = 5802</p>
    </div>
  );
}

function Icon37() {
  return (
    <div className="absolute h-[226px] left-0 top-0 w-[392.656px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 392.656 226">
        <g id="Icon" opacity="0.08">
          <path d={svgPaths.p6e49780} fill="var(--fill-0, #00A5A8)" id="Vector" />
          <path d={svgPaths.p32d12c40} fill="var(--fill-0, #00A5A8)" id="Vector_2" />
          <path d={svgPaths.p2a1d5700} fill="var(--fill-0, #00A5A8)" id="Vector_3" />
          <path d={svgPaths.p231e600} fill="var(--fill-0, #00A5A8)" id="Vector_4" />
          <path d={svgPaths.p1d1031f0} fill="var(--fill-0, #00A5A8)" id="Vector_5" />
          <path d={svgPaths.pb26a00} fill="var(--fill-0, #00A5A8)" id="Vector_6" />
          <path d={svgPaths.p3c65f700} fill="var(--fill-0, #00A5A8)" id="Vector_7" />
          <path d={svgPaths.pa293500} fill="var(--fill-0, #00A5A8)" id="Vector_8" />
          <path d={svgPaths.p185b57c0} fill="var(--fill-0, #00A5A8)" id="Vector_9" />
          <path d={svgPaths.p25892b80} fill="var(--fill-0, #00A5A8)" id="Vector_10" />
          <path d={svgPaths.p2f254800} fill="var(--fill-0, #00A5A8)" id="Vector_11" />
          <path d={svgPaths.p22bf52c0} fill="var(--fill-0, #00A5A8)" id="Vector_12" />
          <path d={svgPaths.p3cc164f0} fill="var(--fill-0, #00A5A8)" id="Vector_13" />
          <path d={svgPaths.pb94d000} fill="var(--fill-0, #00A5A8)" id="Vector_14" />
          <path d={svgPaths.p1e51a800} fill="var(--fill-0, #00A5A8)" id="Vector_15" />
          <path d={svgPaths.p2394ea00} fill="var(--fill-0, #00A5A8)" id="Vector_16" />
          <path d={svgPaths.p1e7c3400} fill="var(--fill-0, #00A5A8)" id="Vector_17" />
          <path d={svgPaths.p360fbb80} fill="var(--fill-0, #00A5A8)" id="Vector_18" />
          <path d={svgPaths.p34bf26b1} fill="var(--fill-0, #00A5A8)" id="Vector_19" />
          <path d={svgPaths.p5fa2200} fill="var(--fill-0, #00A5A8)" id="Vector_20" />
          <path d={svgPaths.p3014f800} fill="var(--fill-0, #00A5A8)" id="Vector_21" />
          <path d={svgPaths.p1377d300} fill="var(--fill-0, #00A5A8)" id="Vector_22" />
          <path d={svgPaths.p3d9cb700} fill="var(--fill-0, #00A5A8)" id="Vector_23" />
          <path d={svgPaths.p2782dac0} fill="var(--fill-0, #00A5A8)" id="Vector_24" />
          <path d={svgPaths.p2d548000} fill="var(--fill-0, #00A5A8)" id="Vector_25" />
          <path d={svgPaths.pa7d0580} fill="var(--fill-0, #00A5A8)" id="Vector_26" />
          <path d={svgPaths.p3369ce00} fill="var(--fill-0, #00A5A8)" id="Vector_27" />
          <path d={svgPaths.p1502d100} fill="var(--fill-0, #00A5A8)" id="Vector_28" />
          <path d={svgPaths.p151ed000} fill="var(--fill-0, #00A5A8)" id="Vector_29" />
          <path d={svgPaths.pa3400f0} fill="var(--fill-0, #00A5A8)" id="Vector_30" />
          <path d={svgPaths.p12b9ea80} fill="var(--fill-0, #00A5A8)" id="Vector_31" />
          <path d={svgPaths.p10ab2840} fill="var(--fill-0, #00A5A8)" id="Vector_32" />
          <path d={svgPaths.p4eba440} fill="var(--fill-0, #00A5A8)" id="Vector_33" />
          <path d={svgPaths.p2fbcfa00} fill="var(--fill-0, #00A5A8)" id="Vector_34" />
          <path d={svgPaths.p270be700} fill="var(--fill-0, #00A5A8)" id="Vector_35" />
          <path d={svgPaths.p19c3bd00} fill="var(--fill-0, #00A5A8)" id="Vector_36" />
          <path d={svgPaths.p22938300} fill="var(--fill-0, #00A5A8)" id="Vector_37" />
        </g>
      </svg>
    </div>
  );
}

function Icon38() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3eeeaa80} id="Vector" stroke="var(--stroke-0, #CC7000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2f14bd80} id="Vector_2" stroke="var(--stroke-0, #CC7000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container164() {
  return (
    <div className="bg-[rgba(204,112,0,0.1)] relative rounded-[14px] shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(204,112,0,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon38 />
      </div>
    </div>
  );
}

function CardTitle17() {
  return (
    <div className="h-[27px] relative shrink-0 w-[167.547px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[#1e293b] text-[18px] top-[-1px] whitespace-nowrap">Clustering Avanzado</p>
      </div>
    </div>
  );
}

function App19() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0 w-full" data-name="App">
      <Container164 />
      <CardTitle17 />
    </div>
  );
}

function CardDescription17() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="CardDescription">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#475569] text-[16px] top-[-2px] w-[284px]">Agrupamiento jerárquico y k-means con visualización de clusters.</p>
    </div>
  );
}

function CardHeader17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[152px] items-start left-0 pt-[20px] px-[24px] top-0 w-[392.656px]" data-name="CardHeader">
      <App19 />
      <CardDescription17 />
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[50px] left-[24px] overflow-clip rounded-[12px] top-[152px] w-[344.656px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[171.38px] not-italic text-[#1e293b] text-[16px] text-center top-[10px] whitespace-nowrap">Ejecutar Clustering</p>
    </div>
  );
}

function Container163() {
  return (
    <div className="absolute h-[226px] left-0 top-0 w-[392.656px]" data-name="Container">
      <CardHeader17 />
      <Button16 />
    </div>
  );
}

function Card17() {
  return (
    <div className="absolute border border-[rgba(0,165,168,0.2)] border-solid h-[228px] left-[837.33px] overflow-clip rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[394.656px]" data-name="Card" style={{ backgroundImage: "linear-gradient(149.984deg, rgba(204, 112, 0, 0.12) 0%, rgba(204, 112, 0, 0.05) 100%)" }}>
      <Container160 />
      <Container161 />
      <Container162 />
      <Icon37 />
      <Container163 />
    </div>
  );
}

function Container149() {
  return (
    <div className="h-[228px] relative shrink-0 w-full" data-name="Container">
      <Card15 />
      <Card16 />
      <Card17 />
    </div>
  );
}

function Container148() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[272px] items-start left-0 top-[766px] w-[1232px]" data-name="Container">
      <Heading7 />
      <Container149 />
    </div>
  );
}

function Text18() {
  return <div className="absolute bg-[#00a5a8] left-0 rounded-[33554400px] size-[8px] top-[10px]" data-name="Text" />;
}

function Heading8() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <Text18 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-[16px] not-italic text-[#1e293b] text-[18px] top-[-1px] whitespace-nowrap">Estilo UC.cl: Borde Turquesa-Verde</p>
    </div>
  );
}

function Container167() {
  return (
    <div className="absolute h-[13.5px] left-[12px] opacity-50 top-[8px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">σ = 2.04</p>
    </div>
  );
}

function Container168() {
  return (
    <div className="absolute h-[13.5px] left-[336.11px] opacity-50 top-[8px] w-[44.547px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">R² = 0.93</p>
    </div>
  );
}

function Container169() {
  return (
    <div className="absolute h-[13.5px] left-[341.06px] opacity-50 top-[342.5px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">n = 1214</p>
    </div>
  );
}

function Icon39() {
  return (
    <div className="absolute h-[364px] left-0 top-0 w-[392.656px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 392.656 364">
        <g clipPath="url(#clip0_1_1138)" id="Icon" opacity="0.08">
          <path d={svgPaths.p1f183900} id="Vector" stroke="var(--stroke-0, #00A5A8)" strokeWidth="2.67326" />
          <path d={svgPaths.p196d1480} id="Vector_2" opacity="0.7" stroke="var(--stroke-0, #00A5A8)" strokeWidth="2.00495" />
          <path d={svgPaths.pad36f40} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #00A5A8)" strokeWidth="2.00495" />
        </g>
        <defs>
          <clipPath id="clip0_1_1138">
            <rect fill="white" height="364" width="392.656" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container170() {
  return <div className="bg-gradient-to-r from-[#00a5a8] h-[4px] shrink-0 to-[#1a6b1a] w-full" data-name="Container" />;
}

function Icon40() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="Icon" opacity="0.4">
          <path d="M28 16.3333V49" id="Vector" stroke="var(--stroke-0, #CBD5E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.66667" />
          <path d={svgPaths.p15b5500} id="Vector_2" stroke="var(--stroke-0, #CBD5E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container171() {
  return (
    <div className="content-stretch flex h-[160px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(157.83deg, rgba(0, 165, 168, 0.05) 0%, rgba(0, 0, 0, 0) 100%)" }}>
      <Icon40 />
    </div>
  );
}

function Badge13() {
  return (
    <div className="absolute bg-[rgba(0,165,168,0.2)] content-stretch flex h-[32px] items-start left-[20px] px-[14px] py-[8px] rounded-[33554400px] top-[20px] w-[101.484px]" data-name="Badge">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,165,168,0.4)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#00a5a8] text-[12px] tracking-[0.3px] uppercase whitespace-nowrap">FORMACIÓN</p>
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-[20px] top-[64px] w-[352.656px]" data-name="Heading 4">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] min-h-px min-w-px not-italic relative text-[#1e293b] text-[20px]">Programa Académico</p>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="absolute h-[40px] left-[20px] top-[100px] w-[352.656px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#475569] text-[14px] top-[-1px] w-[343px]">Formación rigurosa en métodos estadísticos, análisis de datos y ciencia computacional.</p>
    </div>
  );
}

function Icon41() {
  return (
    <div className="absolute left-[180.69px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #00A5A8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[24px] left-[20px] top-[156px] w-[196.688px]" data-name="Link">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#00a5a8] text-[16px] top-[-2px] whitespace-nowrap">Ver programa completo</p>
      <Icon41 />
    </div>
  );
}

function Container172() {
  return (
    <div className="h-[200px] relative shrink-0 w-full" data-name="Container">
      <Badge13 />
      <Heading9 />
      <Paragraph31 />
      <Link />
    </div>
  );
}

function App20() {
  return (
    <div className="absolute content-stretch flex flex-col h-[364px] items-start left-0 top-0 w-[392.656px]" data-name="App">
      <Container170 />
      <Container171 />
      <Container172 />
    </div>
  );
}

function Card18() {
  return (
    <div className="absolute border border-[rgba(0,165,168,0.2)] border-solid h-[366px] left-0 overflow-clip rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[394.656px]" data-name="Card" style={{ backgroundImage: "linear-gradient(137.157deg, rgba(0, 165, 168, 0.12) 0%, rgba(0, 165, 168, 0.05) 100%)" }}>
      <Container167 />
      <Container168 />
      <Container169 />
      <Icon39 />
      <App20 />
    </div>
  );
}

function Container173() {
  return (
    <div className="absolute h-[13.5px] left-[12px] opacity-50 top-[8px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">σ = 0.79</p>
    </div>
  );
}

function Container174() {
  return (
    <div className="absolute h-[13.5px] left-[336.13px] opacity-50 top-[8px] w-[44.547px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">R² = 0.96</p>
    </div>
  );
}

function Container175() {
  return (
    <div className="absolute h-[13.5px] left-[341.08px] opacity-50 top-[342.5px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">n = 2918</p>
    </div>
  );
}

function Icon42() {
  return (
    <div className="absolute h-[364px] left-0 top-0 w-[392.672px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 392.672 364">
        <g clipPath="url(#clip0_1_1130)" id="Icon" opacity="0.08">
          <path d={svgPaths.p13a91900} id="Vector" stroke="var(--stroke-0, #00A5A8)" strokeWidth="2.67332" />
          <path d={svgPaths.p16388600} id="Vector_2" opacity="0.7" stroke="var(--stroke-0, #00A5A8)" strokeWidth="2.00499" />
          <path d={svgPaths.p356f5d40} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #00A5A8)" strokeWidth="2.00499" />
        </g>
        <defs>
          <clipPath id="clip0_1_1130">
            <rect fill="white" height="364" width="392.672" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container176() {
  return <div className="bg-gradient-to-r from-[#00a5a8] h-[4px] shrink-0 to-[#1a6b1a] w-full" data-name="Container" />;
}

function Icon43() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="Icon" opacity="0.4">
          <path d={svgPaths.p249ac680} id="Vector" stroke="var(--stroke-0, #CBD5E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.66667" />
          <path d={svgPaths.p27e1400} id="Vector_2" stroke="var(--stroke-0, #CBD5E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.66667" />
          <path d="M35 4.66667V9.33333" id="Vector_3" stroke="var(--stroke-0, #CBD5E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.66667" />
          <path d="M35 46.6667V51.3333" id="Vector_4" stroke="var(--stroke-0, #CBD5E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.66667" />
          <path d="M4.66667 35H9.33333" id="Vector_5" stroke="var(--stroke-0, #CBD5E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.66667" />
          <path d="M4.66667 21H9.33333" id="Vector_6" stroke="var(--stroke-0, #CBD5E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.66667" />
          <path d="M46.6667 35H51.3333" id="Vector_7" stroke="var(--stroke-0, #CBD5E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.66667" />
          <path d="M46.6667 21H51.3333" id="Vector_8" stroke="var(--stroke-0, #CBD5E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.66667" />
          <path d="M21 4.66667V9.33333" id="Vector_9" stroke="var(--stroke-0, #CBD5E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.66667" />
          <path d="M21 46.6667V51.3333" id="Vector_10" stroke="var(--stroke-0, #CBD5E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container177() {
  return (
    <div className="h-[160px] relative shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(157.831deg, rgba(26, 107, 26, 0.05) 0%, rgba(0, 0, 0, 0) 100%)" }}>
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pr-[0.016px] relative size-full">
          <Icon43 />
        </div>
      </div>
    </div>
  );
}

function Badge14() {
  return (
    <div className="absolute bg-[rgba(26,107,26,0.2)] content-stretch flex h-[32px] items-start left-[20px] px-[14px] py-[8px] rounded-[33554400px] top-[20px] w-[120.656px]" data-name="Badge">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(26,107,26,0.4)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#1a6b1a] text-[12px] tracking-[0.3px] uppercase whitespace-nowrap">INVESTIGACIÓN</p>
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-[20px] top-[64px] w-[352.672px]" data-name="Heading 4">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] min-h-px min-w-px not-italic relative text-[#1e293b] text-[20px]">Líneas de Investigación</p>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="absolute h-[40px] left-[20px] top-[100px] w-[352.672px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#475569] text-[14px] top-[-1px] w-[348px]">Desarrollo de proyectos en machine learning, estadística bayesiana y análisis de datos.</p>
    </div>
  );
}

function Icon44() {
  return (
    <div className="absolute left-[167.72px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #1A6B1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[24px] left-[20px] top-[156px] w-[183.719px]" data-name="Link">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1a6b1a] text-[16px] top-[-2px] whitespace-nowrap">Explorar investigación</p>
      <Icon44 />
    </div>
  );
}

function Container178() {
  return (
    <div className="h-[200px] relative shrink-0 w-full" data-name="Container">
      <Badge14 />
      <Heading10 />
      <Paragraph32 />
      <Link1 />
    </div>
  );
}

function App21() {
  return (
    <div className="absolute content-stretch flex flex-col h-[364px] items-start left-0 top-0 w-[392.672px]" data-name="App">
      <Container176 />
      <Container177 />
      <Container178 />
    </div>
  );
}

function Card19() {
  return (
    <div className="absolute border border-[rgba(0,165,168,0.2)] border-solid h-[366px] left-[418.66px] overflow-clip rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[394.672px]" data-name="Card" style={{ backgroundImage: "linear-gradient(137.159deg, rgba(26, 107, 26, 0.12) 0%, rgba(26, 107, 26, 0.05) 100%)" }}>
      <Container173 />
      <Container174 />
      <Container175 />
      <Icon42 />
      <App21 />
    </div>
  );
}

function Container179() {
  return (
    <div className="absolute h-[13.5px] left-[12px] opacity-50 top-[8px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">σ = 1.78</p>
    </div>
  );
}

function Container180() {
  return (
    <div className="absolute h-[13.5px] left-[336.11px] opacity-50 top-[8px] w-[44.547px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">R² = 0.89</p>
    </div>
  );
}

function Container181() {
  return (
    <div className="absolute h-[13.5px] left-[341.06px] opacity-50 top-[342.5px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">n = 2377</p>
    </div>
  );
}

function Icon45() {
  return (
    <div className="absolute h-[364px] left-0 top-0 w-[392.656px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 392.656 364">
        <g clipPath="url(#clip0_1_1138)" id="Icon" opacity="0.08">
          <path d={svgPaths.p1f183900} id="Vector" stroke="var(--stroke-0, #00A5A8)" strokeWidth="2.67326" />
          <path d={svgPaths.p196d1480} id="Vector_2" opacity="0.7" stroke="var(--stroke-0, #00A5A8)" strokeWidth="2.00495" />
          <path d={svgPaths.pad36f40} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #00A5A8)" strokeWidth="2.00495" />
        </g>
        <defs>
          <clipPath id="clip0_1_1138">
            <rect fill="white" height="364" width="392.656" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container182() {
  return <div className="bg-gradient-to-r from-[#00a5a8] h-[4px] shrink-0 to-[#1a6b1a] w-full" data-name="Container" />;
}

function Icon46() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="Icon" opacity="0.4">
          <path d={svgPaths.p21fa80} id="Vector" stroke="var(--stroke-0, #CBD5E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.66667" />
          <path d={svgPaths.p2cafeec0} id="Vector_2" stroke="var(--stroke-0, #CBD5E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.66667" />
          <path d={svgPaths.p16096500} id="Vector_3" stroke="var(--stroke-0, #CBD5E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container183() {
  return (
    <div className="content-stretch flex h-[160px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(157.83deg, rgba(8, 145, 178, 0.05) 0%, rgba(0, 0, 0, 0) 100%)" }}>
      <Icon46 />
    </div>
  );
}

function Badge15() {
  return (
    <div className="absolute bg-[rgba(8,145,178,0.2)] content-stretch flex h-[32px] items-start left-[20px] px-[14px] py-[8px] rounded-[33554400px] top-[20px] w-[140.078px]" data-name="Badge">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(8,145,178,0.4)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#0891b2] text-[12px] tracking-[0.3px] uppercase whitespace-nowrap">INFRAESTRUCTURA</p>
    </div>
  );
}

function Heading11() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-[20px] top-[64px] w-[352.656px]" data-name="Heading 4">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] min-h-px min-w-px not-italic relative text-[#1e293b] text-[20px]">Laboratorios de Datos</p>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="absolute h-[40px] left-[20px] top-[100px] w-[352.656px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#475569] text-[14px] top-[-1px] w-[347px]">Equipamiento de última generación para procesamiento de big data y análisis avanzado.</p>
    </div>
  );
}

function Icon47() {
  return (
    <div className="absolute left-[142.72px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #0891B2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[24px] left-[20px] top-[156px] w-[158.719px]" data-name="Link">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#0891b2] text-[16px] top-[-2px] whitespace-nowrap">Ver infraestructura</p>
      <Icon47 />
    </div>
  );
}

function Container184() {
  return (
    <div className="h-[200px] relative shrink-0 w-full" data-name="Container">
      <Badge15 />
      <Heading11 />
      <Paragraph33 />
      <Link2 />
    </div>
  );
}

function App22() {
  return (
    <div className="absolute content-stretch flex flex-col h-[364px] items-start left-0 top-0 w-[392.656px]" data-name="App">
      <Container182 />
      <Container183 />
      <Container184 />
    </div>
  );
}

function Card20() {
  return (
    <div className="absolute border border-[rgba(0,165,168,0.2)] border-solid h-[366px] left-[837.33px] overflow-clip rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[394.656px]" data-name="Card" style={{ backgroundImage: "linear-gradient(137.157deg, rgba(8, 145, 178, 0.12) 0%, rgba(8, 145, 178, 0.05) 100%)" }}>
      <Container179 />
      <Container180 />
      <Container181 />
      <Icon45 />
      <App22 />
    </div>
  );
}

function Container166() {
  return (
    <div className="h-[366px] relative shrink-0 w-full" data-name="Container">
      <Card18 />
      <Card19 />
      <Card20 />
    </div>
  );
}

function Container165() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[410px] items-start left-0 top-[1086px] w-[1232px]" data-name="Container">
      <Heading8 />
      <Container166 />
    </div>
  );
}

function Section3() {
  return (
    <div className="h-[1496px] relative shrink-0 w-full" data-name="Section">
      <Container113 />
      <Container114 />
      <Container131 />
      <Container148 />
      <Container165 />
    </div>
  );
}

function Container185() {
  return (
    <div className="absolute h-[13.5px] left-[13px] opacity-50 top-[9px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">σ = 2.25</p>
    </div>
  );
}

function Container186() {
  return (
    <div className="absolute h-[13.5px] left-[1174.45px] opacity-50 top-[9px] w-[44.547px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">R² = 0.93</p>
    </div>
  );
}

function Container187() {
  return (
    <div className="absolute h-[13.5px] left-[1179.41px] opacity-50 top-[303.5px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">n = 4291</p>
    </div>
  );
}

function Icon48() {
  return (
    <div className="absolute h-[324px] left-px top-px w-[1230px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1230 324">
        <g clipPath="url(#clip0_1_1397)" id="Icon" opacity="0.08">
          <path d={svgPaths.p911a380} id="Vector" stroke="var(--stroke-0, #00A5A8)" strokeWidth="4.46385" />
          <path d={svgPaths.p3dd5da00} id="Vector_2" opacity="0.7" stroke="var(--stroke-0, #00A5A8)" strokeWidth="3.34789" />
          <path d={svgPaths.p19c6a7e0} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #00A5A8)" strokeWidth="3.34789" />
        </g>
        <defs>
          <clipPath id="clip0_1_1397">
            <rect fill="white" height="324" width="1230" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] left-[591.69px] not-italic text-[#1e293b] text-[30px] text-center top-[-2px] whitespace-nowrap">Indicadores de Excelencia Académica</p>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[591.2px] not-italic text-[#475569] text-[16px] text-center top-[-2px] whitespace-nowrap">Métricas institucionales - Carrera de Estadística FCPN-UMSA</p>
    </div>
  );
}

function App23() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[68px] items-start relative shrink-0 w-full" data-name="App">
      <Heading12 />
      <Paragraph34 />
    </div>
  );
}

function Icon49() {
  return (
    <div className="absolute left-[15px] size-[32px] top-[15px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p1dcdf880} id="Vector" stroke="var(--stroke-0, #00A5A8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M24 22.6667V12" id="Vector_2" stroke="var(--stroke-0, #00A5A8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M17.3333 22.6667V6.66667" id="Vector_3" stroke="var(--stroke-0, #00A5A8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M10.6667 22.6667V18.6667" id="Vector_4" stroke="var(--stroke-0, #00A5A8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container189() {
  return (
    <div className="absolute bg-[rgba(0,165,168,0.1)] border border-[rgba(0,165,168,0.2)] border-solid left-[73.39px] rounded-[16px] size-[64px] top-0" data-name="Container">
      <Icon49 />
    </div>
  );
}

function Container190() {
  return (
    <div className="absolute h-[40px] left-0 top-[80px] w-[210.797px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[40px] left-[105.41px] not-italic text-[#1e293b] text-[36px] text-center top-[-2px] whitespace-nowrap">380+</p>
    </div>
  );
}

function Container191() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[124px] w-[210.797px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#475569] text-[14px] text-center">Estudiantes Activos</p>
    </div>
  );
}

function Container188() {
  return (
    <div className="absolute h-[144px] left-0 top-0 w-[210.797px]" data-name="Container">
      <Container189 />
      <Container190 />
      <Container191 />
    </div>
  );
}

function Icon50() {
  return (
    <div className="absolute left-[15px] size-[32px] top-[15px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p14076f00} id="Vector" stroke="var(--stroke-0, #1A6B1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M29.3333 13.3333V21.3333" id="Vector_2" stroke="var(--stroke-0, #1A6B1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p3858b240} id="Vector_3" stroke="var(--stroke-0, #1A6B1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container193() {
  return (
    <div className="absolute bg-[rgba(26,107,26,0.1)] border border-[rgba(26,107,26,0.2)] border-solid left-[73.39px] rounded-[16px] size-[64px] top-0" data-name="Container">
      <Icon50 />
    </div>
  );
}

function Container194() {
  return (
    <div className="absolute h-[40px] left-0 top-[80px] w-[210.797px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[40px] left-[105.28px] not-italic text-[#1e293b] text-[36px] text-center top-[-2px] whitespace-nowrap">140+</p>
    </div>
  );
}

function Container195() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[124px] w-[210.797px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#475569] text-[14px] text-center">Egresados Anuales</p>
    </div>
  );
}

function Container192() {
  return (
    <div className="absolute h-[144px] left-[242.8px] top-0 w-[210.797px]" data-name="Container">
      <Container193 />
      <Container194 />
      <Container195 />
    </div>
  );
}

function Icon51() {
  return (
    <div className="absolute left-[15px] size-[32px] top-[15px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.pc093400} id="Vector" stroke="var(--stroke-0, #6B46C1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p141fd2c0} id="Vector_2" stroke="var(--stroke-0, #6B46C1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p8dd6d00} id="Vector_3" stroke="var(--stroke-0, #6B46C1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p65fba00} id="Vector_4" stroke="var(--stroke-0, #6B46C1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p18f98ec0} id="Vector_5" stroke="var(--stroke-0, #6B46C1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M16 17.3333H21.3333" id="Vector_6" stroke="var(--stroke-0, #6B46C1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p1d3c6020} id="Vector_7" stroke="var(--stroke-0, #6B46C1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M16 10.6667H26.6667" id="Vector_8" stroke="var(--stroke-0, #6B46C1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2c4da200} id="Vector_9" stroke="var(--stroke-0, #6B46C1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2c37db00} id="Vector_10" stroke="var(--stroke-0, #6B46C1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p5741a00} id="Vector_11" stroke="var(--stroke-0, #6B46C1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p327cc100} id="Vector_12" stroke="var(--stroke-0, #6B46C1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p4253700} id="Vector_13" stroke="var(--stroke-0, #6B46C1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container197() {
  return (
    <div className="absolute bg-[rgba(107,70,193,0.1)] border border-[rgba(107,70,193,0.2)] border-solid left-[73.39px] rounded-[16px] size-[64px] top-0" data-name="Container">
      <Icon51 />
    </div>
  );
}

function Container198() {
  return (
    <div className="absolute h-[40px] left-0 top-[80px] w-[210.797px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[40px] left-[104.91px] not-italic text-[#1e293b] text-[36px] text-center top-[-2px] whitespace-nowrap">25+</p>
    </div>
  );
}

function Container199() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[124px] w-[210.797px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#475569] text-[14px] text-center">Proyectos IA</p>
    </div>
  );
}

function Container196() {
  return (
    <div className="absolute h-[144px] left-[485.59px] top-0 w-[210.797px]" data-name="Container">
      <Container197 />
      <Container198 />
      <Container199 />
    </div>
  );
}

function Icon52() {
  return (
    <div className="absolute left-[15px] size-[32px] top-[15px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p205c7d00} id="Vector" stroke="var(--stroke-0, #0891B2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p37f46cc0} id="Vector_2" stroke="var(--stroke-0, #0891B2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p277b9e00} id="Vector_3" stroke="var(--stroke-0, #0891B2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container201() {
  return (
    <div className="absolute bg-[rgba(8,145,178,0.1)] border border-[rgba(8,145,178,0.2)] border-solid left-[73.39px] rounded-[16px] size-[64px] top-0" data-name="Container">
      <Icon52 />
    </div>
  );
}

function Container202() {
  return (
    <div className="absolute h-[40px] left-0 top-[80px] w-[210.797px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[40px] left-[106.36px] not-italic text-[#1e293b] text-[36px] text-center top-[-2px] whitespace-nowrap">10TB+</p>
    </div>
  );
}

function Container203() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[124px] w-[210.797px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#475569] text-[14px] text-center">Datos Procesados</p>
    </div>
  );
}

function Container200() {
  return (
    <div className="absolute h-[144px] left-[728.39px] top-0 w-[210.797px]" data-name="Container">
      <Container201 />
      <Container202 />
      <Container203 />
    </div>
  );
}

function Icon53() {
  return (
    <div className="absolute left-[15px] size-[32px] top-[15px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p3ceb9d80} id="Vector" stroke="var(--stroke-0, #CC7000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p3fb33600} id="Vector_2" stroke="var(--stroke-0, #CC7000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container205() {
  return (
    <div className="absolute bg-[rgba(204,112,0,0.1)] border border-[rgba(204,112,0,0.2)] border-solid left-[73.41px] rounded-[16px] size-[64px] top-0" data-name="Container">
      <Icon53 />
    </div>
  );
}

function Container206() {
  return (
    <div className="absolute h-[40px] left-0 top-[80px] w-[210.813px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[40px] left-[105.42px] not-italic text-[#1e293b] text-[36px] text-center top-[-2px] whitespace-nowrap">35+</p>
    </div>
  );
}

function Container207() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[124px] w-[210.813px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#475569] text-[14px] text-center">Años de Trayectoria</p>
    </div>
  );
}

function Container204() {
  return (
    <div className="absolute h-[144px] left-[971.19px] top-0 w-[210.813px]" data-name="Container">
      <Container205 />
      <Container206 />
      <Container207 />
    </div>
  );
}

function App24() {
  return (
    <div className="h-[144px] relative shrink-0 w-full" data-name="App">
      <Container188 />
      <Container192 />
      <Container196 />
      <Container200 />
      <Container204 />
    </div>
  );
}

function CardContent2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] h-[324px] items-start left-px pt-[48px] px-[24px] top-px w-[1230px]" data-name="CardContent">
      <App23 />
      <App24 />
    </div>
  );
}

function Card21() {
  return (
    <div className="h-[326px] relative rounded-[12px] shrink-0 w-full" data-name="Card" style={{ backgroundImage: "linear-gradient(165.179deg, rgba(0, 165, 168, 0.12) 0%, rgba(0, 165, 168, 0.05) 100%)" }}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container185 />
        <Container186 />
        <Container187 />
        <Icon48 />
        <CardContent2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,165,168,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container208() {
  return (
    <div className="absolute h-[13.5px] left-[13px] opacity-50 top-[9px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">σ = 2.26</p>
    </div>
  );
}

function Container209() {
  return (
    <div className="absolute h-[13.5px] left-[1174.45px] opacity-50 top-[9px] w-[44.547px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">R² = 0.93</p>
    </div>
  );
}

function Container210() {
  return (
    <div className="absolute h-[13.5px] left-[1179.41px] opacity-50 top-[551px] w-[39.594px]" data-name="Container">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">n = 5387</p>
    </div>
  );
}

function Icon54() {
  return (
    <div className="absolute h-[571.5px] left-px top-px w-[1230px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1230 571.5">
        <g clipPath="url(#clip0_1_1100)" id="Icon" opacity="0.08">
          <path d={svgPaths.p13021240} id="Vector" stroke="var(--stroke-0, #00A5A8)" strokeWidth="5.92851" />
          <path d={svgPaths.p305275a0} id="Vector_2" opacity="0.7" stroke="var(--stroke-0, #00A5A8)" strokeWidth="4.44638" />
          <path d={svgPaths.p163bc40} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #00A5A8)" strokeWidth="4.44638" />
        </g>
        <defs>
          <clipPath id="clip0_1_1100">
            <rect fill="white" height="571.5" width="1230" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] left-[591.23px] not-italic text-[#1e293b] text-[30px] text-center top-[-2px] whitespace-nowrap">Principios Clean Blueprint</p>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[591.48px] not-italic text-[#475569] text-[16px] text-center top-[-2px] whitespace-nowrap">Papel técnico con grabados de precisión, colores limpios y máxima legibilidad</p>
    </div>
  );
}

function App25() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[68px] items-start relative shrink-0 w-full" data-name="App">
      <Heading13 />
      <Paragraph35 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="absolute h-[28px] left-0 top-[96px] w-[378px]" data-name="Heading 4">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-[189.25px] not-italic text-[#1e293b] text-[18px] text-center top-[-1px] whitespace-nowrap">Grabados Sutiles</p>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="absolute h-[45.5px] left-0 top-[132px] w-[378px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-[189.03px] not-italic text-[#475569] text-[14px] text-center top-[-1px] w-[359px]">Curvas de Gauss en turquesa mate al 8% de opacidad tipo papel de seguridad.</p>
    </div>
  );
}

function Icon55() {
  return (
    <div className="absolute left-0 size-[76px] top-0" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76 76">
        <g clipPath="url(#clip0_1_1109)" id="Icon" opacity="0.08">
          <path d={svgPaths.p273340c0} id="Vector" stroke="var(--stroke-0, #00A5A8)" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1109">
            <rect fill="white" height="76" width="76" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container213() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-start left-[30.64px] top-[22px] w-[14.719px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic relative shrink-0 text-[#00a5a8] text-[24px] text-center whitespace-nowrap">σ</p>
    </div>
  );
}

function Container212() {
  return (
    <div className="absolute bg-white border-2 border-[rgba(0,165,168,0.3)] border-solid left-[149px] overflow-clip rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[80px] top-0" data-name="Container">
      <Icon55 />
      <Container213 />
    </div>
  );
}

function Container211() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Heading14 />
      <Paragraph36 />
      <Container212 />
    </div>
  );
}

function Container216() {
  return (
    <div className="h-[32px] relative shrink-0 w-[20.672px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[32px] not-italic relative shrink-0 text-[#00a5a8] text-[24px] text-center whitespace-nowrap">◉</p>
      </div>
    </div>
  );
}

function Container215() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[149px] pl-[2px] pr-[2.016px] py-[2px] rounded-[16px] size-[80px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container216 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="absolute h-[28px] left-0 top-[96px] w-[378px]" data-name="Heading 4">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-[189.16px] not-italic text-[#1e293b] text-[18px] text-center top-[-1px] whitespace-nowrap">Focus Ring Fino</p>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="absolute h-[45.5px] left-0 top-[132px] w-[378px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-[189px] not-italic text-[#475569] text-[14px] text-center top-[-1px] w-[376px]">Borde turquesa con ring al 20% sin resplandores exagerados, muy elegante.</p>
    </div>
  );
}

function Container214() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Container215 />
      <Heading15 />
      <Paragraph37 />
    </div>
  );
}

function Container220() {
  return <div className="bg-[#00a5a8] h-[30.391px] opacity-30 shrink-0 w-[8px]" data-name="Container" />;
}

function Container221() {
  return <div className="bg-[#00a5a8] h-[49.391px] opacity-30 shrink-0 w-[8px]" data-name="Container" />;
}

function Container222() {
  return <div className="bg-[#00a5a8] h-[64.594px] opacity-30 shrink-0 w-[8px]" data-name="Container" />;
}

function Container223() {
  return <div className="bg-[#00a5a8] flex-[1_0_0] h-[45.594px] min-h-px min-w-px opacity-30" data-name="Container" />;
}

function Container219() {
  return (
    <div className="h-[76px] relative shrink-0 w-[68px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-end px-[12px] relative size-full">
        <Container220 />
        <Container221 />
        <Container222 />
        <Container223 />
      </div>
    </div>
  );
}

function Container218() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[149px] p-[2px] rounded-[16px] size-[80px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container219 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="absolute h-[28px] left-0 top-[96px] w-[378px]" data-name="Heading 4">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-[188.88px] not-italic text-[#1e293b] text-[18px] text-center top-[-1px] whitespace-nowrap">Histogramas Decorativos</p>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="absolute h-[45.5px] left-0 top-[132px] w-[378px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-[189.03px] not-italic text-[#475569] text-[14px] text-center top-[-1px] w-[369px]">Mini-histogramas en inputs simulando anotaciones técnicas al margen.</p>
    </div>
  );
}

function Container217() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Container218 />
      <Heading16 />
      <Paragraph38 />
    </div>
  );
}

function App26() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[177.5px] relative shrink-0 w-full" data-name="App">
      <Container211 />
      <Container214 />
      <Container217 />
    </div>
  );
}

function Heading17() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] min-h-px min-w-px not-italic relative text-[#1e293b] text-[20px] text-center">Especificaciones Técnicas Blueprint</p>
    </div>
  );
}

function Container227() {
  return <div className="bg-white rounded-[33554400px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container226() {
  return (
    <div className="absolute bg-[#00a5a8] content-stretch flex items-center justify-center left-0 rounded-[33554400px] size-[24px] top-[2px]" data-name="Container">
      <Container227 />
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px not-italic relative text-[#1e293b] text-[14px]">Papel Técnico</p>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#475569] text-[14px] top-[-1px] w-[303px]">Fondo blanco puro #FFFFFF, bordes #E2E8F0 con cuadrícula sutil tipo plano.</p>
    </div>
  );
}

function Container228() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[64px] items-start left-[36px] top-0 w-[320px]" data-name="Container">
      <Paragraph39 />
      <Paragraph40 />
    </div>
  );
}

function Container225() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Container226 />
      <Container228 />
    </div>
  );
}

function Container231() {
  return <div className="bg-white rounded-[33554400px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container230() {
  return (
    <div className="absolute bg-[#1a6b1a] content-stretch flex items-center justify-center left-0 rounded-[33554400px] size-[24px] top-[2px]" data-name="Container">
      <Container231 />
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px not-italic relative text-[#1e293b] text-[14px]">Colores Institucionales</p>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#475569] text-[14px] top-[-1px] w-[304px]">Turquesa #00A5A8, Verde #1a6b1a con opacidad 8-10% en grabados de fondo.</p>
    </div>
  );
}

function Container232() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[64px] items-start left-[36px] top-0 w-[320px]" data-name="Container">
      <Paragraph41 />
      <Paragraph42 />
    </div>
  );
}

function Container229() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Container230 />
      <Container232 />
    </div>
  );
}

function Container235() {
  return <div className="bg-white rounded-[33554400px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container234() {
  return (
    <div className="absolute bg-[#475569] content-stretch flex items-center justify-center left-0 rounded-[33554400px] size-[24px] top-[2px]" data-name="Container">
      <Container235 />
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px not-italic relative text-[#1e293b] text-[14px]">Tipografía Limpia</p>
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#475569] text-[14px] top-[-1px] w-[297px]">Títulos #1E293B, párrafos #475569 para máxima legibilidad académica.</p>
    </div>
  );
}

function Container236() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[64px] items-start left-[36px] top-0 w-[320px]" data-name="Container">
      <Paragraph43 />
      <Paragraph44 />
    </div>
  );
}

function Container233() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Container234 />
      <Container236 />
    </div>
  );
}

function Container224() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[64px] relative shrink-0 w-full" data-name="Container">
      <Container225 />
      <Container229 />
      <Container233 />
    </div>
  );
}

function App27() {
  return (
    <div className="bg-gradient-to-r from-[rgba(0,165,168,0.05)] h-[174px] relative rounded-[16px] shrink-0 to-[rgba(0,165,168,0.05)] via-1/2 via-[rgba(26,107,26,0.05)] w-full" data-name="App">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[33px] px-[33px] relative size-full">
        <Heading17 />
        <Container224 />
      </div>
    </div>
  );
}

function CardContent3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] h-[571.5px] items-start left-px pt-[48px] px-[24px] top-px w-[1230px]" data-name="CardContent">
      <App25 />
      <App26 />
      <App27 />
    </div>
  );
}

function Card22() {
  return (
    <div className="h-[573.5px] relative rounded-[12px] shrink-0 w-full" data-name="Card" style={{ backgroundImage: "linear-gradient(155.038deg, rgba(0, 165, 168, 0.12) 0%, rgba(0, 165, 168, 0.05) 100%)" }}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container208 />
        <Container209 />
        <Container210 />
        <Icon54 />
        <CardContent3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,165,168,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] h-[5054px] items-start left-[127px] pt-[48px] px-[24px] top-[100px] w-[1280px]" data-name="Main Content">
      <Section />
      <Card />
      <Section1 />
      <Section2 />
      <Card7 />
      <Card8 />
      <Section3 />
      <Card21 />
      <Card22 />
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[1232px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[615.95px] not-italic text-[#1e293b] text-[16px] text-center top-[-2px] whitespace-nowrap">Carrera de Estadística - Facultad de Ciencias Puras y Naturales</p>
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[32px] w-[1232px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#475569] text-[14px] text-center">Universidad Mayor de San Andrés (UMSA) • La Paz, Bolivia</p>
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="absolute h-[16px] left-0 top-[68px] w-[1232px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Consolas:Regular',sans-serif] leading-[16px] left-[616.45px] not-italic text-[#64748b] text-[12px] text-center top-0 whitespace-nowrap">Clean Blueprint • Papel Técnico • Rigor Científico • 2025</p>
    </div>
  );
}

function Container237() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Container">
      <Paragraph45 />
      <Paragraph46 />
      <Paragraph47 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#f8fafc] content-stretch flex flex-col h-[165px] items-start left-0 pt-[41px] px-[151px] top-[5218px] w-[1534px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-solid border-t inset-0 pointer-events-none" />
      <Container237 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-white h-[944px] left-0 top-0 w-[1534px]" data-name="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

function App28() {
  return <div className="absolute h-[944px] left-0 opacity-2 top-[410px] w-[1534px]" data-name="App" style={{ backgroundImage: "linear-gradient(90deg, rgb(203, 213, 225) 0%, rgba(0, 0, 0, 0) 0%), linear-gradient(rgb(203, 213, 225) 0.10593%, rgba(0, 0, 0, 0) 0.10593%)" }} />;
}

export default function DisenoKitUiEstadistica() {
  return (
    <div className="bg-white relative size-full" data-name="Diseño Kit UI Estadística">
      <App />
      <App28 />
    </div>
  );
}