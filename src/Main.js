import React from "react";
import HornedBeast from "./HornedBeast";
import hornedBeastsData from "./data.json";
import './Main.css';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hornedBeastsData: hornedBeastsData
    }
  }

  render() {
    const { hornedBeastsData } = this.state;
    console.log(hornedBeastsData);

    return (
      <main>
        {hornedBeastsData.map((beast, index) => {
          return <HornedBeast key={index} id={beast._id} title={beast.title} description={beast.description} imageUrl={beast.image_url} />;
        })}
      </main>
    );
  }
}

export default Main;