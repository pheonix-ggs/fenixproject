  var typed = new Typed('.text', {
    strings: ['Faster.', 'Smoother.', 'Efficient.','Better.'],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true
  });
  
  function showContent(){
    document.querySelector('.loader').classList.add("hidden");
    document.querySelector('.container').classList.add("hidden");
  }
  
  setTimeout(showContent, 3000);
  
  function toggleMenu () {
    document.querySelector('#show').classList.toggle('show');
    document.querySelector('.hamburger').classList.toggle('close');
  };

