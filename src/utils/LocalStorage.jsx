const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Complete Report",
          "taskDescription": "Prepare the monthly sales report",
          "taskDate": "2025-03-20",
          "taskCategory": "Reporting",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Client Meeting",
          "taskDescription": "Discuss project progress with client",
          "taskDate": "2025-03-22",
          "taskCategory": "Meeting",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Code Review",
          "taskDescription": "Review the new feature implementation",
          "taskDate": "2025-03-18",
          "taskCategory": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Inventory Check",
          "taskDescription": "Verify stock levels in warehouse",
          "taskDate": "2025-03-25",
          "taskCategory": "Logistics",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "System Update",
          "taskDescription": "Upgrade server software to latest version",
          "taskDate": "2025-03-30",
          "taskCategory": "IT Maintenance",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    }
  ];
  
  const admin = {
    "id": 1,
    "email": "admin@example.com",
    "password": "admin123",
    "role": "superadmin",
    "permissions": ["read", "write", "delete", "update"]
  };
  
  export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
  };
  
  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));
     console.log(employees, admin)
  };
  