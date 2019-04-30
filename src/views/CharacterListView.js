import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import {fetchCharacter}from "../actions";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetchCharacter();
  }

  render() {
    if (this.props.fetching) {
      return (
        <h3>Please Wait...Fetching Data</h3>
      )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
  }
}
export default connect(
 mapStateToProps,
  {fetchCharacter}
)(CharacterListView);
