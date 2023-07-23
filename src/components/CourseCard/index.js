import React from "react";
import {
  CardWrapper,
  CardImage,
  CardTitle,
  CardDescription,
  CardPrice,
  CardButton,
} from "./CourseCardStyles";

const CourseCard = (props) => {
  const { purchaseCourse, buttonShow } = props;
  const { _id, title, description, price } = props.eachCourse;
  const coursePurchase = () => {
    purchaseCourse(_id);
  };

  return (
    <CardWrapper>
      <CardImage
        src="https://t3.ftcdn.net/jpg/02/92/88/72/360_F_292887204_2wH041phSQo70eqaE9GRqFvn5MmQ4B8w.jpg"
        alt={title}
      />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardPrice>Price : ${price}</CardPrice>
      {buttonShow && <CardButton onClick={coursePurchase}>Purchase</CardButton>}
    </CardWrapper>
  );
};

export default CourseCard;
