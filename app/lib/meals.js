import Database from "better-sqlite3";

const db = new Database("meals.db");

export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(() => resolve(), 2000));
  return db.prepare(`SELECT * FROM meals`).all();
};
