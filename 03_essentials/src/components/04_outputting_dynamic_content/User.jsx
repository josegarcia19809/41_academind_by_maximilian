`
Outputting Dynamic Content
Your task is to fill the already existing User component with some life! 
You should output the user's first name and last name (stored in the also already 
existing userData object) inside of the User component's <h2> element.

In addition, you should output the title (also stored in userData) in the <p> element 
inside the User component.

You're not allowed to copy & paste the values into the component.
`

import '../../assets/user_style.css'

export const userData = {
    firstName: 'José Luis', // feel free to replace the name value
    lastName: 'García-M', // feel free to replace the name value
    title: 'Instructor', // feel free to replace the title value
};
const User = () => {
    const user = `${userData.firstName} ${userData.lastName}`;
    const title = `${userData.title}`;
    return (
        <div id="app">
            <h1>Time to Practice</h1>
            <p>Welcome on board of this course! You got this 💪</p>
            <div id="user" data-testid="user">
                <h2>
                    {user}
                </h2>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default User;