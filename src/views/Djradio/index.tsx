import s from "./local.module.scss";
import SectionIcon from "../../components/Sections/Djradio/SectionIcon";
import SectionRecommend from "../../components/Sections/Djradio/SectionRecommend";
import SectionRanking from "../../components/Sections/Djradio/SectionRanking";

const Djradio = () => {
  return (
    <div className={s.djradio}>
      <SectionIcon />
      <div className={s.djradioBox}>
        <SectionRecommend />
        <SectionRanking />
      </div>
    </div>
  );
};

export default Djradio;
