const Prophecy = (props) => <p>{props.prophecy}</p>;

class App extends React.Component {
  state = {
    prophecies: ['wróżba I', 'wróżba II', 'wróżba III'],
    drawnProphecy: '',
    newProphecy: '',
  };

  handleProphecy = () => {
    const { prophecies } = this.state;

    const min = 0;
    const max = prophecies.length - 1;
    const random = (min + Math.random() * (max - min)).toFixed(0);

    const drawnProphecy = prophecies[random];

    this.setState({
      drawnProphecy: drawnProphecy,
    });

    console.log(drawnProphecy);
  };

  handleNewProphecy = (e) => {
    this.setState({
      newProphecy: e.target.value,
    });
  };

  handleAddNewProphecy = () => {
    debugger;

    const { prophecies, newProphecy } = this.state;

    if (newProphecy === '') return alert('Wpisz coś :)');

    const newPropheciesArray = prophecies.concat(newProphecy);

    this.setState({
      prophecies: newPropheciesArray,
    });

    alert(
      `Właśnie dodałeś nową wróżbę ${newProphecy}! Twoje obecne wróżby to ${newPropheciesArray}.`
    );
  };

  render() {
    const { drawnProphecy } = this.state;

    return (
      <>
        <button onClick={this.handleProphecy}>Zobacz wróżbę</button>
        <input onChange={this.handleNewProphecy}></input>
        <button onClick={this.handleAddNewProphecy}>Dodaj wróżbę</button>
        <Prophecy prophecy={drawnProphecy} />
      </>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
