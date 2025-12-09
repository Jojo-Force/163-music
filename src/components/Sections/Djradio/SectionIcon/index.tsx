import FigureBox from "./FigureBox";
import s from "./local.module.scss";
import { useEffect, useRef, useState } from "react";

const imgsOrigin = [
  {
    imgSrc: "img/djradio/icon/1.jpg",
    name: "情感",
  },
  {
    imgSrc: "img/djradio/icon/2.jpg",
    name: "音乐博客",
  },
  {
    imgSrc: "img/djradio/icon/3.jpg",
    name: "有声书",
  },
  {
    imgSrc: "img/djradio/icon/4.jpg",
    name: "脱口秀",
  },
  {
    imgSrc: "img/djradio/icon/5.jpg",
    name: "创作翻唱",
  },
  {
    imgSrc: "img/djradio/icon/6.jpg",
    name: "电音",
  },
  {
    imgSrc: "img/djradio/icon/7.jpg",
    name: "知识",
  },
  {
    imgSrc: "img/djradio/icon/8.jpg",
    name: "二次元",
  },
  {
    imgSrc: "img/djradio/icon/9.jpg",
    name: "明星专区",
  },
  {
    imgSrc: "img/djradio/icon/10.jpg",
    name: "生活",
  },
  {
    imgSrc: "img/djradio/icon/11.jpg",
    name: "亲子",
  },
  {
    imgSrc: "img/djradio/icon/12.jpg",
    name: "资讯",
  },
  {
    imgSrc: "img/djradio/icon/13.jpg",
    name: "广播剧",
  },
  {
    imgSrc: "img/djradio/icon/14.jpg",
    name: "故事",
  },
  {
    imgSrc: "img/djradio/icon/15.jpg",
    name: "人文历史",
  },
  {
    imgSrc: "img/djradio/icon/16.jpg",
    name: "娱乐",
  },
  {
    imgSrc: "img/djradio/icon/17.jpg",
    name: "相声曲艺",
  },
  {
    imgSrc: "img/djradio/icon/18.jpg",
    name: "其他",
  },
  {
    imgSrc: "img/djradio/icon/19.jpg",
    name: "文字出版",
  },
  {
    imgSrc: "img/djradio/icon/20.png",
    name: "常见问题",
  },
  {
    imgSrc: "img/djradio/icon/21.png",
    name: "我有做主播",
  },
];

const imgs = [...imgsOrigin];

const SectionIcon = () => {
  const section = useRef<HTMLDivElement>(null);
  const imgBoxSub1 = useRef<HTMLDivElement>(null);
  const imgBox = useRef<HTMLDivElement>(null);
  const [len, setLen] = useState(0); // 初始值可保留
  const [disLeft, setDisLeft] = useState(true);
  const [disRight, setDisRight] = useState(false);
  const childNum = 11;
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
      // imgBoxSub1.current.style.transition = "transform 0.2s ease-out";
    }, 50);
  };
  useEffect(() => {
    getLen();
  }, []);
  const rightBtnClick = () => {
    const sub1 = imgBoxSub1.current;
    const dots = section.current.querySelector(".dots");

    if (curPage === maxPage) {
    } else {
      dots.children[curPage].classList.remove("dot-select");
      setCurPage(curPage + 1);
      moveLen = (curPage + 1) * -len;
      //sub1.style.transition = "transform 0.2s ease-out";
      sub1.style.transform = `translate(${moveLen}px, 0)`;
      dots.children[curPage + 1].classList.add("dot-select");
      setDisLeft(false);
      setDisRight(true);
    }
  };

  const leftBtnClick = () => {
    const sub1 = imgBoxSub1.current;
    const dots = section.current.querySelector(".dots");

    if (curPage === 0) {
    } else {
      dots.children[curPage].classList.remove("dot-select");
      setCurPage(curPage - 1);
      moveLen = (curPage - 1) * -len;
      //sub1.style.transition = "transform 0.2s ease-out";
      sub1.style.transform = `translate(${moveLen}px, 0)`;
      dots.children[curPage - 1].classList.add("dot-select");
      setDisLeft(true);
      setDisRight(false);
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
    setCurPage(index);
    moveLen = index * -len;

    if (index === 0) {
      setDisLeft(true);
      setDisRight(false);
    }

    if (index === 1) {
      setDisLeft(false);
      setDisRight(true);
    }

    const sub1 = imgBoxSub1.current;
    sub1.style.transform = `translate(${moveLen}px, 0)`;
  };

  return (
    <section ref={section} className={s.sectionIcon}>
      <div className={s.imgBigBox}>
        <button className={s.leftBtn} onClick={leftBtnClick}>
          {disLeft === true && (
            <ion-icon
              class={s.leftIcon + " " + s.disable}
              name="chevron-back-outline"
            ></ion-icon>
          )}
          {disLeft === false && (
            <ion-icon class={s.leftIcon} name="chevron-back-outline"></ion-icon>
          )}
        </button>
        <button className={s.rightBtn} onClick={rightBtnClick}>
          {disRight === true && (
            <ion-icon
              class={s.rightIcon + " " + s.disable}
              name="chevron-forward-outline"
            ></ion-icon>
          )}
          {disRight === false && (
            <ion-icon
              class={s.rightIcon}
              name="chevron-forward-outline"
            ></ion-icon>
          )}
        </button>
        <div ref={imgBox} className={s.imgBox}>
          <div ref={imgBoxSub1} className={s.imgBoxSub1}>
            {imgs.map((img, index) => (
              <FigureBox imgSrc={img.imgSrc} name={img.name}></FigureBox>
            ))}
          </div>
        </div>
      </div>

      <div className="dots">
        <button
          className="dot dot-small dot-select"
          onClick={dotClick}
        ></button>
        <button className="dot dot-small" onClick={dotClick}></button>
      </div>
    </section>
  );
};

export default SectionIcon;
