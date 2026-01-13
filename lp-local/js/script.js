
/*
const bx = document.querySelector('.bx');
const menu_mobile = document.querySelector('.menu-mobile');
const link_mobile = document.querySelectorAll('.link-menu-mobile');

console.log(link_mobile);

link_mobile.forEach((item) => {
  item.addEventListener('click', () => {
    menu_mobile.classList.add('showmenu');
    console.log(menu_mobile);
        
  })
})

bx.addEventListener('click', () =>{
  bx.classList.toggle('activebx');

  menu_mobile.classList.toggle('showmenu');
  console.log(menu_mobile);
})
*/

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
  const nav = document.querySelector('header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 120) nav.classList.add('active-header'); else nav.classList.remove('active-header')
}
window.addEventListener('scroll', scrollHeader)


/*==================== ACCORDION ====================*/ 
document.querySelectorAll('.accordion-button').forEach(button => {
    
  button.addEventListener('click', () => {
    //button.classList.remove('accordion-button-active');

    const accordionContent = button.nextElementSibling;

    button.classList.toggle('accordion-button-active');

    if(button.classList.contains('accordion-button-active')){
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    }
    else{
      accordionContent.style.maxHeight = 0;
    }
  });
    
});


// Quebrar o texto em várias strings
var textWrapper = document.querySelector('.letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='h0-title'>$&</span>");   


document.addEventListener("DOMContentLoaded", () => {

  /*--=========== GSAP SCROLLTRIGGER ============- */
  gsap.registerPlugin(ScrollTrigger);

  /*--=========== TIMELINE LOADING E HERO ============- */
    
  var tl1 = gsap.timeline();
  tl1
  .to('.screen-loading', {
    duration: 1,
    opacity: 0, 
    delay: 4,
    filter: 'blur(10px)',
    //filter: 'blur(10px)',
    //y: "-10%",
    ease: "power4.out",
  })

  .from(".box-hero blockquote", {
    duration: 2, 
    opacity: 0, 
    x: -100,
    filter: 'blur(10px)',
    stagger:{each: 0.3},
    ease: "power4.out",
  }, '-=1.5')
    
  .from(".div-title span", {
    duration: 4, 
    opacity: 0,
    filter: 'blur(10px)',
    x: -100,
    stagger:{each: 0.3},
    ease: "power4.out",
  }, '-=2.5')

    //gsap.registerPlugin(ScrollTrigger);

    /*
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
    */

    /*
    document.querySelectorAll(".animate-text").forEach((textElement) => {
      textElement.setAttribute("data-text", textElement.textContent.trim());

      ScrollTrigger.create({
        trigger: textElement,
        start: "top 50%",
        end: "bottom 50%",
        scrub: 1,
        onUpdate: (self) => {
          const clipValue = Math.max(0, 100 - self.progress * 100);
          textElement.style.setProperty("--clip-value", `${clipValue}%`);
        },
      });
    });
    */

    ScrollTrigger.create({
      trigger: ".services",
      start: "top bottom",
      end: "top top",
      scrub: 3,
      onUpdate: (self) => {
        const headers = document.querySelectorAll(".services-header");
        gsap.set(headers[0], { x: `${100 - self.progress * 100}%` });
        gsap.set(headers[1], { x: `${-100 + self.progress * 100}%` });
        gsap.set(headers[2], { x: `${100 - self.progress * 100}%` });
      },
    });

    ScrollTrigger.create({
      trigger: ".services",
      start: "center center",
      end: `+=${window.innerHeight * 2}`,
      pin: true,
      scrub: 3,
      //pinSpacing: false,
      onUpdate: (self) => {
        const headers = document.querySelectorAll(".services-header");

        if (self.progress <= 0.5) {
          const yProgress = self.progress / 0.5;
          gsap.set(headers[0], { y: `${yProgress * 100}%` });
          gsap.set(headers[2], { y: `${yProgress * -100}%` });
        } else {
          gsap.set(headers[0], { y: "100%" });
          gsap.set(headers[2], { y: "-100%" });

          const scaleProgress = (self.progress - 0.5) / 0.5;
          const minScale = window.innerWidth <= 1000 ? 0.3 : 0.1;
          const scale = 1 - scaleProgress * (0.5 - minScale);

          headers.forEach((header) => gsap.set(header, { scale }));
        }
      },
    });



    /*--===========================================- */
    /*--=========== TL-CTA 1 ============- */
    /*--===========================================- */
    var tl_cta1 = gsap.timeline();
    tl_cta1
    .from(".text-animation-1",{
      duration: 2,
      opacity: 0,
      x: -150,
      ease: "power4.out",
      scrollTrigger:{
        trigger: '.text-animation-1',
        start: 'center 50%',
        end: 'bottom -10%',
        //markers: true,
        pin: true,
        scrub: 2,
      }
    })
    .from(".text-animation-2",{
      duration: 2,
      opacity: 0,
      rotate: -20,
      ease: "power4.out",
      scrollTrigger:{
        trigger: '.text-animation-2',
        start: 'center 50%',
        end: 'bottom -10%',
        //markers: true,
        pin: true,
        scrub: 2,
      }
    })
    .from(".text-animation-3",{
      duration: 2,
      opacity: 0,
      y: 150,
      rotate: 10,
      ease: "power4.out",
      scrollTrigger:{
        trigger: '.text-animation-3',
        start: 'center 50%',
        end: 'bottom -10%',
        //markers: true,
        pin: true,
        scrub: 2,
      }
    });



    /*--===========================================- */
    /*--=========== TL-CTA 2 ============- */
    /*--===========================================- */
    /*
    var tl_cta2 = gsap.timeline();
    tl_cta2
    .from(".text-animation-4",{
      duration: 1.5,
      opacity: 0,
      x: -50,
      ease: "power4.out",
      scrollTrigger:{
        trigger: '.text-animation-4',
        start: 'center 50%',
        end: 'bottom -10%',
        //markers: true,
        pin: true,
        scrub: 2,
      }
    })
    .from(".text-animation-5",{
      duration: 1.5,
      opacity: 0,
      rotate: -10,
      ease: "power4.out",
      scrollTrigger:{
        trigger: '.text-animation-5',
        start: 'center 50%',
        end: 'bottom -10%',
        //markers: true,
        pin: true,
        scrub: 2,
      }
    })
    .from(".text-animation-6",{
      duration: 1.5,
      opacity: 0,
      x: -50,
      scale: 0.5,
      ease: "power4.out",
      scrollTrigger:{
        trigger: '.text-animation-6',
        start: 'center 50%',
        end: 'bottom -10%',
        //markers: true,
        pin: true,
        scrub: 2,
      }
    });
    */


    /*--===========================================- */
    /*--=========== TL-CTA 3 ============- */
    /*--===========================================- */
    var tl_cta3 = gsap.timeline();
    tl_cta3
    .from(".text-animation-7",{
      duration: 1.5,
      opacity: 0,
      x: -150,
      ease: "power4.out",
      scrollTrigger:{
        trigger: '.text-animation-7',
        start: 'center 50%',
        end: 'bottom -10%',
        //markers: true,
        pin: true,
        scrub: 2,
      }
    })
    .from(".text-animation-8",{
      duration: 1.5,
      opacity: 0,
      rotate: -10,
      x: -50,
      ease: "power4.out",
      scrollTrigger:{
        trigger: '.text-animation-8',
        start: 'center 50%',
        end: 'bottom -10%',
        //markers: true,
        pin: true,
        scrub: 2,
      }
    })
    .from(".text-animation-9",{
      duration: 1.5,
      opacity: 0,
      x: -50,
      rotate: 10,
      ease: "power4.out",
      scrollTrigger:{
        trigger: '.text-animation-9',
        start: 'center 50%',
        end: 'bottom -10%',
        //markers: true,
        pin: true,
        scrub: 2,
      }
    });

    
    gsap.from(".bib-techs h2",{
      duration: 4,
      x: -200,
      opacity: 0,
      filter: 'blur(10px)',
      ease: "power4.out",
      stagger:{each: 0.2},
      scrollTrigger:{
        trigger: '.bib-techs h2',
        start: 'top 70%',
        end: 'bottom -40%',
        scrub: 2,
        //markers: true,
      }
    });


    /*--================================- */
    /*--=========== TEXTOS ============- */
    /*--================================- */

    // TEXTOS DA SEÇÃO DE APRESENTAÇÃO
    gsap.from("#text-presentation-1",{
      x: -50,
      opacity: 0,
      filter: 'blur(10px)',
      ease: "power1.out",
      scrollTrigger:{
        trigger: '#text-presentation-1',
        start: 'center 70%',
        end: 'center 60%',
        scrub: 2,
        //markers: true,
      }
    });

    gsap.from("#text-presentation-2",{
      x: 50,
      opacity: 0,
      filter: 'blur(10px)',
      ease: "power1.out",
      scrollTrigger:{
        trigger: '#text-presentation-2',
        start: 'center 70%',
        end: 'center 60%',
        scrub: 2,
        //markers: true,
      }
    });

    gsap.from("#text-presentation-3",{
      x: -70,
      opacity: 0,
      filter: 'blur(10px)',
      ease: "power1.out",
      scrollTrigger:{
        trigger: '#text-presentation-3',
        start: 'center 70%',
        end: 'center 60%',
        scrub: 2,
        //markers: true,
      }
    });

    gsap.from("#text-presentation-4",{
      x: 50,
      opacity: 0,
      filter: 'blur(10px)',
      ease: "power1.out",
      scrollTrigger:{
        trigger: '#text-presentation-4',
        start: 'center 70%',
        end: 'center 60%',
        scrub: 2,
        //markers: true,
      }
    });

    gsap.from("#text-presentation-5",{
      x: 30,
      opacity: 0,
      filter: 'blur(10px)',
      ease: "power1.out",
      scrollTrigger:{
        trigger: '#text-presentation-5',
        start: 'center 70%',
        end: 'center 60%',
        scrub: 2,
        //markers: true,
      }
    });


    

    // TEXTOS DA SEÇÃO DE PARA QUEM É O CURSO
    gsap.from("#text-1",{
      opacity: 0,
      duration: 3,
      filter: 'blur(10px)',
      ease: "power3.out",
      scrollTrigger:{
        trigger: '#text-1',
        start: 'center 70%',
        end: 'center 40%',
        scrub: 2,
        //markers: true,
      }
    });

    gsap.from("#text-2",{
      opacity: 0,
      duration: 3,
      filter: 'blur(10px)',
      ease: "power3.out",
      scrollTrigger:{
        trigger: '#text-2',
        start: 'center 70%',
        end: 'center 40%',
        scrub: 2,
        //markers: true,
      }
    });

    gsap.from("#text-3",{
      x: 50,
      opacity: 0,
      filter: 'blur(10px)',
      ease: "power3.out",
      scrollTrigger:{
        trigger: '#text-3',
        start: 'center 70%',
        end: 'center 40%',
        scrub: 2,
        //markers: true,
      }
    });

    gsap.from("#text-4",{
      x: -50,
      opacity: 0,
      filter: 'blur(10px)',
      ease: "power3.out",
      scrollTrigger:{
        trigger: '#text-4',
        start: 'center 70%',
        end: 'center 40%',
        scrub: 2,
        //markers: true,
      }
    });

    gsap.from("#text-5",{
      y: 50,
      opacity: 0,
      filter: 'blur(10px)',
      ease: "power1.out",
      scrollTrigger:{
        trigger: '#text-5',
        start: 'center 70%',
        end: 'center 40%',
        scrub: 2,
        //markers: true,
      }
    });

    gsap.from("#text-6",{
      y: -50,
      opacity: 0,
      filter: 'blur(10px)',
      ease: "power1.out",
      scrollTrigger:{
        trigger: '#text-6',
        start: 'center 70%',
        end: 'center 40%',
        scrub: 2,
        //markers: true,
      }
    });

    gsap.from("#text-7",{
      y: -50,
      opacity: 0,
      filter: 'blur(10px)',
      ease: "power1.out",
      scrollTrigger:{
        trigger: '#text-7',
        start: 'center 70%',
        end: 'center 60%',
        scrub: 2,
        //markers: true,
      }
    });



    /*--================================- */
    /*--=========== LOADING AO SCROLL ============- */
    /*--================================- */
    /*
    gsap.from("#section-1 > div",{
      y: 150,
      opacity: 0,
      ease: "power4.out",
      stagger:{each: 0.2},
      duration: 3,
      scrollTrigger:{
        trigger: '#section-1',
        start: 'top 80%',
        end: 'top 50%',
        //markers: true,
      }
    });
    */

});

/*
ScrollTrigger.addEventListener("scrollStart", () => {
  ScrollTrigger.refresh();
});
*/

document.addEventListener("DOMContentLoaded", () => {
  const animateTextElements = (selector, splitBy) => {
    const textContainers = document.querySelectorAll(selector);

    textContainers.forEach((textContainer) => {
      let elements = [];
      let elementType = "";

      if (splitBy === "words") {
        elements = textContainer.textContent.trim().split(/\s+/);
        elementType = "word";
      } else if (splitBy === "letters") {
        const words = textContainer.textContent.trim().split(/\s+/);
        elements = [];

        words.forEach((word, wordIndex) => {
          for (let i = 0; i < word.length; i++) {
            elements.push(word[i]);
          }

          if (wordIndex < words.length - 1) {
            elements.push(" ");
          }
        });

        elementType = "letter";
      }

      textContainer.textContent = "";

      const animatedElements = [];

      elements.forEach((element, index) => {
        if (splitBy === "letters" && element === " ") {
          textContainer.appendChild(document.createTextNode(" "));
          return;
        }

        const elementSpan = document.createElement("span");
        elementSpan.classList.add(elementType);
        elementSpan.textContent = element;
        textContainer.appendChild(elementSpan);

        if (splitBy === "words" && index < elements.length - 1) {
          textContainer.appendChild(document.createTextNode(" "));
        }

        animatedElements.push({
          element: elementSpan,
          originalX: 0,
          originalY: 0,
          currentX: 0,
          currentY: 0,
          targetX: 0,
          targetY: 0,
        });
      });

      setTimeout(() => {
        animatedElements.forEach((element) => {
          const rect = element.element.getBoundingClientRect();
          element.originalX = rect.left + rect.width / 2;
          element.originalY = rect.top + rect.height / 2;
          element.currentX = 0;
          element.currentY = 0;
          element.targetX = 0;
          element.targetY = 0;
        });
      }, 100);

      document.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const radius = 150;
        const maxDisplacement = 300;

        animatedElements.forEach((element) => {
          const originalX = element.originalX;
          const originalY = element.originalY;

          const dx = originalX - mouseX;
          const dy = originalY - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < radius) {
            const force = (1 - distance / radius) * maxDisplacement;

            element.targetX = (dx / distance) * force;
            element.targetY = (dy / distance) * force;
          } else {
            element.targetX = 0;
            element.targetY = 0;
          }
        });
      });

      const animate = () => {
        const lerpFactor = 0.1;

        animatedElements.forEach((element) => {
          element.currentX += (element.targetX - element.currentX) * lerpFactor;
          element.currentY += (element.targetY - element.currentY) * lerpFactor;

          element.element.style.transform = `translate(${element.currentX}px, ${element.currentY}px)`;
        });

        requestAnimationFrame(animate);
      };

      animate();
    });
  };

  animateTextElements(".anime-text", "words");
  animateTextElements(".anime-header", "letters");
});




//////////////////////////////

document.addEventListener("DOMContentLoaded", function () {

  const footer = document.querySelector(".footer-sticky");
  const lastCard = document.querySelector(".card-sticky.scroll");
  const pinnedSections = gsap.utils.toArray(".pinned");

  pinnedSections.forEach((section, index, sections) => {

    let imgSticky = section.querySelector(".img-sticky");

    let nextSection = sections[index + 1] || lastCard;
    let endScalePoint = `top+=${nextSection.offsetTop - section.offsetTop} top`;

    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end:
          index === sections.length
            ? `+=${lastCard.offsetHeight / 2}`
            : footer.offsetTop - window.innerHeight,
        pin: true,
        pinSpacing: false,
        scrub: 2,
      },
    });

    gsap.fromTo(imgSticky,
      { scale: 1 },
      {
        scale: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: endScalePoint,
          scrub: 2,
        },
      }
    );
  });

  /*
  const heroH1 = document.querySelector(".hero-sticky h1");
  ScrollTrigger.create({
    trigger: document.body,
    start: "top top",
    end: "+=400vh",
    scrub: 1,
    onUpdate: (self) => {
      let opacityProgress = self.progress;
      heroH1.style.opacity = 1 - opacityProgress;
    },
  });
  */

});

