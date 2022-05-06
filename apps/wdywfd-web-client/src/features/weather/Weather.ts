export interface Weather {
  readonly id: number
  readonly main: 'Clear' | 'Clouds' | 'Rain' | 'Snow'
  readonly description: string
  readonly icon: string
}
