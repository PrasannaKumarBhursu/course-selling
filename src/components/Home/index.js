import React from "react";
import { useEffect } from "react";
import { Navbar } from "../index";
import { useCookies } from "react-cookie";
import { atom, useRecoilState } from "recoil";
import CourseCard from "../CourseCard";
import {
  HomeWrapper,
  CourseListTitle,
  CourseListContainer,
} from "./HomeStyles";

const Home = () => {
  const [courses, setCourses] = useRecoilState(coursesList);
  const [{ Token }] = useCookies(["Token"]);

  const purchaseCourse = (id) => {
    fetch(`http://localhost:3001/users/courses/${id}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + Token,
        "Content-Type": "application/json",
      },
    }).then(() => {
      alert("Course Purchased successfully");
    });
  };

  const callbackToken = (TokenData) => {
    setCourses(TokenData.courses);
  };

  const callBackData = (Data) => {
    Data.json().then(callbackToken);
  };

  useEffect(() => {
    fetch("http://localhost:3001/users/courses", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + Token,
        "Content-Type": "application/json",
      },
    }).then(callBackData);
  }, []);

  return (
    <HomeWrapper>
      <Navbar />
      <CourseListTitle>Available Courses</CourseListTitle>
      <CourseListContainer>
        {courses.map((eachCourse) => (
          <CourseCard
            key={eachCourse._id}
            eachCourse={eachCourse}
            purchaseCourse={purchaseCourse}
            buttonShow={true}
          />
        ))}
      </CourseListContainer>
    </HomeWrapper>
  );
};

const coursesList = atom({
  key: "coursesList", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export default Home;
