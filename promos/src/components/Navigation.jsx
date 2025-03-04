import { createHashRouter, RouterProvider } from 'react-router-dom';
import { PromoSelection } from '../pages/PromoSelection';
import { TenPercentPromo } from '../pages/TenPercentPromo';
import { FifteenPercentPromo } from '../pages/FifteenPercentPromo';
import { FortyPercentPromo } from '../pages/FortyPercentPromo';
import { NotFoundPage } from '../pages/NotFoundPage';

const router = createHashRouter([
  {
  path: '/',
  element: <PromoSelection/>,
  errorElement: <NotFoundPage/> 
  },
  {
    path: '/laundry/ten-percent-promo/',
    element: <TenPercentPromo/>,
  },
  {
    path: '/laundry/fifteen-percent-promo/',
    element: <FifteenPercentPromo/>
  },
  {
  path: '/laundry/forty-percent-promo/',
  element: <FortyPercentPromo/>,
  },
  {
    path: '*',
    element: <NotFoundPage/>,
  }
]);

export function Navigation () {
    return (
        <RouterProvider router={router}/>
    )
}