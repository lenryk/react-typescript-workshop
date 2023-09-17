import { useRef } from "react";

// when we pass null it returns a RefObject which is readonly
// you can read this in the type definitions (click with null to see which function overload it goes to)
// when we remove the initial value it becomes MutableRefObject<>
export const Component = () => {
  const ref = useRef<string>();

  // Why is this not allowed?
  ref.current = "Hello";

  return null;
};
