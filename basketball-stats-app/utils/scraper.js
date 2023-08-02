import puppeteer from "puppeteer";

class Scraper {
  constructor() {
    this.url = "https://www.basketball-reference.com/";
  }

  //Start the browser and create a browser instance
  async createBrowserInstance() {
    this.browserInstance;
    // add headless: false if you want to see the webpages open
    try {
      this.browserInstance = await puppeteer.launch({
        headless: "new",
        args: ["--disable-setuid-sandbox"],
        ignoreHTTPSErrors: true,
      });
    } catch (err) {
      // what would we like to do if error occurs?
    }
  }

  async blocker() {
    // page object intercepts all request to not allow images to be loaded
    await this.page.setRequestInterception(true);
    this.page.on("request", (request) => {
      if (["image"].indexOf(request.resourceType()) !== -1) {
        request.abort();
      } else {
        request.continue();
      }
    });

    return;
  }

  async initNewPage() {
    this.page = await this.browserInstance.newPage();
    await this.blocker();

    // Navigate to the selected page
    await this.page.goto(this.url);
  }

  async getTeamURL() {
    // Wait for the required DOM to be rendered
    await this.page.waitForSelector("#footer_general");

    // In the unordered list of site menu, go to 2nd li child (TEAMS list)
    // and select all "div"s (NBA divisions) and place in array...
    // $$eval will essentially do a 'querySelectAll for the selector provided
    // then pass array selection to passed in callback function
    const divisionTeamsUrls = await this.page.$$eval(
      "#site_menu > ul > li:nth-child(2) > div",
      (divisions) => {
        let teams = {};
        // for each division
        // get the title of the division
        // get href for each team in the division and collect in an array
        // create new property in teams object with each division as a key and
        // the array of the division team's url as the value.
        divisions.forEach((division) => {
          let hrefs = [];
          let divisionName = division.firstElementChild.textContent;
          let children = division.children;

          for (let idx in children) {
            let link = children[idx].href;
            if (link) {
              hrefs.push(link);
            }
          }
          teams[divisionName] = hrefs;
        });

        return teams;
      }
    );

    // retrieve link for brooklyn nets
    let brooklynNetsLink = divisionTeamsUrls.Atlantic.find((link) =>
      link.includes("BRK")
    );

    return brooklynNetsLink;
  }

  async getPlayersAndSalaries() {
    // target html table element holding players and salaries
    // iterate through each player. retrieve each name and salary, store in object and place in array
    return await this.page.$$eval("#salaries2 > tbody > tr", (players) => {
      let playersSalaries = [];
      for (let idx = 0; idx < players.length; idx++) {
        let playerInfo = players[idx].querySelectorAll("td");
        let name = playerInfo[0].innerText;
        let salary = playerInfo[1].innerText;
        playersSalaries.push({ name, salary });
      }

      return playersSalaries;
    });
  }

  async getStats() {
    //Start the browser and create a browser instance
    await this.createBrowserInstance();
    // create new webpage for Puppeteer to scrap
    await this.initNewPage();
    let teamURL = await this.getTeamURL();

    // reset class url variable to team's url
    // it might be better to NOT set url as class variable, but pass it around.
    this.url = teamURL;

    // create new browser and page and then get salaries.
    await this.createBrowserInstance();
    await this.initNewPage();
    let data = await this.getPlayersAndSalaries();

    let dataJSON = JSON.stringify(data);
    return dataJSON;
  }
}

export default Scraper;
