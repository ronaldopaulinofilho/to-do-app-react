import React, { Component } from "react";
import NoteList from "./components/NoteList";
import Form from "./components/Form";
import CategoryList from "./components/CategoryList";
import "./assets/App.css";
import "./assets/index.css";
import Categories from "./data/Categories";
import ArrayOfNotes from "./data/Notes";
class App extends Component {
  constructor() {
    super();
    this.categories = new Categories();
    this.notes = new ArrayOfNotes();

  }

  render() {
    return (
      <section className="content">
        <Form
          categories={this.categories}
          createNote={this.notes.addNote.bind(this.notes)}
        />
        <main className="content-principle">
          <CategoryList
            addCategory={this.categories.addCategory.bind(this.categories)}
            categories={this.categories}
          />
          <NoteList
            deleteNote={this.notes.deleteNote.bind(this.notes)}
            notes={this.notes}
          />
        </main>
      </section>
    );
  }
}
export default App;
