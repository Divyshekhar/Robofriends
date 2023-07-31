import React,{Component}from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component{
    constructor(){
        super()
        this.state={
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{ return response.json();})
        .then(users=>{this.setState({robots: users})
        })
    }
    onsearchchange=(event)=>{
        this.setState({searchfield: event.target.value})
       
    }
        render(){
            const filtererdrobots= this.state.robots.filter(robots=>{
                return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            })
            if(this.state.robots.length === 0){
                <h1>Loading</h1>
            }
            else{
            return(
                <div className='tc'>
                <h1 className='f1'>Snehil Friends</h1>
                <SearchBox searchchange={this.onsearchchange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filtererdrobots} />
                    </ErrorBoundry>
                </Scroll>
                </div>
                );}
            }
    }
export default App;