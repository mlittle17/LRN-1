import React, { useEffect, useRef } from 'react';

const getPixelRatio = context => {
  const backingStore = context.backingStorePixelRatio
    || context.webkitBackingStorePixelRatio
    || context.mozBackingStorePixelRatio
    || context.msBackingStorePixelRatio
    || context.oBackingStorePixelRatio
    || context.backingStorePixelRatio
    || 1;

  return (window.devicePixelRatio || 1) / backingStore;
};

const Circle = () => {
  const ref = useRef();

  useEffect(() => {
    const canvas = ref.current;
    const context = canvas.getContext('2d');

    const ratio = getPixelRatio(context);
    const width = getComputedStyle(canvas)
      .getPropertyValue('width')
      .slice(0, -2);
    const height = getComputedStyle(canvas)
      .getPropertyValue('height')
      .slice(0, -2);

    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    context.beginPath();
    context.arc(
      canvas.width / 2,
      canvas.height / 2,
      canvas.width / 2,
      0,
      2 * Math.PI,
    );
    context.fill();
  });

  return (
    <canvas
      ref={ref}
      style={{ width: '100px', height: '100px' }}
    />
  );
};

export default Circle;
