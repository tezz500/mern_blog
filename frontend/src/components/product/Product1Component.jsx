import { useEffect, useState } from "react";
import ItemComponent from "../partial/ItemComponent";
import { encryptData } from '../../helper/helper';
const Product1Component = () => {
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
            {
                title: "Test Product 1",
                is_offer: false,
                image:"/images/products/product-07.jpg",
                price: 1500,
                offer_price:1400,
                category:"Test Category",
                small_slug:"This is for test of product",
            },
            {
                title: "Test Product 2",
                is_offer: true,
                image:"/images/products/product-08.jpg",
                price: 1500,
                offer_price:1400,
                category:"Test Category",
                small_slug:"This is for test of product",
                offer_price: 1400,
            },
            {
                title: "Test Product 1",
                is_offer: false,
                image: '/images/products/product-09.jpg',
                price: 1500,
                offer_price:1400,
                category:"Test Category",
                small_slug:"This is for test of product",
            },
            {
                title: "Test Product 2",
                is_offer: true,
                image:"/images/products/product-10.jpg",
                price: 1500,
                offer_price:1400,
                category:"Test Category",
                small_slug:"This is for test of product",
                offer_price: 1400,
            },
            {
                title: "Test Product 1",
                is_offer: false,
                image:"/images/products/product-11.jpg",
                price: 1500,
                offer_price:1400,
                category:"Test Category",
                small_slug:"This is for test of product",
            },
            {
                title: "Test Product 2",
                is_offer: true,
                 image:"/images/products/product-12.jpg",
                price: 1500,
                offer_price:1400,
                category:"Test Category",
                small_slug:"This is for test of product",
                offer_price: 1400,
            }
        ]);
    }, [setProducts]);
    
    return (
        <div className="row mr-5 ml-5  mb-0 mt-0 pb-0 pt-0 products">
            <div className="col-md-12">
                <h5>Product 1</h5>
            </div>
            <div class="shell">
                <div class="container-fluid">
                    <div class="row">
                        {
                            products.length > 0 &&
                            products.map((item, index) => {
                                return (
                                    <div class="col-md-3">
                                            <ItemComponent product={item} />
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
export default Product1Component;