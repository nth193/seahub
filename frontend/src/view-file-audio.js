import React from 'react';
import ReactDOM from 'react-dom';
import watermark from 'watermark-dom';
import { seafileAPI } from './utils/seafile-api';
import { siteName } from './utils/constants';
import FileInfo from './components/file-view/file-info';
import FileToolbar from './components/file-view/file-toolbar';
import FileViewTip from './components/file-view/file-view-tip';
import CommentPanel from './components/file-view/comment-panel';
import AudioPlayer from './components/audio-player';

import './css/file-view.css';
import './css/audio-file-view.css';

const { isStarred, isLocked, lockedByMe,
  repoID, filePath, err, enableWatermark, userNickName,
  // the following are only for this type of file view
  rawPath
} = window.app.pageOptions;

class ViewFileAudio extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isStarred: isStarred,
      isLocked: isLocked,
      lockedByMe: lockedByMe,
      isCommentPanelOpen: false
    };
  }

  toggleCommentPanel = () => {
    this.setState({
      isCommentPanelOpen: !this.state.isCommentPanelOpen
    });
  }

  toggleStar = () => {
    if (this.state.isStarred) {
      seafileAPI.unStarItem(repoID, filePath).then((res) => {
        this.setState({
          isStarred: false
        });
      });
    } else {
      seafileAPI.starItem(repoID, filePath).then((res) => {
        this.setState({
          isStarred: true
        });
      });
    }
  }

  toggleLockFile = () => {
    if (this.state.isLocked) {
      seafileAPI.unlockfile(repoID, filePath).then((res) => {
        this.setState({
          isLocked: false, 
          lockedByMe: false 
        });
      });
    } else {
      seafileAPI.lockfile(repoID, filePath).then((res) => {
        this.setState({
          isLocked: true,
          lockedByMe: true
        });
      });
    }    
  }

  render() {
    return (
      <div className="h-100 d-flex flex-column">
        <div className="file-view-header d-flex justify-content-between">
          <FileInfo
            isStarred={this.state.isStarred}
            isLocked={this.state.isLocked}
            toggleStar={this.toggleStar}
          />
          <FileToolbar 
            isLocked={this.state.isLocked}
            lockedByMe={this.state.lockedByMe}
            toggleLockFile={this.toggleLockFile}
            toggleCommentPanel={this.toggleCommentPanel}
          />
        </div>
        <div className="file-view-body flex-auto d-flex">
          <FileContent />
          {this.state.isCommentPanelOpen &&
            <CommentPanel toggleCommentPanel={this.toggleCommentPanel} />
          }
        </div>
      </div>
    );
  }
}

class FileContent extends React.Component {

  render() {
    if (err) {
      return <FileViewTip />;
    }

    const videoJsOptions = {
      autoplay: false,
      controls: true,
      preload: 'auto',
      sources: [{
        src: rawPath
      }]
    };
    return (
      <div className="file-view-content flex-1">
        <AudioPlayer { ...videoJsOptions } />
      </div>
    );
  }
}

if (enableWatermark) {
  watermark.init({
    watermark_txt: `${siteName} ${userNickName}`,
    watermark_alpha: 0.075
  });
}

ReactDOM.render (
  <ViewFileAudio />,
  document.getElementById('wrapper')
);