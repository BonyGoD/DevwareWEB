//Provider Lenguage
import {NextUIProvider} from "@nextui-org/system";

//React
import ReactDOM from 'react-dom/client'

//Componentes
import App from './App.jsx'

//CSS
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider>
    <App />
  </NextUIProvider>
)
