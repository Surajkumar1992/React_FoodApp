import React from "react";

import classes from './MealsSummary.module.css';

const MealsSumary = () => {
    return (
        <section className={classes.summary}>
            <h2>Delicious Food Delivered to U !!!</h2>
            <p>
                Choose your favourite meal from our Broad selection of available meals and enjoy a delicious lunch or dinner a home.
            </p>
            <p>
                All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs.
            </p>
        </section>
    )
};

export default MealsSumary;