import SubmitButton from './SubmitButton.jsx';

function AuthForm() {
    function calculate(a, b) {
        return {sum: a + b}
    }

    return (
        <form>
            <input type="text"/>
            <SubmitButton/>
        </form>
    );
}

export default AuthForm;