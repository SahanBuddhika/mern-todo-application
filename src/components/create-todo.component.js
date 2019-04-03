import React ,  {Component} from 'react';

export default class CreateTodo extends Component{

    constructor(props){
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description:'',
            todo_responsible:'',
            todo_priority:'',
            todo_completed:false
        }
    }

    onChangeTodoDescription(e){
        this.setState({
            todo_description:e.target
        });
    }

    onChangeTodoResponsible(e){
        this.setState({
            todo_responsible:e.target
        });
    }

    onChangeTodoPriority(e){
        this.setState({
            todo_priority:e.target
        });
    }

    onSubmit(e){
        e.preventDefault();

        console.log(`Form Submitted:`);
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Responsible: ${this.state.todo_responsible}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);
        console.log(`Todo Completed: ${this.state.todo_completed}`);

        this.setState({
            todo_description:'',
            todo_responsible:'',
            todo_priority:'',
            todo_completed:false
        })
    }

    render(){
        return(
            <div>
                <p> Welcome Create Todo Component !</p>
            </div>
        )
    }
}