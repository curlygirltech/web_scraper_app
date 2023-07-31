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
import Scraper from "../../utils/scraper";

export default function Stats(props) {
  return <div>Stats</div>;
}

export async function getStaticProps() {
  let scraper = new Scraper();
  let data = await scraper.getStats();

  if (!data) {
    return { notFound: true };
>>>>>>> ae63e6d (configured puppeteer to run on server-side component)
  }
  return {
    props: {
      loadedData: data,
    },
<<<<<<< HEAD
  }
=======
  };
>>>>>>> ae63e6d (configured puppeteer to run on server-side component)
}
