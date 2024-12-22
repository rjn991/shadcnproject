import express, { json } from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(json());

app.get("/api/courses", async (req, res) => {
  try {
    const courses = await prisma.course.findMany();
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching courses" });
  }
});

app.get("/api/courses/:className", async (req, res) => {
  const { className } = req.params;

  try {
    const courses = await prisma.course.findMany({
      where: {
        class: className,
      },
    });

    if (courses.length === 0) {
      return res
        .status(404)
        .json({ message: `No courses found for class ${className}` });
    }

    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching courses" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
