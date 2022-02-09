import { useEffect, useState } from 'react';
import './s3deployment.css';
import Topbar from '../../components/topBar/Topbar';
// import FileCopyIcon from '@material-ui/icons/FileCopy';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';


function S3deployment() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const apiUrl = "https://0qglpz3009.execute-api.us-east-1.amazonaws.com/sandbox/searchconstruct";
  const location = useLocation();
  const path = location.pathname.split('/')[1];
  console.log('path --> ', path)

  useEffect(() => {
    fetch(apiUrl + "?key=" +path) 
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.hits.hits);
          // console.log('response 2--> ' , result.hits);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])


  return(
    <>
      < Topbar/>
      <div className='s3deploymentpage'>
        <div className='tops3deployment'>
          <h2><b>@aws-cdk/aws-s3-deployment</b></h2>
          <h6>Deploy local files and directories to S3</h6>
          <button className='btn'>AWS CDK v1</button>
          <button className='btn1'>AWS CloudFormation</button>
          <button className='btn2'>AWS Lambda</button>
        </div>
        <div className='s3deploymentmap'>
          {items.map((value,index) =>{
            return(
              <div key={index}>
                 <p>Name {value._source.name}</p>
                <p>Author {value._source.Author}</p>
                <p>Published {value._source.Published_Date}</p>
                <p>Repository <a href="https://github.com/aws/aws-cdk.git">{value._source.Repository}</a></p>
                <p>License <a href="http://www.apache.org/licenses/LICENSE-2.0">{value._source.License}</a></p>
                <p>Registry <a href="https://www.npmjs.com/package/@aws-cdk/assets/v/1.143.0">{value._source.Registry}</a></p>
              </div>
            )
          })
          }
        </div>
        <div className='downs3deployment'>
          <div className='sides3deployment'>
            <h3>Readme</h3>
            <li>Encryption</li>
            <li>Permissions</li>
          </div>
          <div className='s3deploymentstatic'>
            <h2><b>AWS S3 Deployment Construct Library</b></h2>
            <span className='s3deploymentcontent'>CDK-CONSTRUCT STABLE</span>
            <p>This library allows populating an S3 bucket with the contents of .zip files from other S3 buckets or from local disk.
                The following example defines a publicly accessible S3 bucket with web hosting enabled and populates it from a local directory on disk.
            </p>
          </div>
          <div className='s3assetscontent1'>
            <p>All types moved to @aws-cdk/core.</p>
          </div>
        </div>
      </div>
    </>
  )
}
  


export default S3deployment;





