import s from "./local.module.scss";
import FigureBox from "./FigureBox";
import {useEffect, useRef} from "react";


const imgs = [
    {
        imgSrc: "img/hero/1.jpg",
        imgBg: "img/hero/1-bg.jpg",
    },
    {
        imgSrc: "img/hero/2.jpg",
        imgBg: "img/hero/2-bg.jpg",
    },
    {
        imgSrc: "img/hero/3.jpg",
        imgBg: "img/hero/3-bg.jpg",
    },
    {
        imgSrc: "img/hero/4.jpg",
        imgBg: "img/hero/4-bg.jpg",
    },
    {
        imgSrc: "img/hero/5.jpg",
        imgBg: "img/hero/5-bg.jpg",
    },
    {
        imgSrc: "img/hero/6.jpg",
        imgBg: "img/hero/6-bg.jpg",
    },
    {
        imgSrc: "img/hero/7.jpg",
        imgBg: "img/hero/7-bg.jpg",
    },
    {
        imgSrc: "img/hero/8.jpg",
        imgBg: "img/hero/8-bg.jpg",
    },
]
const SectionHero = () => {
  const section = useRef<HTMLDivElement>(null);
  const imgBoxSub1 = useRef<HTMLDivElement>(null);

  let len = 820;
  const childNum = 1;
  let moveLen = 0;
  const maxPage = 8 - 1;
  let curPage = 0;

  const getLen = () => {
    const sub = imgBoxSub1.current;
    const computedStyle = window.getComputedStyle(sub);
    //获得gap
    const gap = parseInt(computedStyle.gap, 10);
    //获得子元素宽度
    const chirdWidth = sub.children[0].offsetWidth;
    //获得len
    len = chirdWidth * childNum + gap * childNum;
    console.log("gap:", gap);
    console.log("len:", len);
  };

    useEffect(() => {
        getLen();
        const interval = setInterval(() => {
            const sub1 = imgBoxSub1.current;
            sub1.classList.add(s.opacity);
            //
            const timer = setTimeout(() => {
                sub1.classList.remove(s.opacity);
                rightBtnClick();
                // 在这里执行你想做的操作
            }, 1500); // 2000 毫秒 = 2 秒
            //
        }, 5000);

        // 清除定时器
        return () => clearInterval(interval);
    }, []);

  const rightBtnClick = () => {

    const dots = section.current.querySelector(".dots");
    dots.children[curPage].classList.remove("dot-select");
    if (curPage === maxPage) {
      curPage = 0;
    } else {
      curPage += 1;
    }
    moveLen = curPage * -len;
    dots.children[curPage].classList.add("dot-select");
    const sub1 = imgBoxSub1.current;
    sub1.style.transform = `translate(${moveLen}px, 0)`;

    console.log(curPage);
    console.log(`url(${imgs[curPage].imgBg}`);
    section.current.style.backgroundImage = `url(${imgs[curPage].imgBg})`;
  };

  const leftBtnClick = () => {
    const dots = section.current.querySelector(".dots");
    dots.children[curPage].classList.remove("dot-select");
    if (curPage === 0) {
      curPage = maxPage;
    } else {
      curPage -= 1;
    }
    moveLen = curPage * -len;
    dots.children[curPage].classList.add("dot-select");
    const sub1 = imgBoxSub1.current;
    sub1.style.transform = `translate(${moveLen}px, 0)`;

    console.log(curPage);
      section.current.style.backgroundImage = `url(${imgs[curPage].imgBg})`;
  };

  const dotClick = (event) => {
    /*取消原来选中*/
    const child = section.current.querySelector(".dot-select");
    child.classList.remove("dot-select");

    /*当前点击按钮获得选中*/
    event.currentTarget.classList.add("dot-select");
    const parent = section.current.querySelector(".dots");
    const index = Array.from(parent.children).indexOf(event.currentTarget);

    /*计算curPage和移动距离*/
    curPage = index;
    moveLen = curPage * -len;

    const sub1 = imgBoxSub1.current;
    sub1.style.transform = `translate(${moveLen}px, 0)`;
      section.current.style.backgroundImage = `url(${imgs[curPage].imgBg})`;
  };

    return (
        <section ref={section} className={s.sectionHero}>

            <div className={s.sectionBox}>
            <button className={s.leftBtn} onClick={leftBtnClick}>
                <ion-icon class={s.leftIcon} name="chevron-back-outline"></ion-icon>
            </button>
            <button className={s.rightBtn} onClick={rightBtnClick}>
                <ion-icon
                    class={s.rightIcon}
                    name="chevron-forward-outline"
                ></ion-icon>
            </button>
            <div className={s.imgBox}>
                <div ref={imgBoxSub1} className={s.imgBoxSub1}>
                    {
                        imgs.map((img, index) => (
                            <FigureBox
                                imgSrc={img.imgSrc}
                            ></FigureBox>
                        ))
                    }

                </div>

                <div className="dots">
                    <button className="dot dot-select" onClick={dotClick}></button>
                    <button className="dot" onClick={dotClick}></button>
                    <button className="dot" onClick={dotClick}></button>
                    <button className="dot" onClick={dotClick}></button>
                    <button className="dot" onClick={dotClick}></button>
                    <button className="dot" onClick={dotClick}></button>
                    <button className="dot" onClick={dotClick}></button>
                    <button className="dot" onClick={dotClick}></button>
                </div>
            </div>
            <div className={s.download}>
                <button className={s.downloadBtn}></button>
                <p  className={s.downloadP}>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
            </div>
            </div>
        </section>
    );
};

export default SectionHero;
