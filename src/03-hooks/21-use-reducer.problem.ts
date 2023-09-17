import { useReducer } from "react";
import { Equal, Expect } from "../helpers/type-utils";

// our reducer state type = same as initial state on the useReducer below
type ReducerState = {
  count: number;
};

// our reducer actions based on the schemas as the end of the file when used with dispatch
type ReducerAction =
  | {
  type: "add";
  add: number;
}
  | {
  type: "subtract";
  subtract: number;
};

// assign the types to the inputs on the reducer function that is passed to useReducer
const reducer = (state: ReducerState, action: ReducerAction) => {
  switch (action.type) {
    case "add":
      return { count: state.count + action.add };
    case "subtract":
      return { count: state.count - action.subtract };
    default:
      throw new Error();
  }
};

const [state, dispatch] = useReducer(reducer, { count: 0 });

type tests = [Expect<Equal<typeof state.count, number>>];

dispatch({ type: "add", add: 1 });

// @ts-expect-error
dispatch({ type: "SUBTRACT", subtract: 1 });

// @ts-expect-error
dispatch({ type: "add" });

// @ts-expect-error
dispatch({ type: "subtract", subtract: "123" });
