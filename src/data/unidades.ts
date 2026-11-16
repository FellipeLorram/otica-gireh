// Dados das três unidades. Campos null = PENDENTE (vem do dono antes de publicar).

export type Padrao = "rosacea" | "estrela" | "escamas" | "lente";

/** Grafia oficial da marca, confirmada pelo dono: "Girêh". */
export const NOME_LOGO = "Girêh";

/** Slogan oficial da ótica, confirmado pelo dono. */
export const SLOGAN = "Qualidade em visão";

/** Ano de fundação, confirmado pelo dono. */
export const DESDE = 2009;

/** Linha de marca usada no rodapé, na Início e nas páginas de loja. */
export const FRASE_MARCA = `Desde ${DESDE} cuidando da visão do Caju e da Maré.`;
export const NOME_TEXTO = "Girêh";

export interface Faixa {
  /** 0 = domingo … 6 = sábado */
  dias: number[];
  abre: string; // "09:00"
  fecha: string; // "18:00"
}

export interface Exame {
  modo: "chegada" | "agendamento";
  dia: number; // dia da semana
  inicio: string;
  fim: string;
  frequencia: "semanal" | "quinzenal";
}

export interface Unidade {
  id: "caju" | "pinheiro" | "baixa";
  numero: string;
  nome: string;
  nomeCurto: string;
  bairro: string;
  endereco: string | null;
  /** Telefone para exibir, ex. "(21) 96904-5909" */
  telefone: string | null;
  /** Gênero do nome curto, para as preposições: o Caju, o Pinheiro, a Baixa do Sapateiro. */
  genero: "o" | "a";
  padrao: Padrao;
  whatsapp: string | null; // só dígitos com DDI, ex. 5521999999999 — PENDENTE
  exame: Exame;
  horarios: Faixa[];
  mapa: string | null; // link do Google Maps — PENDENTE
}

export const WHATSAPP_CAJU = "5521969045909"; // (21) 96904-5909
export const WHATSAPP_PINHEIRO_BAIXA = "5521981950372"; // (21) 98195-0372

const mapa = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export const unidades: Unidade[] = [
  {
    id: "caju",
    numero: "01",
    nome: "Girêh Caju",
    nomeCurto: "Caju",
    bairro: "Caju",
    endereco: "Rua da Felicidade, 41, loja. Caju, Rio de Janeiro – RJ",
    telefone: "(21) 96904-5909",
    genero: "o",
    padrao: "rosacea",
    whatsapp: WHATSAPP_CAJU,
    exame: { modo: "chegada", dia: 6, inicio: "14:30", fim: "18:30", frequencia: "semanal" },
    horarios: [
      { dias: [1], abre: "09:00", fecha: "18:00" },
      { dias: [2, 3, 4, 5], abre: "09:00", fecha: "20:00" },
      { dias: [6], abre: "09:00", fecha: "18:30" },
    ],
    mapa: mapa("Ótica Girêh, Rua da Felicidade, 41, Caju, Rio de Janeiro"),
  },
  {
    id: "pinheiro",
    numero: "02",
    nome: "Girêh Pinheiro",
    nomeCurto: "Pinheiro",
    bairro: "Vila do Pinheiro, Maré",
    endereco: "Via B-1, 153, Vila do Pinheiro / Travessa Cinquenta e Sete, 119. Maré, Rio de Janeiro – RJ, CEP 21046-280",
    telefone: "(21) 98195-0372",
    genero: "o",
    padrao: "estrela",
    whatsapp: WHATSAPP_PINHEIRO_BAIXA,
    exame: { modo: "agendamento", dia: 6, inicio: "09:30", fim: "13:30", frequencia: "semanal" },
    horarios: [
      { dias: [1, 2, 3, 4, 5], abre: "09:00", fecha: "19:00" },
      { dias: [6], abre: "09:00", fecha: "14:00" },
    ],
    mapa: mapa("Via B-1, 153, Vila do Pinheiro, Maré, Rio de Janeiro, 21046-280"),
  },
  {
    id: "baixa",
    numero: "03",
    nome: "Girêh Baixa do Sapateiro",
    nomeCurto: "Baixa do Sapateiro",
    bairro: "Baixa do Sapateiro, Maré",
    endereco: "Rua Pedro Torres, 36. Baixa do Sapateiro, Maré, Rio de Janeiro – RJ",
    telefone: "(21) 98195-0372",
    genero: "a",
    padrao: "escamas",
    whatsapp: WHATSAPP_PINHEIRO_BAIXA,
    exame: { modo: "agendamento", dia: 5, inicio: "14:30", fim: "18:30", frequencia: "quinzenal" },
    horarios: [
      { dias: [1, 2, 3, 4, 5], abre: "09:00", fecha: "19:00" },
      { dias: [6], abre: "09:00", fecha: "14:00" },
    ],
    mapa: mapa("Rua Pedro Torres, 36, Baixa do Sapateiro, Maré, Rio de Janeiro"),
  },
];

export const marcas = ["Ray-Ban", "Oakley", "HB", "Ana Hickmann", "Hickmann"];

export const instagrams = [
  { usuario: "oticagireh", url: "https://www.instagram.com/oticagireh/" },
  { usuario: "oticagirehoficial", url: "https://www.instagram.com/oticagirehoficial/" },
];

export const textoExame = {
  chegada: "Exame sem agendamento",
  agendamento: "Exame com hora marcada",
} as const;

const DIAS = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
const DIAS_PLURAL = ["Domingos", "Segundas", "Terças", "Quartas", "Quintas", "Sextas", "Sábados"];

/** "09:00" → "9h", "18:30" → "18h30" */
export function hora(h: string): string {
  const [H, M] = h.split(":").map(Number);
  return M ? `${H}h${String(M).padStart(2, "0")}` : `${H}h`;
}

/** "Sábados, 14h30 às 18h30" / "Sextas, a cada 15 dias, 14h30 às 18h30" */
export function textoDiaExame(e: Exame): string {
  const quando = e.frequencia === "quinzenal" ? `${DIAS_PLURAL[e.dia]}, a cada 15 dias` : DIAS_PLURAL[e.dia];
  return `${quando}, das ${hora(e.inicio)} às ${hora(e.fim)}`;
}

/** Versão curta para ladrilhos: "Sábados, 14h30–18h30" / "Sextas quinzenais, 14h30–18h30" */
export function textoCurtoExame(e: Exame): string {
  const quando = e.frequencia === "quinzenal" ? `${DIAS_PLURAL[e.dia]} quinzenais` : DIAS_PLURAL[e.dia];
  return `${quando}, ${hora(e.inicio)}\u2060–\u2060${hora(e.fim)}`; // word joiner: não quebra no meio do horário
}

/** Linhas da tabela de horários: agrupa dias consecutivos com o mesmo horário. Domingo fechado. */
export function linhasHorario(u: Unidade): { dias: string; horario: string; numeros: number[] }[] {
  const porDia = new Map<number, string>();
  u.horarios.forEach((f) => f.dias.forEach((d) => porDia.set(d, `${hora(f.abre)} às ${hora(f.fecha)}`)));
  const ordem = [1, 2, 3, 4, 5, 6, 0];
  const linhas: { dias: number[]; horario: string }[] = [];
  for (const d of ordem) {
    const h = porDia.get(d) ?? "Fechado";
    const ult = linhas[linhas.length - 1];
    if (ult && ult.horario === h && d !== 0) ult.dias.push(d);
    else linhas.push({ dias: [d], horario: h });
  }
  const curto = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  return linhas.map((l) => ({
    dias: l.dias.length > 1 ? `${curto[l.dias[0]]} a ${curto[l.dias[l.dias.length - 1]].toLowerCase()}` : curto[l.dias[0]],
    horario: l.horario,
    numeros: l.dias,
  }));
}

/** "do Caju" / "da Baixa do Sapateiro" */
export function de(u: Unidade): string {
  return `${u.genero === "o" ? "do" : "da"} ${u.nomeCurto}`;
}

/** "no Caju" / "na Baixa do Sapateiro" */
export function em(u: Unidade): string {
  return `${u.genero === "o" ? "no" : "na"} ${u.nomeCurto}`;
}

export function linkWhatsApp(u: Unidade, mensagem?: string): string | null {
  if (!u.whatsapp) return null;
  const texto =
    mensagem ??
    `Olá, Ótica ${u.nome}! Quero um orçamento de óculos. Vou mandar a foto da minha receita.`;
  return `https://wa.me/${u.whatsapp}?text=${encodeURIComponent(texto)}`;
}

export function mensagemExame(u: Unidade): string {
  return u.exame.modo === "agendamento"
    ? `Olá, Ótica ${u.nome}! Quero agendar o exame de vista.`
    : `Olá, Ótica ${u.nome}! Queria confirmar o exame de vista de sábado.`;
}

export { DIAS };

const DIAS_SCHEMA = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/** Dados estruturados schema.org/Optician de uma loja (aparece certo no Google). */
export function schemaOtica(u: Unidade, site: string) {
  return {
    "@type": "Optician",
    "@id": `${site}/lojas/${u.id === "baixa" ? "baixa-do-sapateiro" : u.id}/#loja`,
    name: `Ótica ${u.nome}`,
    url: `${site}/lojas/${u.id === "baixa" ? "baixa-do-sapateiro" : u.id}/`,
    telephone: u.whatsapp ? `+${u.whatsapp}` : undefined,
    address: u.endereco
      ? {
          "@type": "PostalAddress",
          streetAddress: u.endereco.split(".")[0],
          addressLocality: "Rio de Janeiro",
          addressRegion: "RJ",
          addressCountry: "BR",
        }
      : undefined,
    openingHoursSpecification: u.horarios.map((f) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: f.dias.map((d) => DIAS_SCHEMA[d]),
      opens: f.abre,
      closes: f.fecha,
    })),
    brand: { "@type": "Brand", name: "Ótica Girêh" },
  };
}
