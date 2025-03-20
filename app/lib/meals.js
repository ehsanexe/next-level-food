import Database from "better-sqlite3";

const db = new Database("meals.db");

export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(() => resolve(), 1000));
  return db.prepare(`SELECT * FROM meals`).all();
};

export const getMeal = (slug) => {
  return db.prepare(`SELECT * FROM meals WHERE slug = ?`).get(slug);
};
