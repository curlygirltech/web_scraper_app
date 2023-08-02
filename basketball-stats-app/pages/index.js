<<<<<<< HEAD
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
>>>>>>> 52ebe91 (update components)

const HomePage = () => {
  return (
    <Fragment>
<<<<<<< HEAD
<<<<<<< HEAD
      <h1>Hello</h1>
      <StatsItem />
=======
=======
>>>>>>> 52ebe91 (update components)
      <h1>BASKETBALL STATISTICS HOME PAGE</h1>
      <ul>
        <li>
          <Link href="/stats">go to stats page</Link>
          <Link href="/api/route">Get the most current salary statistics</Link>
        </li>
      </ul>
<<<<<<< HEAD
>>>>>>> ae63e6d (configured puppeteer to run on server-side component)
=======
=======
      <h1>Hello</h1>
      <StatsItem />
>>>>>>> 9eb9c77 (update components)
>>>>>>> 52ebe91 (update components)
    </Fragment>
  );
};

export default HomePage;
