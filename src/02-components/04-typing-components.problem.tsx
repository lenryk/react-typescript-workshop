import React from "react";

// here we add inline type definition for our props
// we can also extract the types to an interface or type
export const Button = ({className}: {className: string}) => {
  return <button className={className}></button>;
};

const Parent = () => {
  return (
    <>
      {/* @ts-expect-error */}
      <Button></Button>

      <Button className="my-class"></Button>
    </>
  );
};
