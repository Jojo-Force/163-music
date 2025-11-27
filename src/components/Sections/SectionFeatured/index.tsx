import './local.scss'
const SectionFeature = () => {
    return (
        <section className="section-featured">
        <div className="container">
            <h2 className="heading-feature-in">As feature in</h2>
            <div className="logos">
                <img src="img/logos/techcrunch.png" alt="Techcrunch logo"/>
                <img src="img/logos/business-insider.png" alt="busisness logo"/>
                <img
                    src="img/logos/the-new-york-times.png"
                    alt="new york times logo"
                />
                <img src="img/logos/forbes.png" alt="forbes logo"/>
                <img src="img/logos/usa-today.png" alt="usa today logo"/>
            </div>
        </div>
    </section>
    )
}

export default SectionFeature;