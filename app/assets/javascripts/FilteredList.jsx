var FilteredList = React.createClass({
  filterList: function(event){
    var updatedList = this.state.names;
    updatedList = updatedList.filter(function(item){
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({results: updatedList});
  },
  getInitialState: function(){
     return {
       names: [
         "Dave",
         "Julie",
         "Jebediah",
         "Alex",
         "Sam",
         "Steve",
         "Jenny",
         "Meredith"
       ],
       results: []
     }
  },
  componentWillMount: function(){
    this.setState()
  },
  render: function(){
    return (
      <div className="filter-list">
        <form>
        <fieldset className="form-group">
        <input type="text" className="form-control form-control-lg" placeholder="Enter name" onChange={this.filterList}/>
        </fieldset>
        </form>
      <List results={this.state.results}/>
      </div>
    );
  }
});

var List = React.createClass({
  render: function(){
    return (
      <ul className="list-group">
      {
        this.props.results.map(function(item) {
          return <li className="list-group-item" data-category={item} key={item}>{item}</li>
        })
       }
      </ul>
    )
  }
});
