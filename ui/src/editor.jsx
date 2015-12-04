      /*** Editor page ***/

      var ButtonCell = React.createClass({
          getInitialState: function() {
              var num = ('0' + (this.props.i+1)).slice(-2);
              return {src: 'images/M' + num + '_up.png', id:'Button' + num };
          },

          MouseRollover: function(i) {
              var num = ('0' + (i+1)).slice(-2);
              console.log('MouseOver: ' + this.props.label + ' (' + this.state.id + ')');
              this.setState({src: 'images/M' + num + '_over.png'});
          },

          MouseOut: function(i) {
              var num = ('0' + (i+1)).slice(-2);
              this.setState({src: 'images/M' + num + '_up.png'});
          },

          render: function() {
              return (
                   <img src={this.state.src} alt={this.state.id} title={this.props.label} key={this.state.id} width="66px" height="66px" onMouseOver={this.MouseRollover.bind(this, this.props.i)} onMouseOut={this.MouseOut.bind(this, this.props.i)} />
              );
          }
      });

      var ModuleButtons = React.createClass({
          render: function() {
              var rows = [];
              return (
                  <table id='buttons'>
                      <tbody>{this.props.buttontext.map(function(buttontext, i) {
                          if (i % 2 == 0) {
                              rows = [];
                          }
                          rows.push(<td key={i}><ButtonCell label={buttontext} i={i} /></td>);
                          if (i % 2 == 1) {
                              return (
                                  <tr key={i/2}>{rows}</tr>
                              );
                          }
                      }, this)}</tbody>
                  </table>
              );
          }
      });

      var ModuleButtonBank = React.createClass({
          render: function() {
              var ButtonText = ['Storyboard', 
                  'Script', 
                  'Layout Templates', 
                  'Tables', 
                  'Graphic Designs', 
                  'Image Library', 
                  'Diagrams and Charts', 
                  'Marketing Terms', 
                  'Code Blocks', 
                  'Text Elements', 
                  'Tips and Examples', 
                  'Links and Views'
              ];
              var rows = [];
              for (var i=0; i<ButtonText.length; i=i+2) {
                  var num = ('0' + (i+1)).slice(-2);
                  var id = 'Button' + num;
                  var num2 = ('0' + (i+2)).slice(-2);
                  var id2 = 'Button' + num2;
                  rows.push(<tr><td id={id} title={ButtonText[i]}><ButtonCell idx={num} id={id} name={ButtonText[i]} /></td><td id={id2} title={ButtonText[i+1]}><ButtonCell idx={num2} id={id2} name={ButtonText[i+1]} /></td></tr>);
              };
              return (
                  <div id='module-buttons' className="editor-module-buttons">
                      <ModuleButtons buttontext={ButtonText} />
                  </div>
              );
          }
      });

      var TrackButtons = React.createClass({
          TutorialMover: function() {
              console.log('MouseOver: Tutorial Track');
          },
          VideoMover: function() {
              console.log('MouseOver: Video Track');
          },
          HelpDocMover: function() {
              console.log('MouseOver: HelpDoc Track');
          },
          TutorialTrack: function() {
              this.props.panel.setState({track: 'images/Editor-Tutorial.png'});
          },
          VideoTrack: function() {
              this.props.panel.setState({track: 'images/Editor-Video.png'});
          },
          HelpDocTrack: function() {
              this.props.panel.setState({track: 'images/Editor-HelpDoc.png'});
          },
          render: function() {
              return (
                  <div id='track-buttons' className="editor-track-buttons">
                      <button onMouseOver={this.TutorialMover} onClick={this.TutorialTrack}>Tutorial</button>
                      <button onMouseOver={this.VideoMover} onClick={this.VideoTrack}>Video</button>
                      <button onMouseOver={this.HelpDocMover} onClick={this.HelpDocTrack}>Help Doc</button>
                  </div>
              );
          }
      });

      var ComponentEditor = React.createClass({
          getInitialState: function() {
              return {track: 'images/Editor-Tutorial.png'};
          },

          render: function() {
              return (
                  <div id='editor-component' className='editor-wrapper'>
                      <div id='right-panel' className="editor-right-panel">
                          <ModuleButtonBank />
                      </div>
                      <div id='track-panel' className="editor-track-panel">
                          <TrackButtons panel={this} />
                      </div>
                      <div id='editor-main-panel' className="main-panel">
                          <img src={this.state.track} />
                      </div>
                  </div>
              );
          }
      });
