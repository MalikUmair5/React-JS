function TodoItem2(): JSX.Element {
    return (
        <div className="container todoItem">
            <div className="row">
                <div className="col-6">
                    Go To College
                </div>
                <div className="col-4">
                    4/10/2023
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger">Add</button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem2