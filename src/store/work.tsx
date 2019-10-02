const workThumbHQ = require('~/static/images/content/work-thumbnail-hq.jpg');
const workThumbSpotify = require('~/static/images/content/work-thumbnail-spotify.jpg');
const workThumbApp = require('~/static/images/content/work-thumbnail-appconcept.jpg');
const workThumbBuykea = require('~/static/images/content/work-thumbnail-buykea.jpg');
const workThumbPatagonia = require('~/static/images/content/work-thumbnail-patagonia.jpg');
const workThumbTarot = require('~/static/images/content/work-thumbnail-tarot.jpg');
const workThumbTwitch = require('~/static/images/content/work-thumbnail-twitch.jpg');
const workThumbStereo = require('~/static/images/content/work-thumbnail-stereo.jpg');



export const work = [
  [
    {
      workId: 0,
      title: "HQ TRIVIA ACTION",
      brand: "HQ TRIVIA",
      subTitle: "Development / Strategy",
      color: "#272A81",
      image: workThumbHQ,
      slides: [workThumbStereo,workThumbTwitch,workThumbTarot,workThumbPatagonia],
      copy: '<p>HQ Trivia in partnership with Google Actions team to develop custom Google Actions game based around the HQ Trivia brand. Using Dialogflow; A tool built by Google to facilitate training natural language assistants/applications; a custom built API on AWS EC2/Lambda functions. Using these technologies create a unique interactive voice guided gaming experience in the HQ brand. Was sent to IO 2019 where google featured the product on stage during the developer keynote.</p>'
    },
    {
      title: "APP CONCEPT",
      subTitle: "Design Study",
      color: "#9D2386",
      image: workThumbApp,
      link: 'https://dribbble.com/shots/6300065-Fictional-App-Blue-Yellow'
    },
    {
      title: "STORE CMS",
      subTitle: "Design Study",
      color: "#251269",
      image: workThumbBuykea,
      link: 'https://dribbble.com/shots/7006084-light-mode-store-interface'
    },
    {
      title: "Patagonia Mobile",
      subTitle: "Design Study",
      color: "#2F0808",
      image: workThumbPatagonia,
      link: 'https://dribbble.com/shots/7163876-patagonia-clothing-mobile'
    }
  ],
  [
    {
      workId:1,
      title: "SPOTIFY LMS",
      brand: "SPOTIFY",
      subTitle: "Development / Strategy / Design",
      color: "#12662D",
      image: workThumbSpotify,
      slides: [workThumbBuykea, workThumbApp,workThumbSpotify,workThumbHQ],
      copy: `
        <p>Spotify for brands a LMS for holding companies in partnership with Spotify. An interactive front-end tied to a fully custom backend application powered by a mix of custom GCP / Node / React and Contentful / React. My role on this was to architect from scratch a functional CMS that drives the front-end experience for an interactive learning management system(LMS). I played two parts in the CMS.</p>
        <p>(1) Senior Developer in charge of creating the entire backend service through GCP / Node / React. This included User roles for various levels of administration. CUD for user management at the admin and super admin levels, SSO utilizing Spotify login for user access, Permissions based views, and custom reporting for each holding company including downloadable data via csv/xls.</p>
        <p>(2) Digital Designer in charge of the look and feel of the Spotify LMS backend. Custom interface design for the entire backend experience including mobile. Designs include look and feel that match the Spotify application experience. A custom design system that works with any layout; mobile or desktop. Using Sketch to create an organized and template-able layout.</p>
      `
    },
    {
      title: "TAROT ILLO",
      subTitle: "Design",
      color: "#0E0E0E",
      image: workThumbTarot,
      link: 'https://dribbble.com/shots/6897392-Tarot-style'
    },
    {
      workId:2,
      title: "TWITCH GDC KIOSK",
      brand: "TWITCH",
      subTitle: "Development / Strategy",
      color: "#54348F",
      image: workThumbTwitch,
      slides: [workThumbApp,workThumbBuykea,workThumbSpotify,workThumbHQ],
      copy: `
        <p>A large scale multitouch interactive kiosk to educate streamers on the Twitch platform. The kiosk technology consisted of a React/Electron application deployed to work on a windows PC to be interacted with on multiple 60 inch capacitive touch displays. The application being a single piece of software could be separated into three different experiences to educate the streamer along the three main topics of development, launch, and live.</p>
        <p>The displays were showcased at the Game Developers Conference(GDC) in San Francisco in March of this year(2019). As I was the sole developer of the application I was sent to the conference to assist Twitch in any issues and to help in a successful launch of the application to booth displays.</p>
      `
    },
    {
      title: "STEREO 2018",
      subTitle: "Development / Strategy / Design",
      color: "#9A043B",
      image: workThumbStereo,
      link:"https://stereo.codes"
    }
  ]
]