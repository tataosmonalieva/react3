import React, {useState} from 'react'

const TodoItem = ({todo,deleteTodo, handleEditTodo}) => {
    const [edit, setEdit] = useState(false);
    const [editTitle, setEditTitle] = useState(todo.title)

    const handleEdit = () => {
        if (!edit) {
            setEdit(!edit)
        } else {
            const newData = {...todo, title: editTitle}
            handleEditTodo(newData)
            setEdit(false)
        }
    }
    return (
        <div
            style={{
                display: 'flex',
                gap: '15px',
                alignItems: 'center'
            }}
            >
            <div style={{
                width: '280px'
            }}>
                { edit ?
                    <input
                        defaultValue={todo.title}
                        type="text"
                        onChange={(e => setEditTitle(e.target.value))}
                    />
                    :
                    <h3>{todo.title}</h3>
                }

            </div>
            <input
            type='checkbox'
            checked={todo.completed}
            />
            <button
                onClick={handleEdit}
                >
                { edit ? 'Save' : 'Edit'}
            </button>
            <button
                className={'btn'}
                onClick={() => deleteTodo(todo.id)}
                >
                Delete
            </button>

        </div>
    );
};
export default TodoItem;