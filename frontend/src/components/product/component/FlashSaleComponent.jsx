import { useEffect, useState } from "react";
import FlashProduct from "../../partial/FlashProduct";
import { encryptData } from '../../../helper/helper';
import { Link } from "react-router-dom";
const FlashSaleComponent = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts([
            {
                title: "Test Product 1",
                is_offer: false,
                image: '/images/products/product-01.jpg',
                price: 1500,
                offer_price:1400,
                category:"Test Category",
                small_slug:"This is for test of product",
            },
            {
                title: "Test Product 2",
                is_offer: true,
                image:"/images/products/product-02.jpg",
                price: 1500,
                offer_price:1400,
                category:"Test Category",
                small_slug:"This is for test of product",
                offer_price: 1400,
            },
            {
                title: "Test Product 1",
                is_offer: false,
                image:"/images/products/product-03.jpg",
                price: 1500,
                offer_price:1400,
                category:"Test Category",
                small_slug:"This is for test of product",
            },
            {
                title: "Test Product 2",
                is_offer: true,
                 image:"/images/products/product-04.jpg",
                price: 1500,
                offer_price:1400,
                category:"Test Category",
                small_slug:"This is for test of product",
                offer_price: 1400,
            },
            {
                title: "Test Product 1",
                is_offer: false,
                image: '/images/products/product-05.jpg',
                price: 1500,
                offer_price:1400,
                category:"Test Category",
                small_slug:"This is for test of product",
            },
            {
                title: "Test Product 2",
                is_offer: true,
                image:"/images/products/product-06.jpg",
                price: 1500,
                offer_price:1400,
                category:"Test Category",
                small_slug:"This is for test of product",
                offer_price: 1400,
            },
        ]);
    }, [setProducts]);

    return (
        <div className="row mr-5 ml-5  mb-0 mt-0 pb-0 pt-0 flash-sale">
            <div className="col-md-12">
               <div className="row m-0 p-0">
                    <h5 className="flash-heading">Flash Sale</h5>
                    <p className="ml-5">0:15</p>
                    <Link to={'#'} className="btn btn-warning">Shop More</Link>
               </div>
            </div>
            <div class="shell">
                <div class="container-fluid">
                    <div class="row">
                        {
                            products.length > 0 &&
                            products.map((item, index) => {
                                return (
                                    <div class="col-md-2">
                                        <FlashProduct product={item} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default FlashSaleComponent;