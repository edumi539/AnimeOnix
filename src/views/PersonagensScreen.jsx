
import { ListAnimesOfSeasonAction } from "../Actions/ListAnimesOfSeasonAction";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import CardItens from '../components/CardItens/CardItens'
import PaginationComponent from '../components/Pagination/Pagination'

export default function PersonagensScreen() {
    const ReducerJikan = useSelector(state => state.ReducerJikan.Animes)
    const [loading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itensPerPage] = useState(9);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(ListAnimesOfSeasonAction())
    }, [])

    const Pagination = (ReducerJikan) => {
        const indexOfLastitem = currentPage * itensPerPage;
        const indexOfFirstitem = indexOfLastitem - itensPerPage;
        const currentItens = ReducerJikan.slice(indexOfFirstitem, indexOfLastitem);
        return currentItens;
    }

    const paginate = (pagenumber) => setCurrentPage(pagenumber)

    return (
        <div className="content">
            <CardItens loading={loading} Animes={Pagination(ReducerJikan)} />
            <PaginationComponent itensPerPage={itensPerPage} totalItens={ReducerJikan.length} paginate={paginate} />
        </div>
    );
}
