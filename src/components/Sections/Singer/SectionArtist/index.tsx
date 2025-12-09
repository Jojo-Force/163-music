import FigureBox from "./FigureBox";
import s from "./local.module.scss";
import { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";

interface imgsOrigin {
  imgSrc: string;
  songName: string;
  singerNames: string[];
}

interface SectionArtistProps {
  imgs: imgsOrigin[];
  more: boolean;
  atoz: boolean;
  title: string;
}

const SectionArtist = ({ imgs, title, more, atoz }: SectionArtistProps) => {
  const [page, setPage] = useState(0);
  const imgs2 = useMemo(() => {
    if (!atoz) {
      return imgs;
    }
    const startIndex = page * 10;
    return imgs.slice(startIndex, startIndex + 10);
  }, [imgs, atoz, page]);

  const onClick = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <section className={s.sectionArtist}>
      <div className={s.secondLinkFlexbox}>
        <a className={s.headingLink} href="#">
          {title}
        </a>
        {more && <button className={s.moreBtn}>{"更多 >"}</button>}
      </div>
      {atoz && (
        <div className={s.atozBox}>
          <a
            href={"#"}
            className={clsx(s.hotLink, page === 0 ? s.hot : "")}
            onClick={(e) => {
              e.preventDefault(); // 👈 阻止默认跳转
              onClick?.(0); // 安全调用传入的 onclick
            }}
          >
            热门
          </a>
          {Array.from({ length: 26 }, (_, i) => (
            <a
              href={"#"}
              className={clsx(s.hotLink, s.aZ, page === i + 1 ? s.hot : "")}
              key={i}
              onClick={(e) => {
                e.preventDefault(); // 👈 阻止默认跳转
                onClick?.(i + 1); // 安全调用传入的 onclick
              }}
            >
              {String.fromCharCode("A".charCodeAt(0) + i)}
            </a>
          ))}
          <a
            href={"#"}
            className={clsx(s.hotLink, s.other, page === 28 ? s.hot : "")}
            onClick={(e) => {
              e.preventDefault(); // 👈 阻止默认跳转
              onClick?.(28); // 安全调用传入的 onclick
            }}
          >
            其他
          </a>
        </div>
      )}
      <div className={s.imgBoxSub1}>
        {imgs2.map((img, index) => (
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
