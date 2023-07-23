import React from "react";
import { useEffect } from "react";
import { Navbar } from "../index";
import { atom, useRecoilState } from "recoil";
import { useCookies } from "react-cookie";
import CourseCard from "../CourseCard";
import {
  PurchasedCoursesWrapper,
  PurchasedCoursesTitle,
  CourseCardContainer,
} from "./PurchasedCoursesStyles";

const PurchasedCourses = () => {
  const [purchasedCourses, setPurchasedCourses] = useRecoilState(purchases);
  const [Token] = useCookies(["Token"]);

  const callbackToken = (TokenData) => {
    console.log(TokenData.purchasedCourses);
    setPurchasedCourses(TokenData.purchasedCourses);
  };

  const callBackData = (Data) => {
    Data.json().then(callbackToken);
  };

  useEffect(() => {
    console.log("Hello");
    fetch("http://localhost:3001/users/purchasedCourses", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + Token.Token,
      },
    }).then(callBackData);
  }, []);

  return (
    <PurchasedCoursesWrapper>
      <Navbar />
      <PurchasedCoursesTitle>Purchased Courses</PurchasedCoursesTitle>
      <CourseCardContainer>
        {purchasedCourses.map((eachCourse) => (
          <CourseCard
            key={eachCourse._id}
            eachCourse={eachCourse}
            buttonShow={false}
          />
        ))}
      </CourseCardContainer>
    </PurchasedCoursesWrapper>
  );
};

const purchases = atom({
  key: "purchases", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export default PurchasedCourses;
