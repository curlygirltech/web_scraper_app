<<<<<<< HEAD
import { Fragment } from 'react'
import StatsItem from '@/components/StatsItem'
import Link from 'next/link'
=======
// Landing Home page
import { Fragment } from "react";
import Link from "next/link";
>>>>>>> ae63e6d (configured puppeteer to run on server-side component)

const HomePage = () => {
  return (
    <Fragment>
      <StatsItem />

      <h1>BASKETBALL STATISTICS HOME PAGE</h1>
      <ul>
        <li>
          <Link href="/stats">go to stats page</Link>
<<<<<<< HEAD
          <Link href="/api/route">
            Get the most current salary statistics
          </Link>
=======
          <Link href="/api/route">Get the most current salary statistics</Link>
>>>>>>> ae63e6d (configured puppeteer to run on server-side component)
        </li>
      </ul>
    </Fragment>
  );
};

export default HomePage;
