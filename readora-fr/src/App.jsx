// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequireAuth from "./util/RequireAuth";

import Home from "./pages/Home";
import FindBooks from "./pages/FindBooks";

import BlogDetails from "./pages/BlogDetails";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import BookDetails from "./pages/BookDetails";
import ParticlesBackground from "./components/animate-ui/backgrounds/particles";

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen flex flex-col overflow-hidden">

        <ParticlesBackground className="fixed inset-0 z-[-1] pointer-events-none" />

        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/book/:id" element={<BookDetails />} />

            <Route path="/find" element={<FindBooks />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />

            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
