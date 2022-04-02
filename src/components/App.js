import { BiMenu, BiXCircle, BiSearchAlt2, BiChevronDown } from "react-icons/bi";
import { AiOutlineStar, AiOutlinePaperClip, AiFillStar,AiTwotoneSetting, AiOutlineStop } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import {BiLogOutCircle } from "react-icons/bi";
import { IoCreateOutline } from "react-icons/io5";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { BsFiles, BsFillArrowRightCircleFill } from "react-icons/bs";
import { RiShareForwardFill } from "react-icons/ri";
import { TiArrowBack } from "react-icons/ti";

import "./App.css";
import mainScreen from "./images/image.png";
import profileImage from "./images/profile.png";
import { orderdata, menudata } from "./OrderDetail.js";

function App() {
  return (
    <>
    {/**main container */}
      <div className="containered">
        {/** ------left side------- */}
        <div className="left-container">
          <div className="collapse_inbox">
            <div>Collapse Inbox </div>
            <div>
              <BiMenu />
            </div>
          </div>
          <div className="create_task">
            <div>Create New Task </div>
            <div>
              <IoCreateOutline />
            </div>
          </div>
          <div className="cross">
            <div className="search">
              <div> Search</div>
              <div>
                <BiSearchAlt2 style={{ paddingTop: "2px" }} /> <BiChevronDown />
              </div>
            </div>

            <div style={{ marginTop: "6px", fontSize: "20px" }}>
              {" "}
              <BiXCircle />{" "}
            </div>
          </div>
          <div className="ordercolum">
            {orderdata.map((data) => {
              return (
                <div className="order_details">
                  <div className="order_entity">
                    <div> {data.order}</div>
                    <div> time</div>
                  </div>
                  <div className="order_entity">
                    <h5> {data.Name}</h5>
                      <div>
                      {
                     (data.si==="2")||(data.si==="4")? <AiFillStar/> : <AiOutlineStar />
                    }
                    </div>

                  </div>
                  <div className="order_entity"> {data.Description}</div>
                </div>
              );
            })}
          </div>
        </div>
         {/** -------right side*/}
        <div className="right-container">
          {/**header of right side */}
          <div className="header">
            <div className="order_task_description">
              <h3>Order 10234 </h3>
              <h5>Task description</h5>
              <div>
                <div className=" createby">
                  <div>
                  <div> Create By</div>
                  <div> Name</div>
                </div>
                <div>
                  <div> Sent by</div>
                  <div> Name</div>
                </div>
                </div>
              </div>
            </div>
            <div className="task_name">
              <h3>Task Name </h3>
              <div className="due_sent_detail">
                <div>
                  <div> Due date</div>
                  <div> date</div>
                </div>
                <div>
                  <div> Sent to</div>
                  <div> Name</div>
                </div>
              </div>
            </div>
            <div className="user_name_details">
              <div className="workflow"> Workflow Name </div>
              <div className="notification">
                <img src={ profileImage} alt="profile_image"/>
                 <span>2</span>
                 </div>
                 <div className="name">Welcome, Mr.Dass </div>
                 <div className="logout"> Logout<BiLogOutCircle      style={{transform:"rotate(90deg)", fontWeight:"bolder"}} /></div>
                <div className="admin">Admin Mode<MdOutlineAdminPanelSettings/> </div>
                   <div className="setting">Setting <AiTwotoneSetting/></div>
              
                 <div className="file">File<BsFiles/> </div> 
                 <div className="forword">Forward <RiShareForwardFill/></div>
                 <div className="sent-back">Sent Back<TiArrowBack/></div> 
                 <div className="reject"> Reject<AiOutlineStop/></div>
                 <div className="nextAssessor"> Next Assessor <BsFillArrowRightCircleFill/></div>

                 </div>
            </div>
           {/**middle screen */}
          <div className="main-screen">
            <img src={mainScreen} alt="mainscreen" />
          </div>
          <div className="content-type">
            <div className="content-item"> <span><ImCross/></span>Data_file.xls </div>
            <div className="content-item" ><span><ImCross/> </span> Report_1.pdf </div>
          </div>
          {/**lower screen */}
          <div className="second-screen">
            <div className="sec-scr-icons">
              <div className="menu_bar">
                <div className="show_menu">
              {
              menudata.map((data)=>{
                return(
                    <div className="show_menu_item">
                      <small>
                    {data.listItem}
                    </small>
                    </div>
                  
                );
              })
               }
                 </div>
               <div class="dropdown" >
                 <input type="text" defaultValue="Calibri Body" />
                    <div class="dropdown-content">
                    <option default>Calibri Body</option>
                    <option>italic</option>
                   <option>serif</option>
                   <option> sans-serif</option>
                   <option> cursive</option>
                   <option> fantasy</option>
                   <option> monospace</option>
                    </div>
                </div>
               <div class="dropdown num" >
                 <input type="text" defaultValue="0"/>
                    <div class="dropdown-content">
                    <option>0</option>
                    <option>1</option>
                   <option>2</option>
                   <option>3</option>
                   <option>4</option>
                   <option>5</option>
                   <option>6</option>
                    </div>
                </div>
              </div>

              <div className="sec-scr">
                 <AiOutlinePaperClip/>
                 <div className="comment">comment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;


/*here i am divided screen into to part 1)left part ->for rendering carts 2) right part. again right part futher divided into 3 parts 1)header 2)middle section & 3) lower section **/
