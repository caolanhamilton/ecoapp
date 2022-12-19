import { HL, ArticleImg, ImageDiv, Hero } from "../../shared/styles/styles";
import { Article } from "./Article";
import "./Article.css";
import ArticleHeader from "./ArticleHeader";

export default function Article1(): Article {
  const fontStyle = { color: "black" };

  const name =
    "How to Reduce the Environmental Impact of Your Digital Products";
  const category = "Design";
  const author = "Hamish Johnston";

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
