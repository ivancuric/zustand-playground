import create, { State } from "zustand";

interface AppState extends State {
  count: number;
  add: (number: number) => void;
  reset: () => void;
}

// type AppState = {
//   count: number;
//   add: (number: number) => void;
//   reset: () => void;
// };

const useStore = create<AppState>((set) => ({
  count: 0,
  add: (number: number) => set((state) => ({ count: state.count + number })),
  reset: () => set({ count: 0 }),
}));

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
