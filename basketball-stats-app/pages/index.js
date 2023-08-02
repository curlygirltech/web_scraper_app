<<<<<<< HEAD
<<<<<<< HEAD
import { Fragment } from 'react'
import StatsItem from '@/components/StatsItem'
import Link from 'next/link'
=======
// Landing Home page
import { Fragment } from "react";
import Link from "next/link";
>>>>>>> ae63e6d (configured puppeteer to run on server-side component)
=======
// Landing Home page
import { Fragment } from "react";
import Link from "next/link";
=======
//Landing Home page
import { Fragment } from 'react'
// import Link from 'next/link'

import StatsItem from '@/components/StatsItem'
>>>>>>> 9eb9c77 (update components)
>>>>>>> ad6b16c (Rebase)

const HomePage = () => {
  return (
    <Fragment>
<<<<<<< HEAD
      <StatsItem />

=======
<<<<<<< HEAD
>>>>>>> ad6b16c (Rebase)
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
=======
      <h1>Hello</h1>
      <StatsItem />
>>>>>>> 9eb9c77 (update components)
    </Fragment>
  );
};

export default HomePage;
