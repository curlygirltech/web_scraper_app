
//Landing Home page
import { Fragment } from 'react'
// import Link from 'next/link'

import StatsItem from '@/components/StatsItem'

// Landing Home page
import { Fragment } from "react";
import Link from "next/link";

// Landing Home page
import { Fragment } from "react";
import Link from "next/link";
//Landing Home page
import { Fragment } from 'react'
// import Link from 'next/link'

import StatsItem from '@/components/StatsItem'


const HomePage = () => {
  return (
    <Fragment>

      <h1>Hello</h1>
      <StatsItem />


      <h1>BASKETBALL STATISTICS HOME PAGE</h1>
      <ul>
        <li>
          <Link href="/stats">go to stats page</Link>
          <Link href="/api/route">Get the most current salary statistics</Link>
        </li>
      </ul>

      <h1>Hello</h1>
      <StatsItem />

    </Fragment>
  );
};

export default HomePage;
