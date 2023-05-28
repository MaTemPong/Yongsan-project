import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import SNSDirectMessage from "./SNS/SNS_DirectMessage";

function Router() { 
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/SNS/directMessage" element={<SNSDirectMessage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;