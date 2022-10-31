import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';

import { Home, LearnContext, LearnQuery } from 'pages';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/learn-context" element={<LearnContext />} />
      <Route path="/learn-query" element={<LearnQuery />} />
      <Route path='/*' element={<Navigate to="/home" />} />
    </Routes>
  );
};

export {
  AppRoutes
};
