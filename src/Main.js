import React from "react";
import HornedBeast from "./HornedBeast";
import hornedBeastsData from "./data.json";
class Main extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      hornedBeastsData: hornedBeastsData
    }
  }

  render() {
    const {hornedBeastsData} = this.state;
    console.log(hornedBeastsData);

    return (
    <main>
      {hornedBeastsData.map(beast => {
              return <HornedBeast id={beast._id} title={beast.title} description={beast.description} imageUrl={beast.image_url}/>; 
            })}
    </main>);
  }

}

export default Main;