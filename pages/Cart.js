import { useSelector } from "react-redux";

function Cart() {
  const getData = useSelector((state) => state.cart.cartNumber);

  return (
    <div>
      {getData.map((item, index) => (
        <div key={index}>
          <img src={item.image} width={100} height={100} />
        </div>
      ))}
    </div>
  );
}

export default Cart;
