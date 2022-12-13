
import Fetching from './Fetching';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Router from './Router';
function App() {
  return (
    <div className="App">
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Router/>}/>
                <Route path='/insta' element={<Fetching/>}/>
              </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
