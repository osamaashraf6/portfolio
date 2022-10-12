const details = [
  {
    id: 1,
    title: 'Tonic',
    list: {
      list1: 'CANOPY',
      list2: 'Back End Dev',
      list3: '2015',
    },
    image: 'static/imgs/three.png',
    desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    lang: {
      lang1: 'html',
      lang2: 'css',
      lang3: 'js',
      lang4: 'ruby',
    },
    category: 'project1',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    list: {
      list1: 'FACEBOOK',
      list2: 'Full Stack Dev',
      list3: '2015',
    },
    image: 'static/imgs/four.png',
    desc: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    lang: {
      lang1: 'html',
      lang2: 'Ruby',
      lang3: 'css',
      lang4: 'javaScript',
    },
    category: 'project2',
  },
  {
    id: 3,
    title: 'Facebook 360',
    list: {
      list1: 'FACEBOOK',
      list2: 'Full Stack Dev',
      list3: '2015',
    },
    image: 'static/imgs/Snapshoot Portfolio.png',
    desc: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    lang: {
      lang1: 'html',
      lang2: 'Ruby',
      lang3: 'css',
      lang4: 'javaScript',
    },
    category: 'project3',
  },
  {
    id: 4,
    title: 'Uber',
    list: {
      list1: 'Uber',
      list2: 'Lead Developer',
      list3: '2015',
    },
    image: 'static/imgs/two.png',
    desc: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    lang: {
      lang1: 'html',
      lang2: 'Ruby',
      lang3: 'css',
      lang4: 'javaScript',
    },
    category: 'project4',
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
      <button class="live"><span>See live</span> <img src="static/imgs/Icon.png"/></button><button class="live">See source <i class="fab fa-github"></i></button>
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
