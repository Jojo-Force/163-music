import SectionHero from "@/components/Sections/SectionHero";
import SectionNewSong from "../Sections/SectionNewSong";
import SectionRecommend from "../Sections/SectionRecommend";
import SectionNewCD from "../Sections/SectionNewCD";
import SectionRating from "../Sections/SectionRating";
import SectionMV from "../Sections/SectionMV";

const Main =()=>{
    return (
        <main>
            <SectionHero/>
            <SectionRecommend/>
            <SectionNewCD/>

            <SectionNewSong/>
            <SectionRating/>
            <SectionMV/>
        </main>
    )
}

export default Main;