import React from "react";
import classes from "./page.module.css";
import Image from "next/image";
import { getMeal } from "@/app/lib/meals";
import { notFound } from "next/navigation";

export const generateMetadata = ({ params }) => {
  const meal = getMeal(params.slug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
};

export default function MealDetail({ params }) {
  const meal = getMeal(params.slug);

  if (!meal) {
    notFound();
  }

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <pre className={classes.instructions}>{meal.instructions}</pre>
      </main>
    </>
  );
}
