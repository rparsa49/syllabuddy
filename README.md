
# Syllabuddy User Manual

**Team WeAreBadAtNames**  
**12/06/2023**

---

## Installation

To deploy Syllabuddy, install the following dependencies:

1. **ReactJS**  
   Follow this guide: [ReactJS Installation](https://react.dev/learn/start-a-new-react-project)

2. **TailwindCSS**  
   Follow this guide: [TailwindCSS Installation](https://tailwindcss.com/docs/installation)

3. **Python & Flask**  
   - Download Python: [Python Downloads](https://www.python.org/downloads/)  
   - Install Flask:  
     ```bash
     pip install Flask
     ```

### Clone the Repositories

- Frontend: [https://github.com/rparsa49/syllabuddy](https://github.com/rparsa49/syllabuddy)
- Backend: [https://github.com/rparsa49/syllabuddy-backend](https://github.com/rparsa49/syllabuddy-backend)

Open Visual Studio Code and run:

```bash
git clone <frontend link>
git clone <backend link>
```

Open both projects in separate Visual Studio Code windows.

### Running the App

- In the backend window: press `Run Python File`
- In the frontend window terminal:

```bash
npm start
```

Syllabuddy should now be available at `http://localhost:3000`.

---

## Overview

Syllabuddy is a course management system designed for students and professors.

### For Students

- Browse university courses
- Search by course name or professor
- View average grades, tags, descriptions, and syllabus
- Favorite courses for quick access on the dashboard

### For Professors

- Upload and edit courses
- Search courses (no favoriting)

---

## Main Usage Scenario

### Logging in and Favoriting a Course

1. Visit: `http://localhost:3000`
2. Click **Log In**
3. Enter email and password
4. Search for a course (e.g., “Database Management Systems”)
5. Click **Favorite Course**
6. View favorites from the **Favorite Course** tab

---

## Additional Scenarios

### Registering a New Account

1. Visit the landing page
2. Click **Register**
3. Fill out the form and click **Submit**
4. Log in using your new credentials

---

### Adding a Course as a Professor

1. Log in as a professor
2. Click **Add Course**
3. Fill out the form and submit
4. View your course via the **Your Courses** tab

You can **View** or **Delete** your courses from here.

---
