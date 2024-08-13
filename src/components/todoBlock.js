const TodoBlock = ({todoListArr, handleCheck, deleteItem}) => {
    return (<div>
        <table id="todoListTbl" className="table table-hover">
            <thead>
            <tr style={{textAlign:"center"}}>
                <th>Confirm</th>
                <th>Title</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody id="todoList">
            {todoListArr.map((item, idx)=>{
                return (<tr key={item.no}>
                    <td>
                        <input type="checkbox" onChange={() => {
                            handleCheck(item.no);
                        }} checked={item.done}></input>
                    </td>
                    <td style={{textDecoration: item.done ? 'line-through' : 'none'}}>{item.title}</td>
                    <td>
                        <button className="btn btn-danger" onClick={() => {
                            deleteItem(item.no);
                        }} type="button">Delete</button>
                    </td>
                </tr>);
            })}
            </tbody>
        </table>
    </div>);
}
export default TodoBlock;