import s from "./local.module.scss";
import SectionIcon from "../../components/Sections/Djradio/SectionIcon";
import SectionRecommend from "../../components/Sections/Djradio/SectionRecommend";
import SectionRanking from "../../components/Sections/Djradio/SectionRanking";
import SectionRadios from "../../components/Sections/Djradio/SectionRadios";

const Djradio = () => {
  return (
    <div className={s.djradio}>
      <SectionIcon />
      <div className={s.djradioBox}>
        <SectionRecommend />
        <SectionRanking />
      </div>
      <SectionRadios />
    </div>
  );
};

export default Djradio;
