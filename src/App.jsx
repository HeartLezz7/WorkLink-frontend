import Loading from "./components/Loading/Loading";
import WorkContextProvider from "./contexts/WorkContext";
import useAuth from "./hooks/useAuth";
import Route from "./router/Route";

function App() {
  const { loading } = useAuth();
  if (loading) {
    return <Loading />;
  }
  return (
    <WorkContextProvider>
      <Route />
    </WorkContextProvider>
  );
}

export default App;
