import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import Sign from './pages/Sign';
import './App.css';
import Jobs from './pages/Jobs';
import Science from './pages/Science';
import Arts from './pages/Arts';
import Commerce from './pages/Commerce';
import Vocational from './pages/Vocational';
import CareerDetails from './pages/CareerDetails';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import FamilyCounselling from './pages/FamilyCounselling';
import VerifiedOutcomes from './pages/VerifiedOutcomes';
import FamilyExplainer from './pages/FamilyExplainer';
import AdminDashboard from './pages/AdminDashboard';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          {/* SIH Core Modules */}
          <Route path="/family-counselling" element={<ProtectedRoute message="Sign in to use Family AI."><FamilyCounselling /></ProtectedRoute>} />
          <Route path="/outcomes" element={<ProtectedRoute message="Sign in to view Verified Outcomes."><VerifiedOutcomes /></ProtectedRoute>} />
          <Route path="/explainer" element={<ProtectedRoute message="Sign in to view the Explainer & ROI."><FamilyExplainer /></ProtectedRoute>} />
          <Route path="/admin" element={<ProtectedRoute message="Sign in to access the Admin dashboard."><AdminDashboard /></ProtectedRoute>} />
          <Route path="/vocational" element={<Vocational />} />

          {/* Career & Streams */}
          <Route path="/career" element={<ProtectedRoute message="Sign in to view Career roadmaps."><Careers /></ProtectedRoute>} />
          <Route path="/career/:careerId" element={<ProtectedRoute message="Sign in to view Career roadmaps."><CareerDetails /></ProtectedRoute>} />
          <Route path="/science" element={<Science />} />
          <Route path="/arts" element={<Arts />} />
          <Route path="/commerce" element={<Commerce />} />

          {/* Jobs & Info */}
          <Route path="/job" element={<ProtectedRoute message="Sign in to view Jobs."><Jobs /></ProtectedRoute>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/sign" element={<Sign />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
