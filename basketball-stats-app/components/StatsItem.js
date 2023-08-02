import classes from './StatsItem.module.css'

import Link from 'next/link'

const StatsItem = () => {


  return (
    <div>
     
      <button className={classes.button}>
       <Link href='/stats' > Top Net Team 5 Salaries</Link>
      </button>
      
    </div>
  )
}

export default StatsItem
