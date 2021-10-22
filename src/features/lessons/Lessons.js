import React from "react";
import {useSelector } from "react-redux";


function Lessons() {
  const lessons = useSelector((state) => state.lessons);
console.log("state = ", state)
console.log("lessons = ", lessons)
  const lessonsList = lessons.map((lesson) => (
    <li key={lesson.id}> Lesson: {lesson.title} {lesson.category}</li>
  ));

  return (
    <div>
      {lessonsList}
    </div>
  );
}

export default Lessons;
