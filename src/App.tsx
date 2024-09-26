import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/animate.css'
import './assets/css/style.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './views/HomePage';
import BulletinPage from './views/BulletinPage';
import MemberPage from './views/MemberPage';
import ResearchRobotVisionSystemPage from './views/ResearchRobotVisionSystemPage';
import Layout from './components/Layout';
import { ScrollToTop } from './Utils';

//MinHsuan add
import ResearchDocumentImageAnalysisPage from './views/ResearchDocumentImageAnalysisPage';
import ResearchReconstructionPage from './views/ResearchReconstructionPage';
//


function App() {

    return (
        <HelmetProvider>
            <Router basename="/NTUT-RVL">
                <ScrollToTop />
                <Layout>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/bulletin" element={<BulletinPage />} />
                        <Route path="/member" element={<MemberPage />} />
                        <Route path='/research/rvs' element={<ResearchRobotVisionSystemPage />} />
                        
                        <Route path='/research/rvs2' element={<ResearchDocumentImageAnalysisPage />} />
                        <Route path='/research/rvs3' element={<ResearchReconstructionPage />} />
                        
                    </Routes>
                </Layout>
            </Router>
        </HelmetProvider>
    )
}

export default App
