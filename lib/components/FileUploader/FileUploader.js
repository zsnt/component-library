import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FA from 'react-fontawesome';

class FileUploader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showFileInput: true,
    };

    this.addNewDocument = this.addNewDocument.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.onClickRemove = this.onClickRemove.bind(this);
  }

  onClickRemove(idx) {
    console.log(idx);
    // callback function for removing file
    this.props.onFileRemove(idx);
  }

  onFileChange(event) {
    // hide the input
    this.setState({
      showFileInput: false,
    });
    this.props.onFileUpload(event);
  }

  addNewDocument() {
    this.setState({
      showFileInput: true,
    });
  }

  render() {
    const { addedFiles } = this.props;
    const fileList = addedFiles.map((file, idx) => {
      const keyIndex = `file-${idx}`;
      return (
        <div key={keyIndex}>
          {file.filename}
          <button
            title="remove file"
            onClick={this.onClickRemove(idx)}
          >
            <FA name="trash" />
          </button>
        </div>
      );
    });

    return (
      <fieldset>
        <div>
          {fileList}
        </div>
        {this.state.showFileInput ? (
          <input
            type="file"
            name="addFile"
            onChange={this.onFileChange}
            accept={this.props.accept}
          />
        ) : (
          <button onClick={this.addNewDocument}>
            <FA name="plus" />
            add another document
          </button>
        )}
      </fieldset>
    );
  }
}

FileUploader.propTypes = {
  onFileRemove: PropTypes.func.isRequired,
  onFileUpload: PropTypes.func.isRequired,
  accept: PropTypes.string,
  addedFiles: PropTypes.array,
};

FileUploader.defaultProps = {
  accept: '',
  addedFiles: [],
};

export default FileUploader;
