import React, { Component } from "react";
import style from "./TodoList.css";
import Axios from "axios";

export default class TodoList extends Component {
    state = {
        taskList: [],
        values: {
            taskName: "",
        },
        errors: {
            taskName: "",
        },
    };
    getTaskLisl = () => {
        let promise = Axios({
            url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
            method: "GET",
        });

        promise.then((result) => {
            console.log("thành công", result.data);
            this.setState({
                taskList: result.data,
            });
        });
        promise.catch((error) => {
            console.log("thất bại", error.response.data);
        });
    };

    renderTaskToDo = () => {
        return this.state.taskList
            .filter((item) => !item.status)
            .map((item, index) => {
                return (
                    <li key={index}>
                        <span>{item.taskName}</span>
                        <div className="buttons">
                            <button type="button" className="remove"
                                onClick={() => {
                                    this.delTask(item.taskName)
                                }}
                            >
                                <i className="fa fa-trash-alt" />
                            </button>
                            <button type="button" className="complete"
                                onClick={() => {
                                    this.checkTask(item.taskName)
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
    //hàm xu lý done task
    checkTask = (taskName) => {
        let promise = Axios({
            url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
            method: "PUT",

        });

        promise.then((result) => {
            console.log("thành công", result.data);
            this.getTaskLisl()
        });
        promise.catch((error) => {
            alert(error.response.data);
        });
    }

    //hàm xử lý deltask
    delTask = (taskName) => {
        let promise = Axios({
            url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
            method: "DELETE",

        });

        promise.then((result) => {
            console.log("thành công", result.data);
            this.getTaskLisl()
        });
        promise.catch((error) => {
            alert(error.response.data);
        });
    }
    //hàm xử lý undotask
    undoTask = (taskName) => {
        let promise = Axios({
            url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
            method: "PUT",

        });

        promise.then((result) => {
            this.getTaskLisl()
        });
        promise.catch((error) => {
            alert(error.response.data);
        });
    }

    renderTaskToDoDone = () => {
        return this.state.taskList
            .filter((item) => item.status)
            .map((item, index) => {
                return (
                    <li key={index}>
                        <span>{item.taskName}</span>
                        <div type="button" className="buttons">
                            <button type="button" className="remove"
                                onClick={() => {
                                    this.delTask(item.taskName)
                                }}
                            >
                                <i className="fa fa-trash-alt" />
                            </button>
                            <button type="button" className="complete" onClick={() => {
                                this.undoTask(item.taskName)
                            }}>
                                <i className="far fa-undo" />
                                <i className="fas fa-undo" />
                            </button>
                        </div>
                    </li>
                );
            });
    };

    //hàm tự động thực thi sau render
    componentDidMount() {
        this.getTaskLisl();
    }

    handleChange = (e) => {
        let { value, name } = e.target;
        console.log(value, name);
        let newValues = { ...this.state.values };
        newValues = { ...newValues, [name]: value };

        let newErrors = { ...this.state.errors };
        let regexString = /^[a-z A-Z]+$/;
        if (!regexString.test(value) || value.trim() === "") {
            newErrors[name] = name + " invalid";
        } else {
            newErrors[name] = "";
        }
        this.setState({
            ...this.state,
            values: newValues,
            errors: newErrors
        });
    };

    addTask = (ev) => {
        ev.preventDefault();
        //let { value, name } = ev.target;
        console.log("xxxxxxxxxxxxxxxx", this.state.errors.taskName, this.state.values.taskName)
        if (this.state.errors.taskName === "" && this.state.values.taskName.trim() !== "") {
            let promise = Axios({
                url: "http://svcy.myclass.vn/api/ToDoList/AddTask",
                method: "POST",
                data: { taskName: this.state.values.taskName }
            });

            promise.then((result) => {
                console.log("thành công", result.data);
                this.getTaskLisl()

            });

            promise.catch((error) => {
                alert(error.response.data);
            });
        } else {
            alert("TaskName invalid")
        }


    };

    render() {
        return (
            <form onSubmit={this.addTask}>
                {/* <button
          onClick={() => {
            this.getTaskLisl();
          }}
        >
          get task list
        </button> */}
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
                                    name="taskName"
                                    id="newTask"
                                    type="text"
                                    placeholder="Enter an activity..."
                                    onChange={this.handleChange}
                                />

                                <button id="addItem" onClick={
                                    this.addTask
                                }>
                                    <i className="fa fa-plus" />
                                </button>
                            </div>
                            <div className="m-0 p-1" style={{ width: '100%', height: '32px', fontSize: '15px' }}>
                                <p className="text text-danger m-0">{this.state.errors.taskName}</p>
                            </div>
                            <div className="card__todo">
                                {/* Uncompleted tasks */}
                                <ul className="todo pt-2" id="todo">
                                    {this.renderTaskToDo()}
                                </ul>
                                {/* Completed tasks */}
                                <ul className="todo" id="completed">
                                    {this.renderTaskToDoDone()}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
