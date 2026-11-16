# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (site estático, componentes reutilizáveis) com deploy na Vercel. Escolhido pelo dono.

## Users

Três perfis, todos moradores da região das unidades (Caju, Pinheiro e Baixa do Sapateiro):

- **Famílias do bairro** que precisam de óculos para alguém da casa e querem confiança, preço justo e atendimento de gente conhecida.
- **Quem ainda não tem receita** e precisa fazer o exame de vista antes de comprar.
- **Quem já tem receita** e quer resolver rápido: lente e armação boas, orçamento claro, entrega rápida.

A maioria chega pelo celular, vinda do Instagram, do Google ou de indicação.

## Product Purpose

Site da Ótica Girêh, ótica com três unidades. O site existe para levar ao **exame de vista** (gratuito na compra; o hero da Início foca nele desde 16/11/2026) e ao **pedido de orçamento pelo WhatsApp** (mandar a foto da receita), sempre na loja certa.

**Foco das próximas sessões:** daqui em diante, o trabalho é exclusivamente para a **Ótica Girêh Caju** (decisão do dono, 16/11/2026). As páginas das outras duas lojas já existem e ficam como estão.

Sucesso = mais conversas de orçamento iniciadas no WhatsApp certo para cada unidade, e menos dúvidas repetidas sobre endereço, dia de exame e horário.

## Positioning

A ótica do bairro que resolve tudo num lugar só, perto de casa: exame de vista na própria loja (gratuito na compra dos óculos), preço com parcelamento, atendimento próximo e óculos pronto rápido. Três unidades na mesma região, cada uma com seu jeito de atender o exame.

## Operating Context

- **Orçamento:** o cliente manda foto da receita pelo WhatsApp e recebe opções de lente/armação e valor.
- **Exame de vista:** gratuito na compra dos óculos. Confirmado pelo dono:
  - Girêh Caju: todo sábado, 14h30 às 18h30, por ordem de chegada.
  - Girêh Pinheiro: todo sábado, 9h30 às 13h30, com agendamento.
  - Girêh Baixa do Sapateiro: sextas, a cada 15 dias, 14h30 às 18h30, com agendamento. A data da próxima sexta se confirma pelo WhatsApp.
- **Horário de funcionamento** (confirmado; domingo fechado):
  - Caju: seg 9h às 18h; ter a sex 9h às 20h; sáb 9h às 18h30.
  - Pinheiro: seg a sex 9h às 19h; sáb 9h às 14h.
  - Baixa do Sapateiro: seg a sex 9h às 19h; sáb 9h às 14h.
- **WhatsApp** (confirmado): Caju (21) 96904-5909; Pinheiro e Baixa do Sapateiro (21) 98195-0372. Todo CTA precisa levar ao número certo da unidade escolhida.
- **Endereços** (confirmados):
  - Caju: Rua da Felicidade, 41, loja. Caju, Rio de Janeiro – RJ.
  - Pinheiro: Via B-1, 153, Vila do Pinheiro / Travessa Cinquenta e Sete, 119. Maré, Rio de Janeiro – RJ, CEP 21046-280.
  - Baixa do Sapateiro: Rua Pedro Torres, 36. Baixa do Sapateiro, Maré, Rio de Janeiro – RJ (CEP [PENDENTE]).
- **Instagram:** dois perfis, ambos divulgados no site: @oticagireh e @oticagirehoficial.

## Capabilities and Constraints

- Três unidades no Rio de Janeiro (confirmado): Caju, Vila do Pinheiro (Maré) e Baixa do Sapateiro (Maré). Endereços completos na seção Operating Context.
- Marcas trabalhadas (confirmado): Ray-Ban, Oakley, HB, Ana Hickmann, Hickmann. Aparecem só como nome, sem logos de terceiros.
- Sem agendamento online no site por enquanto: agendamento e orçamento acontecem no WhatsApp.
- Grafia da marca (confirmada pelo dono): **Girêh**, com circunflexo, no logo e em todo o texto. Os @ do Instagram continuam sem acento (oticagireh, oticagirehoficial).
- Texto sobre o exame não deve prometer "consulta", "diagnóstico" ou "receita médica" até confirmar quem faz o exame (optometrista ou oftalmologista). "Gratuito na compra" sempre escrito por inteiro, nunca só "grátis".
- Indefinidos: marcas de lentes/armações, número de parcelas, prazo de entrega, garantia, domínio.

## Brand Commitments

- Nome: Ótica Girêh. Logo original: o olho faz o "Ó" de Ótica. O dono autorizou recriar o logo; foi redesenhado no sistema mantendo o olho (`src/components/Logo.astro`). Referência: `assets/ref/logo-original.png`.
- Tom: próximo, de bairro, direto. Sem cara de rede de varejo.
- Os dois Instagrams aparecem no site.

## Evidence on Hand

- Logo original: `assets/ref/logo-original.png` (baixa resolução; serve só de referência). Fachada da Caju: `assets/ref/fachada-caju.png`.
- Fotos e vídeos de lentes: vêm do domínio do próprio dono (uploadthing, ver `src/data/oculos.ts`), otimizados em `public/midia/oculos/`. O dono autorizou o reaproveitamento.
- Fotos da loja: nenhuma ainda. O site reserva espaços de imagem e uma lista de fotos necessárias vai ao dono. Nada de fotos de banco fingindo ser a loja.
- Avaliações do Google, nota, número de clientes, tempo de mercado: não verificados. Não inventar depoimentos, números ou anos de fundação.
- Pesquisa e esboço de copy: `research/pesquisa.md`, `research/copy-esboco.md` (quase tudo marcado [CONFIRMAR]).

## Product Principles

1. **WhatsApp certo, em um toque.** Toda página leva ao número da unidade certa, com mensagem pronta.
2. **A unidade é a unidade de informação.** Endereço, dia de exame, forma de atendimento e WhatsApp sempre aparecem juntos, por loja.
3. **Clareza antes de promessa.** Gratuito na compra, ordem de chegada ou agendamento: dito do jeito que é.
4. **Gente do bairro, não rede.** O site soa e parece com quem conhece o cliente.
5. **Leve no celular.** Rápido em 4G fraco, legível no sol.

## Accessibility & Inclusion

Público amplo, incluindo idosos e pessoas com baixa visão (é uma ótica): texto grande por padrão, alto contraste, alvos de toque generosos, WCAG 2.2 AA.
