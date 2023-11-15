import Loading from "./components/Loading/Loading";
import ChatContextProvider from "./contexts/ChatContext";
import WorkContextProvider from "./contexts/WorkContext";
import useAuth from "./hooks/useAuth";
import Route from "./router/Route";
import  { Toaster } from 'react-hot-toast'

function App() {
  const { loading } = useAuth();
  if (loading) {
    return <Loading />;
  }
  return (
    <>
    
    <ChatContextProvider>
      <WorkContextProvider>
      <Toaster 
    position="button-center"
  reverseOrder={false}/>
        <Route />
      </WorkContextProvider>
    </ChatContextProvider>
    </>
  );
}

export default App;
