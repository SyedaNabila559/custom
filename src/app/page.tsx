import Image from "next/image";
import './home.css';

export default function Home() {
  return (
    
    <div>
      <div className="hero-section">
        <div className="content">
          <p className="line-a">hello, i&apos;m Nabila Bannay Khan,</p>  
          <p className="line-b">front end</p>
          <p className="line-b">developer</p>
          <p className="line-a">based in pakistan</p>
        
        </div>
        <div className="picture"> 
        <Image className="mainPic" src='/pf-3.jpg' alt="nabila" width={506} height={509}></Image>
      </div>
      </div>
    </div>
  );
}

