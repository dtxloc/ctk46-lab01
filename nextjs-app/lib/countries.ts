import { CountryDetail, CountrySummary } from "@/types/country";

const COUNTRY_LIST_FIELDS =
  "name,cca2,cca3,region,capital,population,continents";
const COUNTRY_DETAIL_FIELDS =
  "name,cca2,cca3,region,subregion,capital,population,area,continents,languages,currencies,timezones,tld,landlocked,borders,maps";

async function fetchJson<T>(url: string, errorMessage: string): Promise<T> {
  const res = await fetch(url, {
    next: {
      revalidate: 60 * 60,
    },
  });

  if (!res.ok) {
    throw new Error(errorMessage);
  }

  return res.json();
}

export async function getCountries(): Promise<CountrySummary[]> {
  const data = await fetchJson<CountrySummary[]>(
    `https://restcountries.com/v3.1/all?fields=${COUNTRY_LIST_FIELDS}`,
    "Không thể tải danh sách quốc gia",
  );

  return data.sort((firstCountry, secondCountry) =>
    firstCountry.name.common.localeCompare(secondCountry.name.common, "vi"),
  );
}

export async function getCountryByCode(
  code: string,
): Promise<CountryDetail | null> {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${encodeURIComponent(code)}?fields=${COUNTRY_DETAIL_FIELDS}`,
    {
      next: {
        revalidate: 60 * 60,
      },
    },
  );

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error("Không thể tải chi tiết quốc gia");
  }

  const data = (await res.json()) as CountryDetail[] | CountryDetail;

  return Array.isArray(data) ? (data[0] ?? null) : data;
}
