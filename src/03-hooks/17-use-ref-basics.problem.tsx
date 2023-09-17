import {ReactElement, useEffect, useRef} from "react";

// the useRef<> useRef is a generic with undefined by default
// by passing string we set the id to a string
export const Component = () => {
  const id = useRef<string>();

  useEffect(() => {
    id.current = "Random value!";
  }, []);

  return <div></div>;
};
