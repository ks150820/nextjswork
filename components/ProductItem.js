
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  return (
    <div className={classes.product}>
      <div style={styles.touchable}>
        <div>
          <div>
            <div style={styles.imageContainer}>
              {/* <Image style={styles.image} source={{uri: props.image}} /> */}
              <img src={props.image} style={styles.image} alt="products" />
            </div>
            <div style={styles.detail}>
              <p style={styles.title}>{props.title}</p>
              <p style={styles.price}>Rs.{props.price}</p>
            </div>
            <div style={styles.actions}>{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  touchable: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    height: 300,
    width: 400,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '23%',
    paddingHorizontal: 20,
  },
  detail: {
    alignItems: 'center',
    height: '17%',
    padding: 10,
  },
  ActivityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default ProductItem;
