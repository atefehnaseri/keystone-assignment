import { useState, useEffect } from "react";

export function useCourses(searchQuery) {
  const [data, setData] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchCsvData() {
      const response = await fetch("/data/technical_assignment_input_data.csv");
      const csvText = await response.text();
      const rows = csvText.trim().split("\n");
      //exept the first header row
      const result = rows.slice(1).map((row) => {
        const [
          courseId,
          instituteName,
          courseName,
          category,
          deliveryMethod,
          location,
          language,
          startDate,
        ] = row.split(";");
        return {
          courseId,
          instituteName,
          courseName,
          category,
          deliveryMethod,
          location,
          language,
          startDate,
        };
      });
      setData(result);
    }
    fetchCsvData();
  }, []);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    if (query.length < 3) {
      setCourses([]);
      return;
    }

    const filteredData = data.filter((row) =>
      Object.values(row).some((val) => val.toLowerCase().includes(query))
    );
    const formattedData = filteredData?.map((data) => ({
      ...data,
      isSaved: false,
    }));
    console.log(formattedData);
    setCourses(formattedData);
  }, [searchQuery, data]);
  return { courses };
}
