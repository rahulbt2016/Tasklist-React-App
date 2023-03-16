import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


type Props = {
    taskCategory: {
        title: string;
        tasks: string[];
        id: string;
    }

    onDelete: (id: string, index: number) => void;
}

const TaskCategory = (props: Props) => {
    return (
        <div>
            <h4>{props.taskCategory.title}</h4>
            <ul className='tasks-ul'>
                <table>
                    <tbody>
                        {props.taskCategory.tasks.map((t, i) => (
                                <tr>
                                    <td><li key={i}>{t}</li></td>
                                    <td>
                                        <button className='deleteButton' onClick={() => props.onDelete(props.taskCategory.id, i)}>
                                            <FontAwesomeIcon icon={solid('trash-can')} size='1x' className='deleteIcon'/>
                                        </button>
                                    </td>
                                </tr>
                        ))}
                    </tbody>
                </table>
            </ul>
        </div>
    );
}

export default TaskCategory;