export interface CountryName {
  common: string;
  official: string;
  nativeName?: Record<
    string,
    {
      official: string;
      common: string;
    }
  >;
}

export interface CountryCurrency {
  name: string;
  symbol?: string;
}

export interface CountrySummary {
  name: CountryName;
  cca2: string;
  cca3: string;
  region: string;
  capital?: string[];
  population: number;
  continents: string[];
}

export interface CountryDetail extends CountrySummary {
  subregion?: string;
  area: number;
  languages?: Record<string, string>;
  currencies?: Record<string, CountryCurrency>;
  timezones: string[];
  tld?: string[];
  landlocked: boolean;
  borders?: string[];
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
}
