import Header from "@/shared/header/Header";
import Footer from "@/shared/footer/Footer";
import FaqPage from "@/pages/faq/FaqPage";
import { UIProvider } from "@/contexts/UIContext";
import { FaqProvider } from "@/contexts/FaqContext";

function App() {
  return (
    <FaqProvider>
      <UIProvider>
        <Header />
        <FaqPage />
        <Footer />
      </UIProvider>
    </FaqProvider>
  );
}

export default App;
