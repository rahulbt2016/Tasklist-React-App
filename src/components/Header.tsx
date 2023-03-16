type Props = {
    totalTasks: number;
}

const Header = (props : Props) => {
    return (
        <header>
            <div className="row">
                <h3 className="col-md-4">Task List</h3>
                <span className="col-md-3"></span>
                <h3 className="col-md-5">Total Number of Task: {props.totalTasks}</h3>
            </div>
        </header>
    );
}

export default Header;