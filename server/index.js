import express, { json } from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors"
const app = express();
const prisma = new PrismaClient();
app.use(cors());
app.use(json());


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

app.get('/api/getStudents', async (req, res) => {
  const { annualYear, className } = req.query;

  try {
    const students = await prisma.student.findMany({
      where: {
        annualYear: annualYear, 
        class: className,       
      },
      include: {
        courses: true,
      },
    });

    res.status(200).json(students);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ error: 'An error occurred while fetching the students' });
  }
});

app.get('/api/getStudent/:id', async (req, res) => {
  const { id } = req.params; 
  try {
    const student = await prisma.student.findUnique({
      where: {
        id: parseInt(id), 
      },
      include: {
        courses: true, 
      },
    });

    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    res.status(200).json(student);  
  } catch (error) {
    console.error('Error fetching student:', error);
    res.status(500).json({ error: 'An error occurred while fetching the student' });
  }
});

app.post('/api/addStudent', async (req, res) => {
  const { studentName, annualYear, className, courseIds } = req.body;

  try {
    const newStudent = await prisma.student.create({
      data: {
        studentName,
        annualYear,
        class: className,
        courses: {
          connect: courseIds.map((id) => ({ id })),
        },
      },
    });
    res.status(201).json(newStudent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while adding the student' });
  }
});

app.put('/api/updateStudentStatus/:id', async (req, res) => {
  const { id } = req.params;  
  const { active } = req.body; 

  try {
    const updatedStudent = await prisma.student.update({
      where: {
        id: parseInt(id),  
      },
      data: {
        active: active,  
      },
    });

    res.status(200).json(updatedStudent);  
  } catch (error) {
    console.error('Error updating student status:', error);
    res.status(500).json({ error: 'An error occurred while updating the student status' });
  }
});






const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
