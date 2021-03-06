import React from "react"
import { Link } from 'gatsby'
import indexStyles from "./index.module.css"

export default () => (
    <div className={indexStyles.main}>
        <h1>Mathematics exercises</h1>
        <Link to="/algebra/">
            Algebra
        </Link>
        <Link to="/probabilities/">
            Probabilities
        </Link>
        <Link to="/scientific-notation/">
            Scientific Notation
        </Link>
    </div>
);
