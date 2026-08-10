import react from 'react';
import B from "./B";

const A = (x) => {
    return (
        <div style={{ border: "2px solid red"}} >
            <h1 >
            A component 
        </h1>
        <B name={"chichu"}/>
        {x.data}
        </div>
        
    );
};

export default A;