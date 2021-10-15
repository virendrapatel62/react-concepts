import React, { useContext } from "react";
import StudentContext from "../context/student-context";

export default function StudentList() {
  const { students, dispatchStudent } = useContext(StudentContext);
  return (
    <div>
      <div class="list-group">
        {students.map((student, index) => (
          <p key={index} className="row border rounded p-3 mt-3">
            <span className="col-1">{index + 1}.</span>{" "}
            <span className="col">{student}</span>{" "}
            <button
              onClick={() => {
                dispatchStudent({ type: "DELETE_STUDENT", value: student });
              }}
              className="btn btn-danger col-3 btn-sm"
            >
              Delete
            </button>
          </p>
        ))}
      </div>
    </div>
  );
}
