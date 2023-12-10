import { Link, Outlet } from 'react-router-dom'
import MetaComponent from "./MetaComponent";
import { useEffect, useState } from 'react';
import TopNavigationCompoennt from './TopNavigationComponent';
import HeaderNavigationComponent from './HeaderNavigationComponent';
const OrginTemplate = () =>{
    const [metaProps, setMeta] = useState({});
    
    useEffect(()=>{
        setMeta({
            title: "Home Page",
            description: "Home Page",
            og_title: "Home Page",
            og_description: "Home Page",
            og_image: "Home Page",
        });
    }, []);

    return (
        <>
            { Object.keys(metaProps).length > 0 && <MetaComponent props={metaProps} /> }
            <div>
               <TopNavigationCompoennt />
               <HeaderNavigationComponent />
                <div className="container">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default OrginTemplate