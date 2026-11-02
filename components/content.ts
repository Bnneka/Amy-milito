export const email='amara.milito@gmail.com';
export function enquiry(subject='Collection enquiry'){return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Hello AMY MILITO COLLECTION, I would like to enquire about '+subject+'. Please confirm current styles, prices, availability, shoe sizes if applicable, pickup arrangements and delivery fees and timing. Thank you.')}`;}
export const maps='https://www.google.com/maps/dir/?api=1&destination='+encodeURIComponent('22 Ekain Street off Wimpy Junction, Port Harcourt, Nigeria');
export const socials=[{platform:'Facebook',name:'Amarachi Osigwe',url:'https://www.facebook.com/search/top?q=Amarachi%20Osigwe'},{platform:'TikTok',name:'Amy Milito Collection Port Harcourt',url:'https://www.tiktok.com/search?q=Amy%20Milito%20Collection%20Port%20Harcourt'}];
// Draft CEO quote: requires owner approval before final launch.
export const ceoQuote='My vision for AMY MILITO COLLECTION is to help every woman express her confidence through beautiful bags and quality shoes that complement her unique style.';
