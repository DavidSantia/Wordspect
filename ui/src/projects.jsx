      /*** Projects page ***/

      var ProjectCategoryRow = React.createClass({
          render: function() {
              return (<tr><th colSpan="2">{this.props.category}&nbsp;Projects</th></tr>);
          }
      });
      
      var ProjectRow = React.createClass({
          handleClick: function() {
              console.log('You clicked: ' + this.props.project.name);
          },

          render: function() {
              var sel = this.props.project.select ? "" : "hilight";
              return (
                  <tr className="hilight" onClick={this.handleClick} >
                      <td>{this.props.project.name}</td>
                      <td>{this.props.project.track}</td>
                  </tr>
              );
          }
      });
      
      var ProjectTable = React.createClass({
          render: function() {
              var rows = [];
              var lastCategory = null;
              this.props.projects.forEach(function(project) {
                  var key = 'project-' + project.idx;
                  if (project.category !== lastCategory) {
                      rows.push(<ProjectCategoryRow category={project.category} key={project.category} />);
                  }
                  rows.push(<ProjectRow project={project} key={key} />);
                  lastCategory = project.category;
              });
              return (
                  <table className="projects-table">
                      <tbody>{rows}</tbody>
                  </table>
              );
          }
      });

      var SearchBar = React.createClass({
          render: function() {
              return (
                  <form>
                      <input type="text" placeholder="Search..." />
                      <div className="projects-checkbox">
                          <input type="checkbox" />
                          {' '}
                          Only show my projects
                      </div>
                  </form>
              );
          }
      });

      var ComponentProjects = React.createClass({
          render: function() {
              var PROJECTS = [
                  {category: 'Current', track: 'Tutorial', select: false, idx: '1', name: 'Overview'},
                  {category: 'Current', track: 'Help Doc', select: true, idx: '2', name: 'Getting Started'},
                  {category: 'Current', track: 'Help Doc', select: false, idx: '3', name: 'Settings'},
                  {category: 'Recent', track: 'Tutorial', select: true, idx: '4', name: 'Reports'},
                  {category: 'Recent', track: 'Tutorial', select: false, idx: '5', name: 'Import'}
              ];
              return (
                  <div id='projects-component' className='projects-wrapper'>
                      <div id='projects-list' className="projects-panel">
                          <SearchBar />
                          <ProjectTable projects={PROJECTS} />
                      </div>
                      <div id='projects-main-panel' className="main-panel">
                          <img src="images/Projects.png" />
                      </div>
                  </div>
              );
          }
      });
