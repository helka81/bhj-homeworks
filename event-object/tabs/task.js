const tabContainer = document.getElementById('tabs1');
const tabElements = [...tabContainer.querySelectorAll('.tab')];
const tabContentElements = [...tabContainer.querySelectorAll('.tab__content')];

tabElements.forEach((element, index) => {
    element.addEventListener('click', () => {
        tabElements.forEach(tabItem => tabItem.classList.remove('tab_active'));
        tabContentElements.forEach(contentItem => contentItem.classList.remove('tab__content_active'));

        element.classList.add('tab_active');
        tabContentElements[index].classList.add('tab__content_active');
    });
});