import { Routes, Route } from 'react-router-dom';
import Volunteer from './components/Volunteer'; // import your new page
function App() {
  return (
    <Routes>
      <Route path="/volunteer" element={<Volunteer />} /> {/* new route */}
    </Routes>
  );
}

export default App;
