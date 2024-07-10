import Review from "./Review.jsx";
import "./index.css";
import React from 'react';

// don't change the Component name "App"
function App_16() {
    const [feedback, setFeedback] = React.useState("");
    const [studentName, setStudentName] = React.useState("");

    function handleChangeStudentName(event) {
        setStudentName(event.target.value);
    }

    function handleChangeFeedback(event) {
        setFeedback(event.target.value);
    }
    
    return (
        <>
            <section id="feedback">
                <h2>Please share some feedback</h2>
                <p>
                    <label>Your Feedback</label>
                    <textarea value={feedback} onChange={handleChangeFeedback}/>
                </p>
                <p>
                    <label>Your Name</label>
                    <input type="text" value={studentName} onChange={handleChangeStudentName}/>
                </p>
            </section>
            <section id="draft">
                <h2>Your feedback</h2>

                <Review
                    feedback={feedback}
                    student={studentName}
                />

                <p>
                    <button>Save</button>
                </p>
            </section>
        </>
    );
}

export default App_16;