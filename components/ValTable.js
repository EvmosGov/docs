import UM_Table, { Irow } from 'react-tailwind-table'
// import 'react-tailwind-table/dist/index.css'
import { col, row } from '../data/signees/val'
import React from 'react'

export default function () {
  const UM_MODULES_TABLE_STYLES = {

  }
  function rowcheck(row,col, display_text){

    if (col.field === "tx_hash") {
       
      let d = display_text
return d
    }
    return display_text
  }
  const style = {
    base_bg_color:"dark:bg-dark valTable",
    base_text_color:"dark:text-gray-500",
    top:{
      // title:"text-red-700"
      elements: {
        main: "table-h dark:bg-transparent px-0 dark:px-0 md:px-0",
        search: "table-search nextra-search appearance-none border rounded py-2 pr-3 w-full py-1 ",
        bulk_select:{
          // main:"bg-green-700 text-white",
          // button:"bg-yellow-700 text-black px-5 "
        },
        // export:"text-yellow-800"
      }
    },
    table_head:{
     table_row: "dark:bg-[#574f47] valRow",
      // table_data:"text-white"
    },
    table_body:{
      main:"t-mainbod dark:bg-dark",
      // table_row:"text-yellow-900",
      // table_data: "text-base"
    },
    footer:{ 
      main: "dark:bg-dark mt-0",
       statistics:{
         main: "dark:bg-transparent bg-transparent dark:text-gray-500",
         // bold_numbers:"text-yellow-800 font-thin"
       },
       page_numbers:"page-num text-sm w-7 h-7 border-r cursor-pointer dark:bg-gray-600 text-white  md:w-8 md:h-8 "
     }
  }
  return (
    <UM_Table
      columns={col}
      rows={row}
      per_page={100}
      should_export={false}
      table_header=""
      show_search={false}
      striped={false}
      bordered={false}
      hovered={false}
      styling={style}
      row_render ={rowcheck}
      no_content_text="No address found."
    ></UM_Table>
  )
}