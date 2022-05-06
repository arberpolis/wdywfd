import { Person } from "../person/Person"

export interface Message {
  readonly content: string
  readonly id: string
  readonly sender: Pick<Person, "name" | "avatar">
  readonly timestamp: Date
}
