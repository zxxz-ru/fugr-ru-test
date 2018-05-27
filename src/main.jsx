import React from 'react';
import ReactDOM from 'react-dom';
import Fetcher from './util/fetcher';

class Main extends React.Component {
  constructor(props) {
    super(props);
          this.line = '';
  }

print(arg) {
  this.line += arg;
  this.line += '<br/>';
document.getElementById('test').innerHTML = this.line;
}

componentWillMount() {
  Fetcher.getData();
}
  render() {
    return (
      <div>
      </div>
    );
  }
}
ReactDOM.render(<Main/>, document.getElementById('app'));
export default Main;
