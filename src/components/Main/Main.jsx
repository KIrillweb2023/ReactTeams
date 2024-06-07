import "./Main.scss";
import { Header } from "../Headers/Header";
import { Level } from "../Level/Level";
import { StateCoin } from "../StateCoin/StateCoin";
import { Description } from "../Description/Description";
import { Tabs } from "../Tabs/Tabs";

export const Main = () => {
    return (
        <>
            <div className="main__wrapper">
                <Header/>
                <Level/>
                <StateCoin />
                <Description/>
                <Tabs/>
            </div>
        </>
    )
}