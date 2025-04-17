function openTab(evt, tabId) {
  const contents = document.querySelectorAll('.tabcontent');
  const links = document.querySelectorAll('.tablink');

  contents.forEach(c => c.classList.remove('active'));
  links.forEach(l => l.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  evt.currentTarget.classList.add('active');
}
