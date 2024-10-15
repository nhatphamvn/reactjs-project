import Sidebar from "./Sidebar"
import './Admin.scss'
import { FaAlignJustify } from "react-icons/fa";
import { useState } from "react"
import { Outlet } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';


const Admin =(props)=>{

    const [collapsed, setCollapsed] = useState(false)

    return(
        <div className="admin-container">
            <div className="admin-sidebar">

                <Sidebar collapsed={collapsed} />
            </div>

            <div className="admin-content">
                <div className="btn-icons">
                <FaAlignJustify size={20} onClick={() => setCollapsed(!collapsed)} />
                </div>
                <div className="admin-main">
                    <Outlet/>
                </div>
            </div>
             
            

                 
        </div>
        
    )
}

export default Admin