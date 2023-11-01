import AuthContextProvider from "./contexts/AuthContext";
import Route from "./router/Route";

function App() {
  return (
    <AuthContextProvider>
      <Route />
    </AuthContextProvider>
  );
}

export default App;
