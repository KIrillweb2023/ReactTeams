import "./Tabs.scss";

export const Tabs = () => {
    return (
        <>
            <ul className="main__wrapper_tabs">
                <li className="main__wrapper_tabs-tab">
                    <img src="/shop.svg" alt="" className="main__wrapper_tabs-tab-image" />
                    <p className="main__wrapper_tabs-tab-text">Shop</p>
                </li>
                <li className="main__wrapper_tabs-tab">
                    <img src="/flats.svg" alt="" className="main__wrapper_tabs-tab-image" />
                    <p className="main__wrapper_tabs-tab-text">Flat</p>
                </li>
                <li className="main__wrapper_tabs-tab">
                    <img src="/steps.svg" alt="" className="main__wrapper_tabs-tab-image" />
                    <p className="main__wrapper_tabs-tab-text">Tops</p>
                </li>
            </ul>
        </>
    )
}