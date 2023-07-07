import { Country } from './country.interface';
import { Region } from './region.type';

export interface ChacheStore {
    byCapital: SearchCountryUnion;
    byCountry: SearchCountryUnion;
    byRegion: RegionCountryUnion;
}

export interface SearchCountryUnion {
    searchText: string;
    countries: Country[];
}
export interface RegionCountryUnion {
    region?: Region;
    countries: Country[];
}
