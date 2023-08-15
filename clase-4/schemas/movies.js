import { object as _object, string, number, array } from "zod";
import { z } from "zod";

const movieSchema = _object({
  title: string({
    invalid_type_error: "Title must be a string",
    required_error: "Title is required",
  }),
  year: number().int().min(1888).max(2024),
  director: string(),
  duration: number().int().positive(),
  rate: number().min(0).max(10).default(5),
  poster: string().url({
    message: "Poster must be a valid URL",
  }),
  genre: array(
    z.enum(["Action", "Comedy", "Drama", "Horror", "Thriller", "Crime"]),
    {
      required_error: "Genre is required",
      invalid_type_error: "Genre must be an array of strings",
    }
  ),
});

export function validateMovie(object) {
  return movieSchema.safeParse(object);
}

export function validatePartialMovie(object) {
  // partial() permite que el objeto no tenga todas las propiedades
  // y las hace opcionales
  return movieSchema.partial().safeParse(object);
}
