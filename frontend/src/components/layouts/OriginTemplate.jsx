import { Link, Outlet } from 'react-router-dom'
import MetaComponent from "./MetaComponent";
import { useEffect, useState } from 'react';
import TopNavigationCompoennt from './TopNavigationComponent';
import HeaderNavigationComponent from './HeaderNavigationComponent';
import TopSliderComponent from './TopSliderComponent';
import Product1Component from '../product/Product1Component';
import TagComponent from '../product/component/TagComponent';
import FlashSaleComponent from '../product/component/FlashSaleComponent';
const OrginTemplate = () => {
    const [metaProps, setMeta] = useState({});

    useEffect(() => {
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
            {Object.keys(metaProps).length > 0 && <MetaComponent props={metaProps} />}
            <div>
                {/* <TopNavigationCompoennt />
                <HeaderNavigationComponent />
                <TopSliderComponent />
                <Product1Component /> */}
                {/* <TagComponent /> */}
                <FlashSaleComponent />
                <div className="mr-5 ml-5">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default OrginTemplate