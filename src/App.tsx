import create from "zustand";
import { combine } from "zustand/middleware";

const useStore = create(
  /**
   * combine adds type inferrence
   */
  combine({ count: 0 }, (set) => ({
    add: (number: number) => set((state) => ({ count: state.count + number })),
    reset: () => set({ count: 0 }),
  }))
);

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
