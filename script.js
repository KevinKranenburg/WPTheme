const heeftSubmenu = document.querySelectorAll('.menu-item-has-children');
for (let i = 0; i < heeftSubmenu.length; i++) {
  const submenu = heeftSubmenu[i].querySelector('.sub-menu');
  const linkSubmenu = heeftSubmenu[i].querySelector('a');
  submenu.classList.toggle('menu-verbergen');
  linkSubmenu.addEventListener('click', e => {
    e.preventDefault();
    submenu.classList.toggle('menu-verbergen');
    linkSubmenu.classList.toggle('menu-is-open');
  })
}
let zoekVenster = document.getElementById('s');
zoekVenster.setAttribute('placeholder','Zoeken...');
zoekVenster.setAttribute('type','search');