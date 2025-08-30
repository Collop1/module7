import { Routes, Route } from "react-router";
import Homepage from "../pages/Homepage";
import LoginForm from "../pages/LoginForm";
import BitcoinRatesPage from "../pages/BitcoinRatesPage";
import PageNotFound from "../pages/PageNotFound";

function AppRoutes(props) {
    return (
        <Routes>
            {/* index matches on default/home URL: / */} 
            <Route index element={<Homepage {...props} />} />
            <Route path='/login' element={<LoginForm {...props} />} />
            <Route path='/bitcoin-rates' element={<BitcoinRatesPage {...props} />} />
            
            {/* special route to handle if none of the above match */}
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}
export default AppRoutes;