'use client';
import {useEffect,useRef,useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import officialLogo from '../public/images/official-logo.png';
const links=[['Home','/'],['Bags','/#bags'],['Shoes','/#shoes'],['About Us','/#about'],['FAQ','/#faq'],['Contact Us','/#contact']];
export default function Navigation(){const [open,setOpen]=useState(false);const trigger=useRef<HTMLButtonElement>(null);useEffect(()=>{function close(e:KeyboardEvent){if(e.key==='Escape'){setOpen(false);trigger.current?.focus();}}document.addEventListener('keydown',close);return()=>document.removeEventListener('keydown',close)},[]);return <header className="site-header"><Link href="/" className="nav-official-logo" aria-label="AMY MILITO COLLECTION home" onClick={() => setOpen(false)}><Image src={officialLogo} alt="Amy Milito Collection" sizes="72px" preload /></Link><button ref={trigger} className="menu-toggle" aria-expanded={open} aria-controls="main-menu" onClick={()=>setOpen(!open)}>{open?'Close ×':'Menu ☰'}</button><nav id="main-menu" aria-label="Main navigation" className={open?'menu-open':''}>{links.map(([label,href])=><a key={label} href={href} onClick={()=>setOpen(false)}>{label}</a>)}</nav><a className="button nav-enquire" href="/#contact">Enquire Now ↗</a></header>}
