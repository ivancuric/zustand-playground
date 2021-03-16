import create, { State } from "zustand";

interface AppState extends State {
  count: number;
  add: (number: number) => void;
  reset: () => void;
}

// postoji i get parametar koji je zamjena za previousState
const useStore = create<AppState>((set, get) => ({
  count: 0,
  add: (number) => set({ count: get().count + number }),
  reset: () => set({ count: 0 }),
}));

// Možemo doći do set i get metoda izvan hooka
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
