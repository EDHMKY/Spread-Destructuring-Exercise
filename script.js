
const mcuShows = ["Loki", "What If...?"];


const starWarsShows = [
  "The Mandalorian",
  "The Bad Batch"
];


const disneyPlusShows = [
  ...mcuShows,
  ...starWarsShows,
  "Monsters At Work"
];


console.log(disneyPlusShows);


const netflixMovies = {
  action: "Extraction",
  crime: "The Irishman"
};


const amazonPrimeMovies = {
  action: "The Tomorrow War",
  drama: "One Night In Miami"
};


const streamingMovies = {
  ...amazonPrimeMovies,
  ...netflixMovies,
  musical: "Hamilton"
};


console.log(streamingMovies);


const disneyJunior = [
  "Mickey Mouse Clubhouse",
  "Spidey and His Amazing Friends"
];


const [mickey, spidey] = disneyJunior;


console.log(mickey, spidey);

const avengers = {
  warMachine: "James Rhodes",
  theHulk: "Bruce Banner"
};


const {warMachine, theHulk} = avengers;


console.log(warMachine, theHulk);


const moreAvengers = {
  blackWidow: "Natasha Romanoff",
  hawkeye: "Clint Barton",
  ironMan: "Tony Stark"
};


const {blackWidow: nat, ...others} = moreAvengers;


console.log(nat, others);