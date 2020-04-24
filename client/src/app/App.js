import React, { useEffect } from "react";
import "./App.scss";
import logo from "../assets/img/logo.svg";
import avatar from "../assets/img/avatar.svg";
import icon_search from "../assets/img/icon_search.svg";
import icon_extend from "../assets/img/icon_extend.svg";
import icon_plus from "../assets/img/icon_plus.svg";
import icon_card from "../assets/img/icon_card.svg";
import icon_collection from "../assets/img/icon_collection.svg";
import icon_revision from "../assets/img/icon_revision.svg";
import icon_storage from "../assets/img/icon_storage.svg";
import icon_list from "../assets/img/icon_list.svg";
import icon_edit from "../assets/img/icon_edit.svg";
import icon_idiom from "../assets/img/icon_idiom.svg";
import img_cat from "../assets/img/cat.jpg";

const App = () => {
  useEffect(() => {
    // var textarea = document.querySelector("textarea");
    // textarea.addEventListener("keydown", autosize);
    // function autosize() {
    //   var el = this;
    //   el.style.cssText = "height:" + el.scrollHeight + "px";
    // }
  });

  return (
    <div className="App">
      <nav className="navbar">
        <div className="wrapper --width">
          <img src={logo} alt="logo" id="logo" />
          <div className="search-box">
            <input type="text" placeholder="Search your flashcards" />
            <a href="#">
              <span class="material-icons" id="icon_search">
                search
              </span>
            </a>
          </div>
        </div>
        <div className="wrapper">
          <img src={icon_extend} id="icon_extend" />
          <img src={avatar} id="avatar" alt="avatar" />
        </div>
      </nav>
      <aside className="sidebar">
        <div className="sidebar__btn-create">
          <img class="icon-plus" src={icon_plus} alt="" />
          <span>New</span>
        </div>
        <div className="sidebar__options">
          <a className="btn active">
            <img src={icon_card} alt="" className="icon icon_card" />
            My flashcards
          </a>
          <a className="btn">
            <img
              src={icon_collection}
              alt=""
              className="icon icon_collection"
            />
            My collections
          </a>
          <a className="btn">
            <img src={icon_revision} alt="" className="icon icon_revision" />
            Revision
          </a>
          <a className=" btn-storage">
            <div className="wrapper">
              <img src={icon_storage} alt="" className="icon  icon_storage" />
              <p>Storage</p>
            </div>

            <div className="status-bar">
              <div className="percent"></div>
            </div>
            <p className="number-percent-storage">123 bytes of 3 GB used</p>
          </a>
        </div>
      </aside>
      <figure className="container-cards">
        <header className="toolbar">
          <select name="" class="time-show-options">
            <option value="Today" selected>
              Today
            </option>
            <option value="Week">Week</option>
          </select>
          <img src={icon_list} className="btn mode-card"></img>
        </header>
        <main className="wrapper-cards">
          <div className="card backside ">
            <img src={icon_edit} alt="" className="icon_edit" />
            <span class="material-icons icon_delete">delete_forever</span>
            <section className="content">
              <section className="word">
                <header class="title">CON MÈO</header>
                <a href="" className="hastag">
                  Động vật
                </a>
                <p className="example">
                  <span>Ex</span> : A cat is sleeping
                </p>
                <p className="idiom">
                  <div className="idiom__title">
                    <img src={icon_idiom} alt="" className="icon_idiom" /> :
                    <p> Has a cat got your tongue ?</p>
                  </div>
                  <div className="idiom__meaning">
                    <span>Figurative meaning</span> : Said to someone when you
                    are annoyed that they won’t speak.
                  </div>
                  <div className="idiom__example">
                    <span>Example</span> : “Why won’t you say anything? Has a
                    cat got your tongue?”
                  </div>
                </p>
              </section>
            </section>
            <span class="material-icons icon_volumn">volume_up</span>
          </div>
        </main>
        <div className="pagination-card">
          <span class="material-icons icon  --color-init">arrow_back</span>
          <p className="number-card">1/20</p>
          <span class="material-icons icon ">arrow_forward</span>
        </div>
      </figure>
    </div>
  );
};

export default App;
