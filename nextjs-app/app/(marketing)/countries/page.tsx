import Link from "next/link";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getCountries } from "@/lib/countries";

function formatPopulation(value: number) {
  return new Intl.NumberFormat("vi-VN").format(value);
}

export default async function CountriesPage() {
  const countries = await getCountries();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 space-y-3">
        <Badge variant="outline" className="w-fit rounded-full px-3 py-1">
          REST Countries API
        </Badge>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Danh sách quốc gia
          </h1>
          <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            Dữ liệu được lấy trực tiếp từ public API, hiển thị theo dạng card và
            mở chi tiết ở route động theo mã quốc gia.
          </p>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {countries.map((country) => (
          <Card
            key={country.cca3}
            className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-16/10 overflow-hidden bg-muted">
              <Image
                src={`https://flagcdn.com/w640/${country.cca2.toLowerCase()}.png`}
                alt={`Quốc kỳ ${country.name.common}`}
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <CardHeader className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <CardTitle className="text-xl leading-tight">
                    {country.name.common}
                  </CardTitle>
                  <CardDescription>{country.name.official}</CardDescription>
                </div>
                <Badge variant="secondary">{country.cca3}</Badge>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">{country.region}</Badge>
                <Badge variant="outline">
                  {country.continents?.[0] ?? "Unknown"}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-5 pb-5">
              <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                <div>
                  <p className="font-medium text-foreground">Thủ đô</p>
                  <p>{country.capital?.[0] ?? "Chưa cập nhật"}</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Dân số</p>
                  <p>{formatPopulation(country.population)} người</p>
                </div>
              </div>

              <Button asChild className="w-full sm:w-fit">
                <Link href={`/countries/${country.cca3}`}>Xem chi tiết</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
