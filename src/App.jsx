import { ThemeProviderWrapper } from "./contexts/ThemeContext";
import Layout from "./layout/Layout";

function App() {
  return (
    <ThemeProviderWrapper>
      <Layout />
    </ThemeProviderWrapper>
  );
}

export default App;
