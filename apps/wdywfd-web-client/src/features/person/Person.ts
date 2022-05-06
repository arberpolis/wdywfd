import { Address } from "./Address"
import { OnlineStatus } from "./OnlineStatus"

export interface Person {
  readonly address: Address
  readonly avatar: URL
  readonly email: string
  readonly id: string
  readonly name: string
  readonly status: OnlineStatus
}
