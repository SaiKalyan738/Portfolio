document.getElementById("download-link").addEventListener("click", function(event) {
  event.preventDefault(); 
  const userConfirmed = confirm("Are you sure you want to download my CV?");
  if(userConfirmed) window.location.href = this.href;
});

/******************************************************************************************/

document.addEventListener('DOMContentLoaded', function() {
  const headings = document.querySelectorAll('h1, h2');
  const paragraphs = document.querySelectorAll('p');
  
  headings.forEach((heading, index) => {
      setTimeout(() => {
          heading.classList.add('fade-in');
      }, index * 300); 
  });
  
  paragraphs.forEach((paragraph, index) => {
      const slideDirection = index % 2 === 0 ? 'slide-left' : 'slide-right';
      setTimeout(() => {
          paragraph.classList.add('fade-in', slideDirection, 'visible');
      }, (index + headings.length) * 300); 
  });
});

/********************************************************************************************/

$(".blog_wrapper").owlCarousel({
  autoplay: true,
  loop: true,
  nav: true,
  autoplayTimeout: 3000,
  items: 3,
  dots: false,
  margin: 30,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
});

document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('nav_list').classList.toggle('active');
});