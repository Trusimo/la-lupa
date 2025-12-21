export type Piatto = {
  id: number
  nome: string
  prezzo: number
}

export const menu: Piatto[] = [
  { id: 1, nome: "Pizza Margherita", prezzo: 8 },
  { id: 2, nome: "Pasta Carbonara", prezzo: 10 },
  { id: 3, nome: "Insalata Mista", prezzo: 6 },
  { id: 4, nome: "Tiramisù", prezzo: 5 }
]
