import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import WorkoutGrid from "./components/WorkoutGrid";
import { ThemeContextProvider } from "./contexts/theme-context";

const App = () => {
  return (
    <ThemeContextProvider>
      <Header />
      <Hero />
      <WorkoutGrid />
      <Footer />
    </ThemeContextProvider>
  );
};

export default App;
