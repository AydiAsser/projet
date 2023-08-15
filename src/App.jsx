import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import CalendarComponent from './components/Calendar';
function App() {

  return (
    <>
    <PrimeReactProvider>
    <div style={{display:"flex"}}>
      <CalendarComponent />
        </div>
        </PrimeReactProvider>
    </>
  )
}

export default App
