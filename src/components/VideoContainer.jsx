import React from 'react';
import { useState, useEffect, useRef } from 'react'
import Lottie from "lottie-react"
import { MoveRight, Play, Pause } from 'lucide-react';
import spinner from "../animations/spinner.json"
import playIcon from "../animations/playIcon.json"

function VideoContainer({reverse = false, ...props}) {

    const [isPlaying, setIsPlaying] = useState(false);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const videoRef = useRef();

    // For the animation
    const progressRef = useRef();
    const [isProgressVisible, setIsProgressVisible] = useState(false);
    
    // scrolling-animation
    const ref = useRef();
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            setAnimate(true);
            obs.disconnect();
        }
        }, { threshold: 0.5 });

        obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    const handlePlayClick = () => {
        setIsPlaying(true);
        setIsVideoLoaded(false); 
    };

    const handleVideoLoaded = () => {
        setIsVideoLoaded(true);
    };

    // Pausing the videos
    const [isPaused, setIsPaused] = useState(false);
    const togglePlayPause = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPaused(false);
            } else {
                videoRef.current.pause();
                setIsPaused(true);
            }
        }
    }

    return (
        <>
        <div className="steps-container" style={{width: "100%"}}>
        
            <div className="d-flex" style={{flexDirection: "column"}}>
                <div className="step d-flex d-md-none d-lg-none d-xl-none">
                    Step {props.stepNumber} <MoveRight className='step-arrow'/>
                </div>

            <div className="row d-flex justify-content-start mt-3 gap-4 gap-md-0 gap-lg-0 gap-xl-0">
                <div ref={ref} className={`col-12 col-md-5 col-lg-6 col-xl-6 d-flex gap-5 ${reverse ? `reversed-playing-video` : 'playing-video'} ${animate ? `animate` : ""}`} style={{flexDirection: "column", order: reverse ? 2 : 1 }}>
                    {!isPlaying ? (
                        <div className="video-thumbnail" onClick={() => setIsPlaying(true)} style={{ borderRadius: '12px', maxWidth: '100%', position: "relative"}}>
                            <img src={props.thumbnail} alt="" style={{ borderRadius: '12px', maxWidth: '100%' }}/>
                            <div className="video-thumbnail-overlay"></div>
                            <div className='button-container'>
                                <button ref={ref} className={`video-play-button ${animate ? 'animate' : ''}`} onClick={() => setIsPlaying(true)}> <Lottie animationData={playIcon} loop={true} className='video-play-icon'/></button>
                                <div className="play-video-tooltip">Play Video</div>
                            </div>
                            <div className='help-text'><h6>{props.helpingTexts}</h6></div>
                            <div className="play-dot-icon"></div>
                        </div>
                    ) : (
                    <>
                        {!isVideoLoaded && (
                            <div className='d-flex justify-content-center align-items-center spinner-container' style={{ width: '100%', textAlign: 'center', padding: '2rem', height: "100%"}}>
                                <Lottie animationData={spinner} loop={true} className='video-spinner-icon'/>
                            </div>
                        )}
                        <video ref={videoRef} loop autoPlay onLoadedData={handleVideoLoaded} style={{ borderRadius: '12px', maxWidth: '100%', display: isVideoLoaded ? 'block' : 'none', position: "relative"}} className='video'>
                            <source src={props.video} type="video/webm" />
                        </video>
                        <button className="custom-pause-btn" onClick={togglePlayPause}>{isPaused ? <Play className='pause-icons'/> : <Pause className='pause-icons'/>}</button>
                    </>
                    )}
                </div>
                
                <div className={`col-12 col-md-7 col-lg-6 col-xl-6 video-container ${reverse ? `container-reversed` : `container-normal`}`} style={{position: "relative"}}>
                    <div className={`d-none d-md-flex d-lg-flex d-xl-flex justify-content-center ${reverse ?  `reversed-divider` : `vertical-divider`}`}></div>
                    
                    <div className="step d-none d-md-flex d-lg-flex d-xl-flex">
                        Step {props.stepNumber} <MoveRight className='step-arrow'/>
                    </div>
                    <div className="d-flex gap-3 mt-1 mt-md-5 mb-2">
                        {props.taskIcon}
                        <h3>{props.task}</h3>
                    </div>

                    <h6>{props.description}</h6>
                </div>
            </div>
        </div>
        </div>
        </>
    );
}
export default VideoContainer;

