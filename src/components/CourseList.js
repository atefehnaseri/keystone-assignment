import CourseCard from "./CourseCard.js";
//stateful component
export default function CourseList({ courses, onSelectCourse }) {
  return (
    <ul className="list list-courses">
      {courses?.map((course) => (
        <CourseCard
          key={course.courseId}
          {...course}
          onSelectCourse={onSelectCourse}
        />
      ))}
    </ul>
  );
}
