import s from "./local.module.scss";
import SectionIcon from "../../components/Sections/Djradio/SectionIcon";
import SectionRecommend from "../../components/Sections/Djradio/SectionRecommend";

const Djradio = () => {
  return (
    <div className={s.djradio}>
      <SectionIcon />
      <SectionRecommend />
    </div>
  );
};

export default Djradio;
