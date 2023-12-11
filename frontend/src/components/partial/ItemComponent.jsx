const ItemComponent = (props)=>{
    console.log(props);

    return (
        <div className="card card-body single-item">
            <div className="product-image">
                <img src={props.product.image} alt="Image Not Found" />
            </div>
            <div className="product-price">
                <p className="m-0 p-0">{props.product.title}</p>
                <p className="m-0 p-0">NPR:{props.product.price}</p>
            </div>
        </div>
    )
}

export default ItemComponent