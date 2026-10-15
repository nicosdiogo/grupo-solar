import type {Room} from "../types";import {hotelBy} from "./content";
const T:Record<string,{view:string;bath:string;extra:string[];tone:string}>={
"costa-hotel-i":{view:"Vista urbana",bath:"Casa de banho privativa com duche",extra:["Secretária de apoio","Cofre"],tone:"prático e acolhedor"},
"costa-hotel-ii":{view:"Vista da cidade",bath:"Casa de banho com duche e artigos de higiene selecionados",extra:["Secretária executiva","Chaleira e cafeteira","Cofre digital","Serviço de quarto"],tone:"sofisticado e executivo"},
"cosvita":{view:"Vista panorâmica",bath:"Casa de banho em mármore com banheira e duche separado",extra:["Sala de estar privativa","Máquina de café","Minibar premium","Mordomo a pedido","Roupão e pantufas"],tone:"exclusivo e elegante"}};
export function roomDetail(r:Room){const t=T[r.hotel];const h=hotelBy(r.hotel)?.name;
return{view:t.view,floor:r.area>=60?"Andares superiores":"Andares intermédios",
long:[`O ${r.name} do ${h} oferece um ambiente ${t.tone}, com ${r.area} m² pensados para ${r.maxGuests>2?"famílias e pequenos grupos":"casais e viajantes a sós"}. A cama (${r.bed}) é o centro de um espaço luminoso, com iluminação regulável e acabamentos cuidados.`,
`Descrição demonstrativa: as características reais deste quarto devem ser validadas com a gestão antes da publicação.`],
groups:{Conforto:[r.bed,"Ar condicionado","Roupa de cama de qualidade","Blackout nas janelas"],"Casa de banho":[t.bath,"Artigos de higiene","Secador de cabelo","Toalhas"],Tecnologia:["Wi-Fi","TV de ecrã plano","Telefone directo"],Extras:t.extra},
policies:["Check-in a partir das 14:00 (demonstrativo)","Check-out até às 12:00 (demonstrativo)","Cancelamento: condições a definir","Crianças: política a validar","Informação demonstrativa, a validar antes da publicação"]}}
