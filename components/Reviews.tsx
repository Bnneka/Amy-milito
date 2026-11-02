import {enquiry} from './content';
// Illustrative draft copy only. Replace with genuine, approved customer feedback.
const samples=[
 {title:'The finishing touch',quote:'A beautiful bag can make a simple outfit feel complete. I love a structured shape and thoughtful details.'},
 {title:'Personal style',quote:'My favourite accessories are the ones that feel like me — elegant, expressive and easy to style.'},
 {title:'A beautiful pairing',quote:'A lovely handbag and a beautiful pair of shoes are always my favourite way to bring a look together.'}
];
export default function Reviews(){return <section id="reviews" className="section reviews-section"><div className="section-heading"><div><p className="eyebrow">SAMPLE REVIEW COPY</p><h2>A little love<br/><em>for the details.</em></h2></div></div><div className="review-grid">{samples.map((s,i)=><article key={s.title}><span className="review-label">SAMPLE · {String(i+1).padStart(2,'0')}</span><h3>{s.title}</h3><blockquote>“{s.quote}”</blockquote></article>)}</div><a className="text-link review-invite" href={enquiry('Share my customer feedback')}>Shopped with us? Share your experience ↗</a></section>}

