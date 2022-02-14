import React from "react";

import SidebarMenu from "./SidebarMenu";
import { nav } from "./nav";


const Sidebar = ()=>{

    return(
        <div className="sidebar-wrapper">
            <ul className="side-navigation">
                {nav?
                    <SidebarMenu menu={nav} />
                // menuRender(nav)
                : null}
            </ul>
        </div>
    )
}


export default Sidebar;