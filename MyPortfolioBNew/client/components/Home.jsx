import BBG from '../src/assets/dfp.jpg';
import hire from '../src/assets/hire.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'

export default function Home() {
     return <> 
     
     <div class="first-section" id="welcome-section">
          <div class="image">
            <img
              src="../src/assets/dfp.jpg"
              alt="first section image"
              class="welcome-image"
            />
          </div>
          <div class="welcome-con">
            <div class="welcome">
              <h1>John Daryl Sardez</h1>
              <p>
              He was an application development analyst with a full-stack development boot camp certification. 
              Supports the IT team in the maintenance of hardware, software, and other systems. 
              Troubleshoot issues with equipment like printers, computers, and servers. 
              When prompted, run software updates and backups.
              </p>
            </div>
          </div>
        </div>
    

     </>
     }
    