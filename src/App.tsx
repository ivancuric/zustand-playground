import create, { State } from "zustand";

interface AppState extends State {
  count: number;
}

const initialState: AppState = {
  count: 0,
};

// zlouporaba function hoistinga
const useStore = create(() => ({ ...initialState, add, reset }));

// extractane "akcije"
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
  const store = useStore();

  return (
    <div>
      <button onClick={() => store.add(1)}>Add 1</button>
      <button onClick={() => store.reset()}>Reset</button>
    </div>
  );
};
