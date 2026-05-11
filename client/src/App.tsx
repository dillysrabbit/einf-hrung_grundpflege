import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./components/Layout";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Deck from "./pages/Deck";
import Handbuch from "./pages/Handbuch";
import Module1 from "./pages/Module1";
import Module2 from "./pages/Module2";
import Module3 from "./pages/Module3";
import Module4 from "./pages/Module4";
import Module5 from "./pages/Module5";
import Module6 from "./pages/Module6";
import Module7 from "./pages/Module7";
import Module8 from "./pages/Module8";
import Module9 from "./pages/Module9";
import Module10 from "./pages/Module10";
import Quiz from "./pages/Quiz";

function Router() {
  return (
    <Switch>
      {/* Deck rendert ohne Layout-Wrapper als Vollbild-Präsentation */}
      <Route path="/deck" component={Deck} />
      <Route>
        <Layout>
          <Switch>
            <Route path="/" component={Home} />
        <Route path="/module-1" component={Module1} />
        <Route path="/module-2" component={Module2} />
        <Route path="/module-3" component={Module3} />
        <Route path="/module-4" component={Module4} />
        <Route path="/module-5" component={Module5} />
        <Route path="/module-6" component={Module6} />
        <Route path="/module-7" component={Module7} />
        <Route path="/module-8" component={Module8} />
        <Route path="/module-9" component={Module9} />
        <Route path="/module-10" component={Module10} />
        <Route path="/handbuch" component={Handbuch} />
        <Route path="/quiz" component={Quiz} />
            <Route path="/404" component={NotFound} />
            {/* Final fallback route */}
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
