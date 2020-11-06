import Axios from "axios";
import React, { useState, useEffect } from "react";

export default function TodoListRFC() {
    let [state, setState] = useState({
        taskList: [],
        values: {
            taskName: "",
        },
        errors: {
            taskName: "",
        },
    });
    console.log(state);
    const handleChange = (e) => {
        let { value, name } = e.target;
        console.log(value, name);
        let newValues = { ...state.values };
        newValues = { ...newValues, [name]: value };

        let newErrors = { ...state.errors };
        let regexString = /^[a-z A-Z]+$/;
        if (!regexString.test(value) || value.trim() === "") {
            newErrors[name] = name + " invalid";
        } else {
            newErrors[name] = "";
        }
        setState({
            ...state,
            values: newValues,
            errors: newErrors,
        });
    };

    const addTask = (e) => {
        e.preventDefault(); //chặn sự kiện reload lại trang

        console.log(
            "xxxxxxxxxxxxxxxx",
            state.errors.taskName,
            state.values.taskName
        );
        if (state.errors.taskName === "" && state.values.taskName.trim() !== "") {
            let promise = Axios({
                url: "http://svcy.myclass.vn/api/ToDoList/AddTask",
                method: "POST",
                data: { taskName: state.values.taskName },
            });

            promise.then((result) => {
                console.log("thành công", result.data);
                getTaskLisl();
            });

            promise.catch((error) => {
                alert(error.response.data);
            });
        } else {
            alert("TaskName invalid");
        }
    };

    const getTaskLisl = () => {
        let promise = Axios({
            url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
            method: "GET",
        });

        promise.then((result) => {
            console.log("thành công", result.data);
            setState({
                ...state,
                taskList: result.data,
            });
        });
        promise.catch((error) => {
            console.log("thất bại", error.response.data);
        });
    };
    //hàm xu lý done task
    const checkTask = (taskName) => {
        let promise = Axios({
            url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
            method: "PUT",

        });

        promise.then((result) => {
            console.log("thành công", result.data);
            getTaskLisl()
        });
        promise.catch((error) => {
            alert(error.response.data);
        });
    }

    //hàm xử lý deltask
    const delTask = (taskName) => {
        let promise = Axios({
            url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
            method: "DELETE",

        });

        promise.then((result) => {
            console.log("thành công", result.data);
            getTaskLisl()
        });
        promise.catch((error) => {
            alert(error.response.data);
        });
    }
    //hàm xử lý undotask
    const undoTask = (taskName) => {
        let promise = Axios({
            url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
            method: "PUT",

        });

        promise.then((result) => {
            getTaskLisl()
        });
        promise.catch((error) => {
            alert(error.response.data);
        });
    }

    //dùng useEffect lấy dữ liệu về
    useEffect(() => {
        getTaskLisl();
        return () => { };
    }, []);

    const renderTaskToDo = () => {
        return state.taskList
            .filter((item) => !item.status)
            .map((item, index) => {
                return (
                    <li key={index}>
                        <span>{item.taskName}</span>
                        <div className="buttons">
                            <button
                                type="button"
                                className="remove"
                                onClick={() => {
                                    delTask(item.taskName)
                                }}
                            >
                                <i className="fa fa-trash-alt" />
                            </button>
                            <button
                                type="button"
                                className="complete"
                                onClick={() => {
                                    checkTask(item.taskName)
                                }}
                            >
                                <i className="far fa-check-circle" />
                                <i className="fas fa-check-circle" />
                            </button>
                        </div>
                    </li>
                );
            });
    };

    const renderTaskToDoDone = () => {
        return state.taskList
            .filter((item) => item.status)
            .map((item, index) => {
                return (
                    <li key={index}>
                        <span>{item.taskName}</span>
                        <div type="button" className="buttons">
                            <button
                                type="button"
                                className="remove"
                                onClick={() => {
                                    delTask(item.taskName)
                                }}
                            >
                                <i className="fa fa-trash-alt" />
                            </button>
                            <button
                                type="button"
                                className="complete"
                                onClick={() => {
                                    undoTask(item.taskName)
                                }}
                            >
                                <i className="far fa-undo" />
                                <i className="fas fa-undo" />
                            </button>
                        </div>
                    </li>
                );
            });
    };

    return (
        <form>
            <div className="card">
                <div className="card__header">
                    <img src="./img/bgtodolist.png" />
                </div>
                {/* <h2>hello!</h2> */}
                <div className="card__body">
                    <div className="card__content">
                        <div className="card__title">
                            <h2>My Tasks</h2>
                            <p>September 9,2020</p>
                        </div>
                        <div className="card__add">
                            <input
                                id="newTask"
                                type="text"
                                name="taskName"
                                placeholder="Enter an activity..."
                                onChange={handleChange}
                            />
                            <button id="addItem" onClick={addTask} >
                                <i className="fa fa-plus" />
                            </button>
                        </div>
                        <div className="m-0 p-1" style={{ width: '100%', height: '32px', fontSize: '15px' }}>
                            <p className="text text-danger m-0">{state.errors.taskName}</p>
                        </div>
                        <div className="card__todo">
                            {/* Uncompleted tasks */}
                            <ul className="todo" id="todo">
                                {renderTaskToDo()}
                            </ul>
                            {/* Completed tasks */}
                            <ul className="todo" id="completed">
                                {renderTaskToDoDone()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
