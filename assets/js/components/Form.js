import * as React from 'react';
import LinearWithValueLabel from './ProgressBar';
export default function Form() {
    const [imagePreviewUrl, setImagePreviewUrl] = React.useState(null);
    const [startUpload, setStartUpload] = React.useState(false);
    const [endUpload, setEndUpload] = React.useState(false);
    function handleSubmit(e) {

    }
    //React.useEffect(() => {
        function handleStop(status) {
            setEndUpload(true);
        /* if(status == "end"){
                setEndUpload(true);
            }else{
                setStartUpload(false);
            }
            */
        }
   // }, []);
    function handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
        setStartUpload(true);
        reader.onloadend = () => {
           
          //this.setState({
           // file: file,
            //imagePreviewUrl: reader.result
            
          //});
          setImagePreviewUrl(reader.result)
        }
        setStartUpload(true);
        reader.readAsDataURL(file)
      }
    let $imagePreview = null;
    if (imagePreviewUrl) {
        if(endUpload){
            $imagePreview = (<img className="maxImageSize" src={imagePreviewUrl} />);
        }else{
            $imagePreview = (<div className="previewText">file is loading...</div>);
        }
    } else {
        $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }
      return (
          
    <div className="previewComponent">
        <form onSubmit={(e)=>handleSubmit(e)}>
          <input className="fileInput" 
            type="file" 
            onChange={(e)=>handleImageChange(e)} />
          
        </form>
        {startUpload ?
            <LinearWithValueLabel arg={handleStop} />
            :null}
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
      );   
}