# Assignment Whitecarrot Intern - 2025

The **Assignment Whitecarrot Intern - 2025** project focuses on creating a seamless user experience for interacting with Google Calendar. 

**Deployed Link** - https://white-carrot-intern.vercel.app/

## How to Access the Full Implementation:

Due to the limitations of Google SSO, which only allows a limited number of test users, please follow the steps below to access the full implementation of the website:

### Login Credentials:
- **Email:** `whitecarrotintern2025@gmail.com`
- **Password:** `whitecarrot`

### How to Log In:
1. Visit the website at [https://white-carrot-intern.vercel.app/](https://white-carrot-intern.vercel.app/).
2. Click on the login button and enter the provided email and password.
3. You will be able to access and explore the full functionality of the website after logging in.

### Note:
This step is necessary due to limited test user logins allowed by Google SSO. After logging in with the test credentials, you will be able to experience the full implementation of the website.

## Getting Started

To run the **WhiteCarrot_Intern** website locally, please follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/sanket9673/WhiteCarrot_Intern.git

2. Install the necessary dependencies:
   ```bash
   npm install
   
   cd WhiteCarrot_Intern

3. Start the development server:
   ```bash
   npm run dev

## Project Overview

This project is a web application designed to integrate with Google Calendar, allowing users to log in via Single Sign-On (SSO) using Google, view their calendar events, and filter those events by date. The application is built with a focus on ease of use and flexibility, offering users a simple and intuitive interface to manage and view their Google Calendar events.

## Key Technologies

- **HTML5:** The foundation of the web application, HTML5 structures the content and provides a semantic layout, enhancing accessibility and SEO for a more user-friendly platform.

- **Tailwind CSS:** A utility-first CSS framework that facilitates fast and flexible UI development. Tailwind allows for easy application of styles through predefined classes, ensuring a responsive and modern design with minimal custom CSS.

- **JavaScript:** The essential programming language used to add interactivity and dynamic behavior to the platform. JavaScript enhances user experience by enabling real-time updates and seamless interactions within the application.

- **React.js:** A powerful JavaScript library for building fast and dynamic user interfaces. React's component-based architecture allows for reusable code, improving efficiency and maintainability while ensuring high performance across the platform.

- **React Router:** A declarative routing library for React that enables smooth navigation between views without reloading the page. This improves user experience by maintaining state and providing quick transitions between different sections of the app.

- **Supabase:** A backend-as-a-service platform that provides real-time data management, authentication (SSO), and database solutions. Supabase integrates seamlessly with the frontend, handling user authentication and data storage while simplifying backend development.

- **SSO Google Authentication:** A secure Single Sign-On (SSO) solution that allows users to authenticate using their Google accounts. This integration simplifies the login process, enhances security, and provides a seamless user experience for accessing the platform.

- **React Prebuilt Libraries:** A collection of prebuilt libraries used to accelerate development. These libraries offer ready-to-use components and functionalities, reducing development time and ensuring consistent, high-quality features across the platform.

## Key Features

- **SSO Google Authentication:** Users can securely log in using their Google accounts through Single Sign-On (SSO). This streamlined authentication process simplifies user access while maintaining a high level of security.

- **Google Calendar Integration:** The platform fetches and displays Google Calendar events for users after login. All events are listed in a table format, with the most recent events shown at the top, providing users with an easy-to-read overview of their schedule.

- **Event Filtering:** A filter functionality allows users to filter events by date, helping them focus on specific periods. This feature enhances the usability of the platform by enabling users to quickly locate important events.

- **Responsive Design:** The website is designed with a mobile-first approach using Tailwind CSS, ensuring it looks and functions optimally across a variety of devices, from desktops to tablets and smartphones.

- **Dynamic Navigation:** Built using React Router, the platform ensures smooth navigation between different sections without reloading the page, allowing users to move seamlessly through the interface.

- **Real-Time Data Fetching:** The integration with Supabase provides real-time updates, ensuring the most current event information is always available for users.

- **Reusable React Components:** The website's modular architecture uses React components for every section, ensuring the code is maintainable, easily extendable, and efficient to work with as new features are added in the future.


## Key Decisions Made

- **Choosing React.js:** React.js was chosen for its flexibility, performance, and component-based architecture. This allows for the efficient development of dynamic, reusable components, making it easier to manage and scale the application as new features are added.

- **Using Tailwind CSS:** Tailwind CSS was selected for its utility-first approach, enabling rapid development with a consistent, responsive design. It reduces the need for custom CSS while ensuring a modern, cohesive look across the platform.

- **Supabase for Backend and Authentication:** Supabase was chosen for its simplicity and ease of integration. It handles the backend data storage, user authentication (SSO), and real-time data synchronization, streamlining the development process while ensuring a secure and scalable solution.

- **SSO Google Authentication:** Google SSO was integrated to simplify the login process, providing users with a seamless authentication experience. This decision improves security and convenience, making the platform more accessible while minimizing barriers to entry.


## Challenges Encountered

- **Integrating SSO Authentication with Google:** One of the challenges faced during the project was implementing Single Sign-On (SSO) with Google authentication. Ensuring secure authentication while handling user sessions across multiple components required careful setup of the authentication flow, as well as managing user data effectively through the backend.

- **Handling Real-Time Data with Supabase:** Integrating Supabase for real-time data synchronization posed a challenge, particularly when fetching and displaying Google Calendar events dynamically. Ensuring that the events were fetched accurately, updated in real-time, and displayed in a user-friendly way while maintaining application performance was a key hurdle to overcome.


## Practices 

- **Version Control:** Used Git for version control, enabling smooth collaboration and history tracking of code changes.

- **Performance Optimization:** Focused on optimizing the application's performance by employing lazy loading for components, minimizing bundle sizes, and utilizing React's performance optimization techniques.

- **Focus on User-Centered Design:** Great emphasis was placed on designing the user interface (UI) with simplicity and ease of use in mind. Tailwind CSS helped achieve a modern look while ensuring that the design is consistent and intuitive, making navigation and interaction straightforward for users.

- **Modular and Reusable Code:** Following a component-based architecture in React, the project was built with reusable components to ensure maintainability and scalability. This approach promotes code reuse and simplifies the process of adding new features or updating existing ones.

## Development Process

1. **Understand the Project Requirements:**
   - Reviewed the project brief to understand the functionalities like Google SSO authentication, displaying Google Calendar events, and adding a filter functionality.
   - Studied existing solutions for authentication and calendar event display to make informed decisions on how to best implement these features.
   - Defined the technical stack (HTML, Tailwind CSS, React, Supabase, and Google SSO) based on the project requirements.

 2. **Planning:**
   - Created a clear roadmap with specific milestones, such as SSO integration, Google Calendar event display, and filter functionality.
   - Prioritized tasks based on dependencies and potential challenges.
   - Ensured that the platform would be scalable and secure, especially for user data management and authentication.

 3. **Design:**
   - Designed wireframes and mockups to represent how the platform would look and function using tools like Figma.
   - Focused on delivering a clean and modern design that would provide a smooth user experience.
   - Collaborated with stakeholders to finalize design details, ensuring the UI was user-friendly and intuitive.

 4. **Responsive Design Implementation:**
   - Ensured the website was fully responsive across devices (desktop, tablet, mobile) using Tailwind CSS.
   - Utilized utility-first classes from Tailwind CSS to adapt the layout and components based on different screen sizes.
   - Conducted extensive testing on multiple browsers and devices to ensure compatibility and a consistent user experience.

 5. **UI Component Development:**
   - Developed reusable and modular React components, such as navigation bars, event listings, and the filter functionality.
   - Focused on creating UI elements that adhered to the design mockups while maintaining accessibility and usability standards.
   - Integrated JavaScript for dynamic features like filtering calendar events and displaying real-time data.

 6. **SSO Authentication Implementation:**
   - Integrated Supabase to handle secure user authentication via Google SSO.
   - Implemented a seamless login flow that allowed users to authenticate with their Google accounts and access their calendar events.
   - Ensured authentication was smooth and secure, adhering to best practices for OAuth authentication.

 7. **Code Quality:**
   - Wrote clean, maintainable, and well-commented code, following project coding standards.
   - Managed code changes using Git and maintained regular commits to ensure smooth collaboration with the team.
   - Ensured components were well-structured, reusable, and followed best practices for React development.

 8. **Testing and Debugging:**
   - Conducted manual testing to verify the accuracy of Google Calendar event displays and the functionality of the filter.
   - Implemented unit tests for components to catch potential errors early in the development process.
   - Debugged and resolved issues, especially those related to the SSO integration and real-time calendar data fetching.

 9. **Collaboration:**
   - Maintained regular communication with the team to ensure alignment on progress and upcoming tasks.
   - Participated in code reviews, offering constructive feedback to team members and ensuring high code quality.
   - Contributed ideas and solutions during team meetings to improve the user experience and functionality of the platform.

10. **Deployment and Maintenance:**
   - Deployed the project on a secure platform, ensuring proper server configurations and environment settings for production.
   - Monitored the application post-deployment to ensure everything was functioning as expected.
   - Worked on ongoing improvements and bug fixes based on user feedback and usage analytics.

