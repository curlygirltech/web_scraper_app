import { Fragment } from 'react'
import StatsItem from '@/components/StatsItem'
import Link from 'next/link'

const HomePage = () => {
  return (
    <Fragment>
      <StatsItem />

      <h1>BASKETBALL STATISTICS HOME PAGE</h1>
      <ul>
        <li>
          <Link href="/stats">go to stats page</Link>
          <Link href="/api/route">
            Get the most current salary statistics
          </Link>
        </li>
      </ul>
    </Fragment>
  )
}

export default HomePage
