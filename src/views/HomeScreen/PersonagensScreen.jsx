import { ListAnimesOfSeasonAction } from "../../Actions/ListAnimesOfSeasonAction";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardItens from "../../components/CardItens/CardItens";
import PaginationComponent from "../../components/Pagination/Pagination";
import "./index.css";
import { useHistory } from "react-router-dom";

export default function PersonagensScreen() {
  const ReducerJikan = useSelector((state) => state.ReducerJikan.Animes);
  const ReducerElements = useSelector((state) => state.ElementsReducer);
  const history = useHistory();
  const [loading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itensPerPage] = useState(8);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ListAnimesOfSeasonAction());
  }, []);

  useEffect(() => {
    console.log(ReducerElements.searchtextinput);
  }, [ReducerElements.searchtextinput]);

  const Pagination = (ReducerJikan) => {
    const indexOfLastitem = currentPage * itensPerPage;
    const indexOfFirstitem = indexOfLastitem - itensPerPage;
    const currentItens = ReducerJikan.slice(indexOfFirstitem, indexOfLastitem);
    return currentItens;
  };

  const paginate = (pagenumber) => setCurrentPage(pagenumber);

  return (
    <div className="content col">
      <CardItens
        loading={loading}
        Animes={Pagination(ReducerJikan)}
        ElementsReducer={ReducerElements}
        History={history}
      />
      <PaginationComponent
        itensPerPage={itensPerPage}
        totalItens={ReducerJikan.length}
        paginate={paginate}
      />
    </div>
  );
}
