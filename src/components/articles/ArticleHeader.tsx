import { HL } from "../../shared/styles/styles";
import "./Article.css";

export default function ArticleHeader(props: any) {
  return (
    <>
      <h1>{props.name}</h1>
      <HL />
      <div className="articleHeader">
        <h4>{props.category}</h4>
        <h4>{props.author}</h4>
      </div>
    </>
  );
}
