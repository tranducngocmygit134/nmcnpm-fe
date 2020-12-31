import React from 'react';
import { SideBySideMagnifier } from 'react-image-magnifiers';

function Image({ url }) {
  const small_url = url.replace(/\/cache\/[0-9]+x[0-9]+/g, '/cache/500x500');
  const large_url = url.replace(/\/cache\/[0-9]+x[0-9]+/g, '/cache/1200x1200');
  return (
    <SideBySideMagnifier
      imageSrc={small_url}
      largeImageSrc={large_url}
      alwaysInPlace={true}
      style={{ maxWidth: 500 }}
    />
  );
}

export default Image;
