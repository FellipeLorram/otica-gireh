# Estrutura do site: Ótica Gireh

Toda página tem o mesmo cabeçalho e o mesmo rodapé. No celular, a barra "Pedir orçamento" fica fixa embaixo da tela. A ação nº 1 é sempre a mesma: escolher a loja e abrir o WhatsApp dela com a foto da receita.

## Mapa

| Rota | Página | Para quê |
|---|---|---|
| `/` | Início (pronta) | Mostrar o orçamento logo de cara e encaminhar para o exame e para a loja mais perto |
| `/exame-de-vista/` | Exame de vista | Dizer quando, onde e como fazer o exame em cada loja |
| `/lojas/` | Lojas | As três lojas lado a lado, para escolher a mais perto |
| `/lojas/caju/` | Gireh Caju | Tudo da loja 01 |
| `/lojas/pinheiro/` | Gireh Pinheiro | Tudo da loja 02 |
| `/lojas/baixa-do-sapateiro/` | Gireh Baixa do Sapateiro | Tudo da loja 03 |
| `/oculos-e-lentes/` | Óculos e lentes | O que tem na loja: marcas, armações, solares e lentes |
| `/404` | Não encontrada | Volta para as lojas e para o orçamento |

## Seções por página

### Início (`/`)
1. **Primeira tela (orçamento):**
   - à esquerda, o título "Mande a foto da receita. A gente diz quanto fica.";
   - à direita, o orçamento em ladrilhos (`#orcamento`);
   - logo abaixo, uma faixa do barrado com "Exame de vista gratuito na compra dos óculos".
2. **Como funciona:** três passos em ladrilho. Escolha a loja, mande a foto da receita, receba o orçamento e as opções.
3. **Exame de vista, resumo:** a agenda das três lojas numa só tabela (loja, dia, horário, modo) e o link para a página do exame.
4. **As lojas:** os três cartões de unidade, com estado "aberto agora", horários e WhatsApp.
5. **Marcas:** Ray-Ban, Oakley, HB, Ana Hickmann e Hickmann, mais o link para Óculos e lentes.
6. **Fotos da loja:** F04 (atendimento), F09 (expositor) e F01 (fachada), num piso de 3 ladrilhos.
7. **Instagram:** os dois perfis.

### Exame de vista (`/exame-de-vista/`)
1. **Primeira tela:** "Exame de vista gratuito na compra dos óculos" e a pergunta do visitante: em qual loja e em que dia?
2. **Agenda por loja:** um ladrilho por unidade com dia, horário e modo (ordem de chegada ou agendamento), e a ação certa de cada uma:
   - Caju: "É só chegar" e "Como chegar";
   - Pinheiro e Baixa: "Agendar pelo WhatsApp".
   Na Baixa, a nota "a cada 15 dias, confirme a data".
3. **Como é o exame:** o que levar (óculos atuais, receita antiga se tiver) e quanto tempo leva [PENDENTE com o dono]. Foto F07/F08.
4. **Perguntas frequentes:** precisa comprar? atende criança? [CONFIRMAR as respostas].
5. **Ação:** pedir orçamento.

### Lojas (`/lojas/`)
Os três cartões de unidade grandes, cada um com seu ladrilho, e a foto da fachada (F01–F03) por cima do cartão.

### Página de cada loja (`/lojas/[loja]/`)
1. **Primeira tela:**
   - o ladrilho da loja em tamanho grande, em piso 2x2;
   - nome e bairro;
   - estado "aberto agora";
   - botão gema "WhatsApp da [loja]".
2. **Endereço e mapa:** "Como chegar" no Google Maps e pontos de referência [PENDENTE].
3. **Horários:** a tabela de horários, com a linha de hoje marcada.
4. **Exame nesta loja:** dia, horário e modo.
5. **Fotos:** a fachada e o interior (F01–F03, F14–F16).
6. **Outras lojas:** os ladrilhos das outras duas.

Cada loja também leva os dados estruturados `schema.org/Optician`, com horário, endereço e telefone, para aparecer certo no Google.

### Óculos e lentes (`/oculos-e-lentes/`)
1. **Primeira tela:** "Armação, lente e solar para a família toda" [copy a validar].
2. **Marcas:** o piso de ladrilhos com os nomes.
3. **Tipos de lente:** o desenho de uns óculos com anotações diretas (visão simples, multifocal, antirreflexo, fotossensível) [CONFIRMAR quais a loja oferece].
4. **Solares e infantil:** fotos F11 e F12, se houver.
5. **Ação:** "Mande a receita e receba as opções" (orçamento).

## Componentes

| Componente | Situação |
|---|---|
| Ladrilho (4 padrões × 3 tons) | pronto |
| Logo (noite / esmalte) e favicon | pronto |
| Botão (primário, fachada, linha) | pronto |
| Selo (exame, fachada, aberto, fechado, pendente) | pronto |
| Estado da loja (aberto agora / exame hoje) | pronto |
| Tabela de horários | pronto |
| Orçamento em ladrilhos | pronto |
| Cartão de unidade | pronto |
| Barrado | pronto |
| Marcas | pronto |
| Espaço de imagem | pronto |
| Cabeçalho + menu do celular | pronto |
| Barra de ação (celular) | pronto |
| Rodapé | pronto |
| Como funciona (3 passos) | pronto |
| Agenda de exames (tabela das 3 lojas) | pronto |
| Óculos anotados (tipos de lente) | a fazer, com Óculos e lentes |
| Perguntas frequentes (sanfona) | a fazer, com Exame de vista |
| Como chegar (link do Google Maps por endereço) | pronto |
