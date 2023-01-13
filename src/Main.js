import React from "react";
import HornedBeast from "./HornedBeast";
import SelectedBeast from "./SelectedBeast";
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
    return (<>
      {/* Search Component Start */}
      <label for="site-search">Search the site:</label>
      <input type="search" id="site-search" name="q" placeholder="Search Horned Beasts..." />
      <button>Search</button>
      {/* Search Component End */}
      <main className={this.props.pulse && "pulse"}>
        {hornedBeastsData.map((beast) => {
          return <HornedBeast key={beast._id} id={beast._id} title={beast.title} description={beast.description} imageUrl={beast.image_url} onClick={this.handleSelectedBeastDataClick} />;
        })}
      </main>
      <SelectedBeast show={this.state.show} selectedBeast={this.state.hornedBeastsData.filter(beast => beast.title === this.state.selectedBeast.name)} likes={this.state.selectedBeast.likes} onClick={this.handleSelectedBeastDataClick} />
    </>
    );
  }
}

export default Main;