Project Overview
Task-Control-System is a web-based application designed to streamline task management and control processes for internal teams at ASTICC. It allows administrators to assign tasks, monitor progress, and evaluate performance, improving overall efficiency and communication within the organization.

This project was developed during my internship at Amhara Science, Technology, and Information Communication Commission (ASTICC) and aims to improve task delegation and tracking, fostering productivity and transparency.

Features
Task Assignment: Administrators can assign tasks to specific users or teams.
Task Tracking: Track task status (e.g., In Progress, Completed) with real-time updates.
User Roles: Different roles like Admin, Supervisor, and Employee, each with specific permissions.
Notifications: Automated notifications for new tasks, status updates, and deadlines.
Reporting: Generate performance and progress reports.
Task Prioritization: Prioritize tasks based on deadlines and importance.
User Management: Admins can create, update, or delete users.
Technologies Used
Frontend: React.js
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT (JSON Web Tokens)
Version Control: Git
Installation
Clone the Repository

bash
Copy code
git clone https://github.com/yourusername/Task-Control-System.git
cd Task-Control-System
Install Dependencies
For both the client (React) and server (Node.js) parts, run the following commands:

bash
Copy code
cd client
npm install
cd ../server
npm install
Environment Variables
Create a .env file in the root of your backend and configure the following:

bash
Copy code
PORT=5000
MONGO_URI=your-mongo-database-url
JWT_SECRET=your-jwt-secret-key
Start the Application
Run the following commands to start the client and server:

bash
Copy code
cd server
npm run dev
cd ../client
npm start
Usage
Admin Access
Log in as an admin to manage users, assign tasks, and monitor overall performance.

Supervisor and Employee Roles
Supervisors can monitor assigned tasks, while employees can update task statuses.

Task Management
Create new tasks, set deadlines, and prioritize them to ensure timely completion.

Dashboard
View overall task statistics, such as completed and pending tasks, using the dashboard.

Contributing
Fork the repository.
Create a new branch: git checkout -b feature-branch.
Make your changes and commit them: git commit -m 'Add feature'.
Push to the branch: git push origin feature-branch.
Submit a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
For any questions, feel free to reach out:

Name: Abdella Sir
Email: abdellasiraje00@gmail.com
       abdellasiraje10@gmail.com
