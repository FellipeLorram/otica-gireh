---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# Surface: Home (src/pages/index.astro)

Mode: Persuade. Visitor: morador do Caju / Maré, no celular, sob sol de rua ou à noite no ônibus. Ação nº 1: pedir orçamento pelo WhatsApp da unidade certa (foto da receita). Ações 2 e 3: exame de vista (gratuito na compra), achar a unidade.

## Direction contract

THESIS: A página é um piso de ladrilho hidráulico azul e branco, no azul da fachada clareado. O grid é feito de módulos quadrados assentados com rejunte, e cada unidade tem o seu próprio padrão de ladrilho. Recusa o padrão do setor (fundo branco, azul clínico, foto de modelo, banner de promoção e cards de serviço).

OWN-WORLD: Fundo azul-claro (o tom clareado da fachada), com campos inteiros em azul-fachada. Tinta azul-noite. Ladrilhos em SVG com duas camadas de azul sobre branco-esmalte, separados por rejunte de 2 a 3px. Um único acento amarelo-gema, só na ação. Display em Archivo Expanded pesado (letra caixa de fachada), corpo em Atkinson Hyperlegible Next. Quinas retas. Sem sombras, só o rejunte.

STORY: O visitante entende que a Gireh resolve óculos no bairro: manda a receita e recebe o preço. Acredita porque vê as três lojas reais com endereço, modo de exame e o WhatsApp de cada uma. Age escolhendo a unidade e abrindo o WhatsApp.

FIRST VIEWPORT: À esquerda, ou no topo no mobile, a headline grande em Archivo Expanded: "Mande a foto da receita. A gente diz quanto fica." À direita, ou logo abaixo no mobile, o painel de ladrilhos 2x2, que é o orçamento:
- três ladrilhos de unidade (01 Caju, 02 Pinheiro, 03 Baixa do Sapateiro), cada um com seu padrão, estado "aberto agora" e modo de exame;
- o quarto ladrilho, amarelo-gema, é o botão do WhatsApp, que só nomeia o número depois que uma unidade é escolhida.
Embaixo, uma faixa de barrado azul-fachada: "Exame de vista gratuito na compra dos óculos".

FORM: Ladrilho hidráulico. Posição 6 na lista ordenada (sorteada). A paleta foi trocada pelo dono, que pediu "algo mais parecido com a cor da faixada, pode ser um tom mais claro": a fachada da Caju é azul-marinho com letras brancas, e a tradução vai para o ladrilho azul e branco. seed:20b53b752f80c53f
Reforços que esta direção ganhou:
- Instalador: o orçamento é uma sequência que não pula a escolha da unidade.
- Noturno: estado por hora em cada ladrilho.
- Zine: os tipos de lente são explicados com anotação direta no desenho.
- Dobra: as unidades têm número fixo 01/02/03.
Interação de assinatura: ao escolher uma unidade, o padrão do ladrilho dela gira um quarto de volta e assenta, e o ladrilho amarelo passa a mostrar o WhatsApp daquela loja.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved
- Endereços, horários, dias de exame e números ainda não fornecidos.
- Logo ainda não enviado. Fotos reais: lista enviada ao dono.
