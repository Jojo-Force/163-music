
import s from './local.module.scss'
import SectionLeft from "../../components/Sections/Ranking/SectionLeft";
import SectionRight from "../../components/Sections/Ranking/SectionRight";
import {useState} from "react";

const Ranking =()=>{
    const [page,setPage] = useState(0);
    const onChangePage = (page:number)=>{
        setPage(page);
    }
    return (
        <div className={s.mainBox}>
            <div className={s.main}>
                <div className={s.mainLeft}>
                    <SectionLeft onChangePage={onChangePage}/>
                </div>
                <div className={s.mainRight}>
                    <SectionRight page={page}/>
                </div>
            </div>
        </div>
    )
}

export default Ranking;