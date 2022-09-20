import { useEffect, useState } from "react";

const lessons = [
  {
    id: 1,
    name: "ReactJs là gì? Tại sao nên học ReactJS?"
  },
  {
    id: 2,
    name: "SPA/MPA là gì?"
  },
  {
    id: 3,
    name: "Arrow function"
  }
];

function Content() {
  const [lessonId, setLessonId] = useState(1);

  useEffect(() => {
    const handleLesson = ({ detail }) => {
      console.log(detail);
    };

    window.addEventListener(`lesson-${lessonId}`, handleLesson);

    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleLesson);
    };
  }, [lessonId]);

  return (
    <div>
      <ul>
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            style={{
              color: lessonId === lesson.id ? "red" : "#333",
              fontSize: 18
            }}
            onClick={() => setLessonId(lesson.id)}
          >
            {lesson.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
