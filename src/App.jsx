import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import HomePage from "./pages/HomePage.jsx";
import Footer from "./components/footer/Footer.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import CertificationsPage from "./pages/CertificationsPage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import ContactsPage from "./pages/ContactsPage.jsx";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className="App page">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
