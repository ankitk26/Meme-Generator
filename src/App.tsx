import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MemeProvider from "./context/MemeContext";
import Home from "./pages/Home";
import MemeTemplates from "./pages/MemeTemplates";
import OwnMeme from "./pages/OwnMeme";
import SingleMeme from "./pages/SingleMeme";

export default function App() {
  return (
    <MemeProvider>
      <Router>
        <div className="flex flex-col h-screen">
          <Navbar />
          <main className="flex-grow w-full mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/meme-templates" element={<MemeTemplates />} />
              <Route path="/generate-meme/:memeId" element={<SingleMeme />} />
              <Route path="/own-meme" element={<OwnMeme />} />
            </Routes>
          </main>
        </div>
      </Router>
    </MemeProvider>
  );
}
