import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import greenCircle from "../../assets/icons/green.svg";
import redCircle from "../../assets/icons/red.svg";
import plus from "../../assets/icons/plus.svg"

import { useSelector, useDispatch } from 'react-redux'
import {setDisplayData} from "../../features/displayData/displayDataSlice"

const Main = () => {
  const [addStudentName, addStudentNameUpdate] = useState();
  const [addYear, addYearUpdate] = useState();
  const [addClass, addClassUpdate] = useState();
  const [courses, setCourses] = useState([]);
  const [addCourses, addCoursesUpdate] = useState([]);

  const [getYear, setGetYear] = useState(null);
  const [getClass, setGetClass] = useState(null);

  const [viewDialog, setViewDialog] = useState(false);
  const [clickedStudentId, setClickedStudentId] = useState();
  const [clickedStudentInfo, setClickedStudentinfo] = useState();

  const [counter, setCounter] = useState(0);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const displayData = useSelector((state)=> state.displayData.value)
  const dispach = useDispatch()
  useEffect(() => {
    const fetchStudents = async () => {
      if (getYear && getClass) {
        try {
          const response = await axios.get(
            `${API_BASE_URL}/api/getStudents`,
            {
              params: {
                annualYear: getYear,
                className: getClass,
              },
            }
          );

          console.log("Students:", response.data);
          dispach(setDisplayData(response.data));
          console.log("Previous redux value :" ,displayData)
        } catch (error) {
          console.error("Error fetching students:", error);
        }
      }
    };

    fetchStudents();
  }, [getYear, getClass, counter]);

  const handleTableClick = async (studentId) => {
    setClickedStudentId(studentId);
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/getStudent/${studentId}`
      );
      setClickedStudentinfo(response.data);
    } catch (error) {
      console.error("Error fetching student:", error);
    }
    setViewDialog(true);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
      date
    );
    const year = date.getFullYear();
    return `${day}. ${month}. ${year}`;
  };

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
      date
    );
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const amPm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    return `${day}. ${month}. ${year} ${formattedHours}:${minutes} ${amPm}`;
  };

  const handleSubmit = async (
    studentName,
    annualYear,
    className,
    courseIds
  ) => {
    const studentData = {
      studentName,
      annualYear,
      className,
      courseIds,
    };
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/addStudent`,
        studentData
      );
      console.log("Student added:", response.data);
      setCounter((prev) => prev + 1);
    } catch (error) {
      console.error("Error adding student:", error);
    }
    addCoursesUpdate([]);
    setCourses([]);
  };

  const updateStudentStatus = async (id, activeStatus) => {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/api/updateStudentStatus/${id}`,
        {
          active: activeStatus,
        }
      );
      console.log("Updated student:", response.data);
      setCounter((prev) => prev + 1);
      setViewDialog(false);
    } catch (error) {
      console.error("Error updating student status:", error);
    }
  };

  const deleteStudent = async (id) => {
    try {
      const response = await axios.delete(
        `${API_BASE_URL}/api/deleteStudent/${id}`
      );
      console.log("Student deleted successfully:", response.data);
      setCounter((prev) => prev + 1);
      setViewDialog(false)

    } catch (error) {
      console.error(
        "Error deleting student:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="mt-3 mx-5 p-4 bg-white rounded-lg">
      <div className="flex flex-col md:flex-row place-content-between">
        <div className="flex gap-4">
          {/* Left 2 Select items */}
          <Select
            onValueChange={(e) => {
              setGetYear(e);
            }}
          >
            <SelectTrigger className="w-[150px] bg-slate-200 ring-0 focus:ring-0 font-bold text-slate-600">
              <SelectValue placeholder="Select Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="AY 2023 24">AY 2023 24</SelectItem>
              <SelectItem value="AY 2024 25">AY 2024 25</SelectItem>
            </SelectContent>
          </Select>
          <Select
            onValueChange={(e) => {
              setGetClass(e);
            }}
          >
            <SelectTrigger className="w-[140px]  bg-slate-200 ring-0 focus:ring-0 font-bold text-slate-600">
              <SelectValue placeholder="Select Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="8">CBSE 8</SelectItem>
              <SelectItem value="9">CBSE 9</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Add student button */}
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary" className=" bg-slate-200 ring-0 focus:ring-0 font-bold text-slate-600 mt-5 md:mt-0"><img src={plus}></img>Add new Student</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add new Student</DialogTitle>
                <DialogDescription>
                  Fill the details and click save.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    onChange={(e) => {
                      addStudentNameUpdate(e.target.value);
                    }}
                    required
                    id="name"
                    className="col-span-3"
                  />
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="year" className="text-right">
                    Year
                  </Label>
                  <Select
                    className="col-span-3"
                    id="yea"
                    onValueChange={(e) => {
                      addYearUpdate(e);
                    }}
                  >
                    <SelectTrigger className="w-[150px]">
                      <SelectValue placeholder="Select Year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AY 2023 24">AY 2023 24</SelectItem>
                      <SelectItem value="AY 2024 25">AY 2024 25</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="year" className="text-right">
                    Class
                  </Label>
                  <Select
                    onValueChange={async (e) => {
                      addClassUpdate(e);
                      try {
                        const response = await axios.get(
                          `${API_BASE_URL}/api/courses/${e}`
                        );
                        setCourses(response.data);
                      } catch (error) {
                        console.error("Error fetching subjects:", error);
                        setCourses([]);
                      }
                    }}
                  >
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Select Class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="8">CBSE 8</SelectItem>
                      <SelectItem value="9">CBSE 9</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {courses.length > 0 && (
                  <div>
                    <Label>Select Courses</Label>
                    {courses.map((data, id) => {
                      return (
                        <div
                          key={data.id}
                          className="grid grid-cols-4 items-center gap-4"
                        >
                          <label htmlFor="terms" className="text-right">
                            {data.courseName}
                          </label>
                          <Checkbox
                            value={data.id}
                            name="courses"
                            checked={addCourses.includes(data.id)}
                            onCheckedChange={(checked) => {
                              addCoursesUpdate(
                                (prev) =>
                                  checked
                                    ? [...prev, data.id] // Add the ID if checked
                                    : prev.filter((id) => id !== data.id) // Remove the ID if unchecked
                              );
                            }}
                          >
                            {" "}
                          </Checkbox>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button
                    type="submit"
                    onClick={() => {
                      console.log(
                        addStudentName,
                        addYear,
                        addClass,
                        addCourses
                      );
                      handleSubmit(
                        addStudentName,
                        addYear,
                        addClass,
                        addCourses
                      );
                    }}
                  >
                    Save
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Table */}
      <Table className="min-w-[900px]">
        <TableHeader>
          <TableRow>
            <TableHead className="text-black  font-bold">
              Student Name
            </TableHead>
            <TableHead className="text-black  font-bold">Cohort</TableHead>
            <TableHead className="w-[350px] text-black  font-bold">
              Courses
            </TableHead>
            <TableHead className="text-black  font-bold">Date joined</TableHead>
            <TableHead className="text-black  font-bold">Last login</TableHead>
            <TableHead className="text-black  font-bold text-center">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayData.length > 0 &&
            displayData.map((data, id) => {
              return (
                <TableRow
                  key={data.id}
                  id={data.id}
                  onClick={() => handleTableClick(data.id)}
                >
                  <TableCell>{data.studentName}</TableCell>
                  <TableCell>{data.annualYear}</TableCell>
                  <TableCell>
                    <div className="flex ">
                      {data.courses.map((courses, id) => {
                        return (
                          <div
                            key={courses.id}
                            className="flex items-center p-1 pr-5 rounded-md bg-slate-100 mr-2"
                          >
                            <img
                              className="w-6 h-6 object-cover rounded-md mr-1"
                              src={courses.imageUrl}
                            ></img>
                            <p>{courses.courseName}</p>
                          </div>
                        );
                      })}
                    </div>
                  </TableCell>
                  <TableCell>{formatDate(data.dateJoined)}</TableCell>
                  <TableCell>{formatDateTime(data.lastLogin)}</TableCell>
                  <TableCell>
                    {data.active ? (
                      <img className="w-4 m-auto" src={greenCircle}></img>
                    ) : (
                      <img className="w-4 m-auto" src={redCircle}></img>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>

      <Dialog open={viewDialog} onOpenChange={() => setViewDialog(false)}>
        <DialogContent>
          <DialogTitle>Student Information</DialogTitle>
          <DialogDescription>View and Update status here.</DialogDescription>
          {clickedStudentInfo && (
            <div>
              <span className="text-xl font-bold ">
                {clickedStudentInfo.studentName}
              </span>
              <br></br>
              <span className="font-bold">Cohot : </span>
              <span>{clickedStudentInfo.annualYear}</span>
              <br></br>
              <span className="font-bold">Date of Joining : </span>
              <span>{formatDate(clickedStudentInfo.dateJoined)}</span>
              <br></br>
              <span className="font-bold">Last Login : </span>
              <span>{formatDateTime(clickedStudentInfo.lastLogin)}</span>
              <br></br>
              <span className="font-bold">Status : </span>
              <span>{clickedStudentInfo.active ? "Active" : "Inactive"}</span>
              <br></br>
              <span className="font-bold">Courses : </span>
              {clickedStudentInfo.courses.map((data, id) => {
                return (
                  <span key={data.id} className="mr-5">
                    {data.courseName}
                  </span>
                );
              })}
              <br></br>
              <div className="text-right">
                {clickedStudentInfo.active ? (
                  <Button
                    onClick={() =>
                      updateStudentStatus(clickedStudentInfo.id, false)
                    }
                    className="m-1 bg-red-400"
                  >
                    Mark as Inactive
                  </Button>
                ) : (
                  <Button
                    onClick={() =>
                      updateStudentStatus(clickedStudentInfo.id, true)
                    }
                    className="m-1 bg-green-400"
                  >
                    Mark as Active
                  </Button>
                )}
                <Button onClick={()=>deleteStudent(clickedStudentInfo.id)}className="m-1 bg-red-400">Delete Student</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default Main;
