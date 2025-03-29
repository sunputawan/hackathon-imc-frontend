


type InputBoxProps = {
    username: string;
    handleSubmit: () => void;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
}

const InputBox = ({username, setUsername, handleSubmit}: InputBoxProps) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }
    return (
        <div>
            <div className='max-w-md w-[90%] mx-auto rounded-4xl py-5 bg-custom-blue my-5 text-center'>
                <div className='text-3xl text-white'>Enter your username</div>
                <input 
                    type="text" 
                    onChange={handleInputChange}
                    className="mt-4 w-[80%] bg-white rounded-3xl p-2 text-center text-4xl text-black focus:outline-none focus:ring-8 focus:ring-blue-900" 
                    placeholder='Your Name...'
                />
            </div>
            <div
                onClick={handleSubmit} 
                className={`w-[50%] mx-auto button text-center p-3 bg-yellow-600 text-2xl rounded-full ${
                    username.length === 0 && "hidden"
                }`}
            >
                DONE
            </div>
        </div>
    )
}

export default InputBox