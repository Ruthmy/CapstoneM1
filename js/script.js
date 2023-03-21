// Code for Mobile Menu
const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('.menu');
const arrAncherTag = document.querySelectorAll('.menu__link');
const mediaQuery = window.matchMedia('(max-width: 768px)');

hamburger.addEventListener('click', (event) => {
  event.stopPropagation();
  menu.classList.toggle('showMobil');
  hamburger.classList.toggle('showMobil');
});

arrAncherTag.forEach((a) => {
  a.addEventListener('click', (event) => {
    event.stopPropagation();
    if (mediaQuery.matches) {
      menu.classList.toggle('showMobil');
      hamburger.classList.toggle('showMobil');
    }
  });
});

// RENDER CARDS DYNAMICALLY

const indexCardsArray = [
    {
      id: '1',
      image: '/images/speaker-01.png',
      imagealt: 'Ana García',
      name: 'Ana García',
      whois: 'Chief Technology Officer (CTO) of the Wikimedia Foundation',
      details: 'Ana has over 10 years of experience leading development teams and managing the technology strategy of companies.',
    },
    {
      id: '2',
      image: '/images/speaker-02.png',
      imagealt: 'SohYeong Noh',
      name: 'Lila SohYeong',
      whois: 'Chief Information Security Officer (CISO) of CC Korea',
      details: 'Lila has worked for over 12 years in the protection and management of information security in companies and organizations.',
    },
    {
      id: '3',
      image: '/images/speaker-03.png',
      imagealt: 'Yochai Benkler',
      name: 'Yochai Benkler',
      whois: 'Chief Data Officer (CDO) at Harvard Law School',
      details: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    },
    {
      id: '4',
      image: '/images/speaker-04.png',
      imagealt: 'Kilnam Chon',
      name: 'Kilnam Chon',
      whois: 'Chief Creative Officer (CCO)',
      details: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
    },
    {
      id: '5',
      image: '/images/speaker-05.png',
      imagealt: 'Julio Leda',
      name: 'Julio Leda',
      whois: 'CEO of PYP of Europe',
      details: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law.',
    },
    {
      id: '6',
      image: '/images/speaker-06.png',
      imagealt: 'Ryan Merkley',
      name: 'Ryan Merkley',
      whois: 'Chief Operating Officer (COO) of the Mozilla Foundation',
      details: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
    },
  ];
  
  /// //////This section is to create the cards \\\\\\\\\\\\\\\\\\\\
  
  let insideCard = '';
  
  indexCardsArray.forEach((singleCardContents) => {
    insideCard
          += `
          <article class="speaker" id="${singleCardContents.id}">
            <div class="chess">
              <img src="${singleCardContents.image}" alt="${singleCardContents.imagealt}" class="speaker-img"/>
            </div>
            <div class="speaker-data">
              <h3>${singleCardContents.name}</h3>
              <h4 class="orange-color">${singleCardContents.whois}</h4>
              <div class="secundary-line"></div>
              <p>${singleCardContents.details}</p>
            </div>
          </article>
          `;
  });
  
  const section = document.querySelector('.speakers-cards');
  
  section.innerHTML = insideCard;
