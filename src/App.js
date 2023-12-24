import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/footer/Footer";
import ProjectsPage from "./pages/ProjectsPage";
import CertificationsPage from "./pages/CertificationsPage";
import ProjectPage from "./pages/ProjectPage";
import ContactsPage from "./pages/ContactsPage";
import ScrollToTop from "./utils/scrollToTop";
import "./assets/styles/index.scss";

function App() {
  return (
    <div className="App page">
      <Router>
        <ScrollToTop />
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
