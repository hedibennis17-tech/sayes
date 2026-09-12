// SaYes — Cities catalog (Canada first)
export interface CityData {
  id: string;
  slug: string;
  name: string;
  province: string;
  country: string;
  flag: string;
  currency: string;
  timezone: string;
  locale: string;
  lat: number;
  lng: number;
  districts: string[];
  active: boolean;
}

export const CITIES: CityData[] = [
  {
    id: "montreal",
    slug: "montreal",
    name: "Montréal",
    province: "Québec",
    country: "Canada",
    flag: "🇨🇦",
    currency: "CAD",
    timezone: "America/Toronto",
    locale: "fr-CA",
    lat: 45.5017,
    lng: -73.5673,
    districts: ["Plateau-Mont-Royal","Vieux-Montréal","Downtown","Mile-End","Rosemont","Verdun","NDG","Westmount","Outremont","Côte-des-Neiges"],
    active: true,
  },
  {
    id: "laval",
    slug: "laval",
    name: "Laval",
    province: "Québec",
    country: "Canada",
    flag: "🇨🇦",
    currency: "CAD",
    timezone: "America/Toronto",
    locale: "fr-CA",
    lat: 45.6066,
    lng: -73.7124,
    districts: ["Chomedey","Fabreville","Vimont","Auteuil","Sainte-Rose","Pont-Viau"],
    active: true,
  },
  {
    id: "toronto",
    slug: "toronto",
    name: "Toronto",
    province: "Ontario",
    country: "Canada",
    flag: "🇨🇦",
    currency: "CAD",
    timezone: "America/Toronto",
    locale: "en-CA",
    lat: 43.6532,
    lng: -79.3832,
    districts: ["Downtown","Midtown","East End","West End","North York","Scarborough","Etobicoke"],
    active: false,
  },
  {
    id: "vancouver",
    slug: "vancouver",
    name: "Vancouver",
    province: "Colombie-Britannique",
    country: "Canada",
    flag: "🇨🇦",
    currency: "CAD",
    timezone: "America/Vancouver",
    locale: "en-CA",
    lat: 49.2827,
    lng: -123.1207,
    districts: ["Downtown","Gastown","Kitsilano","West End","Yaletown","Commercial Drive"],
    active: false,
  },
  {
    id: "paris",
    slug: "paris",
    name: "Paris",
    province: "Île-de-France",
    country: "France",
    flag: "🇫🇷",
    currency: "EUR",
    timezone: "Europe/Paris",
    locale: "fr-FR",
    lat: 48.8566,
    lng: 2.3522,
    districts: ["1er","2e","3e","Marais","Montmartre","Saint-Germain","Bastille","Belleville"],
    active: false,
  },
  {
    id: "tunis",
    slug: "tunis",
    name: "Tunis",
    province: "Tunis",
    country: "Tunisie",
    flag: "🇹🇳",
    currency: "TND",
    timezone: "Africa/Tunis",
    locale: "fr-TN",
    lat: 36.8065,
    lng: 10.1815,
    districts: ["Medina","Belvédère","Lac","El Menzah","Ariana","La Marsa"],
    active: false,
  },
];

export const DEFAULT_CITY = CITIES[0]; // Montréal
