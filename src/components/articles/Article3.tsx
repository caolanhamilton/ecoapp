import { HL, ArticleImg, ImageDiv, Hero } from "../../shared/styles/styles";
import { Article } from "./Article";
import "./Article.css";
import ArticleHeader from "./ArticleHeader";

export default function Article3(): Article {
  const fontStyle = { color: "black" };

  const name = "Business Design and Emotional Intelligence";
  const category = "Strategy";
  const author = "Dr. Vanina Delobelle";

  return {
    name: name,
    category: category,
    author: author,
    body: (
      <>
        {/* <h1>{name}</h1>
        <h4>{category}</h4>
        <h4>{author}</h4> */}
        <ArticleHeader name={name} category={category} author={author} />
        <p>
          The notion of Emotional Intelligence arose in 1964 but got really
          popularized in 1995. It was only in 1999 that it started to apply to
          business with the development of the EQ test. Ten years later,
          businesses really began to see the value and started embracing the
          concept more broadly which became table stakes for certain
          disciplines.
        </p>
        <p>
          What is Emotional intelligence? How is EQ applying to the business
          design discipline?
        </p>
        <p>
          First, let’s look at what innovation, business design and digital
          transformation really mean. As these terms tend to be used
          interchangeably but they differ slightly.
        </p>
        <br />
        <h2>Innovation</h2>
        <p>
          Innovation is the introduction of new products and services that add
          value to the organization.
        </p>
        <br />
        <h2>Digital Transformation</h2>
        <p>
          Digital transformation is the foundational change in how an
          organization delivers value to its customers by continually
          challenging the status quo, experimenting, and getting comfortable
          with failure.
        </p>
        <br />
        <h2>Business Design</h2>
        <p>
          Business design is a human-centered approach to innovation. It applies
          the principles and practices of design thinking to help organizations
          create new value and new forms of competitive advantage.
        </p>
        <p>[Fig 1 – Business Strategy Key elements]</p>
        <p>
          As described in Culture at the Core – A playbook for digital
          transformation in a changing world, transformation begins with people;
          and anything that refers to people implies emotional intelligence. A
          lack of emotional intelligence in the process has always proven a
          point of failure.
        </p>
        <h4>But what is emotional intelligence?</h4>
        <p>
          Also referred to as ‘’soft skills’’, emotional intelligence is very
          often wrapped within compassion or empathy. However, this is actually
          only one part of the concept. Emotional intelligence was first defined
          by Salovey and Mayer as the “form of social intelligence that involves
          the ability to monitor one’s own and others’ feelings and emotions, to
          discriminate among them, and to use this information to guide one’s
          thinking and action.”
        </p>
        <p>
          Later, Daniel Goleman introduced the Emotional Intelligence Quadrant,
          presenting its full spectrum.
        </p>
        <h4>Daniel Goleman Emotional Intelligence Quadrant</h4>
        <p>[Fig 2 – Daniel Goleman Emotional Intelligence Quadrant]</p>
        <p>
          The study done by Parke, Seo, & Sherf demonstrated how emotional
          intelligence – emotion regulation and emotion facilitation – shapes
          people’s creativity and drives innovation. This is why there’s a heavy
          focus on emotions when starting a business design process. Lots of
          activities aim at driving the participants to express what they think
          and feel; their fears and hope, with an empathy map highlighting the
          pain points of a solution. The ‘’people-first’’ approach is essential
          in business design because the goal is to define solutions that have a
          user impact, quick adoption, and an overall business value. How is
          emotional intelligence applied in business design? Social Awareness –
          Empathy maps: As mentioned, business design uses tools to express
          emotions felt by the users. The scope of emotions is very broad and
          named emotions help convey precisely the level of issue/satisfaction
          as well as the real customer’s expectations. Business designers look
          at experiences, and challenges from multiple perspectives, to
          understand what different players feel (eg.: user, leadership,
          day-to-day operations manager but also someone who tends to have a
          negative take on things, a person who is very optimistic).
        </p>
        <p>[Fig 3 – Map of Emotions]</p>
        <p>
          Self-Awareness – Test and Learn: Testing lies at the heart of
          innovation, the process of which is all about constantly learning and
          unlearning. Business designers need to be open-minded; they are never
          the ideal user of a solution (because of their professional biases).
          So they reach out, they listen to feedback, and they A/B test.
          Innovation requires them to stay humble because sometimes, things that
          might have seemed obvious might come back completely differently once
          introduced to users. Methodologies and frameworks are used but none
          are cookie cutters. Business designers need to constantly adjust to
          the external factors intrinsic to each situation.
        </p>

        <p>
          Self-Management – Mistakes, oversight, and challenges are part of the
          day-to-day: When embarking on a transformation, players need to be
          comfortable with failure, stepbacks, and bumps on the road. It is
          never 100% smooth. Expertise actually mitigates failure and makes the
          process smoother, because senior business designers have experienced a
          lot of situations that can be similar to the one a client is currently
          facing. However, there can always be an unanticipated edge case. They
          need to listen, watch for cues, keep focus, stay patient and be
          resilient. No matter where the solution lands, it will always be
          better than the existing alternatives.
        </p>
        <p>
          Relationship Management – Collaboration: No transformation can be
          successful without collaboration. All departments must embark on the
          process and none should be left behind. The goal can only be reached
          if it is worked out together. The group should rely on analytical
          processes, check their personal interest (or department’s unique
          interests) at the door and come together to create novel
          out-of-the-box solutions. Plenty of emotions are part of the process.
          Some fear failure, while others apprehend disruption because they do
          not know what it means and how to handle it. Some are learning along
          the way; some need time and explanations before they can get on board.
          Skills such as being a good communicator, being empathetic to others,
          and handling conflict effectively are necessary for the success of the
          process. Let’s never forget, that a lot of the process resides in the
          capacity of bringing others along.
        </p>

        <Hero>To Go Further</Hero>
        <p>Here are some links:</p>
        <ul>
          <li>
            Emotional Intelligence: Why It Can Matter More Than IQ – Daniel
            Goleman
          </li>
          <li>
            Myers-Briggs personality test –{" "}
            <a href="https://www.16personalities.com/">
              https://www.16personalities.com/
            </a>
          </li>

          <li>
            Atlas of the Heart – Brené Brown –
            <a href="https://brenebrown.com/book/atlas-of-the-heart/">
              https://brenebrown.com/book/atlas-of-the-heart/
            </a>
          </li>
        </ul>
      </>
    ),
  };
}
