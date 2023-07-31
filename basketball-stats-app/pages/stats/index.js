import Scraper from "../../utils/scraper";

export default function Stats(props) {
  const playersAndSalaries = props.loadedData;
  return <div>Stats</div>;
}

export async function getServerSideProps() {
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
