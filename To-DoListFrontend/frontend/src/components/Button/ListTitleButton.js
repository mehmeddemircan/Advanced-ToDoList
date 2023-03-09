import { Tooltip, theme } from "antd";
import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { UpdateGroup } from "../../redux/Actions/GroupAction";

const ListTitleButton = ({
  handleDeleteGroup,
  getSingleGroup,
  getAllTheme,
}) => {
  const dispatch = useDispatch();

  const [id, setId] = useState(getSingleGroup.group.data.id);
  const [groupName, setGroupName] = useState(
    getSingleGroup.group.data.groupName
  );
  const [themeId, setThemeId] = useState(0);

  const handleChangeTheme = () => {
    dispatch(UpdateGroup({ id, groupName, themeId }));
  };

  return (
    <Fragment>
      <Tooltip
        color="#fff"
        overlayClassName="w-100"
        title={
          // colors and themes
          <Fragment>
            <h6 className="mx-2">Tema {themeId}</h6>
            <hr />
            <div class="d-flex flex-row flex-wrap justify-content-between">
              {getAllTheme.themes.data.map((theme) => (
                <button
                  key={theme.id}
                  className="btn p-0 btn-light mx-2 my-2"
                
                  onClick={() => {
                    setThemeId(theme.id)
                    handleChangeTheme()
                  }}
                >
                  <img
                    className="img-fluid"
                    width={60}
                    src={`${theme.backgroundImage}`}
                  />
                </button>
              ))}
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
                  onClick={() =>
                    handleDeleteGroup(getSingleGroup.group.data.id)
                  }
                >
                  <div>
                    <i class="fa-solid fa-trash mr-3 text-danger "></i>
                    <h6 className="d-inline text-danger ">
                      Listeyi Sil {getSingleGroup.group.data.id}
                    </h6>
                  </div>
                </button>
              </li>
            </ul>
          </Fragment>
        }
        trigger="click"
      >
        <div class="d-inline-flex flex-row">
          <button class="btn btn-primary ">
            {" "}
            Menu <i class="fa-solid fa-ellipsis mx-2"></i>
          </button>
        </div>
      </Tooltip>
    </Fragment>
  );
};

export default ListTitleButton;
