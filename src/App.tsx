import Header from "@/shared/header/Header";
import Footer from "@/shared/footer/Footer";
import FaqPage from "@/pages/faq/FaqPage";
import { UIProvider } from "@/contexts/UIContext";

function App() {
  return (
    <UIProvider>
      <Header />
      <FaqPage />
      <Footer />
    </UIProvider>
  );
}

export default App;
