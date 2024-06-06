import "./Main.scss";
import { Header } from "../Headers/Header";
import { Level } from "../Level/Level";
import { StateCoin } from "../StateCoin/StateCoin";

export const Main = () => {
    return (
        <>
            <div className="main__wrapper">
                <Header/>
                <Level/>
                <StateCoin />
            </div>
        </>
    )
}