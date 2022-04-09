import { nanoid } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import s from './Style.module.scss';

const FilterColorizer = (text, value) => {
  const string = text.split('');
  return string.map(item =>
    item.includes(value && value.toUpperCase()) ? (
      <mark key={nanoid()}>{item}</mark>
    ) : (
      item
    ),
  );
};

export default FilterColorizer;
