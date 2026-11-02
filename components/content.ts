export const email='amara.milito@gmail.com';
export function enquiry(subject='Collection enquiry'){return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Hello AMY MILITO COLLECTION, I would like to enquire about '+subject+'. Please confirm current styles, prices, availability, shoe sizes if applicable, pickup arrangements and delivery fees and timing. Thank you.')}`;}
export const maps='https://www.google.com/maps/dir/?api=1&destination='+encodeURIComponent('22 Ekain Street off Wimpy Junction, Port Harcourt, Nigeria');
export const socials=[{platform:'Facebook',name:'Amarachi Osigwe',url:'https://www.facebook.com/amarachi.osigwe.133487'},{platform:'TikTok',name:'Amy Milito Collection Port Harcourt',url:'https://www.tiktok.com/@milito.collection'}];
// Draft CEO quote: requires owner approval before final launch.
export const ceoQuote='My vision for AMY MILITO COLLECTION is to help every woman express her confidence through beautiful bags and quality shoes that complement her unique style.';

export const whatsappNumber='08062519464';
export function whatsappEnquiry(product?:string){const message=product?`Hello AMY MILITO COLLECTION, I would like to enquire about ${product}. Please confirm the current price, colours, availability and delivery details.`:'Hello AMY MILITO COLLECTION, I would like to enquire about your bags and shoes. Please help me with available styles, prices and delivery details.';return `https://wa.me/2348062519464?text=${encodeURIComponent(message)}`;}
