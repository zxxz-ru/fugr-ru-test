import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
  render() {
    return (
    <div><h1>Hello from first Component</h1>
    <hr/>
    <p>Some other very important text.</p>
      </div>
    );
  }
}
export default Main;
ReactDOM.render(<Main/>, document.getElementById('app'));
