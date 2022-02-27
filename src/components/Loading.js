import { Spinner } from "./Spinner";
export default function Loading() {
    return (
        <><p>Welcome to the discover page.</p>
            <p>Here, let me load a few books for you...</p>
            {/* El spinner está centrado a la pagina, para ponerlo en el punto central de la pantalla habría que añadir top y bottom 0 */}
            <Spinner style={{ left: "0", right: "0", position: "absolute", margin: "auto", fontSize: "5rem" }} /></>
    );
}