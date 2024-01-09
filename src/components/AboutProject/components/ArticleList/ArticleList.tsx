import { ReactElement } from "react";
import { Article } from "./components";
import {
  lpInterface,
  lpResponsive,
  lpDevelopmentTeam
} from "../../../../assets/images";

export default function ArticleList(): ReactElement {
  return (
    <ul>
      <li>
        <Article
          text={`TSBank offers a seamless platform, allowing you to effortlessly navigate through your accounts,
          make <em> secure transactions</em>, and gain valuable insights into your financial well-being.`}
          image={lpInterface}
          imageAlt={"TSBank Interface"}
          rowDirection={"lg:flex-row-reverse"}
        ></Article>
      </li>
      <li>
        <Article
          text={`Whether you're a seasoned investor or just starting your financial journey, TSBank <em>adapts
          to your needs</em>, providing a user-friendly interface and advanced features.`}
          image={lpResponsive}
          imageAlt={"Mobile App"}
          rowDirection={"lg:flex-row"}
        ></Article>
      </li>
      <li>
        <Article
          text={`Experience banking <em>like never before</em> with TSBank, where innovation and simplicity
          converge to create a financial experience adapted to you.`}
          image={lpDevelopmentTeam}
          imageAlt={"Development Team"}
          rowDirection={"lg:flex-row-reverse"}
        ></Article>
      </li>
    </ul>
  );
}
