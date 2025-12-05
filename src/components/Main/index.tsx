import SectionHero from "@/components/Sections/SectionHero";
import SectionRecommend from "../Sections/SectionRecommend";
import SectionNewCD from "../Sections/SectionNewCD";
import SectionRanking from "../Sections/SectionRanking";
import s from './local.module.scss'
import SectionAside from "../Sections/SectionAside";

const Main =()=>{
    return (
        <div className={s.mainBox}>
            <SectionHero/>
            <div className={s.main}>
                <div className={s.mainLeft}>
                    <SectionRecommend/>
                    <SectionNewCD/>
                    <SectionRanking/>
                </div>
                <div className={s.mainRight}>
                    <SectionAside/>
                </div>
            </div>
        </div>
    )
}

export default Main;