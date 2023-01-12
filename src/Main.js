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

  // function to be passed to SelectedBeast and HornedBeast.
  handleShowClick = () => {
    console.log(this.state.show);
    let value = !this.state.show
    this.setState({ show: value });
  }

  render() {
    const { hornedBeastsData } = this.state;
    console.log(hornedBeastsData);

    return (<>
      <main>
        {hornedBeastsData.map((beast, index) => {
          return <HornedBeast key={index} id={beast._id} title={beast.title} description={beast.description} imageUrl={beast.image_url} onClick={this.handleShowClick} />;
        })}
      </main>
      <SelectedBeast show={this.state.show} onClick={this.handleShowClick} />
    </>
    );
  }
}

export default Main;