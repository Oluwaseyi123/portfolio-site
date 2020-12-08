
  const fadeIn = document.querySelectorAll('.fade-in')
  const appearOptions = { 
    threshold: 0.5,
    rootMargin: "0px 0px -50px 0px"
  }
  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return;
      }else{
        entry.target.classList.add('active')
        appearOnScroll.unobserve(entry.target)
      }
    })
  }, appearOptions)

fadeIn.forEach(fade => {
  appearOnScroll.observe(fade)
})



  