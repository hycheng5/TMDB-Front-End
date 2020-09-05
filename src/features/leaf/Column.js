import React from 'react';
import styled from 'styled-components';
import LeafItem from './LeafItem';
import {Droppable} from 'react-beautiful-dnd';

const Container = styled.div`
  margin:8px;
  border:1px solid lightgrey;
  flex-direction: column;
  justify-content: center;
  display:flex;
  width: 40%;
  margin-left:auto;
  margin-right:auto;

`;
const Title = styled.h3`
  padding:8px;
  margin-left:auto;
  margin-right:auto;
`;
const LeavesList = styled.div`
  padding:8px;

`;

export default class Columnn extends React.Component{

  render(){
    return(

        <Container>
            <Title>{this.props.column.title}</Title>
              <Droppable droppableId={this.props.column.id}>
              {provided=>(
                <LeavesList ref={provided.innerRef} {...provided.droppableProps}>

                  {this.props.leaves.map((leaves,index)=> <LeafItem key={leaves.id} leaves={leaves} index={index}/>)}
                  {provided.placeholder}

                </LeavesList>
              )}

            </Droppable>
        </Container>
    );
  }
}
