import {
  ArticleDiv,
  Title,
  EndTitle,
  HL,
  Heading1,
  Heading2,
  Heading3,
  Paragraph,
  ArticleImg,
  ImageDiv,
} from "../shared/styles/styles";
import { UserContext } from "../pages/HomePage";
import { useContext, useState } from "react";
import Article1 from "./articles/Article1";
import Article2 from "./articles/Article2";
import { Article } from "./articles/Article";

interface Section {
  subheading1?: string;
  subheading2?: string;
  subheading3?: string;
  paragraphs?: Paragraph[];
  endTitle?: string;
  image?: Image;
  list?: ListItem[];
}

interface Paragraph {
  p: string;
}
interface ListItem {
  item: string;
}

interface Image {
  src: string;
  width: string;
  height: string;
}

export default function ArticleDisplay() {
  // const imagePath = "../assets/images/";

  const mycontext = useContext(UserContext);
  const fontStyle = { color: "black" };

  const handleBack = () => {
    mycontext.setArticleShow(false);
  };

  return (
    <ArticleDiv className="article" show={mycontext.articleShow}>
      <label className="return" onClick={handleBack}>
        {" "}
        &#8592; Back{" "}
      </label>
      {mycontext.currentArticle && mycontext.currentArticle.body}
    </ArticleDiv>
  );
}
