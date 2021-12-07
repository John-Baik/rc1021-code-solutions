select "co"."name" as "countryName",
  count(*) as "numberOfCities"
  from "cities" as "ci"
  join "countries" as "co" using ("countryId")
  group by "countryId";
