import React, { useState, useCallback } from 'react';
import { makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useDropzone } from 'react-dropzone';
import { purple } from '@material-ui/core/colors';
import {sendMessage} from '../../utils/message';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(0.5),
    borderRadius: '8px',
    backgroundColor: '#112233df',
    width: '100%',
    height: '100%',
    maxWidth: '230px',
    minHeight: '350px',
    color: 'white',
  },
  img: {
    width: '50%',
    height: 'auto',
  },
  button: {
    textTransform: 'none',
  },
}));

const ColorButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
    fontSize: '0.6rem',
  },
}))(Button);

function ImageUpload() {
  const [fileLoaded, setFileLoaded] = useState(false);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [validFile, setValidFile] = useState(false);

  const classes = useStyles();

  const onDrop = useCallback((acceptedFiles) => {
    console.log('acceptedFiles ->', acceptedFiles);
    const file = acceptedFiles[0];
    const fileUrl = URL.createObjectURL(file);

    setFileUrl(fileUrl);
    setFileLoaded(true);
    setValidFile(true);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleMouseOver = () => {
    if (validFile) {
      sendMessage('show-image', fileUrl);
    }
  };

  const handleMouseLeave = () => {
    if (validFile) {
      sendMessage('close-image');
    }
  };

  return (
    <div className={classes.paper}>
      {!fileLoaded && (
        <ColorButton
          {...getRootProps()}
          className={classes.button}
          id="drop-file-dev"
          variant="contained"
          color="primary"
        >
          <input {...getInputProps()} />
          Upload ...
        </ColorButton>
      )}
      {fileLoaded && (
        <div>
          {fileUrl && (
            <img
              className={classes.img}
              src={fileUrl}
              alt="Can't read file"
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
              onError={() => {
                setValidFile(false);
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default ImageUpload;