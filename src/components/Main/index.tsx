import SectionHero from "@/components/Sections/SectionHero";
import SectionNewSong from "../Sections/SectionNewSong";
import SectionRecommend from "../Sections/SectionRecommend";
import SectionNewCD from "../Sections/SectionNewCD";
import SectionRating from "../Sections/SectionRating";
import SectionMV from "../Sections/SectionMV";
import s from './local.module.scss'
import SectionAside from "../Sections/SectionAside";

const Main =()=>{
    return (
        <main>
            <SectionHero/>
            <div className={s.main}>
                <div className={s.mainLeft}>
                <SectionRecommend/>
                <SectionNewCD/>

                {/*<SectionNewSong/>*/}
                {/*<SectionRating/>*/}
                {/*<SectionMV/>*/}
                </div>
                <div className={s.mainRight}>
                    <SectionAside/>
                </div>
            </div>
        </main>
    )
}

export default Main;