# Contexto para novas sessões: Ótica Girêh

Leia este arquivo primeiro. Ele resume o que existe, o que foi decidido e onde está cada coisa.

## Foco
**A partir de 16/11/2026, o trabalho é exclusivamente para a Ótica Girêh Caju** (decisão do dono). As páginas da Pinheiro e da Baixa do Sapateiro já existem e ficam como estão: não amplie nem mude nada nelas, a não ser que o dono peça.

## Girêh Caju: fatos confirmados
- **Nome:** Ótica Girêh, com circunflexo. **Slogan: "Qualidade em visão".** No mercado **desde 2009**.
- **Endereço:** Rua da Felicidade, 41, loja. Caju, Rio de Janeiro – RJ.
- **WhatsApp:** (21) 96904-5909 (`5521969045909`).
- **Horário:**
  - segunda, 9h às 18h;
  - terça a sexta, 9h às 20h;
  - sábado, 9h às 18h30;
  - domingo fechado.
- **Exame de vista:** todo sábado, das 14h30 às 18h30, **por ordem de chegada**. É **gratuito na compra dos óculos**.
- **Marcas:** Ray-Ban, Oakley, HB, Ana Hickmann e Hickmann.
- **Armações:** metal, balgriff, fio de nylon e acetato.
- **Lentes:** antirreflexo, blue filter, fotocromática, Transitions e polarizada (a "branca" fica de fora). Os tipos são visão simples, multifocal/progressiva, bifocal e ocupacional.
- **Instagram:** @oticagireh e @oticagirehoficial (os dois são divulgados).
- **Página de lentes do dono (referência):** https://vizum.app/lentes/cm9njl05x0005113hmtwdpg2b

**Ainda não confirmado (não afirmar):** quem faz o exame, se atende criança, quanto tempo leva, formas de pagamento e parcelamento, prazo de entrega, garantia, pontos de referência do endereço e fotos reais da loja.

## Site
- **Stack:** Astro 7, gerando um site estático. O deploy é na Vercel. O design segue o método Impeccable, já instalado em `.claude/skills/impeccable`; para reinstalar o binário, rode `npx impeccable install --project --providers=claude`.
- **Repositório:** `FellipeLorram/otica-gireh` (GitHub, privado). O `main` faz deploy na Vercel.
- **Páginas prontas:**
  - `/`
  - `/exame-de-vista/`
  - `/lojas/`
  - `/lojas/caju/`
  - `/lojas/pinheiro/`
  - `/lojas/baixa-do-sapateiro/`
  - `/oculos-e-lentes/`
  - `/404`
  - `/fundamentos/` (catálogo do design system)
- **Dados:** tudo sai de `src/data/unidades.ts` (horários, telefones, endereços, exames, marcas e o JSON-LD `schemaOtica`). Nunca escreva esses dados à mão nas páginas.
- **Estado "aberto agora":** é calculado no navegador pelo fuso America/Sao_Paulo.

## Documentos (leia antes de mexer)
| Arquivo | Para quê |
|---|---|
| `PRODUCT.md` | Público, propósito, fatos e o que está pendente |
| `DESIGN.md` | O design system "Ladrilho azul": tokens, componentes e regras |
| `DIRETRIZ-PAGINAS.md` | Como criar uma página nova sem destoar das outras |
| `ESTRUTURA.md` | Mapa do site e seções de cada página |
| `IMAGENS.md` | Lista de fotos que faltam (códigos F01–F16) |
| `.impeccable/surfaces/` | Contrato de direção da Início |

## Decisões de design que não se discutem de novo
- **Cores:** o azul da fachada da Caju, clareado. O chão da página é azul-claro (#BCD0EF) e os campos fortes são azul-fachada (#1D3B7C). O amarelo-gema (#F5B82E) aparece só na ação, uma vez por tela.
- **Forma:** ladrilho hidráulico. Cada loja tem um padrão: Caju = Rosácea, Pinheiro = Estrela, Baixa = Escamas, marca = Lente. Rejunte de 3px, quinas retas, sem sombras.
- **Tipografia:** Archivo Expanded (títulos) e Atkinson Hyperlegible Next (texto, pensada para baixa visão). Texto corrido com 18px ou mais.
- **Logo:** redesenhado a partir do original; o olho faz o "Ó". A referência do original está em `assets/ref/logo-original.png`.
- **Hero da Início:** foca no exame de vista. O orçamento é a segunda ação.
- **Fotos:** fotos de banco que fingem ser a loja estão proibidas. As mídias de lentes vêm do domínio do dono, com autorização dele.
- **Texto:** tom profissional e direto. A loja fala no plural ("respondemos") e trata o cliente por "você"; nada de "a gente" nem gíria. Escreva sempre "gratuito na compra dos óculos" por inteiro. Não use "consulta", "diagnóstico" nem "receita médica". Não invente preços, prazos ou avaliações. A regra completa está em "Voz e texto", no `DESIGN.md`.

## Para verificar mudanças
`npx astro build`, depois `.claude/skills/impeccable/scripts/impeccable detect --json src` (tem que dar zero achados), e capturas em 1440 e 390 de largura sem rolagem lateral (ver `DIRETRIZ-PAGINAS.md`).
