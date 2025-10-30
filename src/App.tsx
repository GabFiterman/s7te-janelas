import { Routes, Route } from 'react-router-dom';
import RouteHandler from '@/RouteHandler';
import { Workspace } from '@/components';
import './styles/index.scss';

function App() {
  return (
    <>
      <div className="App">
        <Workspace />
        <Routes>
          <Route path="/c/*" element={<RouteHandler />} />
          <Route path="/" element={null} />
        </Routes>
      </div>
    </>
  );
}

export default App;
