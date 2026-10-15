# Grupo Solar · Website institucional (frontend demonstrativo)

Website da rede hoteleira **Grupo Solar** (Costa Hotel I, Costa Hotel II e COSVITA), em React, Vite e TypeScript. Nesta fase é **estático e sem backend**: as reservas, os formulários e a newsletter são simulações locais.

> **Aviso:** todo o conteúdo (classificações por estrelas, tarifas, quartos, menus, salas de eventos, ofertas, contactos e textos legais) é **demonstrativo** e tem de ser validado antes de qualquer publicação comercial. As fotografias são ilustrativas e não representam as instalações reais.

## Tecnologias

React 18 · TypeScript · Vite · Tailwind CSS 3 · React Router DOM · Framer Motion · React Hook Form · Zod · date-fns · Lucide React

## Requisitos

- Node.js 18 ou superior
- npm

## Instalação e execução

```bash
npm install        # instala as dependências
npm run dev        # servidor de desenvolvimento (http://localhost:5173)
npm run build      # verificação de tipos e build de produção (pasta dist/)
npm run preview    # pré-visualização local do build
```

## Estrutura

```
src/
  App.tsx              rotas da aplicação
  main.tsx             arranque (Router e preferência de movimento reduzido)
  components/          Layout (cabeçalho e rodapé), Logo (SVG), SearchBar,
                       fields (datas, contadores, separadores, listas),
                       Form, Gallery, dining (menus), halls (salas de eventos), ui
  pages/               pages, hotel, booking, compare, discover, contact, legal
  data/                content (hotéis, quartos, ofertas), dining (restaurantes
                       e menus), profiles (secções de cada hotel), roomDetails,
                       media (imagens), config (contactos centralizados)
  services/api.ts      camada local com contratos para futura API
  types/               interfaces TypeScript
  styles/              estilos globais e tokens (Tailwind)
public/                favicon SVG e robots.txt
```

## Páginas

`/` · `/hoteis` (comparador) · `/sobre` · `/experiencias` · `/gastronomia` · `/eventos` · `/ofertas` · `/contactos` · `/privacidade` · `/termos` · `/cookies`

Por unidade: `/hoteis/:slug` (costa-hotel-i, costa-hotel-ii, cosvita), `/quartos`, `/quartos/:roomSlug`, `/servicos`, `/gastronomia`, `/eventos`, `/galeria`, `/contactos`.

Reservas: `/reservar` e `/reservar/resultado`. Existe uma página 404 personalizada.

## Como manter o conteúdo

| O que alterar | Onde |
| --- | --- |
| Contactos, moradas e aviso de demonstração | `src/data/config.ts` |
| Hotéis, quartos, ofertas e experiências | `src/data/content.ts` |
| Detalhes dos quartos (comodidades, condições) | `src/data/roomDetails.ts` |
| Restaurantes, bares e menus | `src/data/dining.ts` |
| Secções e textos de cada página de hotel | `src/data/profiles.ts` |
| Salas de eventos e capacidades | `HALLS` em `src/components/halls.tsx` |
| Fotografias | `src/data/media.ts` |
| Cores e tipografia | `tailwind.config.js` e `src/styles/index.css` |
| Textos legais | `src/pages/legal.tsx` |

A paleta base é: azul `#102A43`, azul profundo `#071A2B`, amarelo `#F2C14E`. Títulos em Cormorant Garamond e texto em Inter.

## Preparação para backend

Os componentes obtêm os dados através de `src/services/api.ts`. Para integrar uma API, substitua as funções desse ficheiro por chamadas HTTP mantendo os tipos de `src/types`. O backoffice (unidades, quartos, tarifas, disponibilidade, reservas, pagamentos, campanhas, menus, eventos e avaliações verificadas) não faz parte desta fase.

## Antes de publicar

- [ ] Validar as classificações (3, 4 e 5 estrelas) e as referências históricas (Costa Hotel, O Sete, Bar Marina, Espaço Carine)
- [ ] Substituir contactos, moradas e coordenadas por dados oficiais
- [ ] Substituir as fotografias ilustrativas por fotografias oficiais e licenciadas
- [ ] Substituir tarifas, capacidades, menus e ofertas por dados reais
- [ ] Rever os textos legais com um jurista
- [ ] Alojar localmente os tipos de letra (Google Fonts) e as imagens, para evitar pedidos a terceiros
- [ ] Ligar as redes sociais aos perfis oficiais
- [ ] Completar a tradução para inglês antes de activar o selector de idioma
- [ ] Gerar sitemap e metadados por página

## Limitações desta fase

Sem reservas reais, pagamentos, disponibilidade em tempo real, envio de e-mails ou armazenamento de dados. As referências de reserva são fictícias. O selector de idioma mostra apenas o português.
