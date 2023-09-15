import React, {ComponentProps} from "react";

// ComponentProps returns all the types certain HTML elements expect
// in this case we are adding props to a HTML button so we want the button types
export const Button = ({ className, ...rest }: ComponentProps<"button">) => {
  return (
    <button {...rest} className={`default-classname ${className}`}></button>
  );
};

const Parent = () => {
  return <Button onClick={() => {}} type="button"></Button>;
};
