import { React, useState, useEffect } from 'react'

import { Routes, 
         Route,
         useNavigate
       } from 'react-router-dom';

import { Container, Col, Row } from 'react-bootstrap'

import './styles/trusteecore/trusteecore.scss'

import LandingPage from './components/landingpage/landingpage-component.js'
import Header from './components/landingpage/header-component.js'

export default function TrusteeCore() {

   const [viewport, viewportcb] = useState('xs')

   useEffect(() => {

    const $xsviewport = window.matchMedia('(max-width: 600px)');
    const $mdviewport = window.matchMedia('(min-width: 992px)');
    const $lgviewport = window.matchMedia('(min-width: 1200px)');

    const handleXsViewport = () => {
      if ($xsviewport.matches) {
        viewportcb('xs');
      }
    };

    const handleMdViewport = () => {
      if ($mdviewport.matches) {
        viewportcb('md');
      }
    };

    const handleLgViewport = () => {
      if ($lgviewport.matches) {
        viewportcb('lg');
      }
    };

    $xsviewport.addListener(handleXsViewport);
    $mdviewport.addListener(handleMdViewport);
    $lgviewport.addListener(handleLgViewport);

    // Initialize viewport
    handleXsViewport();
    handleMdViewport();
    handleLgViewport();

    // Clean up listeners
    return () => {
      $xsviewport.removeListener(handleXsViewport);
      $mdviewport.removeListener(handleMdViewport);
      $lgviewport.removeListener(handleLgViewport);
    };

  }, []);

  useEffect(() => {
    const handleResize = () => {
      viewportcb(window.innerWidth <= 600 ? 'xs' : 'md');
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
   <Container fluid id="trusteecore">
     <Routes>
        <Route path='/'
               element={<LandingPage />}>

        </Route>
     </Routes>
   </Container>
  );
}


