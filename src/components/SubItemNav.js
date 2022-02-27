export default function SubItemNav({ selected = false, text, handleClick, number }) {
    return (
        <li>
            <a className={selected ? "nav__link nav__link--selected" : "nav__link"} href="/" onClick={(e) => handleClick(e, number)} >
                {text}
            </a>
        </li>
    );
}