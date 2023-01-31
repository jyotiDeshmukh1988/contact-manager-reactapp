import { createBrowserRouter} from "react-router-dom";
import ContactForm from '../components/ContactForm';
import ContactsList from '../components/ContactsList';

const MyRoutes = createBrowserRouter([
    {
      path: "/",
      element: <ContactForm/>,
    },
    {
        path: "/list",
        element: <ContactsList/>,
      },
  ]);

export default MyRoutes;