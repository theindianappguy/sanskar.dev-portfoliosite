import React from "react";
import "./style.css";
import SectionHeader from "../../containers/section-header";
import ProjectTile from "../../widgets/project-tile";
import Header from "../../containers/header";
import Footer from "../../containers/footer";
import Navbar from "../../containers/header/navbar";

export default function HomePage() {
  return (
    <div className="homePage">
      <Navbar />
      <Header />
      <SectionHeader
        title="PAID PRODUCTS"
        desc=" I enjoy building software products. Here are some of the
        projects I've launched so far."
      />
      <ProjectTile
        name="blurweb app"
        imgUrl="https://user-images.githubusercontent.com/55942632/102712466-89b2b100-42e7-11eb-8f95-06d145df96df.jpg"
        colorCode="FEDFE7"
        desc="A chrome extension which helps to blur the elements on the screen. Either you are sharing your screen while doing video call on zoom, google meet... or taking screenshot with sensitive information"
        links={[
          {
            label: "Chrome Store",
            link:
              "https://chrome.google.com/webstore/detail/blurweb/oeingmcibfkfneecplcppjhcekgedmco",
          },
        ]}
        url="https://blurmypage.web.app/"
      />
      <SectionHeader
        title="OPEN SOURCE PROJECTS"
        desc="I share multiple project open source so that it can be helpful to other devs. Here are some of 
        my open source projects."
      />
      <ProjectTile
        name="flutter dev connect"
        imgUrl="https://user-images.githubusercontent.com/55942632/102712398-1e68df00-42e7-11eb-8728-a80ac5049214.jpg"
        colorCode="E1E6FF"
        desc={`A responsive fully functioning chat app built with flutter and firebase, works on web, android & ios all natively.`}
        url="https://flutterdevconnect.web.app"
        links={[
          {
            label: "Linkedin Post",
            link:
              "https://www.linkedin.com/feed/update/urn:li:activity:6661982998658977793/",
          },
          {
            label: "Github Repo",
            link: "https://github.com/theindianappguy/flutterdevconnect",
          },
        ]}
      />
      <ProjectTile
        name="Flutter App UI Designs"
        imgUrl="https://user-images.githubusercontent.com/55942632/102712723-2c1f6400-42e9-11eb-8490-c8a392faf9f5.jpg"
        colorCode="E0FBF9"
        desc="I have shared more than 10+ Flutter App UI Designs on my github repository"
        url="https://github.com/theindianappguy"
      />
      <ProjectTile
        name="Flutter Example Apps"
        imgUrl="https://user-images.githubusercontent.com/55942632/102712651-d0ed7180-42e8-11eb-9954-ba1f542c60df.jpg"
        colorCode="FFF5E5"
        desc="Share more than 8+ Example apps including news, wallpaper, recipe, chat, and more. Teach stack involved Flutter, Firebase"
        url="https://github.com/theindianappguy"
      />
      <SectionHeader
        title="Live Workshops"
        desc="I take live workshops to share what i know, So far have taken more than 5+ workshops."
      />
      <ProjectTile
        name="Building Chat App with Flutter & Firebase"
        imgUrl="https://user-images.githubusercontent.com/55942632/102713051-45c1ab00-42eb-11eb-937d-6a25c2d57d4a.jpg"
        colorCode="FEDFE7"
        desc="DSC Week Of Wonders, aka DSC WOW. A weeklong event consisting of a 4 days of workshops/sessions and a 48 hours hackathon named CodeOffDuty. I took a workshop on Day3 to help student learn building apps for hackathon"
        links={[
          {
            label: "DSC WOW Official Site",
            link: "https://dscwow.tech/",
          },
        ]}
        url="https://youtu.be/M5eFIlXT8Rc?t=6218"
      />
      <SectionHeader
        title="Blogs"
        desc="I share tutorials based on different technology through my blogs sites. So far my blogs  got more than 50,000 views"
      />
      <ProjectTile
        name="FlutterNerd.com"
        imgUrl="https://user-images.githubusercontent.com/55942632/102714195-039c6780-42f3-11eb-89c1-3e261a7c4eb7.jpg"
        colorCode="E1E6FF"
        desc="Flutter blog to Learn and master flutter app development "
        links={[
          {
            label: "Learn Flutter Live",
            link: "http://learnflutterlive.com/",
          },
          {
            label: "Github Repo",
            link: "https://github.com/FlutterNerd",
          },
        ]}
        url="https://flutternerd.com"
      />
      <Footer />
    </div>
  );
}
