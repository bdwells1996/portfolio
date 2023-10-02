import './index.scss';

const Home = () => {

    return (
        <div className="o-wrapper c-hero">
            <div className='c-hero__content'>
                <h1 className="c-hero__content__header"><span class="u-weight--semibold u-color--primary">Hi,</span> I'm Ben</h1>
                <h2 className="c-hero__content__subheader">A Front End Developer based in <span className="u-weight--semibold u-color--primary">Brighton,</span> working with:</h2>
            </div>
            <div className="c-hero__img">
                <img className="u-object-fit" />
                <div className="c-hero__img__underlay"></div>
            </div>
        </div>
    )
}

export default Home