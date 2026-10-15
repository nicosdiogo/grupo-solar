import {useState,ReactNode} from "react";import {motion,useScroll,useTransform} from "framer-motion";
export function Img({src,alt,className=""}:{src:string;alt:string;className?:string}){const [bad,setB]=useState(false);
return bad?<div role="img" aria-label={alt} className={`bg-gradient-to-br from-sec to-deep ${className}`}/>:<img src={src} alt={alt} loading="lazy" onError={()=>setB(true)} className={`object-cover ${className}`}/>}
export const Reveal=({children,d=0,className=""}:{children:ReactNode;d?:number;className?:string})=><motion.div className={className} initial={{opacity:0,y:32}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-60px"}} transition={{duration:.8,delay:d,ease:[.22,1,.36,1]}}>{children}</motion.div>;
export function Cine({img,eyebrow,title,text,children,h="min-h-[62vh]"}:{img:string;eyebrow?:string;title:string;text?:string;children?:ReactNode;h?:string}){
const {scrollY}=useScroll();const y=useTransform(scrollY,[0,900],[0,180]);const s=useTransform(scrollY,[0,900],[1.05,1.25]);
const a=(d:number)=>({initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.9,delay:d,ease:[.22,1,.36,1] as [number,number,number,number]}});
return <section className={`relative ${h} grid items-end overflow-hidden bg-deep text-white`}><motion.div style={{y,scale:s}} className="absolute inset-0"><Img src={img} alt="" className="h-full w-full"/></motion.div>
<div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/50 to-deep/30"/>
<div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-40">{eyebrow&&<motion.p {...a(.1)} className="eyebrow">{eyebrow}</motion.p>}
<motion.h1 {...a(.25)} className="!text-white mt-4 max-w-4xl">{title}</motion.h1>{text&&<motion.p {...a(.45)} className="mt-6 max-w-xl text-lg text-white/80">{text}</motion.p>}
<motion.div {...a(.6)} className="mt-8 flex flex-wrap gap-4">{children}</motion.div></div>
<motion.span aria-hidden animate={{y:[0,10,0]}} transition={{repeat:Infinity,duration:2}} className="absolute bottom-6 right-6 hidden md:block text-[10px] uppercase tracking-[.3em] text-white/60">Scroll ↓</motion.span></section>}
