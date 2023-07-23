import { render } from "@testing-library/react";
import CardItens from "./CardItens";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("CardItens", () => {
  it('deve renderizar "Loading..." quando a propriedade loading for true', () => {
    const wrapper = shallow(<CardItens loading={true} />);
    expect(wrapper.contains(<h2>Loading...</h2>)).toBe(true);
  });

  it("deve renderizar os cards quando a propriedade loading for false", () => {
    const Animes = [
      // Adicione dados de exemplo de animes aqui para testar a renderização dos cards.
      // Você pode incluir vários objetos de anime neste array.
      // Exemplo:
      // { mal_id: 1, title: 'Anime 1', genres: [...], episodes: 12, score: 8.5, images: { jpg: { image_url: '...' } } },
      // { mal_id: 2, title: 'Anime 2', genres: [...], episodes: 24, score: 7.2, images: { jpg: { image_url: '...' } } },
    ];

    // Simulando ElementsReducer e Navigate, já que eles não são diretamente usados neste componente.
    const ElementsReducer = { searchtextinput: "text" };
    const Navigate = () => {};

    const wrapper = shallow(
      <CardItens
        loading={false}
        Animes={Animes}
        ElementsReducer={ElementsReducer}
        Navigate={Navigate}
      />
    );

    // Verificar se o número correto de cards é renderizado com base no número de animes no array.
    expect(wrapper.find("Card")).toHaveLength(Animes.length);

    // Teste outros aspectos da renderização e propriedades dos cards, se necessário.
    // Por exemplo, você pode verificar se o título do card é truncado corretamente e se outras propriedades são renderizadas conforme o esperado.
  });

  // Adicione mais testes para as funções auxiliares (truncatetext e colorbyrate) se necessário.
});
