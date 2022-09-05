import * as React from 'react';
import Box from '@mui/material/Box';
import { createTheme, alpha, styled } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DataGrid, gridClasses  } from '@mui/x-data-grid';
import { rows } from '../data/signees/'
import moment from 'moment';
moment().format();

const ODD_OPACITY = 0.4;

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
    [`& .${gridClasses.row}.even`]: {
      backgroundColor: theme.palette.background.paper,
      '&:hover, &.Mui-hovered': {
        backgroundColor: alpha(theme.palette.background.paper, ODD_OPACITY),
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
      '&.Mui-selected': {
        backgroundColor: alpha(
          theme.palette.background.paper,
          ODD_OPACITY + theme.palette.action.selectedOpacity,
        ),
        '&:hover, &.Mui-hovered': {
          backgroundColor: alpha(
            theme.palette.background.paper,
            ODD_OPACITY +
              theme.palette.action.selectedOpacity +
              theme.palette.action.hoverOpacity,
          ),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: alpha(
              theme.palette.background.paper,
              ODD_OPACITY + theme.palette.action.selectedOpacity,
            ),
          },
        },
      },
    },
  }));

const columns = [
  {
    field: 'accountAddress',
    headerName: 'Signee',
    flex: 0.9,
    minWidth: 230,
    editable: false,
    headerClassName: 'table-h',
  },
//   {
//     field: 'timestamp',
//     headerName: 'Time',
//     flex: 0.5,
//     minWidth: 150,
//     editable: false,
//     headerClassName: 'table-h',
//   },
{
    field: 'timestamp',
    headerName: 'Time',
    flex: 0.5,
    width: 160,
    valueGetter: (params) =>
      moment(params.row.timestamp).format('LLL'),
  },
  {
    field: 'hash',
    headerName: 'TX',
    width: 200,
    editable: false,
    headerClassName: 'table-h',
    sortable: false
  },

];

const tablerows = rows


export default function CommunityTable() {
    return (

      <div style={{ height: 700, width: '100%' }}>
        <LocalizationProvider dateAdapter={AdapterMoment}>

        <StripedDataGrid
          sx={{ m:0 }}
          rows={tablerows}
          columns={columns}
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
          }
          pageSize={200}
          density="standard"
          disableSelectionOnClick
          rowsPerPageOptions={[5]}
          experimentalFeatures={{ newEditingApi: false }}
        />
        </LocalizationProvider>
      </div>
    );
  }