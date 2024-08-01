import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home, About, Contact, Login, Register, EventList, EventDetails, EditEvent, Profile, Layout } from './index.js';

function App() {
  const { token } = useSelector((state) => state.auth);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/login" />} />
          <Route path="/" element={
            <Protected token={token}>
              <Layout />
            </Protected>} >
            <Route path="/" index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/events" element={<EventList />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/events/:id/edit" element={<EditEvent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

const Protected = ({ children, token }) => {
  return token ? children : <Navigate to="/login" />;
};