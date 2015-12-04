      /*** Settings Notifications panel ***/

      var SettingsNotificationsButton = React.createClass({
          handleClick: function() {
              console.log('You clicked: ' + this.props.name + ' notifications');
          },

          render: function() {
              var image = 'images/Icon-' + this.props.name + '.png';
              return (
                  <img src={image} alt={this.props.name} onClick={this.handleClick} />
              );
          }
      });

      var SettingsNotificationsButtonBank = React.createClass({
          render: function() {
              var ButtonText = ['Email',
                  'Confluence',
                  'HelpDesk'
              ];
              var rows = [];
              for (var i=0; i<ButtonText.length; i++) {
                  rows.push(<tr key={i}><td id={i} title={ButtonText[i]}><SettingsNotificationsButton name={ButtonText[i]} /></td><td><b>&nbsp;{ButtonText[i]}</b></td></tr>);
              };
              return (
                  <table id='notifications-buttons' className="settings-notifications-buttons">
                      <tbody>{rows}</tbody>
                  </table>
              );
          }
      });

      var SettingsNotificationsPanel = React.createClass({
          render: function() {
              return (
                  <div id='settings-notifications-component' className='settings-notifications-wrapper'>
                      <div id='settings-notifications-button-panel' className="settings-notifications-panel">
                          <SettingsNotificationsButtonBank />
                      </div>
                      <div id='settings-notifications-main-panel' className="main-panel">
                          <img src="images/Settings-Notifications.png" />
                      </div>
                  </div>
              );
          }
      });
