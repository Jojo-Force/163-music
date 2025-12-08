import s from "./local.module.scss";
import SectionLeft from "../../components/Sections/Singer/SectionLeft";
import SectionRight from "../../components/Sections/Singer/SectionRight/Page2";

const singer = () => {
  return (
    <div className={s.singer}>
      <SectionLeft />
    </div>
  );
};

export default singer;
