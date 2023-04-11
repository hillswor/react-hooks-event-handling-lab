// Code Keypad Component Here

function Keypad() {
    const handleChange = () => console.log("Entering password...");

    return (
        <div>
            <label htmlFor="password">Password: </label>
            <input type="password" onChange={handleChange} />
        </div>
    );
}

export default Keypad;
