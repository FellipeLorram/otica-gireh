# Diretriz para construir páginas: Ótica Girêh

Vale para todo agente ou sessão que criar uma página nova. O objetivo é que todas as páginas pareçam feitas pela mesma mão, curtas e diretas, como a Início (`src/pages/index.astro`). Na dúvida, copie o jeito da Início.

## Leia antes
1. `PRODUCT.md`: quem é o público e o que é fato confirmado.
2. `DESIGN.md`: as cores, a tipografia, os componentes e as regras com nome (Regra da Gema, do Campo, do Piso, dos 18, Sem-Kicker).
3. `ESTRUTURA.md`: o mapa e as seções da sua página.
4. `src/pages/index.astro`: a referência de composição.
5. `src/data/unidades.ts`: a **única** fonte de horários, telefones, endereços, exames e marcas.

## Esqueleto obrigatório
```astro
<Base titulo="… · Ótica Girêh" descricao="…">
  <Cabecalho atual="exame" />        {/* "lojas" | "exame" | "oculos" */}
  <main>
    <HeroPagina frases={["Frase um", "frase dois."]} sub="…" faixa="…">…</HeroPagina>
    <Secao titulo="…" lead="…">…</Secao>
    <Secao campo="fachada" titulo="…">…</Secao>
    …
  </main>
  <Rodape />
  <BarraAcao />
</Base>
```
- **Topo:** sempre `HeroPagina`. São uma ou duas frases curtas, e a segunda sai em azul-claro. O sub tem no máximo 2 linhas. O slot `lado` é opcional e pode levar um piso de ladrilhos ou o `Orcamento`. Se o topo tiver ação gema, use `semBarra`.
- **Seções:** sempre `Secao`. Os campos alternam entre `claro` (padrão) e `fachada`, e nunca ficam duas `fachada` seguidas. Use um `<Barrado />` solto para marcar troca de assunto, no máximo uma vez no meio da página.
- **Tamanho:** de 4 a 6 seções por página. Se precisar de mais, o texto está longo demais.

## Componentes que já existem (use, não recrie)
`Ladrilho`, `Logo`, `Botao` (primario, fachada, linha, linha-clara), `Selo`, `EstadoUnidade`, `TabelaHorarios`, `Orcamento` (modo `orcamento` ou `exame`), `CartaoUnidade` (`destaque` só quando é a única loja na tela), `AgendaExames`, `ComoFunciona`, `Marcas`, `EspacoImagem`, `Barrado`, `HeroPagina`, `Secao`, `Cabecalho`, `Rodape`, `BarraAcao`.

## Onde você pode escrever
- **Pode criar:** a sua página em `src/pages/…`, componentes da página em `src/components/<pagina>/…` e dados da página em `src/data/<pagina>.ts`. Mídia otimizada vai em `public/midia/<pagina>/…`.
- **Não pode editar:** tokens, `global.css`, os componentes compartilhados acima, `unidades.ts`, outras páginas e os documentos .md. Se precisar mudar algo compartilhado, **não mude**: descreva a mudança no seu relatório final.
- **Git:** se você trabalha numa worktree própria, faça um único commit no seu branch ao terminar. Nunca faça commit no `main` nem push.

## Regras visuais (resumo do DESIGN.md)
- **Gema** (#F5B82E) só na ação, uma por tela. Em listas de lojas, o WhatsApp vai em `fachada`.
- **Conteúdo de leitura** (cartões, listas, passos) vai em superfície esmalte, assentada num piso com rejunte: `gap: var(--rejunte-w); padding: var(--rejunte-w); background: var(--rejunte)`. Nunca use cartões soltos com espaço entre eles nem cartão dentro de cartão.
- **Sem kicker:** nada de rotulozinho em caixa alta em cima de título. Número de loja vai na linha do título ("**01** Girêh Caju").
- **Forma:** sem sombra, gradiente, vidro ou borda lateral colorida. As quinas são retas.
- **Tamanhos:** só os tokens de tamanho (`--fs-*`) e de espaço (`--e-*`). Texto corrido com 18px ou mais, e nada abaixo de `--fs-mini`.
- **Ícones:** Tabler outline, via `<Icone nome="…" />`.
- **Fotos:** só fotos reais da Girêh ou do domínio do dono. Até chegar a foto, use `EspacoImagem` com o código de `IMAGENS.md`.

## Regras de texto
- Português do Brasil, com tom de gente do bairro: frase curta e direta, sem jargão e sem "soluções".
- **Nome:** "Ótica Girêh", com circunflexo. Os @ do Instagram ficam sem acento.
- **Exame:** escreva sempre "gratuito na compra dos óculos", por inteiro. Não use "consulta", "diagnóstico" nem "receita médica". Não diga quem faz o exame: isso ainda não foi confirmado.
- **Nada inventado:** nada de preço, parcela, prazo, garantia, avaliação, depoimento, número de clientes ou anos de mercado. Se algo for útil mas não confirmado, deixe fora da página e liste no relatório como `[CONFIRMAR]`.
- **Dados das lojas:** horário, telefone e endereço vêm de `unidades.ts`, nunca escritos à mão. As mensagens de WhatsApp saem de `linkWhatsApp()` e `mensagemExame()`.
- Nada de travessão (—) em texto corrido. Use ponto ou vírgula.

## SEO
- `titulo` no formato "Assunto · Ótica Girêh". A `descricao` tem de 140 a 160 caracteres, com bairro e ação.
- As páginas de loja levam o JSON-LD `schemaOtica()` no `slot="head"`.

## Como verificar antes de entregar
1. `npx astro build` sem erro.
2. `.claude/skills/impeccable/scripts/impeccable detect --json <seus arquivos>` com zero achados.
3. Rode `npx astro preview --port <sua porta>` e capture com `playwright-core` (`executablePath: "/usr/bin/google-chrome"`, `args: ["--no-sandbox"]`):
   - página inteira em 1440 e 390 de largura;
   - os estados interativos.
   As portas são 4331 para Exame, 4332 para Lojas e 4333 para Óculos. Não use a 4321.
4. Confira que `document.documentElement.scrollWidth` é igual à largura (sem rolagem lateral) e olhe as capturas.
5. Salve as capturas em `.impeccable/review/<pagina>-desktop.png` e `<pagina>-mobile.png`.

## Relatório final (curto)
- arquivos criados;
- decisões de layout em 3 a 5 linhas;
- mudanças em componentes compartilhados que você propõe (sem aplicar);
- lista de `[CONFIRMAR]`;
- caminhos das capturas.
