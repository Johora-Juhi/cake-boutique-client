import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes/Routes';

function App() {
  return (
    <div style={{backgroundColor: '#fff'}}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
