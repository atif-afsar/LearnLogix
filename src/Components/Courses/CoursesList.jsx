import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchJSONWithRetry } from "../../utils/fetchWithRetry";

export default function CoursesList() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let es;

    const fetchCourses = async () => {
      try {
        setLoading(true);
        setError(null);
        const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://learnlogix-backend.onrender.com";
        
        // Use fetchWithRetry to handle backend sleep/wake scenarios
        // Retry up to 4 times with exponential backoff
        const data = await fetchJSONWithRetry(
          `${API_BASE_URL}/api/courses`,
          {},
          4 // 4 retries = 5 total attempts
        );
        
        setCourses(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to load courses", err);
        setError("Unable to load courses. Please refresh the page.");
        setCourses([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();

    // subscribe to SSE
    try {
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://learnlogix-backend.onrender.com";
      es = new EventSource(`${API_BASE_URL}/api/courses/stream`);

      es.addEventListener("create", (e) => {
        try {
          const newCourse = JSON.parse(e.data);
          setCourses((prev) => [newCourse, ...prev]);
        } catch (err) {
          console.error("Invalid create event data", err);
        }
      });

      es.addEventListener("update", (e) => {
        try {
          const updated = JSON.parse(e.data);
          setCourses((prev) => prev.map((c) => (c._id === updated._id ? updated : c)));
        } catch (err) {
          console.error("Invalid update event data", err);
        }
      });

      es.addEventListener("delete", (e) => {
        try {
          const { id } = JSON.parse(e.data);
          setCourses((prev) => prev.filter((c) => c._id !== id));
        } catch (err) {
          console.error("Invalid delete event data", err);
        }
      });

      es.onerror = (err) => {
        console.error("SSE error:", err);
      };
    } catch (err) {
      console.error("EventSource not supported or failed:", err);
    }

    return () => {
      if (es) es.close();
    };
  }, []);

  return (
    <section className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Loading State */}
        {loading && (
          <div className="text-center py-16">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-yellow-400 border-t-transparent"></div>
            <p className="mt-4 text-zinc-400">Loading courses...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-16">
            <p className="text-red-400 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        )}

        {/* Courses Grid */}
        {!loading && !error && (
          <>
            {!courses || courses.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-zinc-400">No courses available at the moment.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
            <article key={course._id} className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800">
              <div className="w-full h-44 mb-4 rounded-2xl overflow-hidden bg-zinc-800">
                {course.image ? (
                
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-zinc-500">No image</div>
                )}
              </div>

              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-zinc-400 mb-4 line-clamp-3">{course.description}</p>

              <div className="flex items-center justify-between">
                <div className="text-yellow-400 font-bold">₹{course.price}</div>
                <Link to="/contact">
                <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold">Enroll</button>
                </Link>
              </div>
            </article>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
