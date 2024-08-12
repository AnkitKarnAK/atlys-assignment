# Atlys Assignment

Project has these routes:

- "/" home (contains feeds)
- "/login" Login
- "/register" Register

## Feed Page

- Starts with Welcome intro. (if logged in user then uses thier name else just says "Hello User")
- Create Post section
- Feeds
- if not logged in: Login or Register button on top right which opens respective modal
- if logged in: Logout button on top right for logging out

## Login Page

- Click https://atlys-assignment-ankitkarn.vercel.app/login to go to login page.
- Contains Login Form.
- Use username `userone` & password `Test@1234` to login.
- Other usernames are `usertwo`, `userthree` both uses password as `Test@1234`.
- Clicking on Register will navigate to register page.

## Register Page

- Click https://atlys-assignment-ankitkarn.vercel.app/register to go to register page.
- Contains Registration Form.
- You can create a new user & it will persist on your device.
- Clickin on Login will navigate to login page.

### Tech Stack

- React
- TypeScript
- Tailwind
- Zustand (for state management & persisting data)
- Tanstack Router (for client side routing)
