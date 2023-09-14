import React from "react";

// React.ReactNode
// This forces it to pass children
export const Button = (props: {children: React.ReactNode}) => {
  return <button>{props.children}</button>;
};

const Parent = () => {
  return (
    <>
      {/* @ts-expect-error */}
      <Button></Button>
      <Button>Hello world!</Button>
    </>
  );
};
