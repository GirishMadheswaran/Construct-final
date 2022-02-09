import './body.css';
import SearchBar from '../searchbar/searchBar';

function Body() {
    return (
        <>
        <div className="devpage">
        <div className="dev">
            <h1>Simplify cloud development with constructs</h1>
            <h4>Find and use open-source Cloud Development Kit (CDK) libraries</h4>
        <div id="form">
             <SearchBar placeholder="search 800 plus construct libraries..."/>
            {/* <input className="search" placeholder="search 800 plus construct libraries" /> */}
            {/* <button className="button">Find constructs</button> */}
        </div>
        <div className="base">
            <div className="title">
            <h2 className="tag">One home for all CDKs</h2>
            <p>Find libraries for AWS Cloud Development Kit (AWS CDK), which generates AWS CloudFormation templates, 
                CDK for Terraform (CDKtf), which generates HashiCorp Terraform configuration files, 
                and CDK for Kubernetes (CDK8s), which generates Kubernetes manifests.</p>
                <img src='/images/cdk.png' alt='' className='cdk' />
                <img src='/images/cdks.png' alt='' className='cdks' />
                <img src='/images/tf.png' alt='' className='tf' />
                <div>
                    <span className="cdk1">AWS CDK</span>
                    <span className="cdks1">CDK8s</span>
                    <span className="tf1">CDKtf</span>
                </div>
            </div>
            <div className="title1">
            <h2 className="tag1">Support across languages</h2>
            <p>Define, test, and deploy cloud infrastructure using high level programming languages such as TypeScript,
            Python, Java, and .NET. Find documentation, API references and code samples to quickly build your application.</p>
                <div>
                    <img src='/images/ts.png' alt='' className='type' />
                    <img src='/images/py.png' alt='' className='py' />
                    <img src='/images/jv.png' alt='' className='jv' />
                    <img src='/images/n.png' alt='' className='n' />
                    <span  className="type1">Typescript</span>
                    <span  className="py1">Python</span>
                    <span  className="jv1">Java</span>
                    <span  className="n1">.Net</span>
                </div>
            </div>
            <div className="title2">
            <h2 className="tag2">Provision a range of cloud resources</h2>
            <p>Find construct libraries published by the community and cloud service providers such as Datadog,
            Amazon Web Services (AWS), MongoDB, Aqua Security, and more.</p>
                <img src='/images/dd.png' alt='' className='dd' />
                <img src='/images/aws.png' alt='' className='aws' />
                <img src='/images/mdb.png' alt='' className='mdb' />
                <img src='/images/as.png' alt='' className='as' />
                <div>
                <span href="" className="dd1">Datadog</span>
                <span href="" className="aws1">AWS</span>
                <span href="" className="mdb1">MongoDB</span>
                <span href="" className="as1">aqua security</span>
                </div>
            </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Body;