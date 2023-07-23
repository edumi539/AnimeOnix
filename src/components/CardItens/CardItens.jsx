import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardText,
  CardFooter,
} from "reactstrap";

const CardItens = ({ loading, ElementsReducer, Navigate, Animes }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  function truncatetext(str, type) {
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
      {Animes.filter((items) =>
        items.title.includes(ElementsReducer.searchtextinput)
      ).map((filteredPerson) => {
        const {
          mal_id,
          title,
          genres,
          episodes,
          score,
          images: {
            jpg: { image_url },
          },
        } = filteredPerson;

        return (
          <Card
            key={mal_id}
            style={{ width: "25rem", marginTop: "40px", marginBottom: "40px" }}
            className="text-center"
          >
            <CardImg
              style={{
                width: "100%",
                height: "350px", // Set a fixed height for the image container
                objectFit: "cover", // Ensure the image fills the container while maintaining its aspect ratio
                paddingTop: "10px",
              }}
              top
              src={image_url}
              alt={image_url}
            />
            <CardBody>
              <CardTitle>
                <p className="h2">{truncatetext(title)}</p>
              </CardTitle>
              <CardText></CardText>
            </CardBody>
            <CardFooter style={{ marginBottom: "10px" }}>
              <p className="h4 text-left">Gêneros: {genres[0].name}</p>
              <p className="h4 text-left">Nº Episódios: {episodes} </p>
              <p className="h3 text-right">Nota: {colorbyrate(score)}</p>
              <Button
                onClick={() => Navigate(`/${mal_id}`)}
                className="animation-on-hover"
                color="primary"
              >
                {" "}
                + Detalhes
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default CardItens;
