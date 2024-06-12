import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Explorer from "./components/organisms/Explorer";
import Logo from "./components/atoms/Logo";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-neutral-50">
      <QueryClientProvider client={queryClient}>
        <Logo />
        <Explorer />
      </QueryClientProvider>
    </div>
  );
}

export default App;
