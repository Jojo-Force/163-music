import SectionHero from "@/components/Sections/SectionHero";
import SectionRecommend from "@/components//Sections/SectionRecommend";
import SectionNewCD from "@/components//Sections/SectionNewCD";
import SectionRanking from "@/components//Sections/SectionRanking";
import s from './local.module.scss'
import SectionAside from "@/components//Sections/SectionAside";

const Home =()=>{
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

export default Home;