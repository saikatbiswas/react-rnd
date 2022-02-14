import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";

const Accordion = (props) => {
    const { title, icon, children } = props;
    const [isOpen, setOpen] = useState(false);

    const activeClass =  children.find(menu => {
        if(`/${menu.props.children.props.to}` === props.match.path){
            return menu
        }
        return null
    });

    return (
      <>

        <div className={`menu-item ${isOpen ? "open" : ""} ${(activeClass && activeClass.props.children.props.to) === props.match.path.substring(1)?'active':''}`} onClick={() => setOpen(!isOpen)} >
            <span className="menu-icon">{icon}</span>
            <span>{title}</span>
          
        </div>
        <ul className={`submenu-dropdiwn-item ${isOpen ? "submenu-expand" : ""}`}>
            {children}
        </ul>
      </>
    );
};

const SidebarMenu = (props)=>{
    const {menu} = props;
    // const [activeCollapse, setActiveCollapse] = useState(null);

    // const submenuOpen = useCallback(
    //     (i)=>  {
    //         console.log(activeCollapse)
    //         // setActiveCollapse(!activeCollapse)
    // },[activeCollapse]);

    // const submenuOpen = (i)=>{
    //     if (activeCollapse === i) {
    //         setActiveCollapse(null)
    //     } else {
    //         setActiveCollapse(i)
    //     }
    //     // setActiveCollapse(i)
    //     // console.log(activeCollapse)
    // }

    

    return(
        menu.map((item, i)=>(
            // <li key={item.title} className={`side-nav-item ${(activeCollapse === i) ? 'submenu-expand' : ''} ${item.submenu? 'side-nav-dropdown' : ''}`}>
            <li key={item.title} className={`${item.submenu? 'side-nav-dropdown' : ''}`}>
                {!item.submenu?
                    <NavLink to={item.to} activeClassName='active' className="menu-item">
                        {item.pic?
                            <span className="menu-icon">{item.pic}</span>
                        :null}
                        <span>{item.title}</span>
                    </NavLink>
                :
                    <>
                        <Accordion title={item.title} icon={item.pic} {...props}>
                            {/* activeClass={submenu.to === props.match.url} */}
                            {
                                item.submenu.map(submenu=>(
                                    <li key={submenu.to}>
                                        <NavLink to={submenu.to} activeClassName='active' className="submenu-item">{submenu.title}</NavLink>
                                    </li>
                                ))
                            }
                        </Accordion>

                        {/* <span onClick={()=>submenuOpen(i)} >{item.title}</span>
                        <ul className="side-nav-dropdown-item">
                            {
                                item.submenu.map(submenu=>(
                                    <li key={submenu.to}>
                                        <NavLink to={submenu.to}>{submenu.title}</NavLink>
                                    </li>
                                ))
                            }
                        </ul> */}
                    </>
                }
            </li>
        ))
    )
}


export default withRouter(SidebarMenu);