import {ReactChildren} from "react";

function Section(children: ReactChildren) {
    return (
        <section className="flex items-start flex-column">
            {children}
        </section>
    )
}
export default Section
