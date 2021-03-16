import create, { State } from "zustand";

interface AppState extends State {
  count: number;
}

const useStore = create<AppState>(() => ({
  count: 0,
}));

// extracted "actions"
function add(number: number) {
  useStore.setState((state) => ({ count: state.count + number }));
}

function reset() {
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

const Counter = () => {
  const { count } = useStore();

  return <pre>{count}</pre>;
};

const Controls = () => {
  return (
    <div>
      <button onClick={() => add(1)}>Add 1</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
};
