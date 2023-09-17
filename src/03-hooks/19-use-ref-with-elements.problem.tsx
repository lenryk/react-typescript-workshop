import { useRef } from "react";

// looking at the useRef type it has function overloads: function useRef<T>(initialValue: T|null): RefObject<T>;
// it expects the initial value to be null or undefined
export const Component = () => {
  const ref = useRef<HTMLDivElement>(null);
  // hover over this div to see what the type is
  return <div ref={ref} />;
};
