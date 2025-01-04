import { createRoot } from "react-dom/client"
import {Header} from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
const root = createRoot(document.getElementById("root"))









function App(){
  return(
    <>
    <Header />
    <Main />
    <Footer />
    </>
  )
}

root.render(
  <App />
)