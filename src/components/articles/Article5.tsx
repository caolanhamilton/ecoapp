import { HL, ArticleImg, ImageDiv, Hero } from "../../shared/styles/styles";
import { Article } from "./Article";
import "./Article.css";
import ArticleHeader from "./ArticleHeader";

export default function Article5(): Article {
  const fontStyle = { color: "black" };

  const name = "3 Major Trends Driving the Future of Travel";
  const category = "Innovation";
  const author = "Dr. Vanina Delobelle";

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
