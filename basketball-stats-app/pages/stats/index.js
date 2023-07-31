import Scraper from "../../utils/scraper";

export default function Stats(props) {
  return <div>Stats</div>;
}

export async function getStaticProps() {
  let scraper = new Scraper();
  let data = await scraper.getStats();

  if (!data) {
    return { notFound: true };
  }
  return {
    props: {
      loadedData: data,
    },
  };
}
