import svgPaths from "./svg-ppvgwl1cki";
import { imgGroup } from "./svg-6jtlu";

function Icon() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Icon">
          <path d={svgPaths.p2e220800} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[290.484px] relative shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(143.131deg, rgb(226, 232, 240) 0%, rgb(222, 229, 237) 16.667%, rgb(218, 226, 235) 33.333%, rgb(214, 222, 232) 50%, rgb(211, 219, 230) 66.667%, rgb(207, 216, 227) 83.333%, rgb(203, 213, 225) 100%), linear-gradient(90deg, rgb(226, 232, 240) 0%, rgb(226, 232, 240) 100%)" }}>
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pl-[153.656px] pr-[153.672px] relative size-full">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function FondoEstadistico() {
  return (
    <div className="absolute h-[13.5px] left-[13px] opacity-50 top-[9px] w-[39.594px]" data-name="FondoEstadistico">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">σ = 1.87</p>
    </div>
  );
}

function FondoEstadistico1() {
  return (
    <div className="absolute h-[13.5px] left-[329.78px] opacity-50 top-[9px] w-[44.547px]" data-name="FondoEstadistico">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">R² = 0.95</p>
    </div>
  );
}

function FondoEstadistico2() {
  return (
    <div className="absolute h-[13.5px] left-[344.63px] opacity-50 top-[100.5px] w-[29.703px]" data-name="FondoEstadistico">
      <p className="absolute font-['Consolas:Bold',sans-serif] leading-[13.5px] left-0 not-italic text-[#00a5a8] text-[9px] top-0 whitespace-nowrap">n = 12</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[3.33%_0_20%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-4.1px] mask-size-[387.328px_123px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <div className="absolute inset-[-0.61%_-0.16%_-0.61%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 387.934 95.4577">
          <g id="Group" opacity="0.08">
            <path d={svgPaths.p21878f80} id="Vector" stroke="var(--stroke-0, #00A5A8)" strokeWidth="1.5434" />
            <path d={svgPaths.p2f2f87e0} id="Vector_2" opacity="0.7" stroke="var(--stroke-0, #00A5A8)" strokeWidth="1.15754" />
            <path d={svgPaths.p331c8e80} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #00A5A8)" strokeWidth="1.15754" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group />
    </div>
  );
}

function FondoEstadistico3() {
  return (
    <div className="absolute h-[123px] left-0 overflow-clip top-0 w-[387.328px]" data-name="FondoEstadistico">
      <ClipPathGroup />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[27px] left-[24px] top-[24px] w-[339.328px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[#1e293b] text-[18px] top-px whitespace-nowrap">Laboratorio de Computación</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[40px] left-[24px] top-[59px] w-[339.328px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#475569] text-[14px] top-0 w-[339px]">Equipado con tecnología de última generación para análisis de datos y procesamiento estadístico.</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[123px] relative shrink-0 w-full" data-name="Container">
      <FondoEstadistico />
      <FondoEstadistico1 />
      <FondoEstadistico2 />
      <FondoEstadistico3 />
      <Heading />
      <Paragraph />
    </div>
  );
}

export default function TarjetaInfraestructura() {
  return (
    <div className="relative rounded-[12px] size-full" data-name="TarjetaInfraestructura" style={{ backgroundImage: "linear-gradient(133.943deg, rgba(0, 165, 168, 0.12) 1.742%, rgba(0, 165, 168, 0.05) 98.258%)" }}>
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container />
        <Container1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,165,168,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}