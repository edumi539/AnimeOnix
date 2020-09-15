import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ListAnimeMoreIdAction from '../Actions/ListAnimeMoreIdAction'
import MainLayout from '../Layout/MainLayout'
import { useState } from 'react'
import { Collapse, Card, CardImg, Row } from 'reactstrap'
import './DetailsPage.css'
const DetailsPage = ({ match }) => {
    const jikanAnimesMoreIdReducer = useSelector(
        (state) => state.JikanAnimesMoreID.Anime_Data
    )
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    const dispatch = useDispatch()
    const {
        params: { animeId },
    } = match

    return (
        <div>
            <MainLayout />
            <ul
                className="nav nav-pills nav-fill shadow p-2 mb-5 bg-white rounded"
                id="pills-tab"
                role="tablist"
            >
                <li className="nav-item ">
                    <a
                        onClick={() => {
                            dispatch(ListAnimeMoreIdAction(animeId, 'pictures'))
                            toggle()
                        }}
                        className="nav-link active"
                        id="pills-imagens-tab"
                        data-toggle="pill"
                        href="#pills-imagens"
                        role="tab"
                        aria-controls="pills-imagens"
                        aria-selected="true"
                    >
                        Imagens
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        href="#"
                        id="pills-episodios-tab"
                        data-toggle="pills"
                        href="#pills-episodios"
                        role="tab"
                        aria-controls="pills-episodios"
                        aria-selected="false"
                    >
                        Episódios
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        href="#"
                        id="pills-reviews-tab"
                        data-toggle="pills"
                        href="#pills-reviews"
                        role="tab"
                        aria-controls="pills-reviews"
                        aria-selected="false"
                    >
                        Reviews
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        href="#"
                        id="pills-staff-tab"
                        data-toggle="pills"
                        href="#pills-staff"
                        role="tab"
                        aria-controls="pills-staff"
                        aria-selected="false"
                    >
                        Staff
                    </a>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div
                    className="tab-pane fade show active"
                    id="pills-imagens"
                    role="tabpanel"
                    aria-labelledby="pills-imagens-tab"
                >
                    <Collapse isOpen={isOpen}>
                        <Row>
                            {jikanAnimesMoreIdReducer.map((itens) => {
                                return (
                                    <Card>
                                        <CardImg
                                            width="100%"
                                            src={itens.small}
                                            alt="..."
                                        />
                                    </Card>
                                )
                            })}
                        </Row>
                    </Collapse>
                </div>
                <div
                    class="tab-pane fade"
                    id="pills-episodios"
                    role="tabpanel"
                    aria-labelledby="pills-episodios-tab"
                >
                    <p>2</p>
                </div>
                <div
                    class="tab-pane fade"
                    id="pills-reviews"
                    role="tabpanel"
                    aria-labelledby="pills-reviews-tab"
                >
                    <p>3</p>
                </div>
                <div
                    class="tab-pane fade"
                    id="pills-staff"
                    role="tabpanel"
                    aria-labelledby="pills-staff-tab"
                >
                    <p>4</p>
                </div>
            </div>
        </div>
    )
}

export default DetailsPage
