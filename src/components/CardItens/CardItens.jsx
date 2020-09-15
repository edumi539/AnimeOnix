import React from 'react'
import './CardItens.css'
import { Link } from 'react-router-dom'
import { Row } from 'reactstrap'

const CardItens = ({ loading, Animes }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }

    const changeColor = (items) => {
        if (items > 7.0) {
            return 'green'
        }

        return 'red'
    }

    return (
        <Row>
            {Animes.map((items) => {
                return (
                    <div
                        key={items.mal_id}
                        className="card shadow-lg p-3 mb-5 bg-white rounded"
                    >
                        <img
                            top
                            src={items.image_url}
                            alt={items.image_url}
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h2 className="card-title text-center">
                                {items.title}
                            </h2>
                            <p className="card-text">
                                <h5 className="generosText text-left">
                                    Gêneros:
                                    {items.genres.map((subItens) => {
                                        return ` ${subItens.name}`
                                    })}
                                </h5>
                            </p>
                        </div>
                        <div className="card-footer text-center text-muted">
                            <h5 className=" text-left">
                                Nº Episódios: {items.episodes}{' '}
                            </h5>
                            <h3
                                className=" text-nota text-right"
                                style={{ color: `${changeColor(items.score)}` }}
                            >
                                Nota: {items.score || 'Sem nota'}
                            </h3>
                            <Link
                                to={`/anime/${items.mal_id}`}
                                className="btn btn-primary"
                                color="primary"
                            >
                                {' '}
                                + Detalhes
                            </Link>
                        </div>
                    </div>
                )
            })}
        </Row>
    )
}

export default CardItens
