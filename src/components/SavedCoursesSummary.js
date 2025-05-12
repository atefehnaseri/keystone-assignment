export default function WatchedSummary({ savedCourses }) {
  return (
    <div className="summary">
      <h2>Courses you saved</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{savedCourses.length} courses</span>
        </p>
      </div>
    </div>
  );
}
