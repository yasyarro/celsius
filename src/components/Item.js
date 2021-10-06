import React from 'react';
import { Card,  Image } from 'semantic-ui-react';



const Item = ({item}) => {
    const {id, img, name, precio, description} = item;
    return (
        <Card className="card">
            <Image src={img} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                                </Card.Content>
            <Card.Content>${precio}</Card.Content>
        </Card>
    )
};

export default Item;