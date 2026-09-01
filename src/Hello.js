
import { useState } from "react";

function Hello() {

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Gaurav",
      email: "gaurav@gmail.com"
    }
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);


  // CREATE
  function addEmployee() {

    if (!name || !email) {
      alert("Please enter name and email");
      return;
    }

    const newEmployee = {
      id: Date.now(),
      name: name,
      email: email
    };

    setEmployees([...employees, newEmployee]);

    setName("");
    setEmail("");
  }


  // DELETE
  function deleteEmployee(id) {

    const updatedEmployees = employees.filter(
      (employee) => employee.id !== id
    );

    setEmployees(updatedEmployees);
  }


  // EDIT
  function editEmployee(employee) {

    setEditId(employee.id);
    setName(employee.name);
    setEmail(employee.email);
  }


  // UPDATE
  function updateEmployee() {

    const updatedEmployees = employees.map((employee) => {

      if (employee.id === editId) {

        return {
          ...employee,
          name: name,
          email: email
        };

      }

      return employee;
    });

    setEmployees(updatedEmployees);

    setEditId(null);
    setName("");
    setEmail("");
  }


  return (

    <div>

      <h1>Employee CRUD</h1>


      {/* FORM */}

      <div>

        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={
            editId === null
              ? addEmployee
              : updateEmployee
          }
        >
          {editId === null
            ? "Add Employee"
            : "Update Employee"}
        </button>

      </div>


      {/* EMPLOYEE LIST */}

      <div>

        {employees.map((employee) => (

          <div key={employee.id}>

            <h3>{employee.name}</h3>

            <p>{employee.email}</p>

            <button
              onClick={() => editEmployee(employee)}
            >
              Edit
            </button>

            <button
              onClick={() => deleteEmployee(employee.id)}
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Hello;