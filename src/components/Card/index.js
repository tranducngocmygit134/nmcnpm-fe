import React from 'react';

/** Component */
import CardComponent from './Card';
import SkeletonCard from './SkeletonCard';

const Card = ({ discount, product }) => {
  if (!product) return <SkeletonCard />;
  return CardComponent({ discount, product });
};

export default Card;
