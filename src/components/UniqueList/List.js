import React from "react";

import { v4 as uuidv4 } from "uuid";

const todos = [
    {   
        id : uuidv4(),
        title : "Todo Asif",
        desc : "Asif make todo App."
    },
    {
        id : uuidv4(),
        title : "Asif todo",
        desc : "App make by Asif."
    }
];

const List = () => {
    return (
        <div>
            {todos.map((todo) => {
                const {id, title, desc} = todo;
                return (
                    <div key={id}>
                        <h2>{title}</h2>
                        <h3>{desc}</h3>
                    </div>
                );
            })}
        </div>
    );
};

export default List;