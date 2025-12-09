import FigureBox from "./FigureBox";
import s from "./local.module.scss";
import { useEffect, useRef, useState } from "react";

const imgsOrigin = [
  {
    imgSrc: "img/newcd/1.jpg",
    songName: "自恋是骄傲",
    singerNames: ["新裤子"],
  },
  {
    imgSrc: "img/newcd/2.jpg",
    songName: "没有答案的日子里",
    singerNames: ["傻子与白痴"],
  },
  {
    imgSrc: "img/newcd/3.jpg",
    songName: "TEENAGE RAMBLE",
    singerNames: ["刘柏辛Lexie"],
  },
  {
    imgSrc: "img/newcd/4.jpg",
    songName: "乐透人生GT：即刻入戏",
    singerNames: ["马思唯"],
  },
  {
    imgSrc: "img/newcd/5.jpg",
    songName: "在雨后醒来",
    singerNames: ["艾志恒Asen"],
  },
  {
    imgSrc: "img/newcd/6.jpg",
    songName: "HEART MAID",
    singerNames: ["宣美"],
  },
  {
    imgSrc: "img/newcd/7.jpg",
    songName: "RECOLLECTION, VOL. I - MY Harmonic Minor",
    singerNames: ["杨千嬅"],
  },
  {
    imgSrc: "img/newcd/8.jpg",
    songName: "生活麻辣烫",
    singerNames: ["王齐铭WatchMe"],
  },
  {
    imgSrc: "img/newcd/9.jpg",
    songName: "离开银色荒原",
    singerNames: ["裘德"],
  },
  {
    imgSrc: "img/newcd/10.jpg",
    songName: "有且",
    singerNames: ["杨丞琳"],
  },
  {
    imgSrc: "img/newcd/8.jpg",
    songName: "生活麻辣烫",
    singerNames: ["王齐铭WatchMe"],
  },
  {
    imgSrc: "img/newcd/9.jpg",
    songName: "离开银色荒原",
    singerNames: ["裘德"],
  },
  {
    imgSrc: "img/newcd/10.jpg",
    songName: "有且",
    singerNames: ["杨丞琳"],
  },
];

const imgs = [...imgsOrigin];

const SectionIcon = () => {
  const section = useRef<HTMLDivElement>(null);
  const imgBoxSub1 = useRef<HTMLDivElement>(null);
  const imgBox = useRef<HTMLDivElement>(null);
  const [len, setLen] = useState(0); // 初始值可保留
  const childNum = 5;
  let moveLen = -len;

  const [curPage, setCurPage] = useState(0);
  const maxPage = 1; // 12/5=2.4 → ceil=3 → maxPage=2

  const getLen = () => {
    const sub = imgBoxSub1.current;
    const computedStyle = window.getComputedStyle(sub);
    //获得gap
    const gap = parseInt(computedStyle.gap, 10);
    //获得子元素宽度
    const chirdWidth = sub.children[0].offsetWidth;
    //获得len
    const totalLen = chirdWidth * childNum + gap * childNum;
    moveLen = -totalLen;
    setLen(totalLen);
    console.log("chirdWidth", chirdWidth);
    console.log("gap1:", gap);
    console.log("totalLen:", totalLen);
    imgBox.current.style.width = totalLen + "px";
    imgBoxSub1.current.style.transition = "none";
    imgBoxSub1.current.style.transform = `translate(0px, 0)`;
    setTimeout(() => {
      imgBoxSub1.current.style.transition = "transform 1s ease-out";
    }, 50);
  };
  useEffect(() => {
    getLen();
  }, []);
  const rightBtnClick = () => {
    const sub1 = imgBoxSub1.current;

    if (curPage === maxPage) {
    } else {
      setCurPage(curPage + 1);
      moveLen = (curPage + 1) * -len;
      sub1.style.transition = "transform 1s ease-out";
      sub1.style.transform = `translate(${moveLen}px, 0)`;
    }
  };

  const leftBtnClick = () => {
    const sub1 = imgBoxSub1.current;
    if (curPage === 0) {
    } else {
      setCurPage(curPage - 1);
      moveLen = (curPage - 1) * -len;
      sub1.style.transition = "transform 1s ease-out";
      sub1.style.transform = `translate(${moveLen}px, 0)`;
    }

    console.log(curPage);
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
    <section ref={section} className={s.sectionIcon}>
      <div className={s.imgBigBox}>
        <button className={s.leftBtn} onClick={leftBtnClick}>
          <ion-icon
            className={s.leftIcon}
            name="chevron-back-outline"
          ></ion-icon>
        </button>
        <button className={s.rightBtn} onClick={rightBtnClick}>
          <ion-icon
            className={s.rightIcon}
            name="chevron-forward-outline"
          ></ion-icon>
        </button>
        <div ref={imgBox} className={s.imgBox}>
          <div ref={imgBoxSub1} className={s.imgBoxSub1}>
            {imgs.map((img, index) => (
              <FigureBox
                imgSrc={img.imgSrc}
                songName={img.songName}
                singerNames={img.singerNames}
                songTime={img.songTime}
              ></FigureBox>
            ))}
          </div>
        </div>
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
    </section>
  );
};

export default SectionIcon;
