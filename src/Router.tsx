import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './HOC/Layout';
import Error from './components/Error';
import Loader from './components/Loader';

const Home = lazy(() => import('./pages/home/Home'));
const About = lazy(() => import('./pages/about/About'));
const Service = lazy(() => import('./pages/services/Services'));
const WhyIndia = lazy(() => import('./pages/whyIndia/WhyIndia'));
const Career = lazy(() => import('./pages/careers/Career'));
const Contact = lazy(() => import('./pages/contact/ContactPage'));
const Calculator = lazy(() => import('./pages/gccCalc/GCCCostCalculator'));

const Router = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/why-india" element={<WhyIndia />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calculator" element={<Calculator />} />
        </Route>


        {/* 404 Route */}
        <Route path="/error" element={<Error />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Suspense>
  )
}

export default Router