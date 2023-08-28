import { ListAnimesOfSeasonAction } from "../../actions/ListAnimesOfSeasonAction";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardItens from "../../components/CardItens/CardItens";
import "./index.css";
import { useHistory, useNavigate } from "react-router-dom";

export default function PersonagensScreen() {
  const ReducerJikanData = useSelector((state) => state.ReducerJikan.Animes);
  const ReducerElements = useSelector((state) => state.ElementsReducer);
  const navigate = useNavigate();
  const [loading] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!ReducerJikanData.length) {
      dispatch(ListAnimesOfSeasonAction());
    }
  }, []);

  useEffect(() => {
    console.log(ReducerElements.searchtextinput);
  }, [ReducerElements.searchtextinput]);

  return (
    <div className="content col">
      <CardItens
        loading={loading}
        Animes={ReducerJikanData}
        ElementsReducer={ReducerElements}
        Navigate={navigate}
      />
    </div>
  );
}
