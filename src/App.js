import React from "react";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showvideo: false
    };
  }
  handleVideo = () => {
    this.setState({
      showvideo: !this.state.showvideo
    });
  };
  render() {
    return (
      <div>
        <h1>Playlist</h1>
        <comp1>
          {" "}
          this is from comp1
          {this.state.showvideo == false && (
            <div
              onClick={this.handleVideo}
              style={{
                backgroundColor: "grey",
                display: "inline-block",
                color: "white",
                pading: 40,
                margin: 20,
                borderRadius: 10
              }}
            >
              ROSÉ - 'Gone' M/V{" "}
            </div>
          )}
        </comp1>
        {this.state.showvideo == true && (
          <span>
            <iframe
              style={{
                //width= "560",
                //height= "315"
                width: "100%",
                height: "100vh"
              }}
              src="https://www.youtube.com/embed/K9_VFxzCuQ0?autoplay=true"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <button
              onClick={this.handleVideo}
              style={{
                position: "absolute",
                left: 10,
                top: 100
              }}
            >
              back
            </button>
          </span>
        )}
      </div>
    );
  }
}
