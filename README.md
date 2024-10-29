# Scrum Board Tasks Manager 🚀

**Scrum Board** is an interactive, user-friendly Scrum Board task management application built with JavaScript Vanilla, HTML5, and CSS3 Bootstrap . Designed for efficient task management in a Scrum framework, the application provides a dynamic and accessible board for tracking the stages of tasks across "To Do," "Doing," and "Done" columns, ensuring data persistence and an optimized user experience.

## Project Overview 📋

The primary objective of **Scrum Board** is to offer an easy-to-use, responsive task board that allows users to:

* ✅ Create, read, update, and delete tasks.
* 🔄 Track task progress with drag-and-drop functionality.
* 💾 Ensure data persistence through LocalStorage.

## Key Features ✨

### Task Management 📝

* **CRUD Functionalities:** Add, edit, and delete tasks with form validation to maintain data integrity.
* **Field Validation:** Ensures all required fields are filled correctly before adding or updating a task.
* **Interactive Modal Window:** A modal for creating and editing tasks with validation for smooth user interaction.

### Data Persistence 💾

* **LocalStorage Integration:** Automatically saves tasks and board state, allowing data to persist across sessions.

### Advanced Interactions  🖱️

* **Drag and Drop (Optional):** Move tasks between columns ("To Do," "Doing," "Done") for easy task progress tracking.
* **Animations:** Light animations enhance the experience when adding, moving, and removing tasks.

## Technologies Used 🛠️

* **JavaScript (Vanilla):** All dynamic functionalities are built without dependencies on frameworks to optimize performance.
* **HTML5/CSS3:** Structuring and styling of the dashboard are responsive and modern.


## User Stories 👤

1. **User:** I can add a new task to the "To Do" column by filling in the required fields in the modal.
2. **User:** I can move tasks between columns by dragging and dropping to visually track progress.
3. **User:** I want my tasks and their statuses to be saved automatically to LocalStorage for retrieval in future sessions.
4. **Developer:** Implement field validation to ensure only complete tasks are added or edited.
5. **Project Team:** Ensure that the task deletion functionality removes only the intended tasks from the board.
6. **Developer:** Design an interactive modal interface that enables task creation and modification without leaving the main page.

## Prototype Design Screenshots

**Desktop Version**

![App Screenshot](https://raw.githubusercontent.com/aymanebenhima/YouCodeScrumBoard/refs/heads/main/design/desktop.png)

![App Screenshot](https://raw.githubusercontent.com/aymanebenhima/YouCodeScrumBoard/refs/heads/main/design/modal.png)

**Mobile Version**

![App Screenshot](https://raw.githubusercontent.com/aymanebenhima/YouCodeScrumBoard/refs/heads/main/design/mobile.png)

## Installation ⚙️

1. Clone the repository:
   ```bash
   git clone https://github.com/Skayologie/Scrum-Board.git

2. Open the project directory:
   ```bash
   cd Scrum-Board
3. Open the `index.html` file in your browser to run the application locally.

## Usage 🚀
- **Adding Tasks:** Click "Add Task" to open the modal. Fill in the required fields and submit.
- **Editing Tasks:** Click on a task to edit it in the modal.
- **Moving Tasks:** Drag tasks between columns to update their status.
- **Deleting Tasks:** Click the delete button within each task to remove it.
- **Data Persistence:** All tasks are saved to LocalStorage and automatically reloaded on page refresh.  

## Accessibility and User Experience Enhancements
- **Drag and Drop:** Interactive and intuitive, enabling a responsive task organization.
- **Modular, Documented Code:** Code is organized into functional modules for maintainability, following a functional programming approach.
- **Accessibility:** The board is designed to be compatible with screen readers and other accessibility devices.

## Contributing 🤝
If you'd like to **contribute**, 
please fork the repository and create a pull request. Contributions to improve the code, accessibility, or add new features are welcome.🚀
