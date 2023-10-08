import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/router';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="App max-w-[1250px] mx-auto">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
