import { Routes, Route } from 'react-router-dom';
import RouteHandler from '@/RouteHandler';
import { Workspace, MobileFallback } from '@/components';
import { useIsMobile } from '@/hooks';
import './styles/index.scss';

function App() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileFallback />;
  }

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
