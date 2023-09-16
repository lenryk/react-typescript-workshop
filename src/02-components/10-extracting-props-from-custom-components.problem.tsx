// Imagine NavBar is an external library!

import {ComponentProps} from "react";

export const NavBar = (props: {
  title: string;
  links: string[];
  children: React.ReactNode;
}) => {
  return <div>Some content</div>;
};

// Your app:

import { Equal, Expect } from "../helpers/type-utils";

// This has two modes string to send HTML element
// or typeof NameOfComponent
type NavBarProps = ComponentProps<typeof NavBar>;

type test = Expect<
  Equal<
    NavBarProps,
    {
      title: string;
      links: string[];
      children: React.ReactNode;
    }
  >
>;
