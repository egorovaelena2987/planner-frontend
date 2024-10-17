import { MdDeleteForever } from "react-icons/md";
import { GrEdit } from "react-icons/gr";

export const MyPlaner = ({text, updatingInPut, deletePlan}) => {
    return(
        <div>
            <p>{text}</p>
            <GrEdit onClick={updatingInPut}/>
            <MdDeleteForever onClick={deletePlan}/>
        </div>
    )
}