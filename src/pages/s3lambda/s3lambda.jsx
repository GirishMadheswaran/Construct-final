import { useEffect, useState } from 'react';
import './s3lambda.css';
import Topbar from '../../components/topBar/Topbar';
// import FileCopyIcon from '@material-ui/icons/FileCopy';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';


function S3lambda() {
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
      <div className='s3lambdapage'>
        <div className='tops3lambda'>
          <h2><b>@aws-cdk/aws-s3-lambda</b></h2>
          <h6>Deploy local files and directories to S3</h6>
          <button className='btn'>AWS CDK v1</button>
          <button className='btn1'>AWS CloudFormation</button>
          <button className='btn2'>AWS Lambda</button>
        </div>
        <div className='s3lambdamap'>
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
        <div className='downs3lambda'>
          <div className='sides3lambda'>
            <h3>Readme</h3>
            <li>Encryption</li>
            <li>Permissions</li>
          </div>
          <div className='s3lambdastatic'>
            <h2><b>aws-s3-lambda module</b></h2>
            <span className='s3lambdacontent'>CDK-CONSTRUCT STABLE</span>
            <p>S3 Object Lambda works with your existing applications and uses AWS Lambda functions to automatically process and transform your data as it is being retrieved from S3. 
              The Lambda function is invoked inline with a standard S3 GET request, so you don't need to change your application code
            </p>
          </div>
          <div className='s3lambdacontent1'>
            <p>All types moved to @aws-cdk/core.</p>
          </div>
        </div>
      </div>
    </>
  )
}
  


export default S3lambda;





