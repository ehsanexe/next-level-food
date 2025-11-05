"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

const validateText = (text) => {
  if (!text || text.trim().length === 0) {
    return false;
  }
  return true;
};

export const shareMeal = async (prevState, formData) => {
  const meal = {
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };

  if (
    !validateText(meal.name) ||
    !validateText(meal.email) ||
    !meal.email.includes("@") ||
    !validateText(meal.title) ||
    !validateText(meal.summary) ||
    !validateText(meal.instructions) ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input - please check your data.",
    };
  }

  await saveMeal(meal);
  redirect("/meals");
};
