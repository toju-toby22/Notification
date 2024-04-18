import Image from "next/image";
import { CiShare1 } from "react-icons/ci";
import { IoToggle } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";

export default function Home() {
  return (
    <div className='notify'>
    <div className="notification_container">
        <div className="notification_navbar">
            <h2 className='notification'>Notifications</h2>



            <ul className="notification_btn-list">
                <li>Only show unread</li>
                <li><IoToggle /></li>
                <li><CiShare1 /></li>
                <li><CiMenuKebab /></li>
            </ul>
        </div>



        <div className="direct_watching-toggle-btn">
            <h3>Direct</h3>
            <h3>Watching</h3>
        </div>


        <div className="latest_read">
            <h3>Latest</h3>
            <h3>Mark all as read</h3>
        </div>



        <div className="notification_contents">

           <div className="notif">
           <div className='profile_avatar'>
            <p>A</p>

            </div>

            <div className="user_details">
                <p className='name_date'>
                    <span>Adanna updated an issue</span> 2 days ago
                </p>

                <p>Design & Implement CI/CD pipeline for automatic deployment for web</p>

                <p>MNG-479.To DO</p>

                <p className='updates'>
                    <span className='profile_avatar2'>A</span>
                    +1 assignee update from Adanna
                </p>
            </div>
           </div>

            <span className='dot'><GoDotFill /></span>
        </div>

    </div>
</div>
  );
}
