import Axios from "axios";
import { GET_TASK_API } from "../const/ToDoListConst";

export const getTaskListApi = () => {
    return dispatch => {
        let promise = Axios({
            url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
            method: "GET",
        });
        promise.then((result) => {
            console.log(result.data);
            dispatch({
                type: GET_TASK_API,
                taskList: result.data
            })
            console.log('Thành công');
        });
        promise.catch((error) => {
            console.log("thất bại");
            console.log(error.response.data);
        });
    }
}

export const addTaskApi = (taskName) => {
    return dispatch => {
        let promise = Axios({
            url: "http://svcy.myclass.vn/api/ToDoList/AddTask",
            method: "POST",
            data: { taskName: taskName },
        });

        promise.then((result) => {

            dispatch(getTaskListApi());
        });

        promise.catch((error) => {
            alert(error.response.data);
        });
    }
}
export const delTaskApi = (taskName) => {
    return dispatch => {
        let promise = Axios({
            url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
            method: "DELETE",

        });

        promise.then((result) => {
            //sau khi thực hiện api gọi phương thức dispatchaction get tasjklistapi để load lại task

            dispatch(getTaskListApi())
        });
        promise.catch((error) => {
            alert(error.response.data);
        });
    }
}

export const checkTaskApi = (taskName) => {
    return dispatch => {
        let promise = Axios({
            url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
            method: "PUT",
        });

        promise.then((result) => {
            console.log("thành công", result.data);
            dispatch(getTaskListApi())
        });
        promise.catch((error) => {
            alert(error.response.data);
        });
    }
}

export const undoTaskApi = (taskName) => {
    return dispatchss => {
        let promise = Axios({
            url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
            method: "PUT",

        });

        promise.then((result) => {
            dispatchss(getTaskListApi())
        });
        promise.catch((error) => {
            alert(error.response.data);
        });
   } 
}