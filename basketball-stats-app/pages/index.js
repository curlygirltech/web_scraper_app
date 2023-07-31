// Landing Home page
import { Fragment } from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <Fragment>
      <h1>BASKETBALL STATISTICS HOME PAGE</h1>
      <ul>
        <li>
          <Link href="/stats">go to stats page</Link>
          <Link href="/api/route">Get the most current salary statistics</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default HomePage;
