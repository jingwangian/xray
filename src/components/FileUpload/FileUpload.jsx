import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles} from '@material-ui/core/styles';

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
    input: {
        display: 'none',
    }
  }));

export default function FileUpload() {
    const fileInput = React.createRef();
    const classes = useStyles();

    const handleFileChange = ()=>{
        console.log('selected file -->', fileInput.current.files[0].name);
    }

    return (
        <div>
            <Button variant="contained">
            <input className={classes.input} id="files"  type='file' ref={fileInput} onChange={handleFileChange} >
            </input>
            <label htmlFor="files">Select file</label>
            </Button>
        </div>
    )
}
