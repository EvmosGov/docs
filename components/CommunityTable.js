import * as React from 'react';
import Box from '@mui/material/Box';
import moment from 'moment'
import { col, row } from '../data/signees'
import UM_Table, { Irow } from 'react-tailwind-table'

export default function () {
  const UM_MODULES_TABLE_STYLES = {

  }
  function rowcheck(row,column, display_value){

    if (column.field === "timestamp") {
      return moment(display_value).format('LLL')
    }

    if (column.field === "hash") {
      return display_value.slice(0, 4) + "..." + display_value.slice(-4);
    }

    return display_value
  }
  const style = {
    base_bg_color:"dark:bg-dark",
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
     table_row: "dark:bg-[#574f47]",
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
      per_page={250}
      should_export={false}
      table_header=""
      show_search={true}
      striped={false}
      bordered={false}
      hovered={false}
      styling={style}
      no_content_text="No address found."
      row_render ={rowcheck}
    ></UM_Table>
  )
}