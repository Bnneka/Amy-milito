'use client';
import Image from 'next/image';
import {useState} from 'react';
import {enquiry,whatsappEnquiry} from './content';
import { products } from './products';
export default function Catalog({kind,preview=false}:{kind?:'Bags'|'Shoes';preview?:boolean}){
 const [filter,setFilter]=useState('All');
 const selected=products.filter(p=>!kind||p.kind===kind);
 const categories=['All',...new Set(selected.map(p=>p.category))];
 const filtered=selected.filter(p=>filter==='All'||p.category===filter);
 const shown=preview?filtered.slice(0,3):filtered;
 return <><div className="catalog-bar"><p>{kind==='Bags'?'THE HANDBAG COLLECTION':kind==='Shoes'?'THE SHOE COLLECTION':'EXPLORE BAGS & SHOES'}</p><div className="filters flex flex-wrap" role="group" aria-label={`Filter ${kind||'collection'}`}>{categories.map(x=><button key={x} aria-pressed={filter===x} className={filter===x?'active':''} onClick={()=>setFilter(x)}>{x}</button>)}</div></div><div className="products" aria-live="polite">{shown.map(p=><article key={p.name}><div className="product-image supplied-bag-image"><Image src={p.image.startsWith('/')?p.image:'https://images.unsplash.com/'+p.image+'?auto=format&fit=crop&w=900&q=80'} alt={p.alt} fill sizes="(max-width:650px) 90vw, 30vw" loading="lazy"/></div><div className="product-label"><h3>{p.name}</h3><span>{p.category}</span></div><p>{p.detail}</p><a className="text-link inline-block" href={p.kind==='Bags'?whatsappEnquiry(p.name+' ('+p.category+')'):enquiry(p.name+' ('+p.category+')')} target={p.kind==='Bags'?'_blank':undefined} rel={p.kind==='Bags'?'noopener noreferrer':undefined}>Enquire about {p.kind==='Shoes'?'sizes & styles':'this bag'} ↗</a></article>)}</div><p className="image-note">{kind==='Bags'?'Contact us to confirm current availability, colours, prices and delivery details for the bags pictured.':kind==='Shoes'?'Contact us to confirm available sizes, colours, current prices and delivery details for the shoes pictured.':'Bag and shoe photographs supplied by the boutique. Please enquire to confirm prices, availability, sizes and delivery details.'}</p></>;
}
