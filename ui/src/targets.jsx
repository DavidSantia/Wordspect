      /*** Targets page ***/

      var TargetsButton = React.createClass({
          handleClick: function() {
              console.log('You clicked: ' + this.props.name + ' target');
          },

          render: function() {
              var image = 'images/Icon-' + this.props.name + '.png';
              return (
                  <img src={image} alt={this.props.name} onClick={this.handleClick} />
              );
          }
      });

      var TargetsButtonBank = React.createClass({
          render: function() {
              var ButtonText = ['Pdf',
                  'Wordpress',
                  'Webpage',
                  'Movie'
              ];
              var rows = [];
              for (var i=0; i<ButtonText.length; i++) {
                  rows.push(<tr key={i}><td id={i} title={ButtonText[i]}><TargetsButton name={ButtonText[i]} /></td><td><b>&nbsp;{ButtonText[i]}</b></td></tr>);
              };
              return (
                  <table id='buttons' className="targets-buttons">{rows}</table>
              );
          }
      });

      var ComponentTargets = React.createClass({
          render: function() {
              return (
                  <div id='targets-component' className='targets-wrapper'>
                      <div id='button-panel' className="targets-button-panel">
                          <TargetsButtonBank />
                      </div>
                      <div id='targets-main-panel' className="main-panel">
                          <img src="images/Targets.png" />
                      </div>
                  </div>
              );
          }
      });
