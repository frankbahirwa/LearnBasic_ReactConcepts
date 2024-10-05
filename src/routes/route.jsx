import { BrowserRouter as Route , Routes ,Router } from "react-router-dom";
import Eddy from '../components/hello'
const Approutes = ()=>{
return(
<>
<Router>
<Routes>
<Route path="/" element={<Eddy />} />
</Routes>
</Router>
</>
)
}

export default Approutes;