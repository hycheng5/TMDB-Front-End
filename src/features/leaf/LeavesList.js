import React, { useState } from 'react';
import LeafApi from '../../api/LeafApi';
import Column from './Column';
import {DragDropContext} from 'react-beautiful-dnd';
class Leaf extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      leavesList:null
    };
  }
  componentDidMount(){
    console.log("component did mount")
    var leaves =LeafApi.getAllLeavesFake();
    console.log(leaves);
    this.setState({leavesList:leaves})
  }
  onDragEnd = (result)=>{
    const{destination,source,draggableId} = result
    console.log(this.state.leavesList);
    if(!destination){return;}

    if(
      destination.droppableId === source.droppableId &&
      destination.index ===source.index
    ){return;}

    const column = this.state.leavesList.columns[source.droppableId];
    const newTaskIds = Array.from(column.leavesId);
    newTaskIds.splice(source.index,1);
    newTaskIds.splice(destination.index,0,draggableId);

    const newColumn={
      ...column,
      leavesId:newTaskIds,
    }
    const newState = {
      ...this.state.leavesList,
      columns:{
        ...this.state.leavesList.columns,
        [newColumn.id]:newColumn,
      },
    };

    this.setState({leavesList:newState});
  }
  render(){
    return(this.state.leavesList?
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.leavesList.columnOrder.map(columnId=>{

          const column = this.state.leavesList.columns[columnId];
          const leaves = column.leavesId.map(taskId => this.state.leavesList.leaves[taskId]);
          return <Column key={column.id} column = {column} leaves={leaves}/>

        })}
      </DragDropContext>
    :"");

  }
}

export default Leaf;
