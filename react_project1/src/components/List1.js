import React from "react";

function List({person}) { 
    return (
        <>
             <h2>My Id is{person.id} {person.name} {person.age} {person.skill} </h2>
        </>
    )
};
export default List;