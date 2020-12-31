import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Box,
} from '@material-ui/core';

const DetailInfo = ({ specifications }) => {
  if (specifications !== undefined) {
    return (
      <>
        <Typography variant="h2" style={{ margin: '2.5rem 0 1rem 0' }}>
          THÔNG TIN CHI TIẾT
        </Typography>
        <Box style={{ padding: '10px 20px', backgroundColor: 'white' }}>
          <Table aria-label="thông tin chi tiết">
            <TableBody style={{ backgroundColor: 'white' }}>
              {specifications.map((specification) => {
                return specification.attributes.map((attributes) => (
                  <TableRow key={attributes.name} hover={true}>
                    <TableCell
                      style={{
                        backgroundColor: 'rgb(239, 239, 239)',
                        width: 250,
                        border: 'none',
                        padding: '10px 10px 10px 20px',
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        style={{ fontWeight: 600 }}
                      >
                        {attributes.name}
                      </Typography>
                    </TableCell>
                    <TableCell
                      style={{
                        border: 'none',
                        padding: '10px 10px 10px 20px',
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        dangerouslySetInnerHTML={{ __html: attributes.value }}
                      ></Typography>
                    </TableCell>
                  </TableRow>
                ));
              })}
            </TableBody>
          </Table>
        </Box>
      </>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default DetailInfo;
