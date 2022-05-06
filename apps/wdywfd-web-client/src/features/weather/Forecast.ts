import { Clouds } from "./Clouds";
import { Coordinates } from "./Coordinates";
import { ForecastSystem } from "./ForecastSystem";
import { Telemetry } from "./Telemetry";
import { Weather } from "./Weather";
import { Wind } from "./Wind";

export interface Forecast {
  readonly coord: Coordinates
  readonly weather: Weather[]
  readonly base: 'stations'
  readonly main: Telemetry
  readonly visibility: number
  readonly wind: Wind
  readonly clouds: Clouds
  readonly dt: number
  readonly sys: ForecastSystem
  readonly timezone: number
  readonly id: number
  readonly name: string
  readonly cod: number
}
