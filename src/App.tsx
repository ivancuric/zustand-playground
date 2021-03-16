import create, { State } from "zustand";

interface AppState extends State {
  count: number;
  add: (number: number) => void;
  reset: () => void;
}

// `get` parameter returns the current state
const useStore = create<AppState>((set, get) => ({
  count: 0,
  add: (number) => set({ count: get().count + number }),
  reset: () => set({ count: 0 }),
}));

// `set` and `get` outside of hooks
const state = useStore.getState();
console.log(state.count);

useStore.setState({ count: 5 });

export const App = () => {
  return (
    <div>
      <Counter />
      <Controls />
    </div>
  );
};

const Counter = () => {
  const { count } = useStore();

  return <pre>{count}</pre>;
};

const Controls = () => {
  const { add } = useStore();

  return (
    <div>
      <button onClick={() => add(1)}>Add 1</button>
    </div>
  );
};
