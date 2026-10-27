# Grupo Solar · Website institucional

Website de uma rede hoteleira angolana com três unidades: **Costa Hotel I** (3 estrelas), **Costa Hotel II** (4 estrelas) e **COSVITA** (5 estrelas). Desenhei e desenvolvi o frontend de raiz, com foco numa experiência premium, cuidada em telemóvel e preparada para, mais tarde, ligar a uma API e a um backoffice.

**Demonstração:** https://grupo-solar.vercel.app

> **Nota:** esta é a primeira fase do projecto. O frontend é estático e não tem backend: as reservas, os formulários e a newsletter são simulações locais. Todo o conteúdo (tarifas, menus, capacidades, ofertas, contactos e textos legais) é demonstrativo e será substituído por informação oficial. As fotografias são ilustrativas e não representam as instalações reais.

## O que construí

- **Três hotéis, três personalidades.** Cada unidade tem a sua própria página, com secções, tom e layout diferentes, mantendo a mesma identidade institucional.
- **Navegação com memória do hotel.** Quando se escolhe uma unidade, o site lembra-se dela: o menu, os atalhos, a pesquisa, as reservas, a gastronomia, as ofertas e os eventos passam a estar direccionados para esse hotel.
- **Pesquisa de estadia moderna.** Um único campo de datas com calendário de intervalo, selector de hóspedes e quartos com contadores, e validação de datas e capacidade.
- **Quartos detalhados.** Galeria, factos principais, comodidades agrupadas, condições e painel de reserva com cálculo de noites e total.
- **Reservas em formato de postal.** Fluxo completo e simulado (pesquisa, quarto, dados do hóspede, resumo e confirmação), com cartões inspirados em postais.
- **Gastronomia.** Restaurantes e bares por hotel, com fotografias e menus por secção.
- **Eventos.** Salas por unidade, com capacidades por formato, filtro por número de pessoas e pedido de orçamento.
- **Piscina, ofertas, experiências, galeria e contactos**, cada um com o seu próprio formato, e um **comparador de unidades** com recomendação por perfil de viagem.
- **Páginas legais e institucionais** completas: privacidade, termos, cookies e sobre.
- **Responsivo e acessível.** Desenhado para telemóvel, com navegação por teclado, foco visível, textos alternativos e respeito pela preferência de movimento reduzido.

## Tecnologias

React 18 · TypeScript · Vite · Tailwind CSS · React Router · Framer Motion · React Hook Form · Zod · date-fns · Lucide React

## Como correr o projecto

Requisitos: Node.js 18 ou superior.

```bash
npm install        # instalar dependências
npm run dev        # servidor de desenvolvimento em http://localhost:5173
npm run build      # verificação de tipos e build de produção (pasta dist/)
npm run preview    # pré-visualizar o build
```

## Estrutura

```
src/
  App.tsx                rotas
  components/            layout, logótipo SVG, pesquisa, campos, formulários,
                         galeria, gastronomia, salas de eventos, piscina
  pages/                 páginas (hotéis, reservas, comparador, contactos, legais...)
  hooks/                 memória do hotel escolhido
  data/                  conteúdo centralizado (hotéis, quartos, menus, perfis...)
  services/api.ts        camada local, pronta para ser trocada por uma API
  types/                 interfaces TypeScript
public/                  favicon e robots.txt
```

## Decisões técnicas

- **Conteúdo separado da interface.** Hotéis, quartos, menus, ofertas e contactos vivem em `src/data/`, e os componentes recebem-nos por props ou por funções de acesso. Assim, trocar o conteúdo demonstrativo por dados oficiais não exige mexer na interface.
- **Camada de serviços.** `src/services/api.ts` expõe funções com a forma de uma futura API. Para integrar um backend, basta substituir a implementação mantendo os tipos.
- **Formulários validados.** Todos os formulários usam React Hook Form com esquemas Zod, mensagens de erro claras e estados de sucesso.
- **Sem dados enviados.** Nada sai do navegador. A única informação guardada é a unidade escolhida, no armazenamento local, para personalizar a navegação.
- **Componentes de campo próprios.** Calendário de intervalo, contadores, listas suspensas e separadores feitos à medida, em vez de campos nativos, para uma experiência mais moderna e consistente.

## Estado e próximos passos

- [x] Frontend completo e publicado
- [ ] Substituir o conteúdo demonstrativo por informação oficial e fotografias licenciadas
- [ ] Tradução para inglês
- [ ] Backend e disponibilidade em tempo real
- [ ] Reservas reais e pagamentos
- [ ] Backoffice (unidades, quartos, tarifas, campanhas e conteúdos)
- [ ] SEO por página e sitemap

## Imagens e marca

As fotografias vêm do [Unsplash](https://unsplash.com) e servem apenas como ilustração durante esta fase. O nome e o logótipo do Grupo Solar pertencem ao cliente.

## Autor

Desenvolvido por **Nicola D. João** · [CODEX](https://www.codex.pt)

## Licença

Todos os direitos reservados © CODEX. O código é público para consulta e portfólio; a sua utilização comercial requer autorização.
