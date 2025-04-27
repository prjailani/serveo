import { Routes, Route } from 'react-router-dom';
import Volunteer from './components/Volunteer'; // import your new page
import CreateEvent from './components/CreateEvent'; // import your existing page
function App() {
  return (
    <Routes>
      <Route path="/volunteer" element={<Volunteer />} /> {/* new route */}
      <Route path="/create-event" element={<CreateEvent />} /> {/* existing route */}
    </Routes>
  );
}

export default App;
