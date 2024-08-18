import { createBrowserRouter } from "react-router-dom";
import App from "App";
import { ContactForm, CreateContact } from "components";
import { ChartsAndMapsPage, ContactsPage } from "pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/createContact",
        element: <CreateContact />,
      },
      {
        path: "/contacts",
        element: <ContactsPage />,
      },
      {
        path: "/saveContact",
        element: <ContactForm />,
      },
      {
        path: "/chartsAndMaps",
        element: <ChartsAndMapsPage />,
      },
    ],
  },
]);
