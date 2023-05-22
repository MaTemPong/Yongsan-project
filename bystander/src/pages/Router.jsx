import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Sns from "./SNS";

function Router() { 
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/sns" element={<Sns/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;