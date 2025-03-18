import React from "react";
import classes from "./page.module.css";

export default function MealsLoading() {
  return <div className={classes.loading}>Fetching Meals...</div>;
}
