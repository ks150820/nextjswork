import classes from "./MainNavigation.module.css";
import Link from "next/link";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { useSelector } from "react-redux";

function MainNavigation() {
  const getData = useSelector((state) => state.cart.cartNumber);

  console.log("getData ==>", getData);

  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>Home</div>
      </Link>
      <nav>
        <Link href="/Cart">
          <Badge badgeContent={getData.length} color="primary">
            <ShoppingCartIcon style={{ fontSize: 25, color: "#fff" }} />
          </Badge>
        </Link>
      </nav>
    </header>
  );
}

export default MainNavigation;

{
  /* <ul>
          <li>
            <Link href="/">All Meetups</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New Meetup</Link>
          </li>
        </ul> */
}
