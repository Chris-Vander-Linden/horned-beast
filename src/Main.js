import React from "react";
import HornedBeast from "./HornedBeast";
import SelectedBeast from "./SelectedBeast";
import { Fire } from 'react-bootstrap-icons';
import clsx from 'clsx';
import './Main.css';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: { name: null, likes: null },
      show: false
    }
  }

  // function to be passed to both SelectedBeast and HornedBeast
  handleSelectedBeastDataClick = (title, likes) => {
    this.setState({
      show: !this.state.show,
      selectedBeast: { name: title, likes: likes }
    });
  }

  render() {
    const { hornedBeastsData } = this.props;

    const searchResults = hornedBeastsData.filter(beast => beast.title.toUpperCase().includes(this.props.beastFilter.toUpperCase())).filter(beast => this.props.horns.length !== 0 ? beast.horns >= this.props.horns : true).sort((a, b) => {
      return this.props.sortNumbersDown === '' ? 0 : this.props.sortNumbersDown ? b.horns - a.horns : a.horns - b.horns;
    }).sort((a, b) => {
      const beastA = a.title.toUpperCase();
      const beastB = b.title.toUpperCase();
      if (this.props.sortAlphaDown === '') {
        return 0;
      }
      if (beastA > beastB && this.props.sortAlphaDown) {
        return -1;
      }
      if (beastA < beastB && this.props.sortAlphaDown) {
        return 1;
      }
      if (beastA < beastB && !this.props.sortAlphaDown) {
        return -1;
      }
      if (beastA > beastB && !this.props.sortAlphaDown) {
        return 1;
      }
      return 0;
    });


    // Add sort








    return (<>
      <main className={clsx(this.props.pulse ? "pulse" : "death", this.props.menu ? "hideMenu" : "showMenu")} >
        {/* filter then map formatted beast data */}
        {searchResults.map((beast) => {
          return <HornedBeast key={beast._id} id={beast._id} title={beast.title} description={beast.description} imageUrl={beast.image_url} onClick={this.handleSelectedBeastDataClick} />;
        })}

        {/* Render message for no results */}
        {searchResults.length === 0 && <div id="noResults" className="alert alert-danger" role="alert" ><Fire width="32" height="32" />There are no beasts called {this.props.beastFilter}!!!</div>}

      </main>
      <SelectedBeast show={this.state.show} selectedBeast={hornedBeastsData.filter(beast => beast.title === this.state.selectedBeast.name)} likes={this.state.selectedBeast.likes} onClick={this.handleSelectedBeastDataClick} />
    </>
    );
  }
}

export default Main;