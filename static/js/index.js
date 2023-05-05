const details = [
  {
    id: 1,
    title: 'leaderboard',
    list: {
      list1: 'Microverse',
      list2: 'Frontend Developer',
      list3: '2022',
    },
    image: 'https://media.istockphoto.com/id/1405787291/photo/panel-of-judges-holding-signs-with-highest-score-on-beige-background-closeup.jpg?s=2048x2048&w=is&k=20&c=-HiC1Qlqx5pgR9X9brJYlcMhtHHZvpRZB2kccLYg6dc=',
    desc: 'A leaderboard App using HTML, CSS, JavaScript, and APIs. This project aims to create a simple and intuitive interface that allows users to track their scores and compare their rankings with others, With a sleek and responsive design, the leaderboard is optimized for both desktop and mobile devices.',
    lang: {
      lang1: 'HTML',
      lang2: 'Css',
      lang3: 'javaScript ES6',
      lang4: 'API',
    },
    category: 'project1',
    live: 'https://leaderboards-9da2.onrender.com',
    source: 'https://github.com/osamaashraf6/Leaderboard',
  },
  {
    id: 2,
    title: 'Budget App',
    list: {
      list1: 'Microverse',
      list2: 'FullStack Developer',
      list3: '2023',
    },
    image: 'https://media.istockphoto.com/id/909979380/photo/hands-putting-coin-in-piggy-bank-concept-outdoors-summertime-family.jpg?s=2048x2048&w=is&k=20&c=DlW7LgEpJMc3lMGf55wxkvnLtCe_YpSbIA9mbq96Q14=',
    desc: 'A budget management app built with Rails and Devise gem, with a clean and user-friendly interface designed with CSS and HTML. Users can create an account, log in, and manage their expenses and income. The app also features a dashboard displaying users current budget status, including charts and graphs that show the breakdown of their expenses',
    lang: {
      lang1: 'Ruby on Rails',
      lang2: 'Css',
      lang3: 'Devise Gem',
      lang4: 'cancancan Gem',
    },
    category: 'project2',
    live: 'https://rails-m2sk.onrender.com/',
    source: 'https://github.com/osamaashraf6/Budget-App/tree/dev',
  },
  {
    id: 3,
    title: 'BookStore',
    list: {
      list1: 'Microverse',
      list2: 'Frontend Developer',
      list3: '2022',
    },
    // image: 'static/imgs/bookstore.png',
    image: 'https://images.unsplash.com/photo-1573592371950-348a8f1d9f38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80',
    desc: 'An online Bookstore app built with React, Redux, CSS, and HTML. Users can browse books by category, add them to a cart, and proceed to checkout. The app features a search function, allowing users to search for books by title or author.',
    lang: {
      lang1: 'HTML',
      lang2: 'Css',
      lang3: 'javaScript',
      lang4: 'React',
    },
    category: 'project3',
    live: 'https://bookstore-yn94.onrender.com',
    source: 'https://github.com/osamaashraf6/Bookstore',
  },
  {
    id: 4,
    title: 'Space X',
    list: {
      list1: 'Microverse',
      list2: 'Frontend Developer',
      list3: '2022',
    },
    // image: 'static/imgs/spacex.png',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
    desc: 'A Space-X-React-Group app built with React, Redux, CSS, and HTML. Users can view information about the latest Space-X launches, rockets, and missions. The app also features a search function, allowing users to search for information about specific launches, rockets, or missions.',
    lang: {
      lang1: 'HTML',
      lang2: 'React',
      lang3: 'Css',
      lang4: 'javaScript',
    },
    category: 'project4',
    live: 'https://space-x.onrender.com/',
    source: 'https://github.com/osamaashraf6/Space-X-React-Group',
  },
];
// eslint-disable-next-line no-plusplus

// ==========================================================================
const burger = document.querySelector(
  '.header__container__parhead__nav__ul__responsive',
);
const iwq = document.querySelector('.iwq');
const parpopup = document.querySelector('.parpopup');
// eslint-disable-next-line camelcase
const parpopup__popup = document.querySelector('.parpopup__popup');
const navLinks = document.querySelectorAll('.mobile-nav-links');
// ===========================================================================
burger.addEventListener('click', () => {
  if (burger.classList.contains('change')) {
    burger.classList.remove('change');
  } else {
    burger.classList.add('change');
  }

  if (iwq.classList.contains('show')) {
    iwq.classList.remove('show');
  } else {
    iwq.classList.add('show');
  }
});
// =============================================================================
// eslint-disable-next-line no-unused-vars
function detail(c) {
  parpopup.style.display = 'flex';
  const update = details.filter((item) => item.category === c);
  parpopup__popup.innerHTML = `
  <div class="head">
  <span class="name">${update[0].title}</span>
  <span id="close" onclick="closes()">&times;</span>
</div>
<ul>
  <li><a href="">${update[0].list.list1}</a></li>
  <li><a href="">${update[0].list.list2}</a></li>
  <li><a href="">${update[0].list.list3}</a></li>
</ul>
<div class="popup__responsive">
  <img src="${update[0].image}" alt="" class="responsive" />
</div>
<div class="types">
  <div class="type">
    <p>${update[0].desc}</p>
  </div>
  <div class="type">
    <ul>
      <li>${update[0].lang.lang1}</li>
      <li>${update[0].lang.lang2}</li>
      <li>${update[0].lang.lang3}</li>
      <li>${update[0].lang.lang4}</li>
    </ul>
    <hr />
    <div class="btns live">
    <button class="live"><a href="${update[0].live}" target="_blank"><span id="fff">See live</span> <img src="static/imgs/Icon.png"/></a></button><button class="live"><a href="${update[0].source}" target="_blank" id="fffs">See source <i class="fab fa-github"></i></a></button>
    </div>
  </div>
</div>
  
  
  `;
}
// ========================================================================
// eslint-disable-next-line no-unused-vars
function closes() {
  parpopup.style.display = 'none';
}
// ========================================================================
navLinks.forEach((item) => {
  item.addEventListener('click', () => {
    iwq.classList.remove('show');
    burger.classList.remove('change');
  });
});
// ========================================================================
// eslint-disable-next-line func-names
window.onclick = function (event) {
  if (event.target === parpopup) {
    parpopup.style.display = 'none';
  }
};
// ========================================================================
// accord

const acc = document.querySelectorAll('#accordion');
let i;

// eslint-disable-next-line no-plusplus
for (i = 0; i < acc.length; i++) {
  // eslint-disable-next-line func-names
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = `${panel.scrollHeight + 55}px`;
    }
  });
}