import React ,  {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class TodoList extends Component{

    constructor(props){
        super(props);
        this.state = {todos:[]};
    }

    componentDidMount(){
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({todos:response.data});
            })
            .catch(function(err){
                console.log(error);
            })
    }

    render(){
        return(
            <div>
                <p> Welcome Todos List Component !</p>
            </div>
        )
    }
}