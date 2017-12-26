import React, {Component} from 'react';

class TodoItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showDel: false  //  delete icon 
        }
    }

    handleDelete (){
        const date = this.props.date;
        this.props.onDeleteItem(date);
    }

    render() {
        return (
            <div className='todoItem'>
                <p>
                    <span className='itemCont'>{ this.props.content }</span>
                    <span className='itemTime'>{ this.props.date }</span>
                    <button className='delBtn' onClick={this.handleDelete.bind(this)}>
                        <img className="delIcon" src="/images/delete.png" />
                    </button>
                </p>
            </div>
        )
    }
}

export default TodoItem;