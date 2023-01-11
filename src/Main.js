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
      {hornedBeastsData.map((beast, index) => {
              return <HornedBeast key={index} id={beast._id} title={beast.title} description={beast.description} imageUrl={beast.image_url}/>; 
            })}

      {/*
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 col-lg-6">
              <div class="d-flex flex-column flex-lg-row justify-content-lg-center panel">
                <div class="item">Flex item 1</div>
                <div class="item">Flex item 2</div>
                <div class="item">Flex item 3</div>
              </div>
            </div>
          </div>
        </div>
      */}



    </main>
    );
  }

}

export default Main;