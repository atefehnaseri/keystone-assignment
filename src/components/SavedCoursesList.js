import Button from "./Button.js";
import CourseCard from "./CourseCard.js";

export default function SavedCoursesList({ savedCourses, onDeleteSaved }) {
  return (
    <ul className="list">
      {savedCourses?.map((course) => (
        <div key={course.courseId}>
          <Button
            type="delete"
            onClick={() => {
              onDeleteSaved(course);
            }}
          >
            X
          </Button>
          <CourseCard {...course} />
        </div>
      ))}
    </ul>
  );
}
