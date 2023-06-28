const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownLinks = [...document.querySelectorAll('.dropdown__link')];

dropdownValue.addEventListener('click', (event) => {
  const dropdown = event.target.closest('.dropdown');
  if (!dropdown) return;
 
  dropdownList.classList.toggle('dropdown__list_active');
});

dropdownLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const selectedValue = link.textContent;
    dropdownValue.textContent = selectedValue;
    dropdownList.classList.remove('dropdown__list_active');
  });
});

