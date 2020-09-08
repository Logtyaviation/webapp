import React from 'react'
import { Card, Button } from 'react-bootstrap'

const GenericHomePageCard = (props) => {
    const { CardImage, CardTitle, CardText, CardFooter, CardButton, CardButtonLink, CardButton2, CardButtonLink2, ButtonsAmount } = props

    return(
        <>
        <Card>
            <Card.Img variant='top' src={CardImage}/>
            <Card.Body>
                <Card.Title>
                    {CardTitle}
                </Card.Title>
                <Card.Text>
                    {CardText}
                </Card.Text>
                <Button href={CardButtonLink}>{CardButton}</Button>
                {ButtonsAmount === '2' ? <Button href={CardButtonLink2}>{CardButton2}</Button>:null}
            </Card.Body>
            <Card.Footer classname='text-muted'>
                {CardFooter}
            </Card.Footer>
        </Card>
        </>
    )
}

export default GenericHomePageCard