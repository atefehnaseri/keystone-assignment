import { useEffect } from "react";
import Button from "./Button";
import CourseCard from "./CourseCard";
import { useKeyEventHandler } from "../hooks/useKeyEventHandler";

export default function CourseDetails({
  course,
  savedCourses,
  onCloseCourse,
  onSaveCourse,
}) {
  const isCourseSaved = savedCourses.some(
    (saveCourse) => saveCourse.courseId === course.courseId && course.isSaved
  );

  // //show the selected course name in the document title
  useEffect(() => {
    if (!course.courseName) return;
    document.title = `Course | ${course.courseName}`;
    //cleaningup the document title
    return () => {
      document.title = "Keystone Education Group";
    };
  }, [course]);

  //close the course details when the user press the scape key using custom hook
  useKeyEventHandler("Escape", onCloseCourse);

  return (
    <div className="details">
      <>
        <header>
          <button className="btn-back" onClick={onCloseCourse}>
            <span>&larr;</span>
          </button>
        </header>
        <div className="details-overview">
          <CourseCard {...course} />
          <div className="actions">
            {isCourseSaved ? (
              <p>You saved this course ❤️</p>
            ) : (
              <Button type="action" onClick={() => onSaveCourse(course)}>
                🤍
              </Button>
            )}
            <Button
              type="action"
              onClick={() =>
                alert(
                  "Application form is under maintain :) Please come back later!"
                )
              }
            >
              Apply
            </Button>
          </div>
        </div>
      </>
    </div>
  );
}
