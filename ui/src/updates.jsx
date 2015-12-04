      /*** Updates page ***/

      var UpdatesRow = React.createClass({
          handleClick: function() {
              console.log('You clicked: ' + this.props.message.subject);
          },

          render: function() {
              var read = this.props.message.read ? <span>&bull;</span> : <span>&nbsp;</span>;
              return (
                  <tr className="hilight" onClick={this.handleClick} >
                      <td>{read}</td>
                      <td>{this.props.message.subject}</td>
                      <td>{this.props.message.from}</td>
                      <td>{this.props.message.text}</td>
                  </tr>
              );
          }
      });
      
      var UpdatesTable = React.createClass({
          render: function() {
              var rows = [];
              rows.push(<tr key="update-table-header"><th>&nbsp;</th><th>Subject</th><th>From</th><th>Message</th></tr>);
              this.props.messages.forEach(function(message) {
                  var key = 'message-' + message.idx;
                  rows.push(<UpdatesRow message={message} key={key} />);
              });
              return (
                  <table className="updates-table">
                      <tbody>{rows}</tbody>
                  </table>
              );
          }
      });

      var ComponentUpdates = React.createClass({
          render: function() {
              var MESSAGES = [
                  {subject: 'Updated Diagram', from: 'R&D', read: false, idx: '1',
                   text: 'New version for jump. Affects 3 projects.'},
                  {subject: 'Changes Approved', from: 'Manager', read: true, idx: '2',
                   text: 'Overview Tutorial Reviewed.'},
                  {subject: 'Updated Instructions', from: 'Support', read: false, idx: '3',
                   text: 'Steps for jump approach. Affects Settings project.'},
                  {subject: 'Suggested Revision', from: 'Support', read: true, idx: '4',
                   text: 'Reports Tutorial needs example screen.'},
                  {subject: 'Suggested Revision', from: 'Sales', read: false, idx: '5',
                   text: 'Add benefits summary to Overview Tutorial.'}
              ];
              return (
                  <div id='updates-component' className='updates-wrapper'>
                      <div id='updates-list' className="updates-panel">
                          <UpdatesTable messages={MESSAGES} />
                      </div>
                      <div id='updates-main-panel' className="main-panel">
                          <img src="images/Updates.png" />
                      </div>
                  </div>
              );
          }
      });
