import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



    function RenderDish({dish}){
        if(dish != null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={ dish.image } alt={ dish.name }/>
                        <CardBody>
                            <CardTitle>{ dish.name }</CardTitle>
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

    function RenderComments({comments}){

        const listed_comments = comments.map(comment => {
            return( 
                <ul key={ comment.id } className="list-unstyled">
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


    const DishDetail = (props) => {
       
        console.log('Dish detail: ', props)
        const dish = props.dish;

        if( dish != null){
            return(
                <div className="container">
                    <div className="row">
                        <RenderDish dish={props.dish}></RenderDish> 
                        <RenderComments comments={props.dish.comments}></RenderComments>
                    </div>
                </div>
                
            )
        }
        else{
            return(
                <></>
            )
        }
    }



export default DishDetail;
