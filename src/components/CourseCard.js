function formatDate(startDate) {
  const date = new Date(startDate);

  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = date.toLocaleDateString(undefined, options);

  const time = date.toTimeString().split(" ")[0];
  const isMidnight = time === "00:00:00";

  return isMidnight ? formattedDate : `${formattedDate}, ${time}`;
}

export default function CourseCard({
  courseId,
  instituteName,
  courseName,
  category,
  deliveryMethod,
  location,
  language,
  startDate,
  isSaved,
  onSelectCourse = () => {},
}) {
  return (
    <li
      className="course-card"
      onClick={() =>
        onSelectCourse({
          courseId,
          instituteName,
          courseName,
          category,
          deliveryMethod,
          location,
          language,
          startDate,
          isSaved,
        })
      }
    >
      <div className="card-header">
        <h3 className="course-title">{courseName}</h3>
        <p className="institute-name">{instituteName}</p>
      </div>

      <div className="card-body">
        <p>
          <strong>📂</strong> {category}
        </p>
        <p>
          <strong>📦</strong> {deliveryMethod}
        </p>
        <p>
          <strong>📍</strong> {location}
        </p>
        {!language.toLowerCase() ?? (
          <p>
            <strong>🔠</strong> {language}
          </p>
        )}
        <p>
          <strong>📆</strong> {formatDate(startDate)}
        </p>
      </div>
    </li>
  );
}
