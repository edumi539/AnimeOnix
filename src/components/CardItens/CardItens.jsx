import React from 'react'
import { useSelector } from 'react-redux'
import {
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Label,
    FormGroup,
    Input,
    Table,
    Row,
    Col,
    UncontrolledTooltip,
    CardImg,
    CardText,
    CardFooter
} from "reactstrap";
import { useEffect } from 'react';

const CardItens = ({ loading, Animes }) => {

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (

        <Row>
            {Animes.map(items => {
                return (
                    <Card key={items.mal_id} style={{ width: '20rem', margin: '20px' }} className="text-center">
                        <CardImg top src={items.image_url} alt={items.image_url} />
                        <CardBody>
                            <CardTitle><p className="h2">{items.title}</p></CardTitle>
                            <CardText>

                            </CardText>
                        </CardBody>
                        <CardFooter>
                            <p className="h4 text-left">Gêneros:
                                    {items.genres.map(subItens => {
                                return ` ${subItens.name}`
                            })}
                            </p>
                            <p className="h4 text-left">Nº Episódios: {items.episodes} </p>
                            <p className="h3 text-right">Nota: {items.score}</p>
                            <Button onClick={() => window.location.href = items.url} className="animation-on-hover" color="primary"> + Detalhes</Button>
                        </CardFooter>
                    </Card>
                )
            })}
        </Row>
    )
}

export default CardItens
