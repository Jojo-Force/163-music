
import s from './local.module.scss'
import SectionLeft from "../../components/Sections/Ranking/SectionLeft";
import SectionRight from "../../components/Sections/Ranking/SectionRight";

const Ranking =()=>{
    return (
        <div className={s.mainBox}>
            <div className={s.main}>
                <div className={s.mainLeft}>
                    <SectionLeft/>
                </div>
                <div className={s.mainRight}>
                    <SectionRight/>
                </div>
            </div>
        </div>
    )
}

export default Ranking;