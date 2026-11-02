import './globals.css';
import type {Metadata} from 'next';
import Navigation from '../components/Navigation';
import Brand from '../components/Brand';
import {email,socials,whatsappEnquiry,whatsappNumber} from '../components/content';
export const metadata:Metadata={title:'AMY MILITO COLLECTION | Elegant Bags & Beautiful Shoes',description:'Explore elegant women’s handbags and quality shoes at AMY MILITO COLLECTION, 22 Ekain Street off Wimpy Junction, Port Harcourt. We deliver nationwide.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Navigation/><main id="main">{children}</main><footer><div><Brand/><p>Elegant handbags. Beautiful shoes.<br/>Thoughtful touches for your personal style.</p></div><div><h3>Explore the boutique</h3>{[['Home','/'],['Bags','/#bags'],['Shoes','/#shoes'],['About Us','/#about'],['FAQ','/#faq'],['Contact Us','/#contact']].map(([name,url])=><a key={name} href={url}>{name}</a>)}</div><div><h3>Come say hello</h3><p>22 Ekain Street off Wimpy Junction,<br/>Port Harcourt, Nigeria</p><a href={'mailto:'+email}>{email} ↗</a><a href={whatsappEnquiry()} target="_blank" rel="noopener noreferrer">WhatsApp · {whatsappNumber} ↗</a>{socials.map(s=><a key={s.platform} href={s.url} target="_blank" rel="noopener noreferrer">{s.platform} · {s.name} ↗</a>)}</div><div className="footer-bottom">© {new Date().getFullYear()} AMY MILITO COLLECTION <span>Based in Port Harcourt · We deliver nationwide.</span></div></footer></body></html>}

