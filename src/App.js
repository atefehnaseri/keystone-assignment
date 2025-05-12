import { useState } from "react";
import NavBar from "./components/NavBar.js";
import Logo from "./components/Logo.js";
import SearchInput from "./components/SearchInput.js";
import Main from "./components/Main.js";
import Box from "./components/Box.js";
import CourseList from "./components/CourseList.js";
import SavedCoursesSummary from "./components/SavedCoursesSummary.js";
import SavedCoursesList from "./components/SavedCoursesList.js";
import CourseDetails from "./components/CourseDetails.js";
import { useCourses } from "./hooks/useCourses.js";
import { useLocalStorage } from "./hooks/useLocalStorage.js";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const { courses } = useCourses(searchQuery, handleCloseSelectCourse);
  const [savedCourses, setSavedCourses] = useLocalStorage("savedCourses", []);
  const searchResultsNum = courses?.length;

  function handleSearch(query) {
    setSearchQuery(query);
  }

  function handleSelectCourse(course) {
    setSelectedCourse(
      selectedCourse?.courseId === course.courseId ? null : course
    );
  }

  function handleCloseSelectCourse() {
    setSelectedCourse(null);
  }

  function handleAddSaved(course) {
    const savedCourse = { ...course, isSaved: true };
    setSelectedCourse((selectedCourse) => ({
      ...selectedCourse,
      isSaved: true,
    }));

    setSavedCourses((saved) => [...saved, savedCourse]);
  }

  function handleDeleteSaved(course) {
    setSavedCourses((saved) =>
      saved.filter((savedCourse) => savedCourse.courseId !== course.courseId)
    );
  }

  return (
    <>
      <NavBar>
        <Logo />
        <SearchInput query={searchQuery} onSearch={handleSearch} />
        <SearchNumResults searchResultsNum={searchResultsNum} />
      </NavBar>

      <Main>
        <Box>
          <CourseList courses={courses} onSelectCourse={handleSelectCourse} />
        </Box>
        <Box>
          {selectedCourse ? (
            <CourseDetails
              course={selectedCourse}
              savedCourses={savedCourses}
              onCloseCourse={handleCloseSelectCourse}
              onSaveCourse={handleAddSaved}
            />
          ) : (
            <>
              <SavedCoursesSummary savedCourses={savedCourses} />
              <SavedCoursesList
                savedCourses={savedCourses}
                onDeleteSaved={handleDeleteSaved}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

function SearchNumResults({ searchResultsNum }) {
  return (
    <p className="num-results">
      Found <strong>{searchResultsNum}</strong> results
    </p>
  );
}
