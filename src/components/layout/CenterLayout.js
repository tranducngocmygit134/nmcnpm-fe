import React from 'react';

import { Container } from '@material-ui/core';
export default function CenterLayout({ mt, mw, children }) {
  return (
    <Container
      maxWidth={mw || 'lg'}
      style={{ padding: 0, marginTop: mt || '10px' }}
    >
      {children}
    </Container>
  );
}
