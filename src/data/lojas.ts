// Apoio das páginas de loja. Todo dado de loja (endereço, horário, telefone, exame)
// continua vindo de unidades.ts; aqui só ficam o caminho da página, as fotos e o texto de ligação.
import { unidades, textoDiaExame, type Unidade } from "./unidades";

export type Slug = "caju" | "pinheiro" | "baixa-do-sapateiro";

/** O mesmo mapa usado no Rodape. */
export const slugDe = { caju: "caju", pinheiro: "pinheiro", baixa: "baixa-do-sapateiro" } as const satisfies Record<
  Unidade["id"],
  Slug
>;

export function unidadePorSlug(slug: string): Unidade | undefined {
  return unidades.find((u) => slugDe[u.id] === slug);
}

/** Códigos das fotos de cada loja (IMAGENS.md). */
export const fotosDe: Record<Unidade["id"], { fachada: string; interior: string }> = {
  caju: { fachada: "F01", interior: "F14" },
  pinheiro: { fachada: "F02", interior: "F15" },
  baixa: { fachada: "F03", interior: "F16" },
};

/** Como a frase diz onde fica a loja: "No Caju", "Na Vila do Pinheiro, Maré". */
export const ondeDe: Record<Unidade["id"], string> = {
  caju: "No Caju",
  pinheiro: "Na Vila do Pinheiro, Maré",
  baixa: "Na Baixa do Sapateiro, Maré",
};

/** "Rua da Felicidade, 41" (as duas primeiras partes do endereço de unidades.ts). */
export function enderecoCurto(u: Unidade): string | null {
  if (!u.endereco) return null;
  return u.endereco.split(".")[0].split(",").slice(0, 2).join(",").trim();
}

/** "Sábados" / "Sextas, a cada 15 dias" e "14h30 às 18h30", separados a partir de textoDiaExame. */
export function partesExame(u: Unidade): { quando: string; horario: string } {
  const [quando, horario = ""] = textoDiaExame(u.exame).split(", das ");
  return { quando, horario };
}

/** A consulta do link "Como chegar" (unidades.ts), reaproveitada no mapa embutido. */
export function consultaMapa(u: Unidade): string | null {
  if (!u.mapa) return null;
  return new URL(u.mapa).searchParams.get("query");
}
