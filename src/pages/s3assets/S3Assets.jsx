import { useEffect, useState } from 'react';
import './s3assets.css';
import Topbar from '../../components/topBar/Topbar';
import FileCopyIcon from '@material-ui/icons/FileCopy';


function S3Assets() {
    const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3003/s3assets")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.hits.hits);
          // console.log('response 2--> ' , result.hits);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  return(
    <>
      < Topbar/>
      <div className='s3assetspage'>
        <div className='tops3assets'>
          <h2><b>@aws-cdk/aws-s3-assets</b></h2>
          <h6>Deploy local files and directories to S3</h6>
          <button className='btn'>AWS CDK v1</button>
          <button className='btn1'>AWS CloudFormation</button>
          <button className='btn2'>AWS Lambda</button>
        </div>
        <div className='s3assetsmap'>
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
        <div className='downs3assets'>
          <div className='sides3assets'>
            <h3>Readme</h3>
            <li>Encryption</li>
            <li>Permissions</li>
          </div>
          <div className='s3assetsstatic'>
            <h2><b>AWS CDK Assets</b></h2>
            <span className='s3assetscontent'>CDK-CONSTRUCT STABLE</span>
            <p>Assets are local files or directories which are needed by a CDK app. A common example is a directory which contains the handler code for a Lambda function, but assets can represent any artifact that is needed for the app's operation. Assets are local files or 
              directories which are needed by a CDK app. A common example is a directory which contains the handler code for a Lambda function, but assets can represent any artifact that is needed for the app's operation.  
              When deploying a CDK app that includes constructs with assets, the CDK toolkit will first upload all the assets to S3, and only then deploy the stacks. The S3 locations of the uploaded assets will be passed in as CloudFormation Parameters to the relevant stacks.
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
  


export default S3Assets;





