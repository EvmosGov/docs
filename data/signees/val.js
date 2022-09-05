import valResults from './valMerged.json'



export const col = [
    {
     field: "moniker",
     use: "Validator",
     //Will not be used in search filtering
    //  use_in_search:false
   },
   {
     field: "operator_address",
     use: "Address",
   },
   {
     field: "tx_hash",
     use: "TX",
     use_in_display: false

     //Will not be displayed in the table
   },
   {
     field: "timestamp",
     use: "Signed Time",
     use_in_display: false

   },   
   {
     field: "rank",
     use: "Val Ranking",
     use_in_display: false

   },
   {
     field: "website",
     use: "Website",
   }
   ]
  
  export const row = valResults
  