import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCountryByCode } from "@/lib/countries";

interface CountryDetailPageProps {
  params: Promise<{ code: string }>;
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("vi-VN").format(value);
}

export default async function CountryDetailPage({
  params,
}: CountryDetailPageProps) {
  const { code } = await params;
  const country = await getCountryByCode(code);

  if (!country) {
    notFound();
  }

  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((currency) => currency.name)
        .join(", ")
    : "Chưa cập nhật";

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "Chưa cập nhật";

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <Button asChild variant="outline" className="mb-8">
        <Link href="/countries">← Quay lại danh sách</Link>
      </Button>

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <Card className="overflow-hidden">
          <div className="relative aspect-16/10 bg-muted">
            <Image
              src={`https://flagcdn.com/w640/${country.cca2.toLowerCase()}.png`}
              alt={`Quốc kỳ ${country.name.common}`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <CardHeader className="space-y-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary">{country.cca3}</Badge>
                <Badge variant="outline">{country.region}</Badge>
                <Badge variant="outline">
                  {country.continents?.[0] ?? "Unknown"}
                </Badge>
              </div>
              <CardTitle className="text-3xl sm:text-4xl">
                {country.name.common}
              </CardTitle>
              <p className="text-sm text-muted-foreground sm:text-base">
                {country.name.official}
              </p>
            </div>
          </CardHeader>
          <CardContent className="pb-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-muted/40 p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  Thủ đô
                </p>
                <p className="mt-1 font-medium">
                  {country.capital?.[0] ?? "Chưa cập nhật"}
                </p>
              </div>
              <div className="rounded-xl border border-border bg-muted/40 p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  Dân số
                </p>
                <p className="mt-1 font-medium">
                  {formatNumber(country.population)} người
                </p>
              </div>
              <div className="rounded-xl border border-border bg-muted/40 p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  Diện tích
                </p>
                <p className="mt-1 font-medium">
                  {formatNumber(country.area)} km²
                </p>
              </div>
              <div className="rounded-xl border border-border bg-muted/40 p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  Biên giới
                </p>
                <p className="mt-1 font-medium">
                  {country.borders?.length
                    ? country.borders.join(", ")
                    : "Không có"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Thông tin bổ sung</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-7 text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Khu vực:</span>{" "}
                {country.subregion ?? "Chưa cập nhật"}
              </p>
              <p>
                <span className="font-medium text-foreground">Ngôn ngữ:</span>{" "}
                {languages}
              </p>
              <p>
                <span className="font-medium text-foreground">Tiền tệ:</span>{" "}
                {currencies}
              </p>
              <p>
                <span className="font-medium text-foreground">Múi giờ:</span>{" "}
                {country.timezones.join(", ")}
              </p>
              <p>
                <span className="font-medium text-foreground">Lãnh thổ:</span>{" "}
                {country.landlocked ? "Không giáp biển" : "Giáp biển"}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Liên kết nguồn</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Button asChild className="w-full sm:w-fit">
                <a
                  href={country.maps.googleMaps}
                  target="_blank"
                  rel="noreferrer"
                >
                  Mở Google Maps
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-fit">
                <a
                  href={country.maps.openStreetMaps}
                  target="_blank"
                  rel="noreferrer"
                >
                  Mở OpenStreetMap
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
