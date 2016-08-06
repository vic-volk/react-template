var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var Button = ReactBootstrap.Button;
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;
var Row = ReactBootstrap.Row;
var Grid = ReactBootstrap.Grid;

function handleSelect(selectedKey) {
  alert('selected ' + selectedKey);
}

var ButtonPanel = React.createClass({
  render: function() {
    return (
      <ButtonToolbar>
    	{/* Standard button */}
    	<Button>Default</Button>

    	{/* Provides extra visual weight and identifies the primary action in a set of buttons */}
    	<Button bsStyle="primary">Primary</Button>

    	{/* Indicates a successful or positive action */}
    	<Button bsStyle="success">Success</Button>

    	{/* Contextual button for informational alert messages */}
    	<Button bsStyle="info">Info</Button>

    	{/* Indicates caution should be taken with this action */}
    	<Button bsStyle="warning">Warning</Button>

    	{/* Indicates a dangerous or potentially negative action */}
    	<Button bsStyle="danger">Danger</Button>

    	{/* Deemphasize a button by making it look like a link while maintaining button behavior */}
    	<Button bsStyle="link">Link</Button>
      </ButtonToolbar>
    );
  }
});

const buttonsInstance = (
  <Grid>
  <Row>
  <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>
    <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
    <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
    <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
  </Nav>
  </Row>
  <Row>
    <ButtonPanel/>
  </Row>
  </Grid>
);

ReactDOM.render(buttonsInstance, document.getElementById('example'));