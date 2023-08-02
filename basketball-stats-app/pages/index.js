<<<<<<< HEAD
//Landing Home page
import { Fragment } from 'react'
// import Link from 'next/link'

import StatsItem from '@/components/StatsItem'
=======
// Landing Home page
import { Fragment } from "react";
import Link from "next/link";
>>>>>>> ae63e6d (configured puppeteer to run on server-side component)

const HomePage = () => {
  return (
    <Fragment>
<<<<<<< HEAD
      <h1>Hello</h1>
      <StatsItem />
=======
      <h1>BASKETBALL STATISTICS HOME PAGE</h1>
      <ul>
        <li>
          <Link href="/stats">go to stats page</Link>
          <Link href="/api/route">Get the most current salary statistics</Link>
        </li>
      </ul>
>>>>>>> ae63e6d (configured puppeteer to run on server-side component)
    </Fragment>
  );
};

export default HomePage;
