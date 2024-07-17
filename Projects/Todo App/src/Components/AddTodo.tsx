import styles from "./AddTodo.module.css"

function    AddTodo(): JSX.Element {
    return (
        <div className="container addTodo">
            <div className="row">
                <div className="col-6">
                    <input className={styles.todoInput} type="text" placeholder="Enter Todo here" />
                </div>
                <div className="col-4">
                    <input className={styles.todoInput} type="Date" />
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-success">Add</button>
                </div>
            </div>
        </div>
    )
}

export default AddTodo