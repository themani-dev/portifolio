import { useState } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Terminal_ui from "./components/Terminal";
import PortfolioGUI from "./components/PortfolioGUI";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [viewMode, setViewMode] = useState('terminal'); // 'terminal' or 'gui'

  const toggleMode = () => {
    setViewMode(prev => prev === 'terminal' ? 'gui' : 'terminal');
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={
              <AnimatePresence mode="wait">
                {viewMode === 'terminal' ? (
                  <motion.div
                    key="terminal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Terminal_ui onToggleMode={toggleMode} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="gui"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <PortfolioGUI onToggleMode={toggleMode} />
                  </motion.div>
                )}
              </AnimatePresence>
            } 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
