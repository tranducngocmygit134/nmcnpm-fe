import React from 'react';

/** Material ui */
import { Grid, Box, Typography } from '@material-ui/core';

/** Navigation */
import { Link } from 'react-router-dom';

const CategoryContent = ({ categoryContent, categoryIndex }) => {
  return (
    <Grid container style={{ justifyContent: 'space-between' }}>
      {categoryContent[categoryIndex].map((el, index) => {
        if (el.content.length > 0) {
          return (
            <Grid item key={index} style={{ padding: 15 }}>
              <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                {el.title}
              </Typography>
              <Box style={{ listStyle: 'none' }}>
                {el.content.map((content, index) => (
                  <Link
                    key={index}
                    style={{
                      display: 'block',
                      textDecoration: 'none',
                      color: '#333',
                      padding: 2,
                      fontSize: '0.9rem',
                    }}
                    to={`/products/search?q=${content}`}
                  >
                    {content}
                  </Link>
                ))}
              </Box>
            </Grid>
          );
        } else {
          return undefined;
        }
      })}
    </Grid>
  );
};

/** Export */
export default CategoryContent;
