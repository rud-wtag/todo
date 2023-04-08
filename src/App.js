import { Provider } from 'react-redux';
import Home from 'pages/Home';
import 'styles/style.scss';
import store from 'redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
