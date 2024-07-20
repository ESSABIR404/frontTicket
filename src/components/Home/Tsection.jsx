import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Tsection.scss';
import logo from './img/TICKETY.svg';

gsap.registerPlugin(ScrollTrigger);

function Tsection() {
    useEffect(() => {
        // Animation for main section title
        gsap.fromTo('.T-section-h1 h1', 
            {
                opacity: 0,
                y: -50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.T-section-h1',
                    start: 'top 90%',
                    end: 'bottom 80%',
                    scrub: true,
                    toggleActions: 'play none none reverse',
                    markers: false
                }
            }
        );

        // Animation for each .div-supp and its child elements
        gsap.utils.toArray('.div-supp').forEach(div => {
            gsap.fromTo(div.querySelector('img'), 
                {
                    opacity: 0,
                    y: 50,
                    scale: 0.9,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: div,
                        start: 'top 80%',
                        end: 'top 60%',
                        scrub: true,
                        toggleActions: 'play none none reverse',
                        markers: false
                    }
                }
            );

            gsap.fromTo(div.querySelector('h1'), 
                {
                    opacity: 0,
                    x: -50,
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: div,
                        start: 'top 70%',
                        end: 'top 50%',
                        scrub: true,
                        toggleActions: 'play none none reverse',
                        markers: false
                    }
                }
            );

            gsap.fromTo(div.querySelector('p'), 
                {
                    opacity: 0,
                    x: 50,
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: div,
                        start: 'top 60%',
                        end: 'top 40%',
                        scrub: true,
                        toggleActions: 'play none none reverse',
                        markers: false
                    }
                }
            );
        });

        // Animation for footer
        gsap.fromTo('.footer', 
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.footer',
                    start: 'top 80%',
                    end: 'top 50%',
                    scrub: true,
                    toggleActions: 'play none none reverse',
                    markers: false
                }
            }
        );
    }, []);

    return (
        <div className='Tsection'>
            <div className='s-Tsection'>
                <div className="T-section-h1">
                    <h1>ENCORE PLUS DE NOUVEAUTÉS</h1>
                </div>
                <div className='supp'>
                    <div className='div-supp'>
                        <img width="100" height="100" src="https://img.icons8.com/carbon-copy/100/FFFFFF/ticket.png" alt="ticket" />
                        <div>
                            <h1>ACHETEZ DES TICKETS</h1>
                            <p>Achetez des tickets de qualité pour les meilleurs événements en toute sécurité !</p>
                        </div>
                    </div>
                    <div className='div-supp'>
                        <img width="100" height="100" src="https://img.icons8.com/ios/50/FFFFFF/online-support--v1.png" alt="online-support--v1" />
                        <div>
                            <h1>ONLINE SUPPORT</h1>
                            <p>24/7 customer support</p>
                        </div>
                    </div>
                    <div className='div-supp'>
                        <img width="100" height="100" src="https://img.icons8.com/ios-filled/50/FFFFFF/guarantee.png" alt="guarantee" />
                        <div>
                            <h1>NOTRE GARANTIE 100 %</h1>
                            <p>Éliminez les risques et assurez-vous une transaction sécurisée et protégée en faisant affaire avec tickety.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src={logo} alt="Tickety Logo" />
                    </div>
                    <div className="footer-links">
                        <h3>Liens rapides</h3>
                        <ul>
                            <li><a href="#home">Accueil</a></li>
                            <li><a href="#about">À propos</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h3>Contact</h3>
                        <p>Adresse: 123 Rue Exemplar, Paris, France</p>
                        <p>Téléphone: +33 1 23 45 67 89</p>
                        <p>Email: contact@tickety.com</p>
                    </div>
                    <div className="footer-newsletter">
                        <h3>Newsletter</h3>
                        <p>Inscrivez-vous à notre newsletter pour recevoir les dernières nouvelles et offres.</p>
                        <form>
                            <input type="email" placeholder="Votre email" />
                            <button type="submit">S'inscrire</button>
                        </form>
                    </div>
                    <div className="footer-social">
                        <h3>Suivez-nous</h3>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Tickety. Tous droits réservés.</p>
                </div>
            </footer>
        </div>
    );
}

export default Tsection;
