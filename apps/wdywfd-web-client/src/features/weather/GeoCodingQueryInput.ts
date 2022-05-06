export interface GeoCodingQueryInput {
  readonly cityName: string;
  readonly countryCode: string;
  readonly limit?: number;
  readonly stateCode?: string;
}
