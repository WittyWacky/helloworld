function onClick() {
  const icon = document.querySelector('.navbar i');
  const sidebar = document.querySelector('#sidebar');
  const sidebar2 = document.querySelector('#sidebar2');
  
  if (icon.classList.contains('bi-list')) {
    icon.classList.remove('bi-list');
    icon.classList.add('bi-x-lg');
    sidebar.classList.remove('d-none');
    sidebar.classList.add('d-flex');
    sidebar2.classList.remove('d-none');
    sidebar2.classList.add('d-flex');
  } else {
    icon.classList.remove('bi-x-lg');
    icon.classList.add('bi-list');
    sidebar.classList.remove('d-flex');
    sidebar.classList.add('d-none');
    sidebar2.classList.remove('d-flex');
    sidebar2.classList.add('d-none');
  }
}

document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", revealContent);
  function revealContent() {
    var content = document.querySelectorAll(".scroll");
    for (var i = 0; i < content.length; i++) {
      var windowHeight = window.innerHeight;
      var scrollY = window.scrollY || window.pageYOffset;
      var contentPos = content[i].getBoundingClientRect().top + scrollY;
      if (scrollY + windowHeight > contentPos) {
        content[i].classList.add("show");
      } else {
        content[i].classList.remove("show");
      }
    }
  }
});

