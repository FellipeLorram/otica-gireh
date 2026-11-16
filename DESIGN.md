---
name: Ótica Girêh
description: Ótica de bairro no Caju e na Maré. Orçamento pelo WhatsApp e exame de vista gratuito na compra.
colors:
  azul-noite: "#0e1c3d"
  azul-fachada: "#1d3b7c"
  azul-meio: "#4d6fb3"
  azul-claro: "#bcd0ef"
  azul-nevoa: "#e3ecf8"
  branco-esmalte: "#f8fafd"
  rejunte: "#a9bddf"
  texto-2: "#34477a"
  texto-2-escuro: "#c9d7f0"
  gema: "#f5b82e"
  gema-forte: "#e09f12"
  aberto: "#17704a"
  fechado: "#a3261e"
  aberto-fundo: "#d5ecdf"
  aberto-tinta: "#0d4a30"
  fechado-fundo: "#f6dcd9"
  fechado-tinta: "#74180f"
typography:
  display:
    fontFamily: "Archivo Variable, Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(2.5rem, 1rem + 4.4vw, 4.6rem)"
    fontWeight: 820
    lineHeight: 0.94
    letterSpacing: "-0.02em"
  titulo:
    fontFamily: "Archivo Variable, Archivo, sans-serif"
    fontSize: "clamp(1.9rem, 1.2rem + 2.6vw, 3rem)"
    fontWeight: 780
    lineHeight: 1.04
    letterSpacing: "-0.015em"
  subtitulo:
    fontFamily: "Archivo Variable, Archivo, sans-serif"
    fontSize: "clamp(1.35rem, 1.1rem + 0.9vw, 1.75rem)"
    fontWeight: 720
    lineHeight: 1.12
  corpo:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
  corpo-grande:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 400
    lineHeight: 1.55
  gema:
    fontFamily: "Archivo Variable, Archivo, sans-serif"
    fontSize: "clamp(1.25rem, 0.85rem + 1vw, 1.65rem)"
    fontWeight: 820
    lineHeight: 1.02
  ladrilho:
    fontFamily: "Archivo Variable, Archivo, sans-serif"
    fontSize: "clamp(1.05rem, 0.8rem + 1vw, 1.5rem)"
    fontWeight: 780
    lineHeight: 1.05
  acao:
    fontFamily: "Archivo Variable, Archivo, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 720
    lineHeight: 1.15
  apoio:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.45
  mini:
    fontFamily: "Archivo Variable, Archivo, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 680
    lineHeight: 1.2
  rotulo:
    fontFamily: "Archivo Variable, Archivo, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 680
    letterSpacing: "0.05em"
rounded:
  quina: "2px"
spacing:
  e-1: "4px"
  e-2: "8px"
  e-3: "12px"
  e-4: "16px"
  e-5: "24px"
  e-6: "32px"
  e-7: "48px"
  e-8: "64px"
  e-9: "96px"
  rejunte: "3px"
  alvo: "56px"
components:
  botao-primario:
    backgroundColor: "{colors.gema}"
    textColor: "{colors.azul-noite}"
    rounded: "{rounded.quina}"
    padding: "12px 24px"
    height: "{spacing.alvo}"
  botao-primario-hover:
    backgroundColor: "{colors.gema-forte}"
  botao-fachada:
    backgroundColor: "{colors.azul-fachada}"
    textColor: "{colors.branco-esmalte}"
    rounded: "{rounded.quina}"
    padding: "12px 24px"
    height: "{spacing.alvo}"
  botao-fachada-hover:
    backgroundColor: "{colors.azul-noite}"
  botao-linha:
    backgroundColor: "transparent"
    textColor: "{colors.azul-noite}"
    rounded: "{rounded.quina}"
    padding: "12px 24px"
    height: "{spacing.alvo}"
  selo-exame:
    backgroundColor: "{colors.azul-claro}"
    textColor: "{colors.azul-noite}"
    rounded: "{rounded.quina}"
    padding: "5px 10px"
  selo-fachada:
    backgroundColor: "{colors.azul-fachada}"
    textColor: "{colors.branco-esmalte}"
    rounded: "{rounded.quina}"
    padding: "5px 10px"
  ladrilho-acao:
    backgroundColor: "{colors.gema}"
    textColor: "{colors.azul-noite}"
    padding: "24px"
  cartao-unidade:
    backgroundColor: "{colors.branco-esmalte}"
    textColor: "{colors.azul-noite}"
    padding: "24px"
  barrado:
    backgroundColor: "{colors.azul-fachada}"
    textColor: "{colors.branco-esmalte}"
    height: "24px"
---

# Design System: Ótica Girêh

## Overview

**Creative North Star: "Ladrilho azul"**

O site é um piso de ladrilho hidráulico, desses do comércio antigo carioca, pintado no azul da fachada da Girêh, só que mais claro. A página é montada em módulos quadrados, separados por um rejunte fino. Cada loja tem o seu padrão de ladrilho: Rosácea para a Caju, Estrela para a Pinheiro, Escamas para a Baixa do Sapateiro, e Lente para a marca. O padrão identifica a loja em todo lugar onde ela aparece: no orçamento, no cartão, na página da unidade.

O azul ocupa campos inteiros e não fica só no detalhe (estratégia Committed). A ação aparece em um único amarelo-gema por tela. A densidade é baixa e o texto é grande, porque quem procura ótica muitas vezes enxerga mal. A profundidade vem do rejunte e da troca de tom, nunca de sombra.

Este documento recusa o padrão do setor: fundo branco, azul clínico, foto de modelo de óculos, banner de promoção e grade de cards de serviço.

**Key Characteristics:**
- Grid de módulos quadrados com rejunte de 3px (`--rejunte`).
- Um padrão de ladrilho por unidade, sempre o mesmo.
- Azul em campos inteiros e gema só na ação.
- Display Archivo Expanded pesado (letra caixa de fachada) e texto em Atkinson Hyperlegible Next.
- Quinas retas, sem sombras, alvo de toque de 56px.

## Colors

Uma família só de azuis, puxada da fachada, e um amarelo que só aparece onde o cliente age.

### Primary
- **Azul-fachada** (#1D3B7C): o azul da fachada da loja. Campos fortes (topo, barrado, cartão selecionado), a peça escura dos ladrilhos e o botão secundário forte.
- **Azul-claro** (#BCD0EF): a fachada clareada, o "tom mais claro" pedido pelo dono. É o **chão da página** (fundo do `body`) e o campo de toda seção que não é Azul-fachada. Também é o selo de exame.

### Secondary
- **Gema** (#F5B82E): a ação. O botão "Pedir orçamento", o ladrilho do WhatsApp e a seleção de texto. Hover em Gema-forte (#E09F12). Sempre com texto Azul-noite (contraste 9,4:1).

### Tertiary
- **Azul-meio** (#4D6FB3): o segundo tom dos ladrilhos e do barrado, e os números das unidades em rótulo grande. Nunca serve para texto corrido sobre fundo claro.

### Neutral
- **Azul-noite** (#0E1C3D): texto, contornos, botão do WhatsApp dentro do ladrilho gema.
- **Azul-névoa** (#E3ECF8): só superfície de leitura secundária (espaço de imagem, caixas da página de fundamentos). Nunca é o campo de uma seção.
- **Branco-esmalte** (#F8FAFD): o esmalte do ladrilho. Superfície de leitura e de cartões.
- **Rejunte** (#A9BDDF): as linhas entre módulos e as bordas dos cartões.
- **Texto-2** (#34477A): texto secundário sobre fundo claro (7,6:1 sobre névoa). Sobre Azul-fachada, o secundário é **Texto-2-escuro** (#C9D7F0).
- **Aberto** (#17704A) / **Fechado** (#A3261E): só nos selos de estado. Os selos usam fundo e tinta próprios: Aberto-fundo #D5ECDF com Aberto-tinta #0D4A30, Fechado-fundo #F6DCD9 com Fechado-tinta #74180F (8:1 ou mais).

### Named Rules
**A Regra da Gema.** O amarelo-gema aparece em um lugar por tela, onde o cliente pede orçamento. Não pode virar decoração, fundo de seção ou destaque de título.

**A Regra do Campo.** O azul entra como campo inteiro (seção, faixa, ladrilho) e não como borda colorida ou detalhe espalhado num fundo branco.

**A Regra da Fachada.** Toda cor nova precisa sair da fachada real da loja. Sem verde-WhatsApp e sem gradiente.

## Typography

**Display Font:** Archivo Variable, eixo de largura em 112–125% (fallback: Arial Narrow)
**Body Font:** Atkinson Hyperlegible Next (fallback: system-ui)

**Character:** A Archivo larga e pesada lembra letra caixa de fachada de comércio: lida de longe, sem frescura. A Atkinson foi desenhada pelo Braille Institute para quem enxerga pouco: I, l e 1 não se confundem, nem 0 e O. Para uma ótica, a escolha é funcional.

### Hierarchy
- **Display** (820, clamp 2.5–4.6rem, 0.94, largura 125%): uma por página, a frase principal.
- **Título** (780, clamp 1.9–3rem, 1.04, largura 118%): título de seção.
- **Subtítulo** (720, clamp 1.35–1.75rem, 1.12, largura 108%): nome da unidade, títulos de cartão.
- **Corpo** (400, 1.125rem/18px, 1.55): texto corrido, com no máximo 64ch por linha.
- **Corpo grande** (400, 1.3rem): parágrafo de abertura de seção.
- **Ladrilho** (780, clamp 1.05–1.5rem): texto dentro de ladrilho (nome da loja no orçamento, marcas, linha do barrado).
- **Gema** (820, clamp 1.25–1.65rem): o título da ação dentro do ladrilho gema. Quebra com hífen quando precisa.
- **Ação** (720, 1.0625rem, largura 112%): botões e links do menu.
- **Apoio** (400, 1rem): tabelas de horário, notas, texto do rodapé.
- **Mini** (680, 0.8125rem): selos. É o menor tamanho permitido.
- **Rótulo** (680, 0.9rem, +0.05em, caixa alta, largura 112%): número da unidade, passo do orçamento.

### Named Rules
**A Regra dos 18.** O texto corrido nunca fica abaixo de 18px. Informação útil, como modo de exame ou horário, nunca fica abaixo de 13px.

**A Regra do Sem-Kicker.** Nada de rótulo pequeno em cima de título, nem "Unidade 02", nem "Passo 1". O número fixo da loja entra na própria linha do título, em Azul-meio: "**01** Girêh Caju". A caixa alta do Rótulo só aparece em cabeçalho de tabela.

## Layout

O piso: tudo encaixa em módulos quadrados com rejunte de 3px (`gap: var(--rejunte-w)` sobre fundo `--rejunte`). Container de até 76rem com 24px de margem lateral. As seções alternam dois campos inteiros, Azul-claro (o chão) e Azul-fachada (topo, exame, Instagram, rodapé), com 96px de respiro vertical (`--e-9`). O barrado marca a troca de assunto. Conteúdo de leitura (cartões, tabelas, passos, marcas) é sempre esmalte, assentado com rejunte de 3px num piso único, nunca solto com espaço entre os itens.

A escala de espaço tem base 4: 4, 8, 12, 16, 24, 32, 48, 64, 96. Grupos internos ficam apertados (8–12px) e a separação entre blocos é generosa (48–96px). Há mais espaço acima de um título do que abaixo dele.

No celular, o orçamento 2x2 vira uma fileira de três ladrilhos de unidade com a ação gema embaixo, na largura toda. Cartões de unidade empilham numa coluna.

## Elevation & Depth

Não há sombras. A profundidade vem de três recursos:
- o rejunte de 3px entre módulos;
- a troca de tom entre campos;
- a peça selecionada, que muda do esmalte para o azul-fachada e "assenta" com um quarto de volta no padrão.

### Named Rules
**A Regra do Piso.** O piso é plano. Elevação, quando existe, é troca de cor. Sombra é proibida, inclusive a sombra dura deslocada.

## Shapes

Quinas retas (2px nos controles, 0 nos ladrilhos). O quadrado é a forma-mãe: ladrilhos, cores da paleta e o piso do orçamento são quadrados 1:1. Linhas são de 3px (rejunte) ou 2px (contorno de botão e divisores internos). Os desenhos dos ladrilhos usam só círculos, quartos de círculo, losangos e pétalas, em duas camadas de azul sobre o esmalte.

## Components

### Buttons
- **Shape:** quinas retas (2px), altura mínima de 56px, Archivo 720 a 112% de largura e ícone Tabler à esquerda.
- **Primário (gema):** fundo Gema, texto e contorno de 2px em Azul-noite. É o "Pedir orçamento" / WhatsApp, um por tela.
- **Fachada:** fundo Azul-fachada, texto Branco-esmalte. Hover em Azul-noite. Para "Agendar exame".
- **Linha:** contorno de 2px em Azul-noite e fundo transparente. Hover inverte. Para "Como chegar" e "Ver as lojas".
- **Linha-clara:** contorno Azul-claro e texto esmalte sobre campos Azul-fachada (hero, faixa do Instagram). Hover vira esmalte com texto noite.
- **Hover / Focus:** a seta final anda 3px. O foco é um contorno de 3px em Azul-noite com 3px de afastamento (em gema sobre campos azul-fachada). Ao clicar, desce 1px.

### Chips (Selos)
- **Exame:** Azul-claro com texto Azul-noite ("Exame por ordem de chegada" / "Exame com agendamento").
- **Fachada:** Azul-fachada com texto esmalte ("Gratuito na compra").
- **Aberto / Fechado:** tintas de verde e vermelho com ponto de estado. Só para horário.
- **Pendente:** tracejado em Azul-meio. Marca dado que ainda não foi confirmado pelo dono, para não ir ao ar por engano.

### Cards / Containers
- **Cartão de unidade:** esmalte, com o ladrilho da unidade no canto superior direito em tom fachada. O título traz o número e o nome ("01 Girêh Caju"). Embaixo vêm o bairro, o estado e a lista de fatos (endereço, telefone, exame, horário) com ícones em Azul-fachada. As ações ficam presas embaixo. Em lista, os cartões se assentam num piso só (rejunte de 3px, alturas iguais).
- **Gema no cartão:** só quando o cartão é a única loja na tela (página da loja, `destaque`). Em listas de lojas, o WhatsApp vai em Azul-fachada e "Agendar exame" e "Como chegar" em Linha, pela Regra da Gema.
- **Sem cartões genéricos:** nada de grade de ícone + título + texto. Nunca cartão dentro de cartão.

### Logo
O logo foi redesenhado a partir do logo original da loja. O olho continua fazendo o "Ó" de Ótica e é o mesmo desenho do ladrilho Lente: pálpebra de cima em traço, pálpebra de baixo cheia, íris cheia com brilho. O nome vem em Archivo 780 a 118% ("tica Girêh").
- **Versões:** noite (sobre fundo claro) e esmalte (sobre azul-fachada).
- **Uso:** SVG inline com `aria-label="Ótica Girêh"`, altura mínima de 1.25rem.
- **Favicon:** o olho em esmalte sobre azul-fachada.
- **Assinatura:** `<Logo assinatura />` acrescenta o slogan "QUALIDADE EM VISÃO" sob o nome, em Archivo 680 com 0.22em de entreletra, em caixa alta. Usado no rodapé. O slogan não aparece solto no corpo do texto.

### Navigation
- **Desktop:** barra Azul-fachada de 76px com rejunte inferior em Azul-meio. Logo esmalte à esquerda, três links em Archivo (Lojas, Exame de vista, Óculos e lentes) e o botão gema "Pedir orçamento" à direita. O link ativo ganha um sublinhado de 3px em esmalte, e o hover, em azul-claro.
- **Celular (até 56rem):** logo e botão "Menu" (`aria-expanded`). O menu abre por baixo com links de 56px separados por linhas Azul-meio e fecha com Esc. O gema sai do topo.
- **Barra de ação (celular):** fixa embaixo, fundo Azul-noite e botão gema "Pedir orçamento" na largura toda. Some quando o orçamento está na tela, para nunca haver duas ações gema juntas.

### Rodapé
Começa com o barrado e segue sobre Azul-fachada. Logo esmalte e frase. Uma coluna por loja, separada por rejunte Azul-meio no topo, com número, nome (link para a página da loja), bairro, horários, exame e WhatsApp. Embaixo, os dois Instagrams com ícone e a linha final.

### Estado da loja
Um selo calculado no navegador pelo horário de Brasília:
- "Aberto agora · fecha às 20h";
- "Fechado · abre amanhã às 9h";
- "Exame hoje, 14h30 às 18h30" (selo fachada; só para exame semanal).

Sem JavaScript, o selo não aparece: nunca mostra um estado que pode estar errado. A versão curta, usada dentro dos ladrilhos, diz "Aberto até 20h" / "Abre amanhã às 9h".

### Tabela de horários
Duas colunas. Os dias agrupados ficam em Archivo e os horários em tabular. A linha de hoje recebe fundo Azul-claro e o rótulo "hoje". Domingo aparece como "Fechado".

### Marcas
Os nomes das marcas vão escritos em Archivo 800, em Azul-fachada, cada um num ladrilho esmalte com rejunte. Nunca se usam logos de terceiros.

### Orçamento em ladrilhos (componente-assinatura)
O piso 2x2 tem três ladrilhos de unidade (botões `role="radio"`) e o ladrilho gema da ação.
- **Cada ladrilho de loja:** a janela do padrão vem em cima (no celular, à esquerda). A placa mostra "01 Caju", o modo de exame e o estado curto ("Aberto até 20h" / "Abre amanhã às 9h").
- **Antes da escolha:** o gema, com listras finas e um ícone de mão, diz "Escolha a loja". Tocar nele leva o foco para as lojas e dá um toque nos padrões. Nunca é um toque morto e nunca abre um WhatsApp sem loja.
- **Ao escolher:** o padrão da loja gira um quarto de volta e assenta (360ms, `cubic-bezier(0.16,1,0.3,1)`) e a placa fica Azul-fachada. O ladrilho gema inteiro vira o link "Abrir WhatsApp da [loja]", com o número da loja e a mensagem pronta.
- **Hover:** o padrão dá um toque de 14° e volta ao eixo do piso.
- **Teclado:** as setas percorrem as lojas.
- **Movimento reduzido:** sem giro.
- **Celular:** cada loja vira uma fileira (padrão à esquerda, texto de 16px à direita) e a ação fecha o piso, na largura toda.

### HeroPagina e Secao (esqueleto de toda página)
- **`HeroPagina`:** campo Azul-fachada, display em duas frases (a segunda em Azul-claro), sub, ações, o slot `lado` opcional e o barrado no fim. `semBarra` esconde a barra do celular quando há gema no topo.
- **`Secao`:** os campos `claro` (padrão) e `fachada` alternam e nunca ficam duas `fachada` seguidas. O h2 e o lead são opcionais.

As regras completas para criar páginas estão em `DIRETRIZ-PAGINAS.md`.

### Orçamento em modo exame
`Orcamento modo="exame"`: as placas mostram o dia e o modo do exame. Escolhida a loja, o gema leva ao mapa (exame por ordem de chegada, com ícone de pino) ou ao WhatsApp de agendamento. Uma faixa Azul-noite no pé do gema traz a segunda ação, "Já tem receita? Peça o orçamento".

### Como funciona
Três passos numa faixa de ladrilhos esmalte com rejunte. O número fica em display Azul-meio e o título e o texto vêm embaixo. No celular, empilham com o número à esquerda.

### Agenda de exames
Uma tabela (com `role="table"`) com as três lojas: o miniladrilho e o nome da loja, quando, o selo do modo e a ação certa. A Caju leva para o mapa ("É só chegar") e Pinheiro e Baixa abrem o WhatsApp com a mensagem de agendamento. O cabeçalho fica em Azul-fachada. No celular, cada loja vira um bloco empilhado.

### Barrado
Uma faixa de 24px com triângulos em Azul-meio e losangos em Azul-claro sobre Azul-fachada. Divide seções e pode levar uma linha de texto ("Exame de vista gratuito na compra dos óculos").

### Espaço de imagem
É o lugar reservado para a foto real: campo Azul-névoa com rejunte, o ladrilho Lente pequeno e o código da foto (ver `IMAGENS.md`). Quando a foto chega, vira `<img>` com a mesma proporção.

## Voz e texto

**Tom: profissional e direto.** A Girêh é uma ótica com mais de quinze anos de rua, que vende Ray-Ban e monta multifocal. O texto soa como gente que entende do assunto e não enrola: frase curta, informação na frente, zero gíria e zero floreio.

- **A loja fala no plural, em primeira pessoa:** "respondemos", "trabalhamos", "fazemos". Nunca "a gente".
- **O cliente é tratado por você:** "envie a sua receita", "escolha a loja mais perto de você".
- **Verbo na forma imperativa de cortesia:** "envie", "escolha", "marque". Nunca "manda", "chama", "dá uma olhada".
- **Nada de explicar demais.** Caíram "é só chegar", "sem complicação", "aí é só passar na loja", "do jeito que é". Em lugar deles entram "sem agendamento", "com hora marcada", "por ordem de chegada".
- **Vocabulário fixo do exame:** *gratuito na compra dos óculos*, *sem hora marcada* / *por ordem de chegada* (Caju), *com hora marcada* (Vila do Pinheiro e Baixa do Sapateiro). As mesmas palavras em todas as páginas.
- **Preposição certa pelo nome da loja:** use `de(u)` e `em(u)` de `unidades.ts` ("do Caju", "no Caju", "da Baixa do Sapateiro", "na Baixa do Sapateiro"). Nunca escreva "na Caju".
- **Sem travessão (—) em texto corrido.** Ponto ou vírgula.
- **Sem exclamação** e sem promessa que a loja não possa cumprir.

**Marca:** Ótica Girêh, com circunflexo. O slogan é **"Qualidade em visão"**, e ele aparece só na assinatura do logo (`<Logo assinatura />`), não solto no meio do texto. A casa é **de 2009**: a linha pronta está em `FRASE_MARCA` ("Desde 2009 cuidando da visão do Caju e da Maré.") e vale repetir no máximo uma vez por página.

## Do's and Don'ts

### Do:
- **Do** use o padrão de ladrilho fixo de cada unidade em todo lugar onde ela aparece (Caju = Rosácea, Pinheiro = Estrela, Baixa = Escamas).
- **Do** mantenha endereço, modo de exame, horário e WhatsApp da unidade sempre juntos.
- **Do** escreva "gratuito na compra dos óculos" por inteiro, nunca só "grátis".
- **Do** fale no plural pela loja ("respondemos") e trate o cliente por "você".
- **Do** marque com o selo Pendente todo dado ainda não confirmado.
- **Do** use texto de 18px para cima e alvos de 56px.

### Don't:
- **Don't** use foto de banco de imagem ou modelo de óculos genérico. Só fotos reais da loja.
- **Don't** use sombras, gradientes, vidro ou borda colorida lateral.
- **Don't** use o amarelo-gema fora da ação.
- **Don't** invente avaliações, números de clientes ou preços. O ano de fundação é 2009 e só esse pode ser citado.
- **Don't** use "a gente", "é só chegar", "manda" ou qualquer gíria.
- **Don't** escreva "consulta", "diagnóstico" ou "receita médica" para o exame até confirmar quem o realiza.
