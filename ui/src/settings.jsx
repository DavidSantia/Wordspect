      /*** Settings page ***/

      var SettingsPanelButtons = React.createClass({
          UsersMover: function() {
              console.log('MouseOver: Users Panel');
          },
          NotificationsMover: function() {
              console.log('MouseOver: Notifications Panel');
          },
          UsersPanel: function() {
              this.props.panel.setState({panel: <SettingsUsersPanel />});
          },
          NotificationsPanel: function() {
              this.props.panel.setState({panel: <SettingsNotificationsPanel />});
          },
          render: function() {
              return (
                  <div id='panel-buttons' className="settings-panel-buttons">
                      <button onMouseOver={this.UsersMover} onClick={this.UsersPanel}>Users</button>
                      <button onMouseOver={this.NotificationsMover} onClick={this.NotificationsPanel}>Notifications</button>
                  </div>
              );
          }
      });

      var ComponentSettings = React.createClass({
          getInitialState: function() {
              return {panel: <SettingsUsersPanel />};
          },

          render: function() {
              return (
                  <div id='settings-component' className='settings-wrapper'>
                      <div id="settings-select-panel" className="settings-selector">
                          <SettingsPanelButtons panel={this} />
                      </div>
                      <div id="panel-wrapper" className="settings-panel-wrapper">
                          {this.state.panel}
                      </div>
                  </div>
              );
          }
      });
