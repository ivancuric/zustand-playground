import create, { State } from "zustand";

interface AppState extends State {
  count: number;
}

export const initialState: AppState = {
  count: 0,
};

// abuse of  function hoisting
export const useStore = create(() => ({ ...initialState, add, reset }));

// extracted "actions"
export function add(number: number) {
  useStore.setState((state) => ({ count: state.count + number }));
}

export function reset() {
  useStore.setState({ count: 0 });
}

export const App = () => {
  return (
    <div>
      <Counter />
      <Controls />
    </div>
  );
};

export const Counter = () => {
  const { count } = useStore();

  return <pre>{count}</pre>;
};

export const Controls = () => {
  const store = useStore();

  return (
    <div>
      <button onClick={() => store.add(1)}>Add 1</button>
      <button onClick={() => store.reset()}>Reset</button>
    </div>
  );
};
