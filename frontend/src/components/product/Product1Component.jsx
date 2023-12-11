import { useEffect, useState } from "react";
import ItemComponent from "../partial/ItemComponent";
import { encryptData } from '../../helper/helper';
const Product1Component = ()=>{
    const [products, setProducts]= useState([]);
    useEffect(()=>{
        setProducts([
            {
                title:"Test Product 1",
                is_offer:false,
                image:'/images/products/p-1.jpg',
                price:1500,
            },
            {
                title:"Test Product 2",
                is_offer:true,
                image:'/images/products/p-2.png',
                price:1500,
                offer_price:1400,
            },
            {
                title:"Test Product 1",
                is_offer:false,
                image:'/images/products/p-1.jpg',
                price:1500,
            },
            {
                title:"Test Product 2",
                is_offer:true,
                image:'/images/products/p-2.png',
                price:1500,
                offer_price:1400,
            },
            {
                title:"Test Product 1",
                is_offer:false,
                image:'/images/products/p-1.jpg',
                price:1500,
            },
            {
                title:"Test Product 2",
                is_offer:true,
                image:'/images/products/p-2.png',
                price:1500,
                offer_price:1400,
            },
            {
                title:"Test Product 1",
                is_offer:false,
                image:'/images/products/p-1.jpg',
                price:1500,
            },
            {
                title:"Test Product 2",
                is_offer:true,
                image:'/images/products/p-2.png',
                price:1500,
                offer_price:1400,
            },
            {
                title:"Test Product 1",
                is_offer:false,
                image:'/images/products/p-1.jpg',
                price:1500,
            },
            {
                title:"Test Product 2",
                is_offer:true,
                image:'/images/products/p-2.png',
                price:1500,
                offer_price:1400,
            },
            {
                title:"Test Product 1",
                is_offer:false,
                image:'/images/products/p-1.jpg',
                price:1500,
            },
            {
                title:"Test Product 2",
                is_offer:true,
                image:'/images/products/p-2.png',
                price:1500,
                offer_price:1400,
            }
        ]);
    }, [setProducts]);

    return(
        <div className="row mr-5 ml-5">
            <div className="col-md-12">
                <h5>Product 1</h5>
            </div>
            {
                products.length > 0 &&
                products.map((item, index)=>{
                    return (
                        <div className="col-md-2" key={index+encryptData(item.title)}>
                            <ItemComponent product={item} />
                        </div>
                    )
                })
            }
        </div>
    );
}
export default Product1Component;