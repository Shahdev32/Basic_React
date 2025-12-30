import "./Product.css";
import Price from "./Price";

function Product({ title, idx }) {

    let oldPrices = ["12495", "113453", "14654", "16453"];
    let newPrices = ["13432", "12543", "15554", "1756"];
    let descriptions = [
        "B DDD DPI",
        "Intuitive surface",
        "Designed for iPad Pro",
        "Wireless"
    ];

    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{descriptions[idx]}</p>

            <Price
                oldPrice={oldPrices[idx]}
                newPrice={newPrices[idx]}
            />
        </div>
    );
}

export default Product;
