import { Provider } from "react-redux";
import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div className="text-1xl">
      <Head />
      <Body />
    </div>
    </Provider>
  );
}

export default App;
