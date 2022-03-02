import React from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardText,
  CardFooter,
} from "reactstrap";

const CardItens = ({ loading, Animes, ElementsReducer }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  console.log(Animes);

  function truncatetext(str) {
    return str.length > 10 ? str.substring(0, 18) + "..." : str;
  }

  function colorbyrate(score) {
    return score >= 6.0 ? (
      <p style={{ color: "green" }}>{score}</p>
    ) : (
      <p style={{ color: "red" }}>{score}</p>
    );
  }

  return (
    <div className="content-cards row">
      {
        Animes.filter((items) =>
          items.title.includes(ElementsReducer.searchtextinput)
        ).map((filteredPerson) => {
          return (
          <Card
            key={filteredPerson.mal_id}
            style={{ width: "25rem", marginTop: "40px", marginBottom: "40px" }}
            className="text-center"
          >
            <CardImg top src={filteredPerson.image_url} alt={filteredPerson.image_url} />
            <CardBody>
              <CardTitle>
                <p className="h2">{truncatetext(filteredPerson.title)}</p>
              </CardTitle>
              <CardText></CardText>
            </CardBody>
            <CardFooter>
              <p className="h4 text-left">
                Gêneros:
                {filteredPerson.genres.map((subItens) => {
                  return ` ${subItens.name}`;
                })}
              </p>
              <p className="h4 text-left">Nº Episódios: {filteredPerson.episodes} </p>
              <p className="h3 text-right">Nota: {colorbyrate(filteredPerson.score)}</p>
              <Button
                onClick={() => (window.location.href = filteredPerson.url)}
                className="animation-on-hover"
                color="primary"
              >
                {" "}
                + Detalhes
              </Button>
            </CardFooter>
          </Card>
        );
        })
      }
    </div>
  );
};

export default CardItens;
