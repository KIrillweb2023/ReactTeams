import "./StateCoin.scss"

export const StateCoin = () => {
    return (
        <>
            <ul className="main__wrapper_statecoin">
                <li className="main__wrapper_statecoin-item">
                    <img src="/image-statecoin.jpg" alt="" className="item-image"/>
                </li>
                <li className="main__wrapper_statecoin-item">
                    <span className="main__wrapper_statecoin-item-title">Заработанно:</span>
                    <div className="main__wrapper_statecoin-item-coins">
                        <img src="/coin.svg" alt="" className="text-img" />
                        <p className="text-coin">300k</p>
                    </div>
                </li>
                <li className="main__wrapper_statecoin-item">
                    <span className="main__wrapper_statecoin-item-title">Потраченно:</span>
                    <div className="main__wrapper_statecoin-item-coins">
                        <img src="/coin.svg" alt="" className="text-img" />
                        <p className="text-coin">300k</p>
                    </div>
                </li>
            </ul>
        </>
    )
}