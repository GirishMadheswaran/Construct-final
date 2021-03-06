import { useEffect, useState } from 'react';
import './s3notification.css';
import Topbar from '../../components/topBar/Topbar';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';


function S3Notification() {
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
      <div className='s3notificationpage'>
        <div className='tops3notification'>
          <h2><b>@aws-cdk/aws-s3-notification</b></h2>
          <h6>Bucket Notifications API for AWS S3</h6>
          <button className='btn'>AWS CDK v1</button>
          <button className='btn1'>s3</button>
          <button className='btn2'>notification</button>
        </div>
        <div className='s3notificationmap'>
          {items.map((value,index) =>{
            return(
              <div key={index}>
                 <p>Name {value._source.name}</p>
                <p>Author {value._source.Author}</p>
                <p>Published {value._source.Published_Date}</p>
                <p>Repository <a href="https://github.com/aws/aws-cdk.git">{value._source.Repository}</a></p>
                <p>License <a href="http://www.apache.org/licenses/LICENSE-2.0">{value._source.License}</a></p>
                <p>Registry <a href="https://www.npmjs.com/package/@aws-cdk/aws-s3-notifications/v/1.143.0">{value._source.Registry}</a></p>
              </div>
            )
          })
          }
        </div>
        <div className='downs3notification'>
          <div className='sides3notification'>
            <h3>Readme</h3>
            <li>Encryption</li>
            <li>Permissions</li>
          </div>
          <div className='s3notificationstatic'>
            <h2><b>S3 Bucket Notifications Destinations</b></h2>
            <span className='s3notificationcontent'>CDK-CONSTRUCT STABLE</span>
            <p>Assets are local files or directories which are needed by a CDK app. A common example is a directory which contains the handler code for a Lambda function, but assets can represent any artifact that is needed for the app's operation. Assets are local files or 
              directories which are needed by a CDK app. A common example is a directory which contains the handler code for a Lambda function, but assets can represent any artifact that is needed for the app's operation.  
              When deploying a CDK app that includes constructs with assets, the CDK toolkit will first upload all the assets to S3, and only then deploy the stacks. The S3 locations of the uploaded assets will be passed in as CloudFormation Parameters to the relevant stacks.
            </p>
          </div>
          <div className='clipboards3notificatio'>
            <FileCopyIcon className='copyicons3notification' />
            <p>import * as sns from '@aws-cdk/aws-sns';</p>
            <p>const bucket = new s3.Bucket(this, 'Bucket');</p>
            <p>const topic = new sns.Topic(this, 'Topic');</p>
            <p>bucket.addEventNotification(s3.EventType.OBJECT_CREATED_PUT, new s3n.SnsDestination(topic));</p>
          </div>
        </div>
      </div>
    </>
  )
}
  


export default S3Notification;