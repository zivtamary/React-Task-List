import React from 'react';

const Todos = ({todos,deleteToDo}) => {

    const TodoList = todos.length > 0 ? (todos.map(todo => {
        return (
            <li className="list-group-item" key={todo.id}>{todo.content}<i onClick={()=>{deleteToDo(todo.id)}} className="fa fa-trash ml-2" aria-hidden="true"></i></li>
        )
    })) : ('You have no notes! YAY')




    return (
      <div>
            <ul className="list-group">
                {TodoList}
            </ul>
      </div>
    );

}

export default Todos;
