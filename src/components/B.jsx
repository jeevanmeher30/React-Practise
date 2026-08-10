import react from 'react';
import C from "./C";

const B = (x) => {
    return (
        <div style={{ border: "2px solid green"}} >
            <h1 >
            B component  
        </h1>
        {x.name}
        <C Bname={x.name}/>
        </div>
    );
};

export default B;