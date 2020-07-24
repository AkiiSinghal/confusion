import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    renderDish(dish) {
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(comments) {
        const com = comments.map((comm) => {
            var d = new Date(comm.date);
            return (
              <li>
                  <p>{comm.comment}</p>
                  <p>-- {comm.author} , {d.toLocaleString('default', { month: 'short' })} {d.getDate()}, {d.getFullYear()}</p>
              </li>
            );
        });
        return(
            <div>
                <h4>Comments</h4>
                <ul class = "list-unstyled">
                    {com}
                </ul>
            </div>
        );
    }

    render() {
        if(this.props.dish != null)
            return (
                    <div className="row">
                        <div  className="col-12 col-md-5 m-1">
                            {this.renderDish(this.props.dish)}
                        </div>
                        <div  className="col-12 col-md-5 m-1">
                            {this.renderComments(this.props.dish.comments)}
                        </div>
                    </div>
            );
        else
            return (
                <div></div>
            )
    }
}

export default DishDetail;