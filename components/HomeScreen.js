import { useEffect } from "react";
import data from "../Data/Local-Data.json";
import ProductItem from "./ProductItem";
import classes from "./HomeScreen.module.css";
import { useDispatch } from "react-redux";
import { cartAction } from "../redux/actions/Cart";

const HomeScreen = () => {
  //   const getData = useSelector((state) => state.cartNu.cart);

  //console.log("getData---->>",getData)

  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(cartAction(item));
  };

  // useEffect(() => {
  //   dispatch(cartAction())
  // }, [])

  return (
    <div className={classes.imgContainer}>
      {data.data.map((item, index) => (
        <ProductItem
          image={item.image}
          price={item.price}
          title={item.title}
          key={index}
        >
          <button className={classes.btn} onClick={() => handleClick(item)}>
            To Cart
          </button>
        </ProductItem>
      ))}
    </div>
  );
};

export default HomeScreen;
