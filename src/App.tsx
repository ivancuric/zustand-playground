import { State } from "zustand";
// default export, ime je nebitno
import createVanilla from "zustand/vanilla";
import create from "zustand";

interface AppState extends State {
  count: number;
  add: (number: number) => void;
  reset: () => void;
}

const vanillaStore = createVanilla<AppState>((set) => ({
  count: 0,
  add: (number) => set((state) => ({ count: state.count + number })),
  reset: () => set({ count: 0 }),
}));

// naknadno stvorimo hook
const useStore = create(vanillaStore);

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
  const { add, reset } = useStore();

  return (
    <div>
      <button onClick={() => add(1)}>Add 1</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
};
