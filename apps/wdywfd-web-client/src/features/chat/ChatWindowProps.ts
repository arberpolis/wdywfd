import { Person } from "../person/Person";
import { Message } from "./Message";

export interface ChatWindowProps {
  readonly messages: ReadonlyArray<Message>;
  readonly participants: ReadonlyArray<Person>
  readonly sessionId: string
  readonly timeout: number
}
