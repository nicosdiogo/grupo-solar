import {IMG} from "./media";
export type Item={h:string;p?:string;img?:string;icon?:string};
export type Block={t:"split"|"features"|"cards"|"rooms"|"gallery"|"faq"|"location"|"cta";eyebrow?:string;title?:string;text?:string;img?:string;items?:Item[];flip?:boolean;dark?:boolean;link?:[string,string]};
const H=(s:string,n:number)=>IMG.hotel[s][n],M=(n:number)=>IMG.misc[n];
const F=(e:Item[]=[]):Item[]=>[{h:"Os preços e condições são oficiais?",p:"Não. São demonstrativos até serem validados pela gestão."},{h:"Posso reservar aqui?",p:"O fluxo é uma demonstração: nenhuma reserva real é efectuada."},...e];
export const profiles:Record<string,{eyebrow:string;blocks:Block[]}>={
"costa-hotel-i":{eyebrow:"Conforto · Funcionalidade · Conveniência",blocks:[
{t:"split",eyebrow:"A unidade",title:"Descanso simples, bem pensado",text:"Quartos funcionais e acolhedores, atendimento directo e o essencial para uma estadia sem complicações.",img:H("costa-hotel-i",1)},
{t:"features",eyebrow:"O essencial",title:"Tudo o que precisa, sem complicar",items:[{h:"Wi-Fi",p:"Ligação nos quartos (a validar)",icon:"Wifi"},{h:"Pequeno-almoço",p:"Para começar bem o dia",icon:"Coffee"},{h:"Lavandaria",p:"Serviço de apoio ao hóspede",icon:"Shirt"},{h:"Estacionamento",p:"A confirmar",icon:"Car"}]},
{t:"rooms",eyebrow:"Quartos",title:"Standard, Twin e Superior"},
{t:"cards",eyebrow:"Refeições",title:"Sabores simples ao longo do dia",items:[{h:"Pequeno-almoço",p:"Opções frescas (demonstrativo)",img:M(1)},{h:"Almoço executivo",p:"Refeição rápida e prática",img:M(0)},{h:"Café e snacks",p:"Pausas ao seu ritmo",img:M(3)}]},
{t:"location",eyebrow:"Localização",title:"No centro da sua estadia",text:"Morada e contactos oficiais por confirmar. Referência histórica: Costa Hotel na Rua Rainha Ginga, Luanda (a validar)."},
{t:"gallery"},{t:"faq",title:"Perguntas frequentes",items:F([{h:"Há estacionamento?",p:"Dado demonstrativo, a confirmar."}])},{t:"cta"}]},
"costa-hotel-ii":{eyebrow:"Conforto superior · Negócios · Gastronomia",blocks:[
{t:"split",eyebrow:"A unidade",title:"Elegância executiva no coração da viagem",text:"Mais conforto, mais atenção ao detalhe e espaços pensados para descansar, trabalhar e reunir.",img:H("costa-hotel-ii",1),flip:true},
{t:"features",dark:true,eyebrow:"Viagens de negócios",title:"Trabalhar com tranquilidade",items:[{h:"Salas de reunião",p:"Capacidades demonstrativas",icon:"Presentation"},{h:"Wi-Fi",icon:"Wifi"},{h:"Business corner",p:"Conceito demonstrativo",icon:"Briefcase"},{h:"Lavandaria",icon:"Shirt"}]},
{t:"rooms",eyebrow:"Quartos",title:"Superior, Executivo e Suite Júnior"},
{t:"cards",eyebrow:"Gastronomia",title:"Mesas com história",text:"Referências históricas ao Costa Hotel, sujeitas a validação com a gestão.",items:[{h:"O Sete",p:"Restaurante (a validar)",img:M(0)},{h:"Bar Marina",p:"Bar (a validar)",img:M(3)},{h:"Espaço Carine",p:"Espaço (a validar)",img:M(1)}]},
{t:"split",eyebrow:"Eventos e reuniões",title:"Do encontro de trabalho à celebração",text:"Conferências, celebrações e eventos privados com apoio dedicado. Capacidades por confirmar.",img:H("costa-hotel-ii",2),link:["/hoteis/costa-hotel-ii/eventos","Pedir orçamento"]},
{t:"features",eyebrow:"Bem-estar",title:"Pausa e equilíbrio",items:[{h:"Ginásio",p:"Referência histórica (a validar)",icon:"Dumbbell"},{h:"Spa e cabeleireiro",p:"Referências a validar",icon:"Flower2"}]},
{t:"gallery"},{t:"location",eyebrow:"Localização",title:"Fácil de chegar",text:"Referência histórica: Rua Sebastião Desta-Vez, n.º 17 (a validar). Contactos oficiais por confirmar."},{t:"faq",title:"Perguntas frequentes",items:F([{h:"Há salas para reuniões?",p:"Sim, em conceito demonstrativo; capacidades por validar."}])},{t:"cta"}]},
"cosvita":{eyebrow:"Luxo · Exclusividade · Experiências",blocks:[
{t:"split",dark:true,eyebrow:"A unidade",title:"Onde cada detalhe é um gesto de hospitalidade",text:"Arquitectura, suites e serviço personalizado, num conceito premium de cinco estrelas (conteúdo fictício de demonstração).",img:H("cosvita",1)},
{t:"rooms",dark:true,eyebrow:"Suites",title:"Deluxe King, Executive e Presidential"},
{t:"cards",dark:true,eyebrow:"Gastronomia de autor",title:"Mesa, lounge e adega",items:[{h:"Restaurante de assinatura",p:"Conceito fictício de cozinha de autor",img:M(0)},{h:"Lounge e bar",p:"Coquetelaria e música ao vivo (conceito)",img:M(3)},{h:"Jantar privado",p:"Chef à mesa (conceito)",img:M(1)}]},
{t:"split",dark:true,flip:true,eyebrow:"Spa e bem-estar",title:"Um santuário de calma",text:"Rituais de relaxamento, piscina e tratamentos. Conceito fictício para o modelo de frontend.",img:M(2)},
{t:"features",dark:true,eyebrow:"Concierge",title:"Experiências privadas",items:[{h:"Concierge 24h",p:"Conceito",icon:"ConciergeBell"},{h:"Transfers",p:"Conceito",icon:"Car"},{h:"Celebrações",p:"Jantares e surpresas (conceito)",icon:"PartyPopper"},{h:"Momentos a dois",p:"Pacotes românticos (conceito)",icon:"Sparkles"}]},
{t:"cards",dark:true,eyebrow:"Eventos exclusivos",title:"Ocasiões que ficam",items:[{h:"Casamentos",p:"Conceito",img:H("cosvita",2)},{h:"Jantares de gala",p:"Conceito",img:M(1)},{h:"Reuniões de alto nível",p:"Conceito",img:H("cosvita",0)}]},
{t:"gallery",dark:true},{t:"faq",dark:true,title:"Perguntas frequentes",items:F([{h:"Os serviços descritos existem?",p:"São conceitos fictícios de demonstração, não afirmações sobre instalações reais."}])},{t:"cta"}]}};
