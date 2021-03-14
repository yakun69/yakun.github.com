let pageTitle = (document.querySelector('#firstSection')).parentNode;
// let beforePageTitle = document.createElement('div');
// beforePageTitle.innerHTML = 'Начало';
// beforePageTitle.style.color = 'red';
pageTitle.insertAdjacentHTML('beforebegin',
    '<section  class="dark-section">' +
        '<div>' +
            '<a href="../index.html">На главную</a>' +
        '</div>' +
    '</section>'
);