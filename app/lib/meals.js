import Database from "better-sqlite3";
import slugify from "slugify";
import fs from "node:fs";

const db = new Database("meals.db");

export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(() => resolve(), 1000));
  return db.prepare(`SELECT * FROM meals`).all();
};

export const getMeal = (slug) => {
  return db.prepare(`SELECT * FROM meals WHERE slug = ?`).get(slug);
};

export const saveMeal = async (meal) => {
  meal.slug = slugify(meal.title);
  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}_${new Date().getTime()}.${extension}`;

  const stream = await fs.WriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Image save failed");
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `
    INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email)
    VALUES (@slug, @title, @image, @summary, @instructions, @creator, @creator_email)
    `
  ).run(meal);
};
