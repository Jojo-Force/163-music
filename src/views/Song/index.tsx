import s from './local.module.scss'
import SectionRecommend from "../../components/Sections/Song/SectionRecommend";


const Song = ()=>{
    return (<div className={s.song}>
        <SectionRecommend/>
    </div>)
}

export default Song;