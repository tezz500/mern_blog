const FlashProduct = (props) => {
    return (
        <div class="wsk-cp-product">
            <div class="wsk-cp-img">
                <img src={props.product.image} alt="Product" class="img-responsive" />
            </div>
            <div class="wsk-cp-text">
                <div class="category">
                    <span className="main-btn-color">{props.product.category}</span>
                </div>
                <div class="title-product">
                    <h3>{props.product.title}</h3>
                </div>
                <div class="card-footer">
                    <div class="wcf-left">
                        {
                            props.product.is_offer &&
                            <span class="price mr-2 text-danger strike-font-size">
                                <strike>{"NPR "+ props.product.price}</strike>
                            </span>
                        }
                        <span class="price">{"NPR "+  (props.product.is_offer ?   props.product.offer_price : props.product.price)}</span>
                    </div>
                    <div class="wcf-right"><a href="#" class="buy-btn"><i class="fa fa-shopping-cart" aria-hidden="true"></i></a></div>
                </div>
            </div>
        </div>
    )
}

export default FlashProduct