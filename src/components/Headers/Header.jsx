import "./Header.scss";
import { Coins } from "../../assets/img/Coins/Coins";

export const Header = () => {
    return (
        <>
            <ul className="main__wrapper_header">
                <li className="main__wrapper_header-item">
                    <p className="main__wrapper_header-item-text">Доход от фермы:</p>
                    <div className="main__wrapper_header-item-count">
                        <Coins/>
                        <span className="item-text-coin">300k</span>
                    </div>
                </li>
                <li className="main__wrapper_header-item">
                    <p className="main__wrapper_header-item-text">До апа уровня:</p>
                    <div className="main__wrapper_header-item-count">
                        <Coins/>
                        <span className="item-text-coin">300k</span>
                    </div>
                </li>
                <li className="main__wrapper_header-item">
                    <p className="main__wrapper_header-item-text">Доход от фермы:</p>
                    <div className="main__wrapper_header-item-count">
                        <Coins/>
                        <span className="item-text-coin">300k</span>
                    </div>
                </li>
            </ul>
        </>
    )
}