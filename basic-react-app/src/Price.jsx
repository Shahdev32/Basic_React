export default function Price({ oldPrice, newPrice }) {

    let oldStyles = {
        textDecorationLine: "line-through",
        marginRight: "10px"
    };

    let newStyles = {
        fontWeight: "bold",
        height: "30px",
        borderRadius: "30px"
    };

    return (
        <div>
            <span style={oldStyles}>{oldPrice}</span>
            <span style={newStyles}>{newPrice}</span>
        </div>
    );
}
