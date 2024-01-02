import './App.css'
import TreadingPage from './pages/TrendingPage';

import { Box } from '@mui/material';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import { PageWrapper } from './components/PageWrapper';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <PageWrapper>
          <HomePage />
        </PageWrapper>
      ),
    },
    {
      path: "/playlist",
      element: (
        <PageWrapper>
          <DetailsPage />
        </PageWrapper>
      )
    },
    {
      path: "/playlist/:playlistid",
      element: (
        <PageWrapper>
          <TreadingPage />
        </PageWrapper>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Box className={"relative"}>
        {/* <Header /> */}
        {/* {data && <TreadingPage data={data} />} */}


      </Box >
    </>
  )
}

export default App
