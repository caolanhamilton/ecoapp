import { HL, ArticleImg, ImageDiv, Hero } from "../../shared/styles/styles";
import { Article } from "./Article";
import "./Article.css";
import ArticleHeader from "./ArticleHeader";

export default function Article4(): Article {
  const fontStyle = { color: "black" };

  const name =
    "Better Care is Possible: The Future of Pharmacy and How We Get There";
  const category = "Strategy";
  const author = "Priyanka Gaitonde and Adrianna Coppola";

  return {
    name: name,
    category: category,
    author: author,
    body: (
      <>
        <ArticleHeader name={name} category={category} author={author} />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          impedit quos facilis illo voluptas dolorem explicabo reprehenderit
          inventore doloribus, nisi, quidem autem sit molestiae. Corrupti
          quibusdam quod at consequatur veritatis.
        </p>
      </>
    ),
  };
}
