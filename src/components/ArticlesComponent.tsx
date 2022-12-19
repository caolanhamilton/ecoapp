import {
  ArticleElement,
  ButtonComponent,
  HomeTxt,
} from "../shared/styles/styles";
import { iconImg } from "../assets/assets";
import { useState, useContext } from "react";
import { UserContext } from "../pages/HomePage";
// import data from "../data/articles.json";
import Article1 from "./articles/Article1";
import Article2 from "./articles/Article2";
import { Article } from "./articles/Article";
import Article3 from "./articles/Article3";
import Article4 from "./articles/Article3";

import "./ArticlesComponent.css";
import Article5 from "./articles/Article5";

// let JSON = data;
interface Types {
  type: string;
  description: string;
  person: string;
}

export default function ArticlesComponent() {
  const [filteredList, setFilteredList] = useState<Article[]>([]);
  // const [showFiltered, setShowFiltered] = useState(false);
  const [selectedType, setSelectedType] = useState<string>("");

  const [articles, setArticles] = useState<Article[]>([
    Article1(),
    Article2(),
    Article3(),
    Article4(),
    Article5(),
    Article1(),
    Article2(),
    Article3(),
    Article4(),
    Article5(),
  ]);

  const mycontext = useContext(UserContext);

  const onClickFilter = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    let filterType: string = event.currentTarget.textContent || "";
    console.log("event on filter:", filterType);
    console.log("event: ", event);
    console.log("current target: ", event.currentTarget);

    if (filterType) {
      if (filterType === selectedType) {
        setSelectedType("");
        setFilteredList([]);
      } else {
        setSelectedType(filterType);
        if (filterType != "All") {
          const filteredResult: Article[] = articles.filter(
            (a) => a.category == filterType
          );
          setFilteredList(filteredResult);
        } else {
          setFilteredList([]);
        }
      }
    }
  };

  const onShowArticle = (element: any, index: number) => {
    console.log("article clicked");
    mycontext.setArticleShow(true);
    mycontext.setCurrentArticle(element);
    console.log("element: ", element);
  };

  return (
    <div>
      <div className="filterContainer">
        <ButtonComponent
          selected={selectedType == "Design"}
          onClick={(e) => onClickFilter(e)}
        >
          Design
        </ButtonComponent>
        <ButtonComponent
          selected={selectedType == "Innovation"}
          onClick={(e) => onClickFilter(e)}
        >
          Innovation
        </ButtonComponent>
        <ButtonComponent
          selected={selectedType == "Strategy"}
          onClick={(e) => onClickFilter(e)}
        >
          Strategy
        </ButtonComponent>
        <ButtonComponent
          selected={selectedType == "All"}
          onClick={(e) => onClickFilter(e)}
        >
          All
        </ButtonComponent>
      </div>

      {filteredList.length > 0 ? (
        <div className="articlesList">
          {filteredList.map((element, index) => (
            <div className="oneArticle">
              <div className="articleType">
                <ArticleElement>
                  <img className="marginRight" src={iconImg} loading="eager"></img>
                  <span className="actualType">{selectedType}</span>
                </ArticleElement>
                <ArticleElement onClick={() => onShowArticle(element, index)}>
                  Read full article &#x27F6;
                </ArticleElement>
              </div>
              <HomeTxt className="marginTopPX">{element.name}</HomeTxt>
              <ArticleElement>{element.author}</ArticleElement>
              <div className="line1" />
            </div>
          ))}
        </div>
      ) : (
        <div className="articlesList">
          {articles.map((element, index) => (
            <div className="oneArticle">
              <div className="articleType">
                <ArticleElement>
                  <img className="marginRight" src={iconImg} loading="eager"></img>
                  <span className="actualType">{element.category}</span>
                </ArticleElement>
                <ArticleElement onClick={() => onShowArticle(element, index)}>
                  Read full article &#x27F6;
                </ArticleElement>
              </div>
              <HomeTxt className="marginTopPX">{element.name}</HomeTxt>
              <ArticleElement>{element.author}</ArticleElement>
              <div className="line1"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
