import React from "react";
import { Route, Routes } from "react-router-dom";
import BooksLayout from "../layouts/BooksLayout";
import Books from "./Books";
import BookDetails from "./BookDetails";
import NewBook from "./NewBook";
import NotFound from "./NotFound";

function BooksRoutes() {
  return (
    <Routes>
      <Route element={<BooksLayout />}>
        <Route index element={<Books />} />
        <Route path=":id" element={<BookDetails />} />
        <Route path="new" element={<NewBook />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default BooksRoutes;
