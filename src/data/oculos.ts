// Conteúdo da página Óculos e lentes.
// Lentes e tratamentos: parafraseado da página de lentes do próprio dono (vizum.app), sem a lente "Branca".
// Nada de preço, prazo ou garantia aqui.

export type TipoArmacao = "metal" | "balgriff" | "nylon" | "acetato";

export const armacoes: { id: TipoArmacao; nome: string; texto: string }[] = [
  {
    id: "metal",
    nome: "Metal",
    texto: "Aro fino de metal em volta de toda a lente, com plaquetas que se ajustam ao nariz.",
  },
  {
    id: "balgriff",
    nome: "Balgriff",
    texto: "Sem aro. A lente é presa por parafusos na ponte e nas hastes.",
  },
  {
    id: "nylon",
    nome: "Fio de nylon",
    texto: "Meio aro. O aro fica em cima e um fio de nylon segura a lente por baixo.",
  },
  {
    id: "acetato",
    nome: "Acetato",
    texto: "Aro inteiro de acetato, um plástico firme. O aro é mais grosso e vem em várias cores.",
  },
];

export interface Midia {
  tipo: "foto" | "video";
  src: string;
  poster?: string;
  alt: string;
  /** Foto de comparação dividida ao meio: rótulo da metade esquerda e da direita. */
  rotulos?: [string, string];
  largura: number;
  altura: number;
}

export interface Tratamento {
  id: string;
  itens: { nome: string; texto: string }[];
  midia: Midia;
}

const M = "/midia/oculos";

export const tratamentos: Tratamento[] = [
  {
    id: "antirreflexo",
    itens: [
      {
        nome: "Antirreflexo",
        texto:
          "Tira os reflexos da lente e deixa ela mais transparente. A visão fica mais nítida, com mais conforto no dia a dia.",
      },
    ],
    midia: {
      tipo: "foto",
      src: `${M}/antirreflexo.webp`,
      rotulos: ["Com antirreflexo", "Sem antirreflexo"],
      alt: "A mesma mulher de óculos duas vezes, lado a lado. À esquerda, com antirreflexo, os olhos aparecem através da lente. À direita, sem antirreflexo, a janela reflete na lente.",
      largura: 1200,
      altura: 896,
    },
  },
  {
    id: "blue-filter",
    itens: [
      {
        nome: "Blue filter",
        texto:
          "Filtra a luz azul das telas, a luz UV e a luz de LED. Para quem passa muito tempo no celular ou no computador.",
      },
    ],
    midia: {
      tipo: "foto",
      src: `${M}/blue-filter.webp`,
      alt: "Homem de óculos trabalhando no computador à noite, com o rosto iluminado pela tela.",
      largura: 1200,
      altura: 896,
    },
  },
  {
    id: "fotocromatica",
    itens: [
      {
        nome: "Fotocromática",
        texto: "Fica clara dentro de casa e escurece sozinha no sol.",
      },
      {
        nome: "Transitions",
        texto: "Lente importada que também escurece no sol. Costuma durar mais que a fotocromática comum.",
      },
    ],
    midia: {
      tipo: "video",
      src: `${M}/fotocromatica.mp4`,
      poster: `${M}/fotocromatica-poster.webp`,
      alt: "Mulher de óculos andando entre a rua e uma loja: a lente fica escura no sol e clara no lugar fechado.",
      largura: 752,
      altura: 560,
    },
  },
  {
    id: "polarizada",
    itens: [
      {
        nome: "Polarizada",
        texto: "Corta o brilho que reflete da água, do asfalto e do capô do carro. Boa para dirigir e para dias de muito sol.",
      },
    ],
    midia: {
      tipo: "video",
      src: `${M}/polarizada.mp4`,
      poster: `${M}/polarizada-poster.webp`,
      alt: "Vista de um rio através de uma lente escura: com a lente polarizada, o brilho do sol na água some e as pedras do fundo aparecem.",
      largura: 752,
      altura: 560,
    },
  },
];

export const tiposLente = [
  { nome: "Visão simples", texto: "Um grau só, para longe ou para perto." },
  { nome: "Multifocal ou progressiva", texto: "Longe, computador e perto na mesma lente, sem linha aparente." },
  { nome: "Bifocal", texto: "Longe e perto, separados por uma linha que aparece na lente." },
  { nome: "Ocupacional", texto: "Para perto e para o computador. Feita para quem trabalha de perto ou na tela." },
];

export const combinacoes = [
  {
    itens: ["Antirreflexo", "Blue filter", "Fotocromática ou Transitions"],
    texto: "Menos reflexo, conforto na tela e lente que escurece no sol.",
  },
  {
    itens: ["Antirreflexo", "Blue filter"],
    texto: "Para quem passa o dia no celular ou no computador.",
  },
  {
    itens: ["Antirreflexo", "Fotocromática ou Transitions"],
    texto: "Visão nítida e uma lente que escurece sozinha no sol.",
  },
];
