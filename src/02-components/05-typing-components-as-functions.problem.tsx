import React from "react";

interface Props {
  className: string;
}

// we need to grab a type definition from React to use for our function component
// we get it off the React object
// we pass the props arg to let it know what props it is expecting
// this is from legacy code - in modern code it will be props: PropsInterface
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
