'use client';
import Image from 'next/image';
import {useState} from 'react';
import {enquiry} from './content';
type Product={name:string;category:string;image:string;detail:string;alt:string;kind:'Bags'|'Shoes'};
const bagDetails=[
 ['Black structured handbag set','Handbag sets','A black structured handbag pictured with a matching pouch and detachable strap.','Black top-handle handbag with a matching zip pouch and strap'],
 ['Red handbag duo','Handbag sets','A red tote and compact chain-strap bag, pictured together.','Red tote and smaller red shoulder bag with chain detailing'],
 ['Colourful quilted bags','Shoulder bags','Quilted flap bags pictured in a selection of colours. Enquire about your preferred shade.','Quilted flap bags in pink, yellow, cream, burgundy, blue and black'],
 ['Blue patterned shoulder bag','Shoulder bags','A curved blue patterned shoulder bag with a short strap and gold-tone details.','Blue patterned shoulder bag displayed in its box'],
 ['Black top-handle bag','Top-handle bags','A structured black bag with a circular detail, gold-tone fastening and detachable strap.','Black structured handbag with circular front detail and gold-tone fastening'],
 ['Neutral handbag duo','Handbag sets','A beige tote with tan handles and a coordinating smaller bag, pictured with straps.','Beige and tan tote and compact bag with matching straps'],
 ['Olive braided-handle tote','Totes','An olive-green tote with braided handles and gold-tone details.','Olive-green tote with braided handles resting on a wooden chair'],
 ['Quilted clasp bags','Shoulder bags','Quilted rectangular bags pictured in black, navy, burgundy and brown.','Four quilted rectangular bags with gold-tone clasps'],
 ['Gold textured clutch','Clutches','A slim gold-tone clutch with an embossed texture and decorative fastening.','Gold-tone rectangular textured clutch held in one hand'],
 ['Black textured clutch','Clutches','A black rectangular clutch with an embossed texture and gold-tone clasp.','Black textured rectangular clutch with a gold-tone fastening'],
 ['Burgundy textured clutch','Clutches','A burgundy rectangular clutch with textured detailing and a gold-tone clasp.','Burgundy textured rectangular clutch held in one hand'],
 ['Gold geometric clutch','Clutches','A gold-tone occasion clutch with a folded geometric silhouette and textured finish.','Gold-tone textured clutch with angular folded panels'],
 ['Gold curved clutch','Clutches','A curved gold-tone clutch with an embossed finish and compact shape.','Gold-tone curved clutch with an embossed surface'],
 ['Gold pleated clutch','Clutches','A gold-tone occasion clutch with a pleated finish and rounded clasp.','Gold-tone pleated rectangular clutch with two decorative clasp details'],
 ['Burgundy top-handle bag','Top-handle bags','A burgundy structured bag with knotted handle details, a charm and detachable strap.','Burgundy top-handle handbag with knotted handles and hanging charm']
];
export const products:Product[]=[...bagDetails.map(([name,category,detail,alt],i)=>({name,category,detail,alt,kind:'Bags' as const,image:`/images/bags/bag-${String(i+1).padStart(2,'0')}.webp`})),
{name:'An elegant heel',category:'Heels',image:'photo-1543163521-1bf539c55dd2',detail:'Discover heeled styles for your next dressed-up moment.',alt:'Illustrative pair of women’s heeled shoes',kind:'Shoes'},
{name:'A classic court shoe',category:'Court shoes',image:'photo-1535043934128-cf0b28d52f95',detail:'Ask us about classic court shoe styles and your preferred size.',alt:'Illustrative pair of neutral pointed-toe court shoes',kind:'Shoes'},
{name:'A beautiful step',category:'Sandals',image:'photo-1562273138-f46be4ebdf33',detail:'Explore sandal styles and ask about your preferred size.',alt:'Illustrative women’s sandal style',kind:'Shoes'}];
export default function Catalog({kind,preview=false}:{kind?:'Bags'|'Shoes';preview?:boolean}){
 const [filter,setFilter]=useState('All');
 const selected=products.filter(p=>!kind||p.kind===kind);
 const categories=['All',...new Set(selected.map(p=>p.category))];
 const filtered=selected.filter(p=>filter==='All'||p.category===filter);
 const shown=preview?filtered.slice(0,3):filtered;
 return <><div className="catalog-bar"><p>{kind==='Bags'?'THE HANDBAG COLLECTION':kind==='Shoes'?'DEMONSTRATION SHOE COLLECTION':'EXPLORE BAGS & SHOES'}</p><div className="filters flex flex-wrap" role="group" aria-label={`Filter ${kind||'collection'}`}>{categories.map(x=><button key={x} aria-pressed={filter===x} className={filter===x?'active':''} onClick={()=>setFilter(x)}>{x}</button>)}</div></div><div className="products" aria-live="polite">{shown.map(p=><article key={p.name}><div className={`product-image ${p.kind==='Bags'?'supplied-bag-image':''}`}><Image src={p.image.startsWith('/')?p.image:'https://images.unsplash.com/'+p.image+'?auto=format&fit=crop&w=900&q=80'} alt={p.alt} fill sizes="(max-width:650px) 90vw, 30vw" loading="lazy"/>{p.kind==='Shoes'&&<span>Illustrative photograph · Demo style</span>}</div><div className="product-label"><h3>{p.name}</h3><span>{p.category}</span></div><p>{p.detail}</p><a className="text-link inline-block" href={enquiry(p.name+' ('+p.category+(p.kind==='Shoes'?', illustrative example':'')+')')}>Enquire about {p.kind==='Shoes'?'sizes & styles':'this bag'} ↗</a></article>)}</div><p className="image-note">{kind==='Bags'?'Contact us to confirm current availability, colours, prices and delivery details for the bags pictured.':kind==='Shoes'?'Demonstration shoe styles and illustrative photographs, not confirmed inventory. Please enquire for actual designs, prices, stock, sizes and delivery details.':'Bag photographs supplied by the boutique. Shoe photographs are illustrative examples. Please enquire to confirm prices, availability, sizes and delivery details.'}</p></>;
}
