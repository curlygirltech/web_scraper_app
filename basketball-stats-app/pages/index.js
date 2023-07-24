//Landing Home page
import { Fragment } from 'react'
import Link from 'next/link'
import Home from '/components/home-page/Home'



const HomePage = () => {
  return (
    <Fragment>
      <h1>BASKETBALL STATISTICS HOME PAGE</h1>
      <ul>
        <li>
          <Link href="/stats/salary-data">
            Get the most current salary statistics
          </Link>
        </li>
      </ul>

      <Home />

    </Fragment>
  )
}

export default HomePage
