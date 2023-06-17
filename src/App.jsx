import "./App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// sections
import { Navbar } from "./Sections/Navbar/Navbar";
import { Footer } from "./Sections/Footer/Footer";

//Pages
import { Contact } from "./Pages/ContactPage/Contact";
import { Home } from "./Pages/HomePage/Home";
import PageNotFound from "./Pages/404Page/PageNotFound";
import { AboutUs } from "./Pages/AboutUsPage/AboutUs";
import Checkout from "./Pages/CheckoutPage/Checkout";
import FrontHome from "./Pages/FrontHomePage/FrontHome";
import { FullHome } from "./Pages/FullHomePage/FullHome";
import { Accessories } from "./Pages/Accessories/Accessories";

// Context Providers
import { UsersProvider } from "./Providers/UserProvider";
import { CartProvider } from "./Providers/CartProvider";
import { ImageUploader } from "./Pages/UploadImage/ImageUploader";
import { Cart } from "./Components/Cart/Cart";
import { ThankYou } from "./Pages/ThankYouPage/ThankYou";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="front-facade" element={<FrontHome />} />
      <Route path="full-house" element={<FullHome />} />
      <Route path="accessories" element={<Accessories />} />
      <Route path="contact-us" element={<Contact />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="thanks" element={<ThankYou />} />
      <Route path="upload-image" element={<ImageUploader/>} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <UsersProvider>
        <CartProvider>
          <RouterProvider router={router} />
          <Cart />
          <Footer />
        </CartProvider>
      </UsersProvider>
    </>
  );
}

export default App;
