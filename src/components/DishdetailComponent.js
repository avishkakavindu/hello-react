import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



class Dishdetail extends Component {

    constructor(props){
        super(props);

        console.log(props);
    }

    renderDish(dish){
        if(dish != null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={ dish.image } alt={ dish.name }/>
                        <CardBody>
                            <CardTitle>{ dish.name }lol</CardTitle>
                            <CardText>{ dish.description }</CardText>
                        </CardBody>
                    </Card>
                </div>    
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    renderComments(comments){

        const listed_comments = comments.map(comment => {
            return( 
                <ul className="list-unstyled">
                    <li>{comment.comment}</li>
                    <li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                </ul>               
            )
        })

        if(comments != null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <h3>Comments</h3>          
                    { listed_comments }
               </div>
            )
        }
        else{
            return (<div></div>)
        }
    }


    render(){
        const dish = this.props.dish;

        if( dish != null){
            return(
                <div class="container">
                    <div className="row">
                        { this.renderDish(this.props.dish) }
                        { this.renderComments(this.props.dish.comments) }
                    </div>
                </div>
                
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }
}



export default Dishdetail;
