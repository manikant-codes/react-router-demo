import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import About from "./pages/About";
import BooksRoutes from "./pages/BooksRoutes";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      {/* <Routes location="/books">
        <Route
          path="/books"
          element={
            <>
              <h1>Extra Information</h1>
              <Link to="book1" reloadDocument>
                Book 1
              </Link>
            </>
          }
        ></Route>
        <Route path="/books/:id" element={<h1>Extra Information</h1>}></Route>
      </Routes> */}
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="/books/*" element={<BooksRoutes />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
