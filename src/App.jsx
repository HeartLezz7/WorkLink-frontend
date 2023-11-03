import Loading from "./components/Loading/Loading";
import useAuth from "./hooks/useAuth";
import Route from "./router/Route";

function App() {
  const { initialLoading } = useAuth();
  if (initialLoading) {
    return <Loading />;
  }
  return <Route />;
}

export default App;
