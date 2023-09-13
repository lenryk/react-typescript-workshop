import React from "react";

interface Props {
  className: string;
}

// we need to grab a type definition from React to use for our function component
// we get it off the React object
/* @ts-expect-error */
export const Button: React.FC<Props> = (props: Props) => {
  return {
    ohDear: "123",
  };
};

const Parent = () => {
  return (
    <>
      <Button className="my-class"></Button>
    </>
  );
};
