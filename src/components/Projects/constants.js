const getImage = (name) => ({
  src: require(`../../assets/images/projects/gallery/${name}.png`),
  thumbnail: require(`../../assets/images/projects/gallery/${name}_thumb.jpg`)
})

const zones = {
  id: 'zones',
  title: 'Zones',
  logo: 'zones',
  description: `A time zone conversion app for iOS with localized reminders. It features easy location adding using maps - no need to remember the time zone name or GMT offset, users can directly choose or search for a location from the map view. The 'Time Peek' feature enables users to shift time so that they can refer to a future point in time across other time zones quickly. It includes a color-coded list for places based on time of day. Supports both iPhone and iPad.`,
  time: '2016 - Personal Project',
  tags: ['iOS', 'Objective-C'],
  images: [
    {
      ...getImage('zones/zones-list'),
      w: 750,
      h: 1334,
      title: 'Places list'
    },
    {
      ...getImage('zones/zones-map'),
      w: 750,
      h: 1334,
      title: 'Search map to add a place'
    },
    {
      ...getImage('zones/zones-add'),
      w: 750,
      h: 1334,
      title: 'Adding a new place'
    },
    {
      ...getImage('zones/zones-reminder'),
      w: 750,
      h: 1334,
      title:
        'Set reminders directly on other time zones and get reminded locally'
    }
  ]
}

const teams = {
  id: 'teams',
  title: 'Teams',
  logo: 'teams',
  description: `This is a team collaboration web app that enables quick and efficient team
  communication with real-time messaging (channels + private), file sharing,
  task management (including delegation) features and more. I initially
  started by iterating over several design prototypes to arrive at an
  intuitive design for the app before implementing it. The app uses the
  Meteor framework to enable rich interactivity and to ensure that any data
  changes made by a member reflect automatically in real-time to other
  members of the team who are currently using the app. It also exposes a
  basic REST API which enables other apps to integrate with Teams.
  Check out the gallery below for a quick walkthrough of some of the major
  features of the app.`,
  time: 'Winter 2015',
  tags: ['HTML5', 'NodeJS (Meteor)', 'MongoDB'],
  source: 'https://github.com/mk26/Teams',
  images: [
    {
      ...getImage('teams/teams-all-teams'),
      w: 2304,
      h: 1440,
      title: 'All Teams View'
    },
    {
      ...getImage('teams/teams-channel'),
      w: 2304,
      h: 1440,
      title: 'Messaging Channels in team'
    },
    {
      ...getImage('teams/teams-conv'),
      w: 2304,
      h: 1440,
      title: 'A private conversation in team'
    },
    {
      ...getImage('teams/teams-create-task'),
      w: 2304,
      h: 1440,
      title: 'Creating a task'
    },
    {
      ...getImage('teams/task-notes'),
      w: 2304,
      h: 1440,
      title: 'Adding notes to task'
    },
    {
      ...getImage('teams/teams-create-team'),
      w: 2304,
      h: 1440,
      title: 'Creating a Team'
    },
    {
      ...getImage('teams/teams-files-list'),
      w: 2304,
      h: 1440,
      title: 'File sharing'
    },
    {
      ...getImage('teams/teams-notifications'),
      w: 570,
      h: 127,
      title: 'HTML5 push Notifications for messages'
    },
    {
      ...getImage('teams/teams-team-info'),
      w: 2304,
      h: 1440,
      title: 'View and edit team info'
    }
  ]
}

const tetris = {
  id: 'tetris',
  title: 'Tetris',
  logo: 'tetris',
  description: `This project was done for my Web programming class - it's a Tetris clone with user account and scoreboard features. The game is rendered using HTML5 canvas. It touches upon most of the fundamental concepts of modern web development. The UI elements were partially inspired by Material Design. I used HowlerJS to provide sound effects as it resulted in increased performance (which is critical to a game as laggy sound effects harm the user experience) compared to standard HTML5 audio elements. I also composed an original background score and sound effects for this game.`,
  time: 'Fall 2014',
  tags: ['HTML5', 'JS', 'PHP', 'MySQL'],
  source: 'https://github.com/mk26/Tetris',
  images: [
    {
      ...getImage('tetris/tetris-game'),
      w: 2089,
      h: 1205,
      title: 'In game'
    },
    {
      ...getImage('tetris/tetris-paused'),
      w: 2089,
      h: 1202,
      title: 'Game paused'
    },
    {
      ...getImage('tetris/tetris-gameover'),
      w: 2089,
      h: 1203,
      title: 'Game over'
    }
  ]
}

const shipwars = {
  id: 'shipwars',
  title: 'Shipwars',
  logo: 'shipwars',
  description: `This project's main purpose was to demonstrate Software Design Patterns - while being something fun to use at the same time. It's a turn-based strategy game with cloud store of user scores and game statistics. I used Heroku Postgres to store the user data. It is a desktop app in Java which uses the Swing framework for UI elements.`,
  time: 'Summer 2014',
  teamSize: 2,
  tags: ['Java', 'PostgreSQL'],
  source: 'https://github.com/mk26/Shipwars',
  images: [
    {
      ...getImage('shipwars/shipwars-intro'),
      w: 1024,
      h: 665,
      title: 'Intro screen'
    },
    {
      ...getImage('shipwars/shipwars-game1'),
      w: 960,
      h: 800,
      title: 'In game - 1'
    },
    {
      ...getImage('shipwars/shipwars-game2'),
      w: 960,
      h: 800,
      title: 'In game - 2'
    },
    {
      ...getImage('shipwars/shipwars-game3'),
      w: 960,
      h: 800,
      title: 'In game - 3'
    },
    {
      ...getImage('shipwars/shipwars-stats'),
      w: 558,
      h: 675,
      title: 'Player statistics'
    }
  ]
}

const spark = {
  id: 'spark',
  title: 'Spark',
  logo: 'spark',
  description: `Spark is a hyperlocal chat app for iOS which provides near-range communication without the internet, using the Multipeer Connectivity framework. It enables text and image sharing to nearby users who are reachable by bluetooth, or are part of the same Wi-fi network, or accessible via the mesh network created by the Multipeer Framework. Users can either have public or private conversations. Users can view people nearby in a map view (can disable sharing of location by switching to Private mode). Also includes password-lock support to increase privacy.`,
  time: 'Spring 2014',
  tags: ['iOS', 'Objective-C'],
  images: [
    {
      ...getImage('spark/spark-passcode'),
      w: 640,
      h: 1136,
      title: 'Passcode view'
    },
    { ...getImage('spark/spark-list'), w: 640, h: 1136, title: 'List view' },
    {
      ...getImage('spark/spark-notification'),
      w: 640,
      h: 1136,
      title: 'List view showing nearby users + in-app notification'
    },
    {
      ...getImage('spark/spark-msg'),
      w: 640,
      h: 1136,
      title: 'Messages view'
    },
    {
      ...getImage('spark/spark-map'),
      w: 640,
      h: 1136,
      title: 'Map view showing nearby users'
    },
    {
      ...getImage('spark/spark-settings'),
      w: 640,
      h: 1136,
      title: 'Settings view'
    }
  ]
}

const lelivre = {
  id: 'lelivre',
  title: 'LeLivre',
  logo: 'lelivre',
  description: `It is an online bookstore web app with an extensive feature set. We designed the database schema and optimized in prior to implementation. It features searching (by author, book, keyword, genre), reviews and ratings, carts, managing user details including credit cards, viewing order history, saving preferred genres, and more - all in a simple, intuitive and easy to use design.`,
  time: 'Spring 2014',
  teamSize: 2,
  tags: ['HTML5', 'JS', 'PHP', 'PostgreSQL'],
  source: 'https://github.com/mk26/LeLivre',
  images: [
    {
      ...getImage('lelivre/lelivre-home'),
      w: 2042,
      h: 1152,
      title: 'Home page'
    },
    {
      ...getImage('lelivre/lelivre-books'),
      w: 2024,
      h: 1160,
      title: 'Book details page'
    },
    {
      ...getImage('lelivre/lelivre-search'),
      w: 2116,
      h: 1160,
      title: 'Searching for books'
    }
  ]
}

const stockr = {
  id: 'stockr',
  title: 'Stockr',
  logo: 'stockr',
  description: `Collaborated with a team of 4 using Agile methodologies to create a web app and a mobile app for managing store inventory. The mobile app has barcode scanning features to quickly add inventory, while the web app is used to manage the inventory and create customized reports to analyze product trends and also to enable easy orders. Our client was the Cellar Market store at SCU.`,
  time: 'Fall 2013',
  teamSize: 4,
  tags: ['HTML5', 'JS', 'PHP', 'Java'],
  images: [
    { ...getImage('stockr/stockr-home'), w: 2040, h: 1164, title: 'Home page' },
    {
      ...getImage('stockr/stockr-prod'),
      w: 2044,
      h: 1156,
      title: 'Products page'
    },
    {
      ...getImage('stockr/stockr-report'),
      w: 2043,
      h: 1164,
      title: 'Inventory report'
    }
  ]
}

const projects = [zones, teams, tetris, shipwars, spark, lelivre, stockr]

export default projects
