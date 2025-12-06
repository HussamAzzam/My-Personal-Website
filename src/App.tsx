import profileImage from './assets/images/profile-image.png';
import workstation from './assets/thumbnails/workstation-thumbnail.png';
import Instagram from './assets/icons/instagram.png';
import Linkedin from './assets/icons/linkedin.png';
import Whatsapp from './assets/icons/whatsapp.png';
import { Menu, SendHorizontal, FileDown, ArrowUpRight, GraduationCap, Mail, X} from 'lucide-react';
import {useState, useEffect, useRef} from "react";
function App() {
    const [contactListOpen, setContactListOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const modalRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const mobileButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            // Close if click is outside modal AND outside button
            if (
                modalRef.current &&
                !modalRef.current.contains(e.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(e.target as Node)
            ) {
                setContactListOpen(false);
            }
        };

        if (contactListOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [contactListOpen]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent)=> {
            //Close if click is outside mobileMenu and mobileButton
            if(
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(e.target as Node) &&
                mobileButtonRef.current &&
                !mobileButtonRef.current.contains(e.target as Node)
            ) {
                setIsMobileMenuOpen(false);
            }
        }
        if(isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMobileMenuOpen]);

    useEffect(() => {
        if (contactListOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [contactListOpen]);

    useEffect(() => {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'auto'; // Enable it
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);

            if(window.innerWidth >= 768)
                setIsMobileMenuOpen(false);
        }
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div id={`home`} className={`font-sans flex flex-col items-center justify-between gap-10 min-h-screen w-screen bg-bg-primary text-primary-text  relative transition-all duration-300 overflow-x-hidden`}>
            {contactListOpen && (
                <div className={` modal-backdrop absolute  top-50 z-50  h-[45vh] large:h-[50vh] flex flex-col justify-end p-10 bg-bg-navbar rounded-4xl text-primary-text animate-fade-in`} ref={modalRef}>
                    <div
                        className={`absolute right-5 top-5 cursor-pointer animate-slide-up`}
                        onClick={() => {setContactListOpen(false)}}
                    >
                        <X size={30}/>
                    </div>
                    <div className={`flex flex-col gap-10`}>
                        <div className={`flex flex-col gap-5 animate-fade-in-delay-1`}>
                            <p className={`text-4xl font-bold`}>Hussam Abdullah Azzam</p>
                            <p className={`text-3xl `}>Jordan, Irbed</p>
                        </div>
                        <div className={`flex flex-col gap-10 animate-fade-in-delay-2`}>
                            <a href="mailto:hosaamazzam9@gmail.com"
                               className={`flex items-center gap-5 text-2xl`}>
                                <Mail size={20}/>
                                <p>hosaamazzam9@gmail.com</p>
                            </a>
                            <a href="https://wa.me/962781090881" target={`_blank`}
                               className={`flex items-center gap-5 text-2xl animate-fade-in-delay-3`}>
                                <img src={Whatsapp} alt="whatsapp" width={25}/>
                                <p>+962781090881</p>
                            </a>
                            <a href="https://www.linkedin.com/in/hussam-azzam-34a429395/" target={`_blank`}
                               className={`flex items-center gap-5 text-2xl animate-fade-in-delay-4`}>
                                <img src={Linkedin} alt="Linkedin" width={25} />
                                <p>Hussam Azzam</p>
                            </a>
                            <a href="https://www.instagram.com/hossa_m_azzam99/" target={`_blank`}
                               className={`flex items-center gap-5 text-2xl animate-fade-in-delay-5`}>
                                <img src={Instagram} alt="Instgram" width={25}/>
                                <p>hossa_m_azzam9</p>
                            </a>
                        </div>
                    </div>
                </div>
            )}
          <header  className={`fixed flex justify-around items-center w-full  h-[6rem] bg-bg-navbar z-50`}>
              <div className={`w-[90%] md:w-[60%] h-[100% - 6rem] flex justify-between items-center`}>
                  <div className="logo flex items-center justify-center select-none">
                     <p style={{fontFamily: 'Great Vibes' }}
                        className={`text-primary-text font-bold text-4xl`}
                     >Hussam</p>
                  </div>
                  {!isMobile && (
                        <div className={`flex items-center justify-between gap-30 text-xl font-semibold text-primary-text`}>
                            <a href="#home" className={`header-link`} >Home</a>
                            <a href="#projects" className={`header-link`}>Projects</a>
                            <a href="#education" className={`header-link`}>Education</a>
                            <a href="#contact" className={`header-link`}>Contact</a>
                        </div>
                  )}
                  {isMobile && (
                      <button
                          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                          ref={mobileButtonRef}
                          className={`cursor-pointer`}
                      >
                          {isMobileMenuOpen ? <X size={30}/> : <Menu size={30}/>}
                      </button>
                  )}
              </div>
          </header>
            {isMobile && isMobileMenuOpen && (
                <div
                    className={`fixed z-100 top-24 right-0 w-full flex flex-col items-center gap-15 p-10 bg-bg-navbar animate-slide-down`}
                    ref={mobileMenuRef}
                >
                    <a href="#home" className={`header-link text-2xl animate-slide-down-delay-1`} onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                    <a href="#projects" className={`header-link text-2xl animate-slide-down-delay-2`} onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
                    <a href="#education" className={`header-link text-2xl animate-slide-down-delay-3`} onClick={() => setIsMobileMenuOpen(false)}>Education</a>
                    <a href="#contact" className={`header-link text-2xl animate-slide-down-delay-4`} onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
                </div>
            )}
            {/*spacer for header*/}
            <div className={`h-30`}></div>
            <div className="nav-shadow w-full  bg-navbar-background"></div>
            <main className={`flex flex-1 flex-col items-center w-[60%] gap-35 mb-50`}>
                <section id={`hero`} className="flex flex-col items-center justify-center gap-15">
                    <div className="h-[15rem] w-[15rem] md:h-[20rem] md:w-[20rem] flex flex-col justify-end items-center rounded-full border-5 border-white gradient-background overflow-hidden ">
                        <img
                            src={profileImage}
                            alt="profile image"
                            className={`select-none w-[18rem] h-[18rem] object-cover object-bottom`}
                        />
                    </div>
                    <div className="hero-title w-auto text-[3rem]/18 md:text-[4rem]/18 font-bold flex flex-col items-center select-none">
                        <p className={`text-white text-center line`}>
                            Full-Stack
                            <p>Web <span className={`gradient-text`}>Developer</span></p>
                        </p>
                    </div>
                    <div className="hero-description w-auto">
                        <p className={`w-[90%] md:w-[30ch] text-center text-secondary-text text-2xl/9`}>
                            Full-stack engineer with expertise in Nextjs, React, and cloud technologies.
                            I build fast, scalable applications with attention to both user experience and system architecture.
                        </p>
                    </div>
                    <div className="hero-buttons w-auto flex-col md:flex md:flex-row md:justify-between md:items-center gap-10">
                        <button
                            className="contact-btn w-[15rem] h-[5rem]  flex justify-center items-center overflow-hidden
                                       bg-white rounded-full text-bg-primary text-2xl font-bold cursor-pointer group mb-10 md:mb-0"
                            ref={buttonRef}
                            onClick={(e) => {
                                e.stopPropagation();
                                setContactListOpen(!contactListOpen);
                            }}

                        >
                            <span className={`translate-x-5 group-hover:-translate-x-0 transition-transform duration-300 ease-in-out`}>Get In Touch</span>
                            <SendHorizontal className={`translate-x-20  group-hover:translate-x-2 transition-transform duration-300 ease-in-out text-bg-primary`}/>
                        </button>
                        <a
                            href="/cv.pdf"
                            download="cv.pdf"
                            className="contact-btn w-[15rem] h-[5rem] flex flex-col justify-center items-center overflow-hidden
                                     bg-bg-primary rounded-full text-text-primary text-2xl font-bold cursor-pointer
                                       group border-3 border-text-primary hover:text-bg-primary hover:bg-primary-text hover:border-primary-text transition-all duration-300 ease-in-out"
                        >
                            <FileDown className="-translate-y-20 group-hover:translate-y-4 transition-all duration-300 ease-in-out" />
                            <span className="-translate-y-5 group-hover:translate-y-20 transition-all duration-300 ease-in-out">Download CV</span>
                        </a>
                    </div>
                </section>
                <section id={`experience`} className="text-secondary-text flex flex-col items-center justify-center gap-30 select-none ">
                    <p className={`text-2xl font-semibold`}>EXPERIENCE WITH</p>

                    <div className={`flex items-center justify-between gap-30 flex-wrap`}>
                        <i className="devicon-html5-plain text-[50px]"></i>
                        <i className="devicon-css3-plain text-[50px]"></i>
                        <i className="devicon-javascript-plain text-[50px]"></i>
                        <i className="devicon-nodejs-plain text-[50px]"></i>
                        <i className="devicon-tailwindcss-original text-[50px]"></i>
                        <i className="devicon-react-original text-[50px]"></i>
                        <i className="devicon-nextjs-plain text-[50px]"></i>

                    </div>
                </section>
                <div id={`projects`}></div>
                <section  className="flex flex-col items-center gap-10  select-none">
                    <p className={`text-[3rem] font-bold gradient-orange`}>PROJECTS</p>
                    <div id={`projects-container`} className={`flex items-center justify-center gap-10`}>
                        <div id={`workstation`} className={`project-card`}>
                            <img src={workstation} alt="workstation"
                                 className={`project-image`}
                            />
                            <a href={`https://workstation-q09c.onrender.com/`} target={`_blank`}
                               className={`project-link hover:opacity-90`}
                            >
                                <div>
                                    <p>CLICK HERE TO VISIT</p>
                                    <p className={`project-title`}>WORKSTATION</p>
                                </div>
                                <ArrowUpRight/>
                            </a>
                        </div>
                    </div>
                    </section>
                <div id={`education`}></div>
                <section  className="flex flex-col justify-center items-center gap-10 w-full px-25">
                    <p className={`text-[3rem] font-bold gradient-blue text-center select-none`}>EDUCATION</p>
                    <div className={`flex justify-center items-center gap-100`}>
                        <div className={`w-full flex flex-col items-start gap-5  text-2xl text-primary-text bg-bg-navbar p-10 rounded-2xl`}>
                            <div className={`flex items-center gap-5`}>
                                <GraduationCap className={``} size={30}/>
                                <p className={`text-primary-text font-bold text-3xl`}>University</p>
                            </div>
                            <div className={`flex flex-col gap-5 text-secondary-text`}>
                                <p>
                                    Bachelor's in Software Engineering
                                </p>
                                <p>
                                    Al-Hussein Bin Talal University
                                </p>
                                <p>
                                    Graduated 2026
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <div id={`contact`}></div>
            <section   className=" w-full flex flex-col gap-10 bg-bg-navbar px-[5%] md:px-[20%] py-20">
                <div className={`text-4xl font-bold text-primary-text`}>
                    Contact
                </div>
                <div className={`flex flex-col gap-10 text-primary-text`}>
                    <p className={`max-w-[60ch] text-secondary-text text-2xl`}>
                        Seasoned Full Stack Software Engineer with over 2 years of hands-on experience in designing
                        and implementing robust, scalable, and innovative web solutions. Adept at leveraging a
                        comprehensive skill set encompassing front-end and back-end technologies
                    </p>
                    <a href="mailto:hosaamazzam9@gmail.com"
                       className={`flex items-center gap-5 text-2xl`}>
                       <Mail size={20}/>
                        <p>hosaamazzam9@gmail.com</p>
                    </a>
                    <a href="https://wa.me/962781090881" target={`_blank`} className={`flex items-center gap-5 text-2xl`}>
                        <img src={Whatsapp} alt="whatsapp" width={25}/>
                        <p>+962781090881</p>
                    </a>
                    <p className={`text-2xl`}>Address: Jordan, Irbed.</p>
                    <div className={`flex gap-5`}>
                        <a href="https://www.linkedin.com/in/hussam-azzam-34a429395/" target={`_blank`}>
                            <img src={Linkedin} alt="Linkedin" />
                        </a>
                        <a href="https://www.instagram.com/hossa_m_azzam99/" target={`_blank`}>
                            <img src={Instagram} alt="Instgram" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default App
