import React from 'react';
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';
const Container = styled.div`
  margin:8px;
  border:2px solid lightgrey;
  border-radius:2px;
  text-align:center;
`;
const Title = styled.h3`
  padding:8px;
`;
const LeavesList = styled.div`
  padding:8px;
`;
export default class LeafItem extends React.Component{

  render(){
    return(
      <Draggable draggableId={this.props.leaves.id} index={this.props.index}>
        {(provided)=>(
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}

            ref={provided.innerRef}
          >
            {this.props.leaves.description}

          </Container>
        )}

      </Draggable>
    );
  }

}
