import { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import Header from "../../components/header/Index";
import Footer from "../../components/footer/Index";

const bg2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wIAAgMBAAirR9cAAAAASUVORK5CYII=";

import background1 from "../../assets/view/background1.jpg";
import background2 from "../../assets/view/background2.jpg";
import background3 from "../../assets/view/background3.jpg";
import background4 from "../../assets/view/background4.jpg";
import background5 from "../../assets/view/background5.jpg";
const backgrounds = [background1, background2, background3, background4, background5];

import PAIRpic from "../../assets/view/PAIR_pic.jpg";

import Scrollreveal from "scrollreveal"
import { CSSTransition } from 'react-transition-group';


import icon1 from "../../assets/view/icon1.jpg"
import icon2 from "../../assets/view/icon2.jpg"
import icon1Bg from "../../assets/view/icon1Bg.jpg"
import icon2Bg from "../../assets/view/icon2Bg.jpg"
import media from "../../assets/view/media.png"
import googlescholar from "../../assets/view/scholar_logo_64dp.png"
import socialmedia1textIcon from "../../assets/view/linkedin.png"
import socialmedia1textIcon2 from "../../assets/view/x.png"


// import avatar1 from "../../assets/view/avatar1.png"
// import avatar2 from "../../assets/view/avatar2.png"
// import avatar3 from "../../assets/view/avatar3.png"
// const avatar = [avatar1, avatar2, avatar3];

const PIavatarModules = import.meta.glob('../../assets/view/PIavatar*.{png,jpg}', { eager: true });
const PIavatarList = Object.values(PIavatarModules).map(module => module.default);



import "./Index.css"


import data from "../../../public/data.json"


console.log('data', data)


function Index() {
    const navigate = useNavigate();
    const two = useRef(null);
    const [isMain, setIsMain] = useState(false);
    const cssRef = useRef(null);

    const [bgColor, setBgColor] = useState('rgba(255, 255, 255, 0)'); // 初始颜色为完全透明
    const [opacity1, setOpacity1] = useState(1);

    const titleSecondaryHTML = data.heroArea.subTitle.replace(/(aim-ahead|aimahead)/gi, match =>
        `<span class="extrabold-text">${match}</span>`
    );

    useEffect(() => {
        const currentElement = two.current;
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio > 0) setIsMain(false)
                else setIsMain(true)
            });
        });

        if (currentElement) {
            io.observe(currentElement);
        }


        const scrollreveal = new Scrollreveal()
        setTimeout(() => {
            const optionsScoll = (position) => {
                return {
                    duration: 1000,
                    delay: 300,
                    origin: position ? position : 'right',
                    reset: false,
                    mobile: true,
                    distance: '500px',
                    opacity: 0.001,
                    easing: 'cubic-bezier(0.5, 0, 0, 1)',
                    scale: 1,
                }
            }
            scrollreveal.reveal('#bg2', optionsScoll('bottom'))
            scrollreveal.reveal('#bggg23, .right', optionsScoll('left'))
            scrollreveal.reveal('#bg3, #bg4, .right-content-line1, .right-content-line2, .right-content-line3, .right-content-line4', optionsScoll('right'))
        }, 0)

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            let opacity_bg = 0;
            if (scrollTop < 1000) {
                opacity_bg = 0.9 * scrollTop / 750;
            } else {
                opacity_bg = 1;
            }

            const newColor = `rgba(0, 45, 114, ${opacity_bg})`;
            setBgColor(newColor);


            const fadeStart = 20;
            const fadeUntil = 100;

            let newOpacity = 1;

            if (scrollTop > fadeStart) {
                newOpacity = 1 - ((scrollTop - fadeStart) / (fadeUntil - fadeStart));
                newOpacity = newOpacity < 0 ? 0 : newOpacity;
            }
            setOpacity1(newOpacity);
        };


        window.addEventListener('scroll', handleScroll);

        return () => {
            if (currentElement) io.disconnect()

        }





    }, [])


    return (
        <div>
            <Header />
            <main className="text-white">
                <div style={{ backgroundColor: bgColor }}>
                    <div id="slideshow" className="absolute w-full h-full top-0 -z-10">
                        {
                            backgrounds.map((item, index) => (
                                <img key={item + index} className="slide absolute w-full h-full object-cover opacity-0" src={item}
                                    alt="Background 1" />
                            ))
                        }
                    </div>

                    <div className="relative h-screen element">

                        <h1 className="w-11/12 lg:w-6/12 text-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <p style={{ fontFamily: 'quadon', fontWeight: 600, fontSize: '50px', opacity: opacity1 }}
                                className="m-0 text-6xl font-bold fadeInSlow">
                                {data.heroArea.title}
                            </p>

                            <div style={{ fontFamily: 'gentona', fontWeight: 400, fontSize: '18px' }}
                                className="mt-3 text-lg fadeInFast">
                                <p className="text-blur"
                                    dangerouslySetInnerHTML={{ __html: titleSecondaryHTML }}>
                                </p>

                                { }
                            </div>
                        </h1>
                        <CSSTransition in={isMain} timeout={300} classNames="fade" unmountOnExit nodeRef={cssRef}>
                            <div ref={cssRef}
                                className="absolute left-1/2 -translate-x-1/2 transform bg-yellow-400 z-10 opacity-60"
                                style={{ width: "1px", height: "20rem", bottom: "-6rem" }}></div>
                        </CSSTransition>
                    </div>
                </div>
                <div className="relative pb-20 bg-rose-300 bg-opacity-15 overflow-hidden"
                    style={{ background: "#4aa1d4" }}>
                    <img className="absolute w-full h-full -left-48 top-0 z-20 opacity-5 object-contain"
                        src={bg2} alt="Background" />
                    <div className="w-11/12 relative z-20 text-center mx-auto">
                        <p style={{ fontFamily: 'quadon', fontWeight: 400 }}
                            className="m-0 mt-10 lg:mt-52 text-6xl font-bold text-center">The Latest</p>
                        <div className='relative mt-8 lg:flex'>
                            <div
                                className='lg:w-8/12 left-content text-left lg:border-r lg:pr-20 box-border border-r-white border-opacity-20'>
                                {data.main.regionOne.left.PIList.length === 1 ? (
                                    // 只有一个时，使用 flex 居中显示，每个子项保持 1/3 宽度
                                    <div className="flex justify-center shadow-primary p-4 bg-white text-black" id="bggg23">
                                        {data.main.regionOne.left.PIList.map((faculty, index) => (
                                            <div key={index} className="w-1/3">
                                                {PIavatarList[index] && (
                                                    <img
                                                        src={PIavatarList[index]}
                                                        alt={`Avatar ${index + 1}`}
                                                        className="w-full aspect-square object-cover rounded-sm overflow-hidden"
                                                    />
                                                )}
                                                <p
                                                    className="mt-1 hover:underline cursor-pointer text-center"
                                                    onClick={() => navigate('/faculty')}
                                                >
                                                    <strong>{faculty.name}</strong>
                                                    <br />
                                                    {faculty.title}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                ) : data.main.regionOne.left.PIList.length === 2 ? (
                                    // 只有两个时，使用 flex 并列显示，设置间距，每个子项同样保持 1/3 宽度
                                    <div className="flex justify-center gap-2 shadow-primary p-4 bg-white text-black" id="bggg23">
                                        {data.main.regionOne.left.PIList.map((faculty, index) => (
                                            <div key={index} className="w-1/3">
                                                {PIavatarList[index] && (
                                                    <img
                                                        src={PIavatarList[index]}
                                                        alt={`Avatar ${index + 1}`}
                                                        className="w-full aspect-square object-cover rounded-sm overflow-hidden"
                                                    />
                                                )}
                                                <p
                                                    className="mt-1 hover:underline cursor-pointer text-center"
                                                    onClick={() => navigate('/faculty')}
                                                >
                                                    <strong>{faculty.name}</strong>
                                                    <br />
                                                    {faculty.title}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    // 三个或以上时，使用 grid 布局显示
                                    <div className="grid grid-cols-3 gap-2 shadow-primary p-4 bg-white text-black" id="bggg23">
                                        {data.main.regionOne.left.PIList.slice(0, 3).map((faculty, index) => (
                                            <div key={index}>
                                                {PIavatarList[index] && (
                                                    <img
                                                        src={PIavatarList[index]}
                                                        alt={`Avatar ${index + 1}`}
                                                        className="w-full aspect-square object-cover rounded-sm overflow-hidden"
                                                    />
                                                )}
                                                <p
                                                    className="mt-1 hover:underline cursor-pointer text-center"
                                                    onClick={() => navigate('/faculty')}
                                                >
                                                    <strong>{faculty.name}</strong>
                                                    <br />
                                                    {faculty.title}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <p
                                    style={{
                                        fontFamily: 'gentona',
                                        fontWeight: 200,
                                        fontSize: '14px',
                                        color: '#F1C400'
                                    }} className='mt-8 right'>Introduction</p>
                                <p style={{fontFamily: 'gentona', fontWeight: 400, fontSize: '36px'}}
                                   className='right font-bold mt-4 text-3xl'>{data.main.regionOne.left.text}</p>
                                {/*hover:underline*/}
                                <p style={{fontFamily: 'gentona', fontWeight: 200, fontSize: '18px'}}
                                   className='right mt-2 text-xl lg:text-base'>
                                    {data.main.regionOne.left.textSubsidiary}
                                </p>

                            </div>


                            <div className='lg:w-4/12 lg:pl-12 right-content-line'>
                                <div className=''>
                                    <div className='text-left right-content-line1'>
                                        <p className='text-6xl font-bold' style={{
                                            color: "#eac642",
                                            fontFamily: 'Arnhem',
                                            fontWeight: 700,
                                            fontSize: '70px'
                                        }}>
                                            {data.main.regionOne.right.one['text-1-1']}
                                        </p>
                                        <p className='my-3 font-bold text-2xl'
                                            style={{ fontFamily: 'gentona', fontWeight: 700, fontSize: '30px' }}>
                                            {data.main.regionOne.right.one['text-1-2']}
                                        </p>
                                        <p style={{ fontFamily: 'gentona', fontWeight: 200, fontSize: '18px' }}>
                                            {data.main.regionOne.right.one['text-1-3']}
                                        </p>
                                    </div>
                                    <div className='mt-10 text-left right-content-line2'>
                                        <p className='text-6xl font-bold' style={{
                                            color: "#eac642",
                                            fontFamily: 'Arnhem',
                                            fontWeight: 700,
                                            fontSize: '70px'
                                        }}>
                                            {data.main.regionOne.right.two['text-2-1']}
                                        </p>
                                        <p className='my-3 font-bold text-2xl'
                                            style={{ fontFamily: 'gentona', fontWeight: 700, fontSize: '30px' }}>
                                            {data.main.regionOne.right.two['text-2-2']}
                                        </p>
                                        <p style={{ fontFamily: 'gentona', fontWeight: 200, fontSize: '18px' }}>
                                            {data.main.regionOne.right.two['text-2-3']}
                                        </p>
                                    </div>
                                    <div className='mt-10 text-left right-content-line3'>
                                        <p className='text-6xl font-bold' style={{
                                            color: "#eac642",
                                            fontFamily: 'Arnhem',
                                            fontWeight: 700,
                                            fontSize: '70px'
                                        }}>
                                            {data.main.regionOne.right.three['text-3-1']}
                                        </p>
                                        <p className='my-3 font-bold text-2xl'
                                            style={{ fontFamily: 'gentona', fontWeight: 700, fontSize: '30px' }}>
                                            {data.main.regionOne.right.three['text-3-2']}
                                        </p>
                                        <p style={{ fontFamily: 'gentona', fontWeight: 200, fontSize: '18px' }}>
                                            {data.main.regionOne.right.three['text-3-3']}
                                        </p>
                                    </div>
                                </div>

                                <div className='mt-4 border-t border-white pt-4 border-opacity-30 right-content-line4'>
                                    <div className='flex flex-wrap gap-2'>
                                        {}



                                            <div
                                                className='w-48 rounded-md btn bg-white p-4 flex justify-center items-center hover:bg-yellow-400 cursor-pointer transition-all'
                                                onClick={_ => window.open(data.main.regionOne.right.GoogleScholarLink)}
                                                style={{
                                                    color: "#4aa1d4",
                                                    fontFamily: 'gentona',
                                                    fontWeight: 600,
                                                    fontSize: '18px'
                                                }}>

                                                <img src={googlescholar} alt="Google Scholar Icon"
                                                     className="w-36 left-0 object-contain" />

                                                <span className='ml-2 transition-all text-yellow-400'>→</span>
                                            </div>


                                        {data.main.regionOne.right.showLinkedinBtn &&(<div
                                            className='w-48 rounded-md btn bg-white p-4 flex justify-center items-center hover:bg-yellow-400 cursor-pointer transition-all'
                                            onClick={_ => window.open(data.main.regionOne.right.XLink)}
                                            style={{
                                                color: "#4aa1d4",
                                                fontFamily: 'gentona',
                                                fontWeight: 600,
                                                fontSize: '18px'
                                            }}>

                                            <img src={socialmedia1textIcon2} alt="Google Scholar Icon"
                                                className="w-4 left-0 object-contain" />

                                            <p className={'ml-3'}>X(twitter)</p>

                                            <span className='ml-2 transition-all text-yellow-400'>→</span>
                                        </div>)}


                                        {data.main.regionOne.right.showXBtn &&(<div
                                            className='w-48 rounded-md  btn bg-white p-4 flex justify-center items-center hover:bg-yellow-400 cursor-pointer transition-all'
                                            onClick={_ => window.open(data.main.regionOne.right.LinkedinLink)}
                                            style={{
                                                color: "#4aa1d4",
                                                fontFamily: 'gentona',
                                                fontWeight: 600,
                                                fontSize: '18px'
                                            }}>

                                            <img src={socialmedia1textIcon} alt="Google Scholar Icon"
                                                className="w-4 left-0 object-contain" />

                                            <p className={'ml-3'}>Linkedin</p>

                                            <span className='ml-2 transition-all text-yellow-400'>→</span>
                                        </div>)}
                                        {data.main.regionOne.right.showMoreBtn && (<div
                                            className='w-48 rounded-md btn bg-white p-4 flex justify-center items-center hover:bg-yellow-400 cursor-pointer transition-all'
                                            onClick={_ => window.open(data.main.regionOne.right.moreBtnLink)}
                                            style={{
                                                color: "#4aa1d4",
                                                fontFamily: 'gentona',
                                                fontWeight: 600,
                                                fontSize: '18px'
                                            }}>
                                            More About Us <span className='ml-2 transition-all text-yellow-400'>→</span>
                                        </div> )}
                                    </div>
                                </div>




                            </div>

                        </div>
                    </div>

                </div>

                <div className="relative bg-opacity-15 lg:pt-10 pb-12 pt-12" style={{ background: "#f3f3f3" }}>
                    <div className="hidden xl:block absolute left-1/2 -translate-x-1/2 transform bg-yellow-400 z-30 opacity-60"
                        style={{ width: "1px", height: "8rem", bottom: "39rem" }}></div>

                    <div className="w-11/12 relative z-20 text-center mx-auto text-black">
                        <p
                            className="m-0 text-6xl font-bold text-center"
                            style={{ fontFamily: 'quadon', fontWeight: 400 }}>Resources</p>

                        <div className='mt-12 lg:flex gap-x-10'>
                            <div className='w-full lg:w-6/12 bg-white'>
                                <div className='relative'>
                                    <div className='relative'>
                                        <img className='w-full' src={icon1Bg} />
                                        <div className='absolute top-0 w-full h-full bg-black bg-opacity-40'></div>
                                    </div>
                                    <div onClick={_ => navigate('/news')}
                                        className='flex w-full lg:w-auto justify-center items-center absolute left-1/2 top-12 lg:left-52 lg:top-28 transform -translate-x-1/2'>
                                        <div className='w-24 h-24 flex p-4 rounded-full overflow-hidden'
                                            style={{ background: "#eac642" }}>
                                            <img className='w-full' src={media} />
                                            {/* <div className="hidden lg:block absolute left-1/2 transform bg-yellow-400 z-30" style={{
                                                width: "1px",
                                                height: "8rem",
                                                left: "3rem",
                                                bottom: "-10rem"
                                            }}></div> */}
                                        </div>
                                        <p
                                            className='ml-4 text-3xl border-b-4 hover:border-transparent text-white border-solid border-yellow-400 font-bold cursor-pointer'>{data.main.regionTwo.part1.title}</p>
                                    </div>

                                    <div className='text-left p-8'>
                                        <p>
                                            {data.main.regionTwo.part1.introducePrimary}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full lg:w-6/12 bg-white'>
                                <div className='relative'>
                                    <div className='relative'>
                                        <img className='w-full' src={icon2Bg} />
                                        <div className='absolute top-0 w-full h-full bg-black bg-opacity-40'></div>
                                    </div>
                                    <div onClick={_ => navigate('/publications')}
                                        className='flex w-full lg:w-auto justify-center items-center absolute left-1/2 top-12 lg:left-52 lg:top-28 transform -translate-x-1/2'>
                                        <div className='w-24 h-24 flex p-4 rounded-full overflow-hidden'
                                            style={{ background: "#eac642" }}>
                                            <img className='w-full' src={icon2} />
                                            {/* <div className="hidden lg:block absolute left-1/2 transform bg-yellow-400 z-30" style={{
                                                width: "1px",
                                                height: "8rem",
                                                left: "3rem",
                                                bottom: "-10rem"
                                            }}></div> */}
                                        </div>
                                        <p
                                            className='ml-4 text-3xl border-b-4 hover:border-transparent text-white border-solid border-yellow-400 font-bold cursor-pointer'>{data.main.regionTwo.part2.title}</p>
                                    </div>
                                    <div className='text-left p-8'>
                                        <p>
                                            {
                                                data.main.regionTwo.part2.introducePrimary
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='p-6 lg:px-20 lg:py-20 relative overflow-hidden' style={{ background: "#4aa1d4" }}>
                    <img id="bg3" className="absolute w-full h-full left-40 top-0 z-10 opacity-5 object-cover"
                        src={bg2} />
                    <div className='lg:flex items-center relative z-20 lg:top-0 top-4'>
                        <div className='lg:w-6/12 lg:px-10'>
                            <p className='font-bold text-3xl'>{data.main.regionThree.titlePrimary}</p>
                            <p className='mt-4 text-md'>{data.main.regionThree.titleSecondary}</p>
                            <div
                                onClick={_ => window.open(data.main.regionThree.joinNowLink)}
                                className='lg:mb-0 mb-4 w-44 mt-4 btn bg-white p-3 flex justify-center items-center hover:bg-yellow-400 cursor-pointer transition-all'
                                style={{ color: "#4aa1d4" }}>
                                {data.main.regionThree.buttonText}

                                <span className='ml-2 transition-all text-yellow-400'>→</span>
                            </div>
                        </div>
                        <div className='lg:w-6/12 lg:mb-0 mb-6'>
                            <img className='w-full shadow-primary' src={PAIRpic} />
                        </div>
                    </div>
                </div>


                <div className='lg:px-20 lg:py-10 p-4 relative overflow-hidden' style={{ background: "white" }}>
                    <div className='text-center'>
                        <p className='text-5xl font-bold' style={{ color: "#2e271f" }}>{data.main.regionFour.titlePrimary}</p>
                        <p className='mt-4 text-xl text-black'>{data.main.regionFour.titleSecondary}</p>
                        <div
                            onClick={() => {
                                const email = data.main.regionFour.email;
                                const mailtoLink = `mailto:${email.address}?subject=${encodeURIComponent(email.subject)}&body=${encodeURIComponent(email.body.greeting + "\n\n" + email.body.content + "\n\n" + email.body.closing)}`;
                                window.open(mailtoLink);
                            }} className='w-44 mx-auto mt-8 btn2 p-3 flex justify-center items-center cursor-pointer transition-all'
                            style={{ backgroundColor: "#4aa1d4" }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#1e3a8a"} // blue-900
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#4aa1d4"} // #4aa1d4
                        >

                            {data.main.regionFour.buttonText}

                            <span className='ml-2 transition-all text-white'>→</span>
                        </div>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}

export default Index;
