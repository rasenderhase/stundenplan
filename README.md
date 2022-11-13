# stundenplan
Einfacher Multi-Tenant Suntendplan

Convert json to yaml:

```
 import("yaml")
   .then(YAML => { 
     require('fs')
       .writeFile("./stundenplaene/2e54afb4-351c-42f5-9bfa-678cc3cb6dc3/stundenplan.yaml", 
         YAML.stringify(
           require("./stundenplaene/2e54afb4-351c-42f5-9bfa-678cc3cb6dc3/stundenplan.json")
         ), 
         "utf-8", 
         () => {}
       ) 
     }))
```
