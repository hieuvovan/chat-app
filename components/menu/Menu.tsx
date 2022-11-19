import React, { useEffect, useRef, useState } from 'react';
export interface IMenuProps {
  items: IItems[];
  anchorEl?: any;
  onClose?: () => void;
}

interface IItems {
  onClick: () => void;
  icon?: any;
  label: string;
}

export const Menu = (props: IMenuProps) => {
  const { items, anchorEl } = props;
  const menuRef = useRef<HTMLInputElement | null>(null);

  const [anchorElPosition, setAnchoElPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    getAnchorElPosition();
    window.addEventListener('resize', getAnchorElPosition);
  }, [anchorEl]);

  useEffect(() => {
    if (menuRef.current) setMenuPosition();
  }, [menuRef.current, anchorElPosition]);

  const getAnchorElPosition = () => {
    if (!anchorEl) return;

    const x = anchorEl?.offsetLeft;
    const y = anchorEl?.offsetTop + anchorEl?.clientHeight;

    setAnchoElPosition({
      x,
      y,
    });
  };

  const setMenuPosition = () => {
    menuRef.current!.style!.top = anchorElPosition.y + 'px';
    menuRef.current!.style!.left =
      anchorElPosition.x +
      anchorEl?.clientWidth -
      (menuRef?.current?.clientWidth || 0) +
      'px';
  };

  return anchorEl ? (
    <div
      className="menu-container bg-white absolute z-10 w-60 rounded-md"
      ref={menuRef}
    >
      <ul className="menu-list divide-y divide-slate-200 p-2 ">
        {items?.map((i: IItems, index) => {
          return (
            <li
              className="cursor-pointer py-2 hover:bg-sky-100"
              key={index}
              onClick={i.onClick}
            >
              {i.icon}
              <span>{i.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  ) : null;
};
