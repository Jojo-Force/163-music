import s from "./local.module.scss";

import SectionNewCD from "../../components/Sections/Album/SectionNewCD";
import SectionNewCDAll from "../../components/Sections/Album/SectionNewCDAll";

const Album = () => {
  return (
    <div className={s.ablum}>
      <SectionNewCD />
      <SectionNewCDAll />
    </div>
  );
};

export default Album;
