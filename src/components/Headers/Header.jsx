import "./Header.scss";

export const Header = () => {
    return (
        <>
            <ul className="main__wrapper_header">
                <li className="main__wrapper_header-item">
                    <p className="main__wrapper_header-item-text">Доход от фермы:</p>
                    <div className="main__wrapper_header-item-count">
                        <img src="/coin.svg" alt="" className="item-img-coin" />
                        <span className="item-text-coin">300k</span>
                    </div>
                </li>
                <li className="main__wrapper_header-item">
                    <p className="main__wrapper_header-item-text">До апа уровня:</p>
                    <div className="main__wrapper_header-item-count">
                        <img src="/coin.svg" alt="" className="item-img-coin" />
                        <span className="item-text-coin">300k</span>
                    </div>
                </li>
                <li className="main__wrapper_header-item">
                    <p className="main__wrapper_header-item-text">Доход от фермы:</p>
                    <div className="main__wrapper_header-item-count">
                        <img src="/coin.svg" alt="" className="item-img-coin" />
                        <span className="item-text-coin">300k</span>
                    </div>
                </li>
            </ul>
        </>
    )
}