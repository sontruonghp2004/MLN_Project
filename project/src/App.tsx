import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import MiniGame from './components/MiniGame';
import HomePage from './components/pages/HomePage';
import TimelinePage from './components/TheorySection';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="timeline" element={<TimelinePage />} />
          <Route path="game" element={<MiniGame />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
