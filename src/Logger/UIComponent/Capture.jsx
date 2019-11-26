
import React from "react";
import { withRouter } from 'react-router-dom'

class Capture extends React.Component {

    onButtonClick = (e) => {
        let action = e.target.id;
        switch(action){
            case "cap_photo_video":
                this.props.history.push("/photo_video");
                break;
            case "upload_file":
                this.props.history.push("/upload_file");
                break;
            
        }
    }

    render(){
        const Button = withRouter(({ history }) => (
            <React.Fragment>
                <div>
                    <button
                    type='button'
                    onClick={() => { history.push('/upload_file') }}
                    >
                    Upload File
                    </button>
                </div>
                <div>
                    <button
                    type='button'
                    onClick={() => { history.push('/capture_photo_video') }}
                    >
                    Capture Photo/Video
                    </button>
                </div>
                <div>
                    <button
                    type='button'
                    onClick={() => { history.push('/capture_audio') }}
                    >
                    Capture Audio
                    </button>
                </div>
                <div>
                    <button
                    type='button'
                    onClick={() => { history.push('/capture_text') }}
                    >
                    Log Text
                    </button>
                </div>
            </React.Fragment>
          ))

        return (<Button></Button>)
        // const { url } = this.props.match
        // console.log(url);
        // return(
        //     <div>
        //         <p>
        //             This component is used for capturing the moment with photo or video or audio
        //             or by text
        //         </p>
        //         <button onClick={this.onButtonClick} id="cap_photo_video">Capture Photo/Video</button>
        //         <button onClick={this.onButtonClick} id="upload_file">Upload File</button>
        //         <button onClick={this.onButtonClick} id="cap_audio">Log Audio</button>
        //         <button onClick={this.onButtonClick} id="cap_text">Log Text</button>
        //     </div>
        // )
    }
}



export default Capture;