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
const shoeDetails=[
 ['Chocolate lace mules','Heels','Open-toe chocolate-brown mules with lace straps and sculpted heels.','Chocolate-brown open-toe heeled mules with lace straps'],
 ['Burgundy rose heels','Heels','Burgundy strappy heels with rose details and slingback straps.','Burgundy slingback sandals with large rose details'],
 ['Cream and tan block heels','Heels','Pointed-toe cream shoes with tan straps and block heels, shown from several angles.','Collage of cream and tan pointed-toe block-heel slingbacks'],
 ['Clear-strap heeled mules','Heels','Neutral open-toe mules with transparent straps and slim heels.','Neutral heeled mules with transparent front straps'],
 ['Black thong heels','Heels','Black open-toe thong sandals with slim straps and shaped heels.','Black thong-strap heeled sandals'],
 ['Burgundy peep-toe mules','Heels','Burgundy open-toe mules with a glossy finish and slender heels.','Collage showing burgundy peep-toe heeled mules and a styled outfit'],
 ['Two-tone slingback flats','Flats','Neutral slingback flats with darker toe caps and gold-tone ring details.','Beige and brown slingback flats with gold-tone ring details'],
 ['Grey buckle slides','Slides','Grey open-toe slides with wide cutout straps and gold-tone buckles.','Grey flat slides with cutout straps and gold-tone buckles'],
 ['Textured buckle flats','Flats','Low-heeled textured flats pictured in several colours with decorative front details.','Textured low-heeled flats in black, red, tan, navy, burgundy and beige'],
 ['Black buckle wedges','Wedges','Black open-toe wedge slides with broad straps and rectangular buckle details.','Black open-toe wedge slides with gold-tone buckle details'],
 ['Cream and tan styling edit','Heels','A styling collage of cream and tan block-heel slingbacks.','Outfit and product collage of cream and tan block-heel slingbacks'],
 ['Black slim-strap heels','Heels','Minimal black heeled sandals with slim thong straps and open toes.','Black slim-strap heeled sandals shown worn'],
 ['Colourful embellished flats','Flats','Low-heeled shoes in a selection of colours with sparkling geometric front details.','Low-heeled shoes in burgundy, green, black, beige, brown and navy with embellished buckles'],
 ['Woven-strap slides','Slides','Flat slides with interwoven straps, pictured in black, burgundy and brown tones.','Flat woven-strap slides in black, burgundy and brown']
];
export const products:Product[]=[
 ...bagDetails.map(([name,category,detail,alt],i)=>({name,category,detail,alt,kind:'Bags' as const,image:'/images/bags/bag-'+String(i+1).padStart(2,'0')+'.webp'})),
 ...shoeDetails.map(([name,category,detail,alt],i)=>({name,category,detail,alt,kind:'Shoes' as const,image:'/images/shoes/shoe-'+String(i+1).padStart(2,'0')+'.webp'}))
];
