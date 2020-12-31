import React from 'react';

/** Get container image to generate icons */
import sprite from '../assets/sprite.png';

/**
 * @desc create icons ui using style of tiki
 * @param {props} link - icon link to
 * @param {props} position - position of icon is sprite
 * @return {Component} Icon component
 */
const Icon = ({ position, width, height, wrapWidth }) => {
  return (
    <span
      style={{
        width: wrapWidth,
        display: 'inline-block',
        textAlign: 'center',
      }}
    >
      <i
        style={{
          display: 'inline-block',
          verticalAlign: 'middle',
          backgroundImage: `url(${sprite})`,
          backgroundPosition: position,
          width: width,
          height: height,
        }}
      ></i>
    </span>
  );
};

/** Export component */
export default Icon;
