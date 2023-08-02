import Link from 'next/link'

const MainHeader = () => {
  return (
    <header className="header">
      <div>
        <Link href="/">BASKETBALL STATISTICS HOME PAGE </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/about">Learn more about us</Link>
          </li>
        
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader
