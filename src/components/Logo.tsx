export function Mark({size=40,onDark=false}:{size?:number;onDark?:boolean}){const a=(n:number,o=0)=>Array.from({length:n},(_,i)=>i*360/n+o);
return <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label="Grupo Solar" fill="none">
{a(12).map(r=><path key={"y"+r} transform={`rotate(${r} 50 50)`} d="M50 50C41 32 42 15 50 4C58 15 59 32 50 50Z" fill="#F2C14E"/>)}
{a(8,10).map(r=><path key={"n"+r} transform={`rotate(${r} 50 50)`} d="M50 50C52 34 60 22 76 18C80 34 72 46 50 50Z" fill={onDark?"#183B56":"#102A43"} stroke={onDark?"#F8D979":"none"} strokeWidth="1.2"/>)}
<circle cx="50" cy="50" r="19" fill="#F2C14E"/></svg>}
export function Logo({size=38}:{size?:number}){return <span className="flex items-center gap-3"><Mark size={size} onDark/><span className="flex flex-col leading-none"><span className="font-head text-[22px] uppercase tracking-[.3em]">Grupo Solar</span><span className="mt-1.5 text-[8px] uppercase tracking-[.5em] text-gold">Hospitalidade · Angola</span></span></span>}
