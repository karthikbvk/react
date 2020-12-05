'use strict';

const obj = {
    title : 'React Web Application',
    subtitle : 'Concepts'
};  

class Container extends React.Component{
render(){ 
    

    return (
        <div>
        <Header title={obj.title} subtitle ={obj.subtitle} />
        <Body />
        </div>
        
    );
    
  }
}
class Header extends React.Component{
    render(){
        return(
            <div>
           <h1>{ this.props.title }</h1>
           <h2>{ this.props.subtitle }</h2>
        </div>
        );
    }
}

class Body extends React.Component{
    render(){
        return (
            <div>
            <Signup />
            </div>
        );
    }
}

class Signup extends React.Component{
    give(e){
        e.preventDefault();
        const userName = document.getElementById('Uname').value;
        const password = document.getElementById('Pass').value;
         
        
    }
    render(){
        return (
            <form onKeyUp={this.give}>
            <input type="text" id="Uname"/>
            <p>{this.userName ? '  wrong username' :' '}</p>
            <input type="password" id="Pass"/>
            <p>{this.password ? 'wrong Password' :' '}</p>
            <button >Submit</button>
            <br></br>
            <label>{ this.userName && this.password ? 'gud': 'bad'}</label>
            </form> 
        );
    }
    
}

 

ReactDOM.render( <Container />  , document.getElementById('app'));
