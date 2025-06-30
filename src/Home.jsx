import { useState, useEffect, useRef } from 'react'
import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react"
// Importing the images
import interfaceHeaderImage from './assets/heroImageSection.svg'
import headerDroppingImage from './assets/heroDroppingImage.svg'
import checkoutItemVideo from './assets/checkoutItemsVideo.mp4'
import CheckoutThumbnail from './assets/CheckoutThumbnail.svg'
import customizeSettingsThumbnail from './assets/customizeSettingsThumbnail.svg'
import customizeSettings from './assets/customizeSettings.webm'
import trackStockThumbnail from './assets/stockTracker.svg'
import trackStocks from './assets/trackStocks.webm'
import addUsersThumbnail from './assets/addUsersThumbnail.svg'
import addUsers from './assets/addingUSers.webm'
import returningThumbnail from './assets/returningItemsThumbnail.svg'
import returningVideo from './assets/returningItems.webm'
import teamImage from './assets/teamImage.jpeg'
import hourGlass from "./animations/hourGlass.json"
import rightArrow from "./animations/rightArrow.json"
import autoParts from "./assets/autoPartDealers.svg"
import electronincStores from "./assets/electronicStores.svg"
import fashionBoutiques from "./assets/fashionBotiques.svg"
import hardwares from "./assets/hardwares.svg"
import pharmacies from "./assets/pharmacies.svg"
import retailStores from "./assets/retailStores.svg"
import supermarkets from "./assets/supermarkets.svg"
import wholesalers from "./assets/wholesalers.svg"
import faqImage from "./assets/faq.png"
import quotesIcons from "./assets/faq.png"
import questionMark from './assets/questionMark.png';
import quotes from './assets/Quote.svg';
import julyFifth from './assets/july05.png';
import clockImage from './assets/timeImage.png';
import headSetImage from './assets/headSetImage.png';

import julyFive from './assets/july05.png';
import whatsappImage from './assets/whatsapp.png';
import CornerImage from './assets/cornerEffect.svg';
import footerDesign from './assets/footerDesign.svg';
import NextdevLogo from './assets/NXTDEV-Logo.png'

import { PieChart, Wrench } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { Layers } from 'lucide-react';
import { HandCoins } from 'lucide-react';
import { ListTodo } from 'lucide-react';
import { ChartArea } from 'lucide-react';
import { Undo2 } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Users } from 'lucide-react';
import { PackageSearch } from 'lucide-react';
import { Coins } from 'lucide-react';
import { Receipt } from 'lucide-react';
import { UserRoundCog } from 'lucide-react';
import { MessageSquareWarning } from 'lucide-react';
import { ChartColumnBig } from 'lucide-react';
import { DollarSign } from 'lucide-react';
import { ChartPie } from 'lucide-react';
import { Box } from 'lucide-react';
import { ChartNoAxesColumnIncreasing } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Check } from 'lucide-react';
import { FileChartColumnIncreasing } from 'lucide-react';
import { CircleUser } from 'lucide-react';
import { TriangleAlert } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Instagram } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { CornerRightDown } from 'lucide-react';
import { CalendarFold } from 'lucide-react';
import { Watch } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Lightbulb } from 'lucide-react';
import { MoveRight } from 'lucide-react';

// Importing the components
import NavBar from './components/NavBar';
import MainTopics from './components/MainTopics';
import Paragraph from './components/Paragraph';
import FeatureCards from './components/FeatureCards';
import VideoContainer from './components/VideoContainer';
import SoftwareImportanceCard from './components/SoftwareImportanceCard';
import ReviewCard from './components/ReviewCard'
import BusinessCard from './components/BusinessCard'
import DefaultButton from './components/DefaultButton'
import PricePlanCard from './components/PricePlanCard'
import FaqCard from './components/FaqCard'
import ContactCard from './components/ContactCard'
import TheFooter from './components/TheFooter'
import ContactModal from './components/ContactModal'
import ScrollReveal from './components/ScrollReveal'
import { div } from 'framer-motion/client';

function Home() {

  // The header text animation
  const featureTexts = ["Save Time", "Track Coins", "Boost Sales"]
  const [i, setI] = useState(0)
  const [featureText, setFeatureText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = featureTexts[i];
    const updatedText = isDeleting
      ? fullText.substring(0, featureText.length - 1)
      : fullText.substring(0, featureText.length + 1);

    setFeatureText(updatedText);

    const delay = isDeleting ? 50 : 120;
    const pause = !isDeleting && updatedText === fullText ? 1000 : 0;

    const timeout = setTimeout(() => {
      if (!isDeleting && updatedText === fullText) setIsDeleting(true);
      else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setI((i + 1) % featureTexts.length);
      }
    }, delay + pause);

    return () => clearTimeout(timeout);
  }, [featureText, isDeleting, i]);

  // For the dropping icon near the header
  const [isDropVisible, setIsDropVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDropVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  })

  useEffect(() => {
    const checkVisibility = () => {
      const scrollTop = window.scrollY;
      setIsDropVisible(scrollTop === 0);
    };

    // Initial check on mount
    checkVisibility();

    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);

    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };
  }, []);

  // For showing the progress
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true); 
          }, 300); 

          observer.disconnect(); 
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // All  the speical features container
  const specialFeatures = [
    {
    cardIcon: <PackageSearch className='software-important-icon'/>,
    title: "Smart Stock Targeting",
    desc: "Automatically tracks low stock & predicts restock needs.",
    reason: "Most systems notify at zero - we act before that happens."
  },
  {
    cardIcon: <Coins className='software-important-icon'/>,
    title: "Coin-Based Payment System",
    desc: "Customers save coins and pay with them on return visits.",
    reason: "We reward loyalty, encouraging repeat business."
  },
  {
    cardIcon: <Receipt className='software-important-icon'/>,
    title: "Client-Side Checkout",
    desc: "Fast checkout for customers or staff on any device.",
    reason: "Simple and one-click easy."
  },
  {
    cardIcon: <FileChartColumnIncreasing className='software-important-icon'/>,
    title: "Live Alerts & Real-Time Reports",
    desc: "Instant low-stock alerts and live sales insights.",
    reason: "No waiting. Everything updates in real-time."
  },
  {
    cardIcon: <UserRoundCog className='software-important-icon'/>,
    title: "Multi-User Staff Access",
    desc: "Control staff roles and monitor activity.",
    reason: "You stay in control while your team operates."
  },
  {
    cardIcon: <Receipt className='software-important-icon'/>,
    title: "Custom Features",
    desc: "Themes, offline support, and more.",
    reason: "We’re actually listening to real shop feedback."
  },
  {
    cardIcon: <Wrench className='software-important-icon'/>,
    title: "Fully Customizable",
    desc: "Tailor the system to your exact shop flow.",
    reason: "No one-size-fits-all. Your system, your way."
  }
  ]

  const [cardIndex, setCardIndex] = useState(0);

  const nextCard = () => {
    if (cardIndex < specialFeatures.length - 1) setCardIndex(cardIndex + 1);
  };

  // The draggnig section of the reviews
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

   const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => { setIsDragging(false); };

  const handleMouseUp = () => { setIsDragging(false); };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // The faq section
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const faqData = [
  {
    number: "01",
    question: "How do coins work in IMS?",
    answer:
      "Customers can save extra change from purchases as coins. They can use coins to pay in the future. The system tracks and updates coins automatically."
  },
  {
    number: "02",
    question: "Can I set custom stock targets?",
    answer:
      "Yes. You can set a target quantity for each item. IMS alerts you when stock is below or above that."
  },
  {
    number: "03",
    question: "What happens when an item is returned?",
    answer:
      "When a customer returns an item, the system increases the remaining quantity and updates its status automatically."
  },
  {
    number: "04",
    question: "What’s included in the free trial?",
    answer:
      "You get full access to all features — stock tracking, coin system, checkout, and analytics — 100% free."
  },
  {
    number: "05",
    question: "Can I view data as charts and tables?",
    answer:
      "Absolutely. You can switch between detailed tables or modern charts any time."
  }
  ];

  // For showing the data left
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-07-05T20:00:00+05:30") - + new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, ["2025-07-05T20:00:00+05:30"]);

  // For the contact lightbox
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  // Email Message Function
  const openSmartEmail = () => {
    const email = "nxtdev.info@gmail.com";
    const subject = encodeURIComponent("Hello!");
    const body = encodeURIComponent("I am ready for a demo...");

    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${email}&su=${subject}&body=${body}`;
    const win = window.open(gmailUrl, "_blank");

    if (!win || win.closed || typeof win.closed === "undefined") {
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }
  };

  // Discount section
  const [isDiscountBarOpen, setIsDiscountBarOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDiscountBarOpen(true);
    }, 400);

    return () => clearTimeout(timer);
  })

  // For the live demo model
  const [isLiveDemoOpen, setIsLiveDemoOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLiveDemoOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <NavBar contactModalFunction={() => setIsContactModalOpen(true)}/>

    <div className='main-header-layer'>
    <div className="main-header">

      <div className="wave-container">
        <svg viewBox="0 0 1440 320" className="wave">
          <path fill="#2a5298" fillOpacity="1"
            d="M0,160L40,154.7C80,149,160,139,240,122.7C320,107,400,85,480,96C560,107,640,149,720,160C800,171,880,149,960,133.3C1040,117,1120,107,1200,128C1280,149,1360,203,1400,229.3L1440,256L1440,320L0,320Z">
          </path>
        </svg>
      </div>

      <div className="bubble-container">
        <span className="bubble"></span>
        <span className="bubble"></span>
      </div>

      <div className="header-container container-lg d-flex justify-content-center align-items-start" style={{flexDirection: "column", position: "relative", zIndex: "1"}}>
        <h1>Smart Inventory for Modern Shops.</h1>
        <h5>Handle stock, payments, customer coins, and smart alerts in one easy platform.</h5>
          <div className="typing-container">
            <span>{featureText}</span>
            <span className="cursor">|</span>
          </div>
        <div className="hero-btn-container">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeNIK2IsyjLQaHrRp8pi7doQjuZvew8y8iPaOrlNN3pIwQSFQ/viewform?usp=preview" target='_blank' rel="noopener noreferrer" style={{textDecoration: "none"}}>
            <button className='main-button-1'>Start Free Trial</button>
          </a>
          <button className='main-button-2' onClick={() => setIsContactModalOpen(true)}>Book A Demo Call</button>
        </div>

        <div id='header-interface'>
          <img src={interfaceHeaderImage} alt="" />
        </div>
      </div>

      <div className="container-lg d-flex justify-content-center align-items-center" id='main-feature-card'>
        <div className="row " style={{width: "100%"}}>
          <div className="col-5 d-flex gap-3" id="feature-card-columns">
            <Wrench className='header-features-icon shake-anime'/>
            <h6>Customize to your workflow</h6> 
          </div>
          <div className="col-1 d-flex justify-content-center align-items-center">
            <div style={{height: "100%", width: "3px", backgroundColor: "#e3daff5b"}}></div>
          </div>
          <div className="col-5 d-flex gap-3" id="feature-card-columns">
            <Monitor className='header-features-icon'/>
            <h6>Monitor your inventory live</h6> 
          </div>
        </div>
      </div>
    </div>
    </div>

    <div className="d-flex justify-content-center align-items-center text-center page-section first-features-sction" style={{position: "relative", flexDirection: "column"}} id="features">
      <img src={headerDroppingImage} alt="" className={`dropping-icon`} style={{position: "absolute", width: "90px", height: "auto", opacity: isDropVisible ? 1 : 0, transition: "opacity 0.4s ease", pointerEvents: isDropVisible ? "auto" : "none"}}/>
      <div className='main-feature-main-topic'><MainTopics heading="Powerful Features That Save You Time and Money"/></div>

      <div className="container-lg row d-flex justify-content-center px-3 pt-0 first-main-features-container">
        <FeatureCards icon={<Layers className='feature-icon'/>} featureText="Smart Stock Tracking" description="Set target stock levels and auto-track status"/>
        <FeatureCards icon={<HandCoins className='feature-icon'/>} featureText="Coin Based Payment System" description="Customers save coins, pay later"/>
        <FeatureCards icon={<ListTodo className='feature-icon'/>} featureText="One-Click Checkout" description="Checkout adjusts stock and points instantly"/>
        <FeatureCards icon={<ChartArea className='feature-icon'/>} featureText="Chart/Table View Switcher" description="Switch between visuals and data tables"/>
        <FeatureCards icon={<Undo2 className='feature-icon'/>} featureText="Damage & Return Tracking" description="Returned items-auto-update stock levels"/>
        <FeatureCards icon={<Settings className='feature-icon'/>} featureText="Admin Control Center" description="Full control of sizes, categones, stock"/>
      </div>
    </div>

    <div className="d-flex justify-content-center align-items-center page-section" style={{flexDirection: "column", backgroundColor: "var(--secondary-bg-color)", zIndex: "1", position: "relative"}} id="howItWorks">
      <h3 className='sub-heading-text'>How It Works</h3>
      <MainTopics heading="Manage your stock in just a few steps"/>
      <div>
      </div>
      <div className="d-flex container-lg pt-5 px-4 gap-3" style={{width: "100%", flexDirection: "column"}}>
              
      <div ref={ref}>
      <VideoContainer 
          video={checkoutItemVideo} thumbnail={CheckoutThumbnail}
          taskIcon={<ChartPie className='task-icon'/>}
          task="Effortless Checkout With Coin Rewards"
          description="Sell items quickly, calculate totals effortlessly, and let customers save leftover change as digital coins to use next time. Simple, fast, and rewarding."
          stepNumber="01" helpingTexts="🎁 Fast Checkout. Earn Coins."/></div>

      <VideoContainer 
          video={customizeSettings} thumbnail={customizeSettingsThumbnail}
          taskIcon={<Box className='task-icon'/>}
          task="Stay in Control of Every Item"
          description="Set stock targets and receive instant alerts when inventory runs low or exceeds limits. Say goodbye to guessing what’s in stock."
          stepNumber="02" reverse={true} helpingTexts="📦 Full Item Control."/>

      <VideoContainer 
          video={returningVideo} thumbnail={returningThumbnail}
          taskIcon={<ChartNoAxesColumnIncreasing className='task-icon'/>}
          task="Return Items With One Click"
          description="Automatically add returned items back to stock with one click. Instant status updates save you time and hassle."
          stepNumber="03"  helpingTexts="🔁 One-Click Returns."/>

      <VideoContainer 
          video={trackStocks} thumbnail={trackStockThumbnail}
          taskIcon={<ShoppingCart className='task-icon'/>}
          task="Understand Your Shop Like Never Before"
          description="View sales and inventory data as clear charts or detailed tables. Switch views anytime to make smarter, faster decisions."
          stepNumber="04" reverse={true} helpingTexts="📊 Clear Shop Insights."/>

      <VideoContainer 
          video={addUsers} thumbnail={addUsersThumbnail}
          taskIcon={<MessageSquareWarning className='task-icon'/>}
          task="Add Staff Without Losing Control"
          description="Assign staff limited access to specific features, so you stay in control while your team works efficiently."
          stepNumber="05" helpingTexts="👥 Add Staff. Stay in Charge."/>

    </div>
    </div>

    <div className="container-fluid d-flex justify-content-center align-items-center page-section about-section" id="about-section">
      <div className="container-lg">
        <ScrollReveal className='fade-up'>
        <div className="row d-flex justify-content-center align-items-start">
          <div className="col-12 col-md-6 about-paragraphs-container justify-content-center align-items-center">
            <h1>Built by Store Owners. Perfected by Young Innovators.</h1>
            <p>NextDev IMS was born out of frustration - too many businesses were stuck using outdated inventory tools that caused stock losses, slow sales, and zero customer connection. We wanted to fix that. So we created a powerful, easy-to-use system for real-world shops that want to grow smart.</p>
            <h6>We’re two brothers — Sandun & Rukshan — passionate about helping small businesses scale with technology. We’re not just developers. We've talked to real store owners, tested real workflows, and built features people actually use.</h6>
            <div className="row d-flex justify-content-center align-items-center offers-container">
              <h5>✅ Free Lifetime Updates</h5>
              <h5>✅ Simple Pricing - No Hidden Fees</h5>
              <h5>✅ 24/7 Support from Real People</h5>
              <h5>✅ Customer-Focused Roadmap</h5>
            </div>
          </div>

          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center" id='image-features-container'>
            <div className="d-flex timeline-container" style={{flexDirection: "column", width: "100%"}}>
              <h6>🚀 Started with one local shop</h6>
              <h6>🧪 Proven Success with Real Local Shops</h6>
              <h6>🌍 Helping Stores Worldwide Thrive</h6>
              <h6>⏱️ Improving every week with feedback</h6>
              <img src={teamImage} alt="" style={{clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)", objectFit: "cover"}}/>
            </div>
          </div>
        </div>
        </ScrollReveal>

        <ScrollReveal className='fall-down'>
        <div className="row d-flex about-cta-container">
          <div className="col-12 col-md-6">
            <h1>Want to experience the difference?</h1>
          </div>
          <div className="col-12 col-md-6  free-trial-area">
            <h3 style={{display: "inline"}}>🎁 Start your <span>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeNIK2IsyjLQaHrRp8pi7doQjuZvew8y8iPaOrlNN3pIwQSFQ/viewform?usp=preview" target='_blank' rel="noopener noreferrer" style={{textDecoration: "none", width: "300px"}}>                <button className='special-button'>7-day free trial</button>
              </a>
            </span> - <span className='highlighted-texts'> no credit card</span> required.</h3>
            <h2>Have more questions? → <span><a href="#faq" className='faq-link'>View our FAQ</a></span></h2>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </div>

    <div className="container-fluid justify-content-center align-items-center page-section all-features-container" style={{padding: "60px 0px", zIndex: "1", position: "relative"}}>
    <div className="container-lg d-flex justify-content-center align-items-center">
      <div className="row px-2 d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-6 col-lg-6 col-xl-6 px-0">
          <h1>Why NextDev IMS Is Built Differently</h1>
          <h6 className='mt-2 mt-md-3 mt-lg-4 mt-xl-4'>Whether you run a small shop or a growing enterprise, our system adapts to your workflow. No training needed. Simple, scalable, and secure.</h6>

          <div className="d-flex justify-content-center mt-4 mt-md-2 mt-lg-3 ps-2 ps-md-0" style={{flexDirection: "column"}}>
            <div className="d-flex align-items-center gap-2">
              <ScrollReveal className='strech-animation'><Check className='check-mark'/></ScrollReveal><h4>Fully Customizable to Fit Your Business</h4>
            </div>
            <div className="d-flex align-items-center gap-2 mt-2">
              <ScrollReveal className='strech-animation'><Check className='check-mark'/></ScrollReveal><h4>Real-Time Stock & Sales Insights</h4>
            </div>
            <div className="d-flex align-items-center gap-2 mt-2">
              <ScrollReveal className='strech-animation'><Check className='check-mark'/></ScrollReveal><h4>Secure, Role-Based Access</h4>
            </div>
            <div className="d-flex align-items-center gap-2 mt-2">
              <ScrollReveal className='strech-animation'><Check className='check-mark'/></ScrollReveal><h4>Offline Access – Work Anytime, Anywhere</h4>
            </div>
          </div>
        </div>
        
        <div className="d-flex gap-2 col-12 col-md-6 col-lg-6 col-xl-6 mt-4 mt-md-0" style={{flexDirection: "column", position: "relative"}}>
          <div className="d-flex justify-content-center align-items-center all-features-cards-container" style={{flexDirection: "column"}}>
              <h6 className='features-number-text'>{cardIndex + 1} - 7</h6>
            <div className="software-card-wrapper">
              <div key={cardIndex} className="software-importance-card">
                <div className="d-flex align-items-start gap-2">
                  <div>{specialFeatures[cardIndex].cardIcon}</div>
                  <h2>{specialFeatures[cardIndex].title}</h2>
                </div>
                <h5>{specialFeatures[cardIndex].desc}</h5>
                <p>{specialFeatures[cardIndex].reason}</p>
              </div>
            </div>
            <button onClick={nextCard} disabled={cardIndex === specialFeatures.length - 1} className="next-button">
              {cardIndex === specialFeatures.length - 1 ? 'All Features Shown' : 'See Next Feature'}
            </button>
            <button className={`goback-button ${cardIndex === specialFeatures.length - 1 ? 'visible' : "hidden"}`} onClick={() => setCardIndex(0)}><Undo2/></button>
          </div>
        </div>
        </div>
      </div>
    </div>

    
    <div className="d-flex justify-content-center align-items-center page-section" style={{flexDirection: "column", backgroundColor: "var(--bg-color)", position: "relative"}} id="testimonials">
      <ScrollReveal className='fall-down'>
      <div className="row d-flex container-lg px-2  " style={{position: "relative", justifySelf: "center"}}>

        <div className="col-12 col-md-12 col-lg-8 col-xl-8 d-flex review-scroll-container">
          <Lottie animationData={rightArrow} loop={true} className='arrow-sign'/>
          <div className='d-flex reviews-main-container' style={{overflowX: "scroll", cursor: isDragging ? `grabbing` : 'grab'}}  ref={scrollRef}
              onMouseDown={handleMouseDown} onMouseLeave={handleMouseLeave} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}>

          <div className="d-flex justify-content-center align-items-center text-center no-review-message" style={{flexDirection: "column"}}>
            <Lottie animationData={hourGlass} loop={true} className='hour-glass'/>
            <h1>Be one of the first to try it out and your feedback will be featured here soon.</h1>
          </div>

          {/* <ReviewCard 
            companyLogo={DanLogo}
            reviewMessage="These dudes’ software generated me over $1M in this month. I highly recommend taking this software if you want to grow your business"
            personName="Dan Martell"/>

          <ReviewCard 
            companyLogo={DanLogo}
            reviewMessage="These dudes’ software generated me over $1M in this month. I highly recommend taking this software if you want to grow your business"
            personName="Dan Martell"/>

          <ReviewCard 
            companyLogo={DanLogo}
            reviewMessage="These dudes’ software generated me over $1M in this month. I highly recommend taking this software if you want to grow your business"
            personName="Dan Martell"/> */}

          </div>
        </div>

        <div className="review-introductions col-12 col-md-12 col-lg-4 col-xl-4 d-flex justify-content-center align-items-start mt-4 mt-md-0" style={{flexDirection: "column"}}>
          <h2>What Our Clients Say</h2>
          <h6>Trusted by retailers, warehouse teams, and business owners who rely on our software to simplify inventory, reduce errors, and scale operations with ease.</h6>
        </div>

      </div>
      </ScrollReveal>
    </div>

    <div className="d-flex justify-content-center-align-items-center" style={{backgroundColor: "var(--secondary-bg-color)", zIndex: "1", position: "relative"}}>
      <div className="container-lg designed-business-container">
        <MainTopics heading="Designed for All Types of Businesses"/>

        <ScrollReveal className="fade-up">
          <div className="row d-flex justify-content-center align-items-center gap-4 designed-businesses">
              <BusinessCard businessName="Retail Stores" businessIcon={retailStores}/>
              <BusinessCard businessName="Wholesalers" businessIcon={wholesalers}/>
              <BusinessCard businessName="Pharmacies" businessIcon={pharmacies}/>
              <BusinessCard businessName="Auto Parts Dealers" businessIcon={autoParts}/>
              <BusinessCard businessName="Fashion Boutiques" businessIcon={fashionBoutiques}/>
              <BusinessCard businessName="Supermarkets" businessIcon={supermarkets}/>
              <BusinessCard businessName="Electronic Stores" businessIcon={electronincStores}/>
              <BusinessCard businessName="Hardware" businessIcon={hardwares}/>
          </div>
        </ScrollReveal>
      </div>
    </div>

    <div className="d-flex justify-content-center align-items-center page-section" style={{backgroundColor: "var(--bg-color)", flexDirection: "column", zIndex: "1", position: "relative"}} id="pricing">
      <MainTopics heading="Simple & Transparent Pricing"/>

      <ScrollReveal className='fall-down'>
      <div className="row d-flex justify-content-center align-items-center gap-4 mb-md-3 pricing-plans-container">
        
        <div className={`pricing-plan d-flex justify-content-center align-items-center`} style={{flexDirection: "column", position: "relative"}}>
          <h3>Basic Plan</h3>
          <div className="pricing-plan-body">
            <p>Perfect for <span className='business-type'>small businesses</span> or startups</p>
            <div className='price-container'><h1>$180</h1> /month</div>
            
            <div className="d-flex justify-content-center mt-4" style={{flexDirection: "column"}}>
              <div className="d-flex plan-features">
                <Check className='feature-check-mark'/> <h6>Real-time Inventory Management</h6>
              </div>
              <div className="d-flex plan-features">
                <Check className='feature-check-mark'/> <h6>Basic Sales & User Analytics</h6>
              </div>
              <div className="d-flex plan-features">
                <Check className='feature-check-mark'/> <h6>Stock Level Alerts</h6>
              </div>
              <div className="d-flex plan-features">
                <Check className='feature-check-mark'/> <h6>Access to Checkout & POS</h6>
              </div>
              <div className="d-flex plan-features">
                <Check className='feature-check-mark'/> <h6>Up to 15 Staff Accounts Included</h6>
              </div>
              <div className="d-flex plan-features mb-4">
                <Check className='feature-check-mark'/> <h6>Email Support</h6>
              </div>
            </div>
            <div className='d-flex justify-content-center' style={{position: "absolute", width: "100%", bottom: "75px", left: "50%", transform: "translateX(-50%)"}}>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeNIK2IsyjLQaHrRp8pi7doQjuZvew8y8iPaOrlNN3pIwQSFQ/viewform?usp=preview" target='_blank' rel="noopener noreferrer" className='d-flex' style={{textDecoration: "none", justifyContent: "center"}}>
                <button id='pricing-buttons' style={{position: "absolute"}}>Get This Plam</button>
              </a>
            </div>
          </div>
        </div>

        <PricePlanCard
            plan="Growth Plan" heading={<>For <span className='business-type'>growing businesses</span> with team operations</>}
            pricing="Custom Pricing" includedFeatures="Everything in Basic, plus:"
            feature1="Advanced Analytics Dashboard" feature2="Multi-user Management"
            feature3="Priority Stock Alerts" feature4="Enhanced POS Features" feature5="Registers are customizable"
            feature6="Role-based Access Control" buttonText="Schedule a Demo" buttonHypertext="https://docs.google.com/forms/d/e/1FAIpQLSeNIK2IsyjLQaHrRp8pi7doQjuZvew8y8iPaOrlNN3pIwQSFQ/viewform?usp=preview"/>

        <PricePlanCard
            plan="Enterprise Plan" heading={<>Tailored for <span className='business-type'>large businesses</span> & chains</>}
            pricing={<h2 style={{fontSize: "29px"}}>Fully Customizable</h2>} includedFeatures="Everything in Growth, plus:"
            feature1="Unlimited Users & Registers" feature2="Full Control: Inventory, Users & POS"
            feature3="API & 3rd-Party Integrations" feature4="Dedicated Account Manager" feature5="24/7 SLA Support"
            feature6="Priority Support (Email + Chat)" buttonText="Talk to Our Team" planActiveFunction={() => setIsContactModalOpen(true)}/>
      </div>
      </ScrollReveal>

      <div className="d-flex justify-content-center align-items-center my-5 mb-0 pricing-cta">
        <h1>Plans are fully customizable to your needs, just <a onClick={() => setIsContactModalOpen(true)} className='reach-out-link'>reach out.</a></h1>
        <div className="d-flex justify-content-center align-items-center my-4 gap-3 reach-button-container">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeNIK2IsyjLQaHrRp8pi7doQjuZvew8y8iPaOrlNN3pIwQSFQ/viewform?usp=preview" target='_blank' rel="noopener noreferrer" className='d-flex' style={{textDecoration: "none", justifyContent: "center"}}>
            <DefaultButton text="Try Free - Reach out to Us"/>
          </a>
          <h6 className='underlined-texts-styles'>No credit card needed</h6>
        </div>
      </div>

    </div>

    <div  style={{position: "relative", backgroundColor: "var(--secondary-bg-color)"}}>
    <ScrollReveal className='fall-down'>
    <div className="d-flex justify-content-center align-items-center page-section px-2" style={{flexDirection: "column"}} id="faq">
      <MainTopics heading="Frequently Asked Questions"/>

      <img className='d-none d-md-none d-xl-inline' src={questionMark} alt="" style={{position: "absolute", top: "10px", right: "190px", width: "200px", height: "auto", transform: "rotate(10deg)", WebkitUserDrag: "none", WebkitUserSelect: "none", userSelect: "none", pointerEvents: "none"}}/>

      <div className="container-lg d-flex justify-content-start align-items-start faqs-container">
        {faqData.map((faq, index) => (
        <FaqCard
            key={index}
            number={faq.number}
            question={faq.question}
            answer={faq.answer}
            isOpen={openFaqIndex === index}
            onToggle={() => setOpenFaqIndex(openFaqIndex === index ? null : index)} />
        ))}
      </div>
      <img src={faqImage} className='d-none d-md-none d-xl-inline' alt="" style={{position: "absolute", bottom: "10px", left: "100px", width: "265px", height: "auto", WebkitUserDrag: "none", WebkitUserSelect: "none", userSelect: "none", pointerEvents: "none"}}/>

    </div>
    </ScrollReveal>
    </div>

    <div className="d-flex justify-content-center align-items-center page-section" style={{flexDirection: "column", backgroundColor: "var(--bg-color)", position: "relative", zIndex: "1"}} id="contact">
      <MainTopics heading="Need Help or Have Questions?"/>
      <div className='pt-3'></div>
      <div style={{maxWidth :"700px", width: "98%"}}>
        <Paragraph paragraph="Whether you're curious about features, want to schedule a demo, or need support, our team is ready to answer all your questions."/>
      </div>

      <ScrollReveal className="fade-up d-flex justify-content-center align-items-center">
      <div className="row d-flex justify-content-center align-items-center mt-2 mb-2 mt-md-5 mb-md-5" style={{width: "100%", flexDirection: "row", justifySelf: "center", alignSelf: "center"}}>
        <ContactCard 
            contactIcon={<Mail className='contact-icon'/>} contactMethod="E-Mail"
            contactValue1={<a href='' className='instagram-link' rel='noopener noreferrer' onClick={openSmartEmail}>nxtdev.info@gmail.com</a>}/>

        <ContactCard 
            contactIcon={<Phone className='contact-icon'/>} contactMethod="Phone"
            contactValue1="+94 76 055 6766" contactValue2="+94 77 454 7632"/>

        <ContactCard 
            contactIcon={<FaWhatsapp className='contact-icon'/>} contactMethod="WhatsApp"
            contactValue1="+94 76 055 6766" contactValue2="+94 77 454 7632"/>
            
        <ContactCard 
            contactIcon={<Instagram className='contact-icon'/>} contactMethod="Instagram"
            contactValue1="Follow Us" contactValue2={<a target="_blank" href='https://www.instagram.com/nxtdev_software_company/' className='instagram-link' rel="noopener noreferrer">
              @nxtdev_software_company</a>}/>
      </div>
      </ScrollReveal>

      <div className="container d-flex justify-content-center align-items-center message-quote-container gap-4" style={{flexDirection: "column"}}>
        <img src={quotes} alt="" className='message-qoutes' style={{alignSelf: "start"}}/>
          <h2>We usually reply within 24 hours. Your message matters to us.</h2>
        <img src={quotes} alt="" className='message-qoutes' style={{alignSelf: "end", transform: "rotate(180deg)"}}/>
      </div>
    </div>

    <div className='d-flex justify-content-center align-items-center page-section live-meeting-section' style={{position: "relative", backgroundColor: "var(--secondary-bg-color)"}} id="liveSession">
      <div className="container-lg d-flex justify-content-center align-items-center" style={{flexDirection: "column"}}>
        <div className="row d-flex justify-content-center align-items-start">

          <div className="col-12 col-md-6" style={{position: "relative"}}>
            <ScrollReveal className='fade-up'>
            <div className="live-icon"></div>
            <h1>Live Launch Session – Join Us Live!</h1>
            <h2>We're hosting a live walkthrough to show you how our system works and how to unlock your 10% lifetime discount. You'll also get exclusive support and early access by attending.</h2>
             <div className="d-flex justify-content-start mt-3 mt-md-5 meeting-cta-container" style={{flexDirection: "column"}}>
              <h5>📍 Platform: Private WhatsApp Group</h5>
              <div className="d-flex justify-content-center gap-2 align-items-start flex-column">
                  <span className='attention-text'>🔒 <span className='underlined-texts-styles'>Lifetime 10% Off</span> for Our First <span  style={{color: "var(--highlight-text)"}}>100 Clients</span></span>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSeNIK2IsyjLQaHrRp8pi7doQjuZvew8y8iPaOrlNN3pIwQSFQ/viewform?usp=preview" target='_blank' rel="noopener noreferrer" className='d-flex' style={{textDecoration: "none"}}>
                    <button className='claiming-button mt-3'>Claim Your Spot Now</button>
                  </a>
              </div>
            </div>
             <div className="countdown mt-4 d-flex align-items-center">
              {Object.keys(timeLeft).length === 0 ? (
                <span>🎉 It's Time!</span>
              ) : (
                <span>
                  <span className='date'>{timeLeft.days}d</span> <span className='time'>{timeLeft.hours}h : </span> <span className='time'>{timeLeft.minutes}m : </span> <span className='time'>{timeLeft.seconds}s</span>
                </span>
              )}
            </div>
            </ScrollReveal>
          </div>
          <div className="col-12 col-md-6 date-time-container">
            <div className="d-flex meeting-details-container">
              <h4><CalendarFold className='date-detail-icons'/>Date : <CornerRightDown className='date-time-arrow-icons'/></h4>
              <h6>Saturday, July 5  </h6>
              <div className="underline"></div>
              <div className="sub-underline" style={{marginTop: "10px"}}></div>
              <img className='extra-icon' src={julyFifth} alt=""/>
            </div>
            <div className="d-flex meeting-details-container" style={{flexDirection: "column"}}>
              <h4><Watch className='date-detail-icons'/>Time : <CornerRightDown className='date-time-arrow-icons'/></h4>
              <div className="d-flex gap-0"  style={{flexDirection: "column"}}>
                <div className="d-flex gap-0">
                  <h5>– USA:</h5><h6>10:30 AM (Eastern)</h6>
                </div>
                <div className="d-flex">
                  <h5>– Europe:</h5><h6>4:30 PM (Central Europe)</h6>
                </div>
                <div className="d-flex">
                  <h5>– Australia:</h5><h6>12:30 AM (Sydney, July 6)</h6>
                </div>
              </div>
              <div className="underline"></div>
              <div className="sub-underline right" style={{position: "absolute", right: "0px", bottom: "-10px"}}></div>
              <img className='extra-icon' src={clockImage} alt=""/>
            </div>
            <div className="d-flex meeting-details-container mt-1">
              <h4><MapPin className='date-detail-icons'/>Location: <CornerRightDown className='date-time-arrow-icons'/></h4>
              <h6>Private WhatsApp Group</h6>
              <img className='extra-icon' src={whatsappImage} alt=""/>
              <div className="underline"></div>
              <div className="sub-underline" style={{marginTop: "10px"}}></div>
            </div>
            <div className="d-flex meeting-details-container">
              <h4><Lightbulb className='date-detail-icons'/>Topic: <CornerRightDown className='date-time-arrow-icons'/></h4>
              <h6>How to Get 10% Lifetime Discount + Full Walkthrough</h6>
              <div className="underline"></div>
              <div className="sub-underline right" style={{position: "absolute", right: "0px", bottom: "-10px"}}></div>
              <img className='extra-icon' src={headSetImage} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='page-section final-cta-section' style={{position: "relative", backgroundColor: "var(--bg-color)"}}>
    <ScrollReveal className='fade-up'>
      <div className="container-lg d-flex justify-content-center align-items-center" style={{flexDirection: "column"}}>
        <div style={{maxWidth: "970px"}}><MainTopics heading={<>Ready to Transform Your Inventory into <br/> Business Power?</>}/></div>
      <ScrollReveal className='fall-down'>
      <div className="row d-flex justify-content-center align-items-center mt-5 final-cta-section-description" style={{backgroundImage: "linear-gradient(to right, rgba(48, 86, 192, 0.36), rgba(126, 104, 223, 0.23))", WebkitBackdropFilter: "blur(10px)", padding: "30px 10px", borderRadius: "23px", position: "relative", justifySelf: "center", margin: "0 auto", alignSelf: "center"}}>
        <div className="col-12 col-md-6">
          <h2>Take control with the smartest tools.</h2>
          <h2>Try it free — no commitment.</h2>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeNIK2IsyjLQaHrRp8pi7doQjuZvew8y8iPaOrlNN3pIwQSFQ/viewform?usp=preview" target='_blank' rel="noopener noreferrer" className='d-flex' style={{textDecoration: "none", width: "300px"}}>
            <button className='special-button mt-2'>Gest Started Free →</button>
          </a>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center" style={{flexDirection: "column"}}>
          <h3>⭐⭐⭐⭐⭐</h3>
          <h3>🚀 Empowering 100+ Shops to Work Smarter, Not Harder</h3>
        </div>
        <img src={CornerImage} alt="" style={{position: "absolute", width: "100px", height: "auto", right: "0px",  bottom: "12px", userSelect: "none", WebkitUserDrag: "none", WebkitUserSelect: "none"}}/>
      </div>
      </ScrollReveal>
      </div>
    </ScrollReveal>
    <div className="footer-logo-container">
      <img src={NextdevLogo} alt="" />
      <h3>NXTDEV</h3>
    </div>
    <img src={footerDesign} alt="" className='footer-design-image' style={{position: "absolute", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none", WebkitUserDrag: "none", userSelect: "none"}}/>
    </div>

    { isContactModalOpen && (
      <ContactModal closingFunction={() => setIsContactModalOpen(false)}/>
    ) }

    <TheFooter/>

    {/* Discount section */}
    {isDiscountBarOpen && (
    <div className="complete-discount-section">
      <div className="discount-offer-container">
        <h1>🎁 Get <span style={{fontWeight: "900", paddingLeft:"8px"}}>Lifetime Discount</span></h1>
        <div className="lifetime-discount-important-content">
          <div className="d-flex justify-content-center align-items-center" style={{justifySelf: "center", alignSelf: "center", flexDirection: "column", height: "100%"}}>
            <div className="underline"></div>
            <h6>🎯 For the <span style={{fontWeight:"bold"}}>First 100 Clients</span></h6>
            <h6>🎁 Get <span style={{fontWeight: "bold"}}>10% Lifetime</span> Discount for Life</h6>
            <h6>⏳ Everyone gets a <span style={{fontWeight: "bold"}}>7-day Free Trial</span></h6>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeNIK2IsyjLQaHrRp8pi7doQjuZvew8y8iPaOrlNN3pIwQSFQ/viewform?usp=preview" target='_blank' rel="noopener noreferrer">
              <button className='submit-button'>Submit Now</button>
            </a>
          </div>
      </div>
      </div>
    </div>
    )}

    {/* Live Meeting Modal Section */}
    {isLiveDemoOpen && (
    <div className="live-modal-layout-overlay">
    <div className="live-demo-modal d-flex justify-content-center flex-column">
      <h2>🎥 Join Our Free Live Demo Session</h2>
      <p>Get a full walkthrough of our Inventory Management System and see it in action.</p>
      <div className="underline"></div>
      <div className="d-flex date-time-container">
        <h3>🕒 Session Time:</h3>
        <h6> <span className='d-none d-md-inline'>Sat, </span>July 05, 10:30 AM (USA)</h6>
      </div>
      <h4>💬 Get Access via WhatsApp Group</h4>
      <h4>📌 Fill out a short form to join the private group</h4>

      <div className="underline"></div>
      <div className="d-flex justify-content-center flex-column discount-container">
        <h3>🎁 <span className='underlined-texts-styles'>10% Lifetime</span> Discount</h3>
        <p>Exclusive for those who join the live session!</p>
        <h4>🚀 <span className='underlined-texts-styles'>Only 100 clients</span> can claim this offer</h4>
        {/* <h4>🏷️ Code: LIVE10 (shared during the session)</h4> */}
      </div>

      <div className="cta-buttons-container d-flex align-items-center" style={{justifyContent: "space-around"}}>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeNIK2IsyjLQaHrRp8pi7doQjuZvew8y8iPaOrlNN3pIwQSFQ/viewform?usp=preview" target='_blank' rel="noopener noreferrer">
          <button className='claim-button'>Claim Your Spot</button>
        </a>
        <button className='later-button' onClick={() => setIsLiveDemoOpen(false)}>Maybe Later</button>
      </div>
    </div>
    </div>
    )}
    </>
  )
}

export default Home;
