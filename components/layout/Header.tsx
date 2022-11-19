import React, { useState } from 'react';
import Image from 'next/image';
import { SearchTextField } from '@components/text-field';
import Logo from '../../public/logo.png';
import Link from 'next/link';
import { IconButton } from '@components/button';
import Avatar from '../../public/avatar.jpeg';
import { Menu } from '@components/menu';

export interface IHeaderProps {}

const Header = React.forwardRef((props: IHeaderProps, ref: any) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const onSearch = (searchKey: string) => {
    console.log(searchKey);
  };

  const onAvatarClick = (e: any) => {
    console.log('clicked');
    anchorEl ? setAnchorEl(null) : setAnchorEl(e.currentTarget);
  };

  const items = [
    {
      icon: <></>,
      label: 'User profile',
      onClick: () => console.log('logout'),
    },
    {
      icon: <></>,
      label: 'Logout',
      onClick: () => console.log('logout'),
    },
  ];

  return (
    <header
      ref={ref}
      className="header"
    >
      <div className="container mx-auto">
        <div className="header-wrapper py-2 flex justify-between">
          <div className="left-header w-2/5 flex items-center">
            <Link
              className="w-1/4"
              href="/"
            >
              <a className="h-10">
                <Image
                  src={Logo}
                  alt="logo"
                  width={50}
                  height={40}
                />
              </a>
            </Link>
            <Menu
              items={items}
              anchorEl={anchorEl}
            />
            <div className="w-3/4 pl-2">
              <SearchTextField
                placeholder="Search"
                onSearch={onSearch}
              />
            </div>
          </div>
          <div className="right-header flex justify-end w-1/5">
            <IconButton onClick={onAvatarClick}>
              <Image
                className="rounded-full object-cover"
                src={Avatar}
                alt="avatar"
                width={40}
                height={40}
              />
            </IconButton>
          </div>
        </div>
      </div>
    </header>
  );
});

export default Header;
