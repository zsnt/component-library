import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { FileUploader } from '../lib';

class FileUploaderDemo extends Component {
  constructor() {
    super();

    this.state = {
      fileList: [],
    };

    this.onFileUpload = this.onFileUpload.bind(this);
    this.onFileRemove = this.onFileRemove.bind(this);
  }

  onFileUpload(event) {
    const filename = event.target.files[0].name;
    const filepath = `http://path/to/file/${filename}`;

    const addedFiles = this.state.fileList.slice();
    addedFiles.push({
      filename,
      filepath,
    });

    this.setState({
      fileList: addedFiles,
    });
  }

  onFileRemove(idx) {
    const { updatedFileList } = this.state.fileList;
    if (typeof (updatedFileList) !== 'undefined') {
      updatedFileList.splice(idx, 1);
      this.setState({
        fileList: updatedFileList,
      });
    }
  }

  render() {
    return (
      <div>
        <FileUploader
          onFileUpload={this.onFileUpload}
          onFileRemove={this.onFileRemove}
          addedFiles={this.state.fileList}
          accept="application/pdf"
        />
      </div>
    );
  }
}

storiesOf('Gernal/FileUploader', module)
  .add(
    'FileUploader component',
    withInfo(`


      ~~~js
      <FileUploader />
      ~~~

    `)(() => (
      <FileUploaderDemo />
    )),
  );
