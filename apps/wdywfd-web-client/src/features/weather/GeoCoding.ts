import { Coordinates } from './Coordinates';

export interface GeoCoding extends Coordinates {
  readonly name: string;
  readonly local_names: {
    readonly [key: string]: string;
  };
  readonly country: string;
}
