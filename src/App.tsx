import create, { SetState, State } from "zustand";

interface AppState extends State {
  count: number;
}

interface Actions extends State {
  add: (number: number) => void;
  reset: () => void;
}

type Store = AppState & Actions;

const initialState: AppState = {
  count: 0,
};

const createActions = (set: SetState<Store>) =>
  ({
    add: (number) => set((state) => ({ count: state.count + number })),
    reset: () => set({ count: 0 }),
  } as Actions);

export const useStore = create<Store>((set) => ({
  ...initialState,
  ...createActions(set),
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

  return <pre data-testid="count">{count}</pre>;
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
