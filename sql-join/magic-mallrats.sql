select "c"."firstName",
"c"."lastName"
from "films" as "f"
join "inventory" using ("filmId")
join "customers" as "c" using ("storeId")
where "f"."title" = 'Magic Mallrats';
