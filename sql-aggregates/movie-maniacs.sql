select "c"."firstName",
 "c"."lastName",
  sum("p"."amount") as "total"
from "customers" as "c"
join "payments"as "p" using ("customerId")
group by "customerId"
order by "total" desc;
