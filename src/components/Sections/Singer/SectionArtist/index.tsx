import FigureBox from "./FigureBox";
import s from "./local.module.scss";
import { useEffect, useRef, useState } from "react";



interface imgsOrigin
{
    imgSrc: string
    songName: string
    singerNames: string[]
}

interface SectionArtistProps{
    imgs:imgsOrigin[];
    more:boolean;
    title:string;
}

const SectionArtist = ({imgs,title,more}:SectionArtistProps) => {
  const [page, setPage] = useState(1);
  return (
    <section className={s.sectionArtist}>
      <div className={s.secondLinkFlexbox}>
        <a className={s.headingLink} href="#">
          {title}
        </a>
          {more && <button className={s.moreBtn}>
              {"更多 >"}</button>}
      </div>

      <div className={s.imgBoxSub1}>
        {imgs.map((img, index) => (
          <FigureBox
            imgSrc={img.imgSrc}
            singerName={img.singerNames[0]}
          ></FigureBox>
        ))}
      </div>
    </section>
  );
};

export default SectionArtist;
