import React from "react";
import Card from "./card";
import CarouselButton from "./carouselButton";
import Testimonials from "./testimonials";
export default function Home() {
  return (
    <div className="container-fluid p-5">
      <div className="container justify-content-center">
        <div id="aboutUs">
          <h1 className="text-start">About Yarub</h1>
          <p className="fs-4 about">
            Yarub, "يعرب" is an Arabic word meaning to be an Arab. Yarub is an
            open source natural language processing, NLP, toolkit. It was
            initiated by Omdena to build tools to utilize artificial
            intelligence to process the Arabic language. Yarub was built through
            eight weeks of diligent efforts by a team of several developers of
            diverse backgrounds and regions namely Egypt, Iraq, India, Morocco,
            and Pakistan to be the first project that comprehensively applies AI
            technologies to the Arabic language. The project has three
            deliverables; firstly, a webapp to allow end users to use different
            APIs to process the Arabic language. Secondly, a python module to
            allow developers to download the datasets used to develop and train
            the artificial intelligence models of this project. Thirdly, a
            python module to allow NLP developers to utilize the project models
            to fit their use cases
          </p>
        </div>
        <br />
        <br />
        <br />
        <hr className="line"></hr>
        <div className="task-carousel col mx-auto px-auto">
          <div
            id="carouselExampleIndicators"
            className="carousel slide col-12"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              {/* <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button> */}
              <CarouselButton index={"1"} slideName={"Slide 2"} />
              <CarouselButton index={"2"} slideName={"Slide 3"} />
              <CarouselButton index={"3"} slideName={"Slide 4"} />
              <CarouselButton index={"4"} slideName={"Slide 5"} />
              <CarouselButton index={"5"} slideName={"Slide 6"} />
              <CarouselButton index={"6"} slideName={"Slide 7"} />
              <CarouselButton index={"7"} slideName={"Slide 8"} />
            </div>

            <h1 className="text-start ">Tasks</h1>
            <div className="carousel-inner">
              <div className="carousel-item active">
                {/* ================================= */}
                <Card
                  title={"Sentiment analysis"}
                  imagePath={"images/sentiment.png"}
                  description={"Detection of emotion polarity in a given text."}
                  path={"/sentiment"}
                />
                {/* =================================== */}
              </div>
              <div className="carousel-item">
                <Card
                  title={"Dialect Identification"}
                  imagePath={"images/flags2.png"}
                  description={
                    "Detection of the dialect and region of any given text"
                  }
                  path={"/dialect"}
                />
                {/* =============================================== */}
              </div>
              <div className="carousel-item">
                {/* =============================== */}
                <Card
                  imagePath={"images/gender4.png"}
                  path="/gender"
                  title="Gender Identification"
                  description="Gender identification of the Arabic words and texts"
                />
                {/* =============================== */}
              </div>

              {/* ========================================================== */}
              <div className="carousel-item">
                {/* =============================== */}
                <Card
                  imagePath={"images/wordCloud.png"}
                  path="/lemmatization"
                  title="Lemmatization"
                  description="Text lemmatization"
                />
                {/* =============================== */}
              </div>

              <div className="carousel-item">
                {/* =============================== */}
                <Card
                  imagePath={"images/tokenization.png"}
                  path="/tokenization"
                  title="Tokenization"
                  description="Text Tokenization"
                />
                {/* =============================== */}
              </div>
              <div className="carousel-item">
                {/* =============================== */}
                <Card
                  imagePath={"images/ner.png"}
                  path="/ner"
                  title="Named Entity Recognition"
                  description="Detection of entities in any given text"
                />
                {/* =============================== */}
              </div>
              <div className="carousel-item">
                {/* =============================== */}
                <Card
                  imagePath={"images/pos.jpg"}
                  path="/pos"
                  title="Parts of Speech Tagging"
                  description="Detection of parts of speech in any given text"
                />
                {/* =============================== */}
              </div>
              <div className="carousel-item">
                {/* =============================== */}
                <Card
                  imagePath={"images/similar.jpeg"}
                  path="/similar"
                  title="Word Similarity"
                  description="Generating words similar to the words in a given text"
                />
                {/* =============================== */}
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <hr className="line"></hr>
        <div className="mx-auto my-3">
          <h1 className="text-start">Testimonials</h1>

          <div className="test" id='testimonials'>
            <div className="row justify-content-center pt-5">
              <Testimonials
                imagePath={"images/avatar.jpg"}
                title={
                  "Some quick example text to build on the card title and make up the bulk of the card's content."
                }
                author={"Mark"}
              /><Testimonials
                imagePath={"images/avatar.jpg"}
                title={
                  "Some quick example text to build on the card title and make up the bulk of the card's content."
                }
                author={"Mark"}
              /><Testimonials
                imagePath={"images/avatar.jpg"}
                title={
                  "Some quick example text to build on the card title and make up the bulk of the card's content."
                }
                author={"Mark"}
              /><Testimonials
                imagePath={"images/avatar.jpg"}
                title={
                  "Some quick example text to build on the card title and make up the bulk of the card's content."
                }
                author={"Mark"}
              /><Testimonials
                imagePath={"images/avatar.jpg"}
                title={
                  "Some quick example text to build on the card title and make up the bulk of the card's content."
                }
                author={"Mark"}
              /><Testimonials
                imagePath={"images/avatar.jpg"}
                title={
                  "Some quick example text to build on the card title and make up the bulk of the card's content."
                }
                author={"Mark"}
              />
            </div>
          </div>
        </div>
        <hr className="line"></hr>
        <h1 className="text-start  my-3">Contributors</h1>
        <div className="mx-auto col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12 pt-3" id='contributors'>
                <img className="avatar m-2" data-bs-toggle="tooltip" title="Contributor" data-bs-placement="top" src="images/avatar.jpg" alt='avatar'></img>
                <img className="avatar m-2" data-bs-toggle="tooltip" title="Contributor" data-bs-placement="top" src="images/avatar.jpg" alt='avatar'></img>
                <img className="avatar m-2" data-bs-toggle="tooltip" title="Contributor" data-bs-placement="top" src="images/avatar.jpg" alt='avatar'></img>
                <img className="avatar m-2" data-bs-toggle="tooltip" title="Contributor" data-bs-placement="top" src="images/avatar.jpg" alt='avatar'></img>
                <img className="avatar m-2" data-bs-toggle="tooltip" title="Contributor" data-bs-placement="top" src="images/avatar.jpg" alt='avatar'></img>
                <img className="avatar m-2" data-bs-toggle="tooltip" title="Contributor" data-bs-placement="top" src="images/avatar.jpg" alt='avatar'></img>
                <img className="avatar m-2" data-bs-toggle="tooltip" title="Contributor" data-bs-placement="top" src="images/avatar.jpg" alt='avatar'></img>
                <img className="avatar m-2" data-bs-toggle="tooltip" title="Contributor" data-bs-placement="top" src="images/avatar.jpg" alt='avatar'></img>
                <img className="avatar m-2" data-bs-toggle="tooltip" title="Contributor" data-bs-placement="top" src="images/avatar.jpg" alt='avatar'></img>
                <img className="avatar m-2" data-bs-toggle="tooltip" title="Contributor" data-bs-placement="top" src="images/avatar.jpg" alt='avatar'></img>
                
                
        </div>
      </div>
    </div>
  );
}