import { useState } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import WelcomeScreen from '@/components/welcome-screen';
import GalacticMap from '@/components/galactic-map';
import { Toaster } from '@/components/ui/sonner';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="galactic-theme">
      <div className="min-h-screen bg-background overflow-hidden">
        {!started ? (
          <WelcomeScreen onStart={() => setStarted(true)} />
        ) : (
          <GalacticMap />
        )}
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;