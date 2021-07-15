import React from "react";
import Card from "./card";
import CarouselButton from "./carouselButton";
import Testimonials from "./testimonials";
export default function Home() {
  const contributors=["https://github.com/MohamadElnomrossie",
  'https://github.com/eslamasaleh',
  "https://github.com/suriya-it19",
  "https://github.com/Mohamed-Harby",
  "https://github.com/omarnabil1998",
  "https://github.com/kush1920",
  "https://github.com/Mu-Magdy",
  "https://github.com/mohamedeng",
  "https://github.com/shaymaa-abdelaziz",
  "https://github.com/messi313"

]
  return (
    <div className="container-fluid p-5">
      <div className="container justify-content-center">
        <div id="aboutUs">
          <h1 className="text-start">About Yarub</h1>
          <p className="fs-4  about" width="80">
            Yarub, "يعرب" is an Arabic word meaning to be fluent in Arabic. Yarub is an
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
              <CarouselButton index={"0"} slideName={"Slide 1"} className="active" aria-current="true"/>
              <CarouselButton index={"1"} slideName={"Slide 2"} className="" aria-current="false"/>
              <CarouselButton index={"2"} slideName={"Slide 3"} className="" aria-current="false"/>
              <CarouselButton index={"3"} slideName={"Slide 4"} className="" aria-current="false"/>
              <CarouselButton index={"4"} slideName={"Slide 5"} className="" aria-current="false"/>
              <CarouselButton index={"5"} slideName={"Slide 6"} className="" aria-current="false"/>
              <CarouselButton index={"6"} slideName={"Slide 7"} className="" aria-current="false"/>
              <CarouselButton index={"7"} slideName={"Slide 8"} className="" aria-current="false"/>
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
                {/* =============================== */}
              {/* <div className="carousel-item">
                <Card
                  imagePath={"images/gender4.png"}
                  path="/gender"
                  title="Gender Identification"
                  description="Gender identification of the Arabic words and texts"
                />
              </div> */}
                {/* =============================== */}

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
                <Card
                  title={"Morphological Analysis"}
                  imagePath={"images/morph.png"}
                  description={
                    "Applies morphological analysis to a given text"
                  }
                  path={"/morph"}
                />
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
              />
            </div>
          </div>
        </div>
        <hr className="line"></hr>
        <h1 className="text-start  my-3">Contributors</h1>
        <div className="mx-auto col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12 pt-3" id='contributors'>
               {contributors.map((contrib)=>{
 
                 return(
                  <a href={contrib}><img className="avatar m-2" data-bs-toggle="tooltip" title={contrib.split("/")[3]} data-bs-placement="top" src={contrib+".png"} alt='avatar'></img></a>
                 )
               })}
                
               
                
                
        </div>
      </div>
    </div>
  );
}
