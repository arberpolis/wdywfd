export interface ForecastQueryInput {
  readonly lat: number;
  readonly lon: number;
  readonly mode?: 'html' | 'xml';
  readonly units?: 'metric' | 'imperial';
  readonly lang?: string;
}
