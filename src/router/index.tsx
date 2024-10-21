import {
   createBrowserRouter,
   createRoutesFromElements,
   Route,
   RouterProvider,
} from "react-router-dom";

import App from "../App";
import {
   SignIn,
   SignUp,
   Layout,
   Category,
   SubCategory,
   Brands,
   BrandCategory,
} from "@modules";

const Index = () => {
   const router = createBrowserRouter(
      createRoutesFromElements(
         <Route path="/" element={<App />}>
            <Route index element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="layout" element={<Layout />}>
               <Route path="category" element={<Category />} />
               <Route path="category/:id" element={<SubCategory />} />
               <Route path="brands" element={<Brands />} />
               <Route path="brand-category" element={<BrandCategory />} />
            </Route>
         </Route>
      )
   );

   return <RouterProvider router={router} />;
};

export default Index;
