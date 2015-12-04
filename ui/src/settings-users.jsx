      /*** Settings Users panel ***/

      var SettingsUsersRow = React.createClass({
          handleClick: function() {
              console.log('You clicked: ' + this.props.message.name);
          },

          render: function() {
              return (
                  <tr className="hilight" onClick={this.handleClick} >
                      <td>{this.props.message.name}</td>
                      <td>{this.props.message.email}</td>
                      <td>{this.props.message.role}</td>
                  </tr>
              );
          }
      });
      
      var SettingsUsersTable = React.createClass({
          render: function() {
              var rows = [];
              rows.push(<tr key="settings-users-table-header"><th>Name</th><th>Email</th><th>Role</th></tr>);
              this.props.messages.forEach(function(message) {
                  var key = 'message-' + message.idx;
                  rows.push(<SettingsUsersRow message={message} key={key} />);
              });
              return (
                  <table id="users-table" className="settings-users-table">
                      <tbody>{rows}</tbody>
                  </table>
              );
          }
      });

      var SettingsUsersPanel = React.createClass({
          render: function() {
              var MESSAGES = [
                  {name: 'Lucy Aldwin', email: 'lucy@wordspect.com', idx: '3', role: 'Reviewer'},
                  {name: 'Carl Artois', email: 'carl@wordspect.com', idx: '4', role: 'Editor'},
                  {name: 'Santia Morris', email: 'santia@wordspect.com', idx: '1', role: 'Administrator'},
                  {name: 'Bill Wright', email: 'bill@wordspect.com', idx: '2', role: 'Editor'}
              ];
              return (
                  <div id='settings-users-component' className='settings-users-wrapper'>
                      <div id='settings-users-list' className="settings-users-panel">
                          <SettingsUsersTable messages={MESSAGES} />
                      </div>
                      <div id="settings-main-panel" className="main-panel">
                          <img src="images/Settings-Users.png" />
                      </div>
                  </div>
              );
          }
      });
