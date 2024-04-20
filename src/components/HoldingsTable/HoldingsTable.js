import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

const HoldingsTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios.get('https://canopy-frontend-task.now.sh/api/holdings')
      .then(response => {
        setTableData(response.data.payload);
      })
      .catch(error => {
        console.error('Error in fetching table data:', error);
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Ticker</TableCell>
            <TableCell>Asset Class</TableCell>
            <TableCell>Avg Price</TableCell>
            <TableCell>Market Price</TableCell>
            <TableCell>Latest Change (%)</TableCell>
            <TableCell>Market Value (Base CCY)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map(data => (
            <TableRow key={data.ticker}>
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.ticker}</TableCell>
              <TableCell>{data.asset_class}</TableCell>
              <TableCell>{data.avg_price}</TableCell>
              <TableCell>{data.market_price}</TableCell>
              <TableCell>{data.latest_chg_pct}</TableCell>
              <TableCell>{data.market_value_ccy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HoldingsTable;
