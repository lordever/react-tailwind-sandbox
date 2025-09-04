import React, {useState} from 'react';
import './App.css';
import TextInput from "./components/text-input/text-input.component";
import {isValidEmail} from "./utils/email.util";

function App() {
    const [value, setValue] = useState("");

    return (
        <div className="m-100">
            <h1 className="md:text-preset-1 text-preset-1-mobile">
                Hello world!
            </h1>

            <h2 className="text-preset-2">
                Hello world!
            </h2>

            <p className="text-preset-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, id in.
                Architecto esse iusto laudantium necessitatibus nostrum perspiciatis reprehenderit
                voluptates!
            </p>

            <div className="h-5 bg-gradient-4"/>

            <div className='mt-2 max-w-[320px]'>
                <TextInput value={value}
                           onValueChange={setValue}
                           label="Email address"
                           placeholder="Input your e-mail address"
                           inputValidator={isValidEmail}
                           errorMessage={'Valid email required'}
                />
            </div>

        </div>
    );
}

export default App;
