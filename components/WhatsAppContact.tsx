import {whatsappEnquiry,whatsappNumber} from './content';
export default function WhatsAppContact(){return <div className="whatsapp-contact"><a className="button" href={whatsappEnquiry()} target="_blank" rel="noopener noreferrer">Chat us on WhatsApp ↗</a><p>Chat us on WhatsApp via <a href={whatsappEnquiry()} target="_blank" rel="noopener noreferrer">{whatsappNumber}</a></p></div>}
