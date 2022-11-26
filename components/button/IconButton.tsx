import * as React from 'react';

// eslint-disable-next-line react/display-name
export const IconButton = React.forwardRef(
  ({ children, ...props }: any, ref: any) => {
    const { className: passedClassName, ...restProps } = props;

    return (
      <button
        className={`flex justify-center items-center p-1 rounded-full hover:bg-zinc-100 ${passedClassName}`}
        ref={ref}
        {...restProps}
      >
        {children}
      </button>
    );
  }
);
