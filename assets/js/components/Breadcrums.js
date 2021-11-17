import React from "react"
import { useHistory } from "react-router-dom";
import Link from '@mui/material/Link';


export default function Breadcrums({item}) {
    const history = useHistory();
    console.log("item::::::" + item);
    const reg = new RegExp(/^\d+$/);
    const handleRoute = (page) =>{
        if(page == "home"){
            history.push("/content/portal");
        }else if(page == "pages"){
            history.push("/content/portal?pages=50")
        }else{
            history.push("/content/portal?site=50")
         }
  }
  if(reg.test(item)){
    console.log(reg.test(item));
    item = "settings";
  }
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="product__details__breadcrumb">
                    <Link color="inherit" onClick={() => handleRoute("home")}>Home</Link>
                    {item == "pages" ? 
                         <span>Pages</span>
                    : item == "components" ? 
                        <React.Fragment>
                            <span>Components</span>
                        </React.Fragment>
                    : item == "history" ? 
                        <React.Fragment>
                            <Link color="inherit" onClick={() => handleRoute('issues')}>Pages</Link>
                            <span>READMINE</span>
                        </React.Fragment>
                    : item == "settings" ? 
                        <React.Fragment>
                            <Link color="inherit" onClick={() => handleRoute('components')}>Components</Link>
                            <span>Settings</span>
                        </React.Fragment>
                    :
                        <React.Fragment>
                            <Link color="inherit" onClick={() => handleRoute('pages')}>Pages</Link>
                            <span>{item}</span>
                        </React.Fragment>
                    }
                   
                </div>
            </div>
        </div>
    );
}
