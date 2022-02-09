import React, { useEffect, useState } from 'react';
import Topbar from '../../components/topBar/Topbar';
import './s3.css';
// import Axios from 'axios';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

function S3() {

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
      <div className='s3page'>
        <div className='tops3'>
          <h2><b>@aws-cdk/aws-s3</b></h2>
          <h6>The CDK Construct Library for AWS::S3</h6>
          <button className='btn'>AWS CDK v1</button>
          <button className='btn1'>Amazon s3</button>
          <button className='btn2'>s3</button>
        </div>
        <div className='s3map'>
          {items.map((value,index) =>{
            return(
              <div key={index}>
                <p><span>Name</span> {value._source.name}</p>
                <p><span>Author</span> {value._source.Author}</p>
                <p><span>Published</span> {value._source.Published_Date}</p>
                <p><span>Repository</span> <a href='https://github.com/aws/aws-cdk'>{value._source.Repository}</a></p>
                <p><span>License</span> <a href="http://www.apache.org/licenses/LICENSE-2.0">{value._source.License}</a></p>
                <p><span>Registry</span> <a href="https://www.npmjs.com/package/@aws-cdk/aws-s3/v/1.143.0">{value._source.Registry}</a></p>
              </div>
            )
          })
          }
        </div>
        <div className='downs3'>
          <div className='sides3'>
            <h3>Readme</h3>
            <li>Encryption</li>
            <li>Permissions</li>
          </div>
          <div className='s3static'>
            <h2><b>Amazon S3 Construct Library</b></h2>
            <span className='s3content'>CFN-RESOURCES STABLE<br></br></span>
            <span className='s3content'>CDK-CONSTRUCT STABLE</span>
            <p>Amazon Simple Storage Service (Amazon S3) is an object storage service offering industry-leading scalability,
            data availability, security, and performance.Customers of all sizes and industries can store and protect any amount of data for virtually any use case,
            such as data lakes, cloud-native applications, and mobile apps.An inventory  contains a list of the objects in the source bucket and metadata for each object. The inventory lists are stored in the destination bucket as a CSV file compressed with GZIP, as an Apache optimized row columnar (ORC) file compressed with ZLIB, or as an Apache Parquet (Parquet) file compressed with Snappy.
            You can configure multiple inventory lists for a bucket. You can configure what object metadata to include in the inventory, whether to list all object versions or only current versions, where to store the inventory list file output, and whether to generate the inventory on a daily or weekly basis.</p>
          </div>
          <div className='clipboards3'>
            <FileCopyIcon className='copyicons3' />
            <p>const bucket = new s3.Bucket(this, 'MyFirstBucket');</p>
          </div>
        </div>
      </div>
      </>
    )
}

export default S3;