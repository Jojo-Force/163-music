import s from "../local.module.scss";
import clsx from "clsx";
import { useEffect, useRef } from "react";

interface FigureBoxProps {
  imgSrc: string;
  songName: string;
  radio: string;
  title: string;
  index: number;
}

const FigureBox = ({
  imgSrc,
  songName,
  title,
  radio,
  index,
}: FigureBoxProps) => {
  const barSon = useRef<HTMLDivElement>(null);

  useEffect(() => {
    barSon.current.style.width = `${100 - index * 10}%`;
  }, [index]);

  return (
    <figure className={s.figureOut}>
      <div className={s.numberBox}>
        <span className={clsx(s.numberSpan, index < 3 ? s.numberSpanRed : "")}>
          {index < 9 ? "0" : ""}
          {index + 1}
        </span>
        <span className={s.numberSpan2}>
          <i className={s.numberIcon}></i>0
        </span>
      </div>
      <div className={s.imgContainer}>
        <img className={s.sectionNewCdImg} alt="song" src={imgSrc} />
      </div>
      <a className={s.msk} href="#"></a>
      <div className={s.playBox}>
        <a className={s.songName} href="#">
          {songName}
        </a>
        <a className={s.title} href="#">
          {title}
        </a>
      </div>
      <div className={s.bar}>
        <div ref={barSon} className={s.barSon}></div>
      </div>
    </figure>
  );
};

export default FigureBox;
