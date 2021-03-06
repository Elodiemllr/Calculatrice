import { useState } from "react";
import "./App.css";

function App() {
    const [result, setResult] = useState("");

    // au click sur mes boutons, j'éxecute cette function
    const handleClick = (e) => {
        //elle viendra mettre à jour result (notre input) en recuperant le "name" de mon  button (le name que contient mon event ) et en les concatainant ( en joignant les strings ensemble)
        setResult(result.concat(e.target.name));
    };

    //tout effacer
    //lorrsque j'appuie sur clear je remet mon result à zéro en renvoyant une chaine de caractère vide
    const clear = (e) => {
        setResult("");
    };

    //effacer le dernier
    //lorsque j'appuie sur backSpace j'utilise la funciton js "slice" qui me permet de retirer un caractère de ma "length" de mon result)
    const backSpace = (e) => {
        setResult(result.slice(0, result.length - 1));
    };

    // ajouter
    //j'utilise la funciton eval qui nous permet d'évaluer notre code reçu dans setResult
    const calculate = () => {
        try {
            setResult(eval(result).toString());
        } catch (err) {
            setResult("error");
        }
    };
    return (
        <>
            <div className="container">
                <form>
                    <input type="text" value={result} />
                </form>
                <div className="keypad">
                    <button
                        onClick={handleClick}
                        id="clear"
                        onClick={clear}
                        className="highlight"
                    >
                        {" "}
                        Clear{" "}
                    </button>
                    <button
                        onClick={handleClick}
                        id="backspace"
                        onClick={backSpace}
                        className="highlight"
                    >
                        C{" "}
                    </button>
                    <button
                        name="/"
                        onClick={handleClick}
                        className="highlight"
                    >
                        &divide;{" "}
                    </button>
                    <button name="7" onClick={handleClick}>
                        {" "}
                        7
                    </button>
                    <button name="8" onClick={handleClick}>
                        8{" "}
                    </button>
                    <button name="9" onClick={handleClick}>
                        {" "}
                        9
                    </button>
                    <button
                        name="*"
                        onClick={handleClick}
                        className="highlight"
                    >
                        &times;{" "}
                    </button>
                    <button name="4" onClick={handleClick}>
                        {" "}
                        4{" "}
                    </button>
                    <button name="5" onClick={handleClick}>
                        5{" "}
                    </button>
                    <button name="6" onClick={handleClick}>
                        6{" "}
                    </button>
                    <button
                        name="-"
                        onClick={handleClick}
                        className="highlight"
                    >
                        {" "}
                        &ndash;
                    </button>
                    <button name="1" onClick={handleClick}>
                        {" "}
                        1
                    </button>
                    <button name="2" onClick={handleClick}>
                        {" "}
                        2
                    </button>
                    <button name="3" onClick={handleClick}>
                        {" "}
                        3
                    </button>
                    <button
                        name="+"
                        onClick={handleClick}
                        className="highlight"
                    >
                        {" "}
                        +
                    </button>
                    <button name="0" onClick={handleClick}>
                        {" "}
                        0
                    </button>
                    <button
                        name="."
                        onClick={handleClick}
                        className="highlight"
                    >
                        .
                    </button>
                    <button
                        onClick={calculate}
                        id="result"
                        className="highlight"
                    >
                        {" "}
                        =
                    </button>
                </div>
            </div>
        </>
    );
}

export default App;
