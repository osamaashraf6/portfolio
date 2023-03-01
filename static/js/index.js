const details = [
  {
    id: 1,
    title: 'leaderboard',
    list: {
      list1: 'Microverse',
      list2: 'Frontend Developer',
      list3: '2022',
    },
    image: 'static/imgs/leaderboard.png',
    desc: 'This is a leaderboard app to displays scores submitted by different players, It is used API to get data and post new scores.',
    lang: {
      lang1: 'html',
      lang2: 'css',
      lang3: 'js',
      lang4: 'ruby',
    },
    category: 'project1',
    live: ' ',
    source: 'https://github.com/osamaashraf6/Leaderboard',
  },
  {
    id: 2,
    title: 'Food__dishes',
    list: {
      list1: 'Microverse',
      list2: 'Frontend Developer',
      list3: '2022',
    },
    image: 'static/imgs/food.png',
    desc: 'This Web app displays a list of food dishes. The user is able to like any of the meals, and also read more information about each meal once he clicks on the Comment button. Also, the user is able to leave a comment about any meal..',
    lang: {
      lang1: 'html',
      lang2: 'Ruby',
      lang3: 'css',
      lang4: 'javaScript',
    },
    category: 'project2',
    live: ' ',
    source: 'https://github.com/osamaashraf6/Capstone-Project-JavaScript',
  },
  {
    id: 3,
    title: 'BookStore',
    list: {
      list1: 'Microverse',
      list2: 'Frontend Developer',
      list3: '2022',
    },
    image: 'static/imgs/bookstore.png',
    desc: 'A website which allows users to see the list of books, add a book to the list, and remove a book from the list..',
    lang: {
      lang1: 'html',
      lang2: 'Ruby',
      lang3: 'css',
      lang4: 'javaScript',
    },
    category: 'project3',
    live: ' ',
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
    image: 'static/imgs/spacex.png',
    desc: 'A web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions..',
    lang: {
      lang1: 'html',
      lang2: 'Ruby',
      lang3: 'css',
      lang4: 'javaScript',
    },
    category: 'project4',
    live: ' ',
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
// ============================================================================
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
      <button class="live"><a href="${update[0].live}"><span>See live</span> <img src="static/imgs/Icon.png"/></a></button><button class="live"><a href="${update[0].source}">See source <i class="fab fa-github"></i></a></button>
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
