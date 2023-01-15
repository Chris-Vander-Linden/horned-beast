import React from "react";
import HornedBeast from "./HornedBeast";
import SelectedBeast from "./SelectedBeast";
import { Fire } from 'react-bootstrap-icons';
import hornedBeastsData from "./data.json";
import './Main.css';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hornedBeastsData: hornedBeastsData,
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
    const { hornedBeastsData } = this.state;
    const searchResults = hornedBeastsData.filter(beast => {
      return this.props.beastFilter.length === 0 ? true : beast.title.toUpperCase().includes(this.props.beastFilter.toUpperCase());
    });

    return (<>
      <main className={this.props.pulse ? "pulse" : "death"}>
        {/* filter then map formatted beast data */}
        {searchResults.map((beast) => {
          return <HornedBeast key={beast._id} id={beast._id} title={beast.title} description={beast.description} imageUrl={beast.image_url} onClick={this.handleSelectedBeastDataClick} />;
        })}

        {/* Render message for no results */}
        {searchResults.length === 0 && <div id="noResults" className="alert alert-danger" role="alert" ><Fire width="32" height="32" />There are no beasts called {this.props.beastFilter}!!!</div>}

      </main>
      <SelectedBeast show={this.state.show} selectedBeast={this.state.hornedBeastsData.filter(beast => beast.title === this.state.selectedBeast.name)} likes={this.state.selectedBeast.likes} onClick={this.handleSelectedBeastDataClick} />
    </>
    );
  }
}

export default Main;