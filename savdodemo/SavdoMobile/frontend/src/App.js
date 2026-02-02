import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Redirect to POS app immediately
    window.location.replace('/pos.html');
  }, []);

  return null;
}

export default App;
