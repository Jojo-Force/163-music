import s from "./local.module.scss";
import { useEffect, useRef, useState } from "react";



interface imgsOrigin
{
    singerNames: string[]
}

interface SectionArtistProps{
    imgs:imgsOrigin[];
}

const SectionNames = ({imgs}:SectionArtistProps) => {
  const [page, setPage] = useState(1);
  return (
    <section className={s.sectionNames}>
      <div className={s.imgBoxSub1}>
        {imgs.map((img, index) => (
            <div className={s.singerBox}>
                <a className={s.singerName} href={"#"}>{img.singerNames[0]}</a>
                <a className={s.link} href="#"></a>
            </div>
        ))}
      </div>
    </section>
  );
};

export default SectionNames;
