// This special page is loaded for different values, for ANY identifier
// our-domain.com/new/WHATEVER
// we can get the values of whatever path we put in the URL

import { useRouter } from 'next/router'

const StatsDetailsPage = () => {
  const router = useRouter()

  const statsId = router.query.statsId
  console.log(statsId)
  // the identifier in the URL could be used to send a request
  // to the backend API to fetch data using the statsId


  return (
    <>
      <h2> The details here 🏀 </h2>
      
    </>
  )
}

export default StatsDetailsPage
