import "./Level.scss";


export const Level = () => {
    return (
        <>
            <div className="main__wrapper_level">
                <div className="main__wrapper_level-text">
                    <p className="main__wrapper_level-text-leveling">Gold</p>
                    <span className="main__wrapper_level-text-coin">Level: 3/10</span>
                </div>

                <div className="main__wrapper_level-scale">
                    <div className="main__wrapper_level-scale-child"></div>
                </div>
            </div>
        </>
    )
}