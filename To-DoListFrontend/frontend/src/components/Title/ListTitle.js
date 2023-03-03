import { Button, Dropdown, Menu, Space, Tooltip } from "antd";
import React, { Fragment } from "react";

const ListTitle = () => {
  return (
    <div class="row d-flex flex-row justify-content-between">
      <div>
        <h2>Title</h2>
      </div>
      <div>

     
      <Tooltip
            color="#fff"
            overlayClassName="w-100"
             title={
                // colors and themes 
                <Fragment>
                   <h6 className="mx-2">Tema</h6>
                   <hr />
                <div class="d-flex flex-row flex-wrap">
                  <button className="btn mx-2 my-2" style={{background :'#aaa'}} >
                  <div class=" p-2" >
                      </div>
                  </button>
                  <button className="btn mx-2 my-2" style={{background :'#aaa'}} >
                  <div class=" p-2" >
                      </div>
                  </button>
                  <button className="btn mx-2 my-2" style={{background :'#aaa'}} >
                  <div class=" p-2" >
                      </div>
                  </button>

                  <button className="btn mx-2 my-2" style={{background :'#aaa'}} >
                  <div class=" p-2" >
                      </div>
                  </button>
                  <button className="btn mx-2 my-2" style={{background :'#aaa'}} >
                  <div class=" p-2" >
                      </div>
                  </button>

                   <button className="btn mx-2 my-2" style={{background :'#aaa'}} >
                  <div class=" p-2" >
                      </div>
                  </button>
                 

                </div>
                <hr />
              <ul class="list-group ">
                <li class="list-item">
                <button
                type="button"
                class="btn btn-link btn-sm text-left text-dark"
                style={{ color: "#fff" }}
               //  onClick={() => handleDeleteComment(comment.id)}
              >
                {/* Delete {comment.id} */}
                <h6>Listeyi yazdir</h6>
              </button>
                </li>

                <li className="list-item">
              <button
                type="button"
                class="btn btn-light   btn-sm text-left "
             
               //  onClick={handleShowEditForm}
              >
                
             <div>
             <i class="fa-solid fa-trash mr-3 text-danger " ></i>
             <h6 className="d-inline text-danger ">Listeyi Sil</h6>
             </div>
              </button>
              </li>
            </ul>
            </Fragment>
             }
             trigger="click"
           >
             <div class="d-inline-flex flex-row">
              <button class="btn btn-primary "> Menu  <i class="fa-solid fa-ellipsis mx-2"></i></button>
            
             
           
             </div>
           </Tooltip>

      </div>
    </div>
  );
};

export default ListTitle;
