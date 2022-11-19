import React, { useState } from 'react';
import { IconButton } from '@components/button';
import SearchIcon from '../../public/search.svg';
import Image from 'next/image';

export interface ISearchTextFieldProps {
  placeholder?: string;
  onSearch: any;
}

export const SearchTextField = (props: ISearchTextFieldProps) => {
  const { placeholder = 'Text here', onSearch, ...restProps } = props;

  const [value, setValue] = useState('');

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  const handleSearch = () => onSearch(value);

  return (
    <div className="search-container relative flex">
      <input
        className="text-field"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        {...restProps}
      />
      <IconButton
        className="absolute right-4 top-1/2 -translate-y-1/2"
        onClick={handleSearch}
      >
        <Image
          src={SearchIcon}
          alt="search"
        />
      </IconButton>
    </div>
  );
};
