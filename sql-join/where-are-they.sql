select "address"."line1",
  "city"."name" as "cityName",
  "address"."district",
  "country"."name" as "countryName"
from "addresses" as "address"
  join "cities" as "city" using ("cityId")
  join "countries" as "country" using ("countryId");
