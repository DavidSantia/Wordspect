      /*** Import page ***/

      var ImportButton = React.createClass({
          handleClick: function() {
              console.log('You clicked: Import from ' + this.props.name);
          },

          render: function() {
              var image = 'images/Icon-' + this.props.name + '.png';
              return (
                  <img src={image} alt={this.props.name} onClick={this.handleClick} />
              );
          }
      });

      var ImportButtonBank = React.createClass({
          render: function() {
              var ButtonText = ['Word',
                  'Powerpoint',
                  'Excel',
                  'Text',
                  'Wordpress',
                  'Webpage',
                  'Movie'
              ];
              var rows = [];
              for (var i=0; i<ButtonText.length; i++) {
                  rows.push(<tr key={i}><td id={i} title={ButtonText[i]}><ImportButton name={ButtonText[i]} /></td><td><b>&nbsp;{ButtonText[i]}</b></td></tr>);
              };
              return (
                  <table id='buttons' className="import-buttons">
                      <tbody>{rows}</tbody>
                  </table>
              );
          }
      });

      var ComponentImport = React.createClass({
          render: function() {
              return (
                  <div id='import-component' className='import-wrapper'>
                      <div id='button-panel' className="import-button-panel">
                          <ImportButtonBank />
                      </div>
                      <div id='import-main-panel' className="main-panel">
                          <img src="images/Import.png" />
                      </div>
                  </div>
              );
          }
      });
