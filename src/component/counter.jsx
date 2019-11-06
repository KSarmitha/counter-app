import React, { Component } from 'react';
class Counter extends Component {
    
    //state ={
       // value:this.props.counter.value 
       
   // };

    //renderTags(){

       // if(this.state.tags.length === 0) return <p>There is no tags</p>;

       // return  <ul>{this.state.tags.map(tag =><li key={tag}>{tag}</li>)}</ul>;
    /// }

     //constructor(){
       //  super();
      //  this.buttonIncrement = this.buttonIncrement(this);

     //}

     //buttonIncrement = () =>{
        //console.log("increment",this)
        //console.log(element);
        //this.state.count++;
        //this.setState({value :this.props.counter.value +1});
     //}

     //buttonDecrement =() =>{
         //this.setState({value :this.state.value -1});
     //}
     //doButtonIncrement =() => {

        //this.buttonIncrement({id :26});
     //}

    render() { 
            //console.log('props',this.props);
        return  (
        <div>
            
            
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

            <button onClick={() => this.props.doIncrement(this.props.counter)} 
            className="btn btn-secondary s-m m-1">+</button>

            <button onClick={() => this.props.doDecrement(this.props.counter)} 
            className="btn btn-secondary s-m m-1">-</button>

            <button onClick={() => this.props.onDelete(this.props.counter.id)} 
            className="btn btn-danger s-m m-1">Delete</button>
            </div>
            );
    }

    formatCount(){
        const {value} = this.props.counter;
        return  value === 0 ? <b>Zero</b> : value;
    };  
 
    getBadgeClasses(){
    let classes = "badge m-2 badge-" ;
        classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
    };

}
 
export default Counter;