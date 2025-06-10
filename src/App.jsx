import Layout from "./components/Layout";
import Grid from "./components/Grid";
import Hero from "./components/Hero";
import { ThemeContextProvider } from "./utils/theme-context.jsx";

const App = () => {
  return (
    <ThemeContextProvider>
      <Layout>
        <main>
          <Hero />
          <Grid />
        </main>
      </Layout>
    </ThemeContextProvider>
  );
};

export default App;
