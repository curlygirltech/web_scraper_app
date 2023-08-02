<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import Scraper from '../../utils/scraper'

export default function Stats(props) {
  const playersAndSalaries = props.loadedData
  return <div>Stats</div>
}

export async function getServerSideProps() {
  let scraper = new Scraper()
  let data = await scraper.getStats()

  if (!data) {
    return { notFound: true }
=======
// look at how to make an API call from one of my pages.
//async await import axios

// create an API call from stats index to the backend of the HELLO js.
//return the data and show in the browser.
//just for the from the _app.  to the HELLO. hello js will be like the
//puppeteer.
//just a dummy one



const statsindex = () => {
  return (
    <div>index</div>
  )
}

export default statsindex
>>>>>>> 3980842 (Rebasing issues)
=======
import Scraper from "../../utils/scraper";

export default function Stats(props) {
  return <div>Stats</div>;
}

export async function getStaticProps() {
  let scraper = new Scraper();
  let data = await scraper.getStats();

  if (!data) {
    return { notFound: true };
<<<<<<< HEAD
>>>>>>> ae63e6d (configured puppeteer to run on server-side component)
=======
>>>>>>> 3980842 (Rebasing issues)
  }
  return {
    props: {
      loadedData: data,
    },
<<<<<<< HEAD
<<<<<<< HEAD
  }
=======
  };
>>>>>>> ae63e6d (configured puppeteer to run on server-side component)
}
=======

export default statsindex
>>>>>>> ad6b16c (Rebase)
=======
  };
}
>>>>>>> ae63e6d (configured puppeteer to run on server-side component)
>>>>>>> 3980842 (Rebasing issues)
