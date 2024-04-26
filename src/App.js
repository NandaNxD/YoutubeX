import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import appStore from './Components/Utils/appStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WatchPage from './Components/WatchPage';
import MainContainer from './Components/MainContainer';

function App() {

  const routerConfig=[
    {
      path:'/',
      element:<Body/>,
      children:[
        {
          path:'/',
          element:<MainContainer/>
        },
        {
          path:'watch',
          element: <WatchPage/>
        }
        
      ]
    }
  ]
  
  const appRouter=createBrowserRouter(routerConfig);

  return (
    <Provider store={appStore}>
      <div className="App">
          <Header/>

          <RouterProvider router={appRouter}>

          </RouterProvider>
      </div>
    </Provider>
  );
}




export default App;
