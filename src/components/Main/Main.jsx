import "./Main.scss";
import { Header } from "../Headers/Header";
import { Level } from "../Level/Level";

export const Main = () => {
    return (
        <>
            <div className="main__wrapper">
                <Header/>
                <Level/>
            </div>
        </>
    )
}