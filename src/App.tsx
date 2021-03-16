import create, { State } from "zustand";

interface AppState extends State {
  count: number;
  add: (number: number) => void;
  reset: () => void;
}

const useStore = create<AppState>((set) => ({
  count: 0,
  add: (number) => set((state) => add(number, state)),
  reset: () => set(reset()),
}));

// meh :\
function add(number: number, state: AppState) {
  return { count: state.count + number };
}

function reset() {
  return { count: 0 };
}

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
