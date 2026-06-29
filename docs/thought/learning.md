# what i learnt

> 29-06-2026

## Navbar

navbar owns entire sub components thats the thing but i want the business logic to be owned by the navbar itself and the subcomponents are just simple representational layers only tha

this gives me with an single place to work on and it gives the navbar to be orachaestrated place and i like this much since

```
has to oracheastrate only the representational layers not features or all
Navbar has only work of navigation so that owned by navbar itself not the components
```

## tradeoffs

cant deep orchaestrate like the navbar also includes the searchbar and i cant do now the searchbar logic inside thenavbar so it will be bad architecture design

## solution

I will move on with clean Navbar compnent no callback attributes each children look out for their own reponsibilites at long term it would be help full

> when responsibilites are independent then so does the subcomponents
