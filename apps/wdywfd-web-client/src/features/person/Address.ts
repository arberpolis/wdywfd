export interface Address {
  readonly street: string
  readonly houseNumber: string
  readonly city: string
  readonly state?: string
  readonly zip: string
  readonly country: string
}
