import React, { useEffect } from 'react';
import './Qsection.scss';
import gsap from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import imgt from './img/TH.png';
import img1 from './img/TICKETY.png';
import img2 from './img/Nostalgia Lovers Festival.png';
import img3 from './img/Cinéma.png';
import img4 from './img/Concerts.png';

gsap.registerPlugin(ScrollTrigger);

const QSection = () => {
  useEffect(() => {
    gsap.registerEffect({
      name: "textAnimation",
      defaults: { duration: 2 },
      effect: (targets, config) => {
        return gsap.timeline()
          .from(targets, {
            duration: 0.5,
            opacity: 0,
            scale: 0,
            y: 80,
            rotationX: 180,
            transformOrigin: "0% 50% -50",
            ease: "back",
            stagger: 0.01,
            delay: config.delay / 25,
          }, "+=0")
          .to(".sub-title", { opacity: 1, y: 0, duration: 1, delay: 0.1 });
      }
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: ".slide-in"
      }
    })
    .to(".slide-in .left", { x: 0, duration: 0.5 })
    .to(".slide-in .right", { x: 0, duration: 0.5 })
    .to(".slide-in p", { y: 0, opacity: 1, duration: 1 });

    gsap.to(".fixed-image .image", {
      duration: 0.5,
      scale: 0.4,
      transformOrigin: "top left",
      ease: "none",
      scrollTrigger: {
        trigger: ".fixed-image",
        start: "top top",
        end: "top -100%",
        scrub: true,
        toggleActions: 'play none none reverse',
        markers: false
      }
    });

    const pinedList = document.querySelector(".pined-list");
    const pinedInner = document.querySelector(".pined-inner");

    gsap.to(pinedList, {
      x: -pinedList.clientWidth + pinedInner.clientWidth,
      scrollTrigger: {
        trigger: ".pined",
        scrub: 1
      }
    });

    // Scroll animation for the <p> element in the .fixed-image .content section with rotation and color change
    gsap.fromTo(".fixed-image .content p", 
      { opacity: 0, y: 50, rotation: 10, color: "#000" },
      {
        opacity: 1,
        y: 0,
        rotation: 0,
        color: "#fff",
        scrollTrigger: {
          trigger: ".fixed-image .content p",
          start: 'top 90%',
          end: 'top 50%',
          scrub: 1,
          toggleActions: 'play none none reverse',
          markers: false
        }
      }
    );

  }, []);

  return (
    <div>
      <div className="fixed-image section">
        <div className="inner">
          <div className="image">
            <img src={imgt} alt="Sample Image" />
          </div>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
              Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula.
            </p>
          </div>
        </div>
      </div>

      <div className="pined section">
        <div className="pined-inner">
          <ul className="pined-list">
            <li><img src={img1} alt="" /></li>
            <li><img src={img2} alt="" /></li>
            <li><img src={img3} alt="" /></li>
            <li><img src={img4} alt="" /></li>
            <li><img src={img1} alt="" /></li>
            <li><img src={img2} alt="" /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QSection;
