import { Routes, Route } from "react-router-dom";
import AppNavbar from "./components/Navbar.jsx";
import Footer    from "./components/Footer.jsx";

import Home     from "./pages/Home.jsx";
import Golf from "./pages/Golf.jsx";
import Lessons from "./pages/Lessons.jsx";
import Fittings from "./pages/Fittings.jsx";
import Book     from "./pages/Book.jsx";
import Contact  from "./pages/Contact.jsx";
import ScrollToTop from "./components/ScrollToTop";


export default function App() {
  return (
    <>
      <ScrollToTop/>
      <AppNavbar />
      <main className="min-vh-100 flex-grow-1">
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/golf" element={<Golf />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/fittings" element={<Fittings />} />
          <Route path="/book"     element={<Book />} />
          <Route path="/contact"  element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}