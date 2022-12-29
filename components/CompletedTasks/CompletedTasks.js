import { BiCheckDouble, BiCommentDetail } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { MdRemoveDone } from "react-icons/md";

import { Dropdown, Modal, Button, Text, Textarea } from "@nextui-org/react";
import { useContext, useState } from "react";

const CompletedTasks = () => {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <>
      <div className="md:w-[90%] mx-auto mb-3 ">
        <div className="w-full inline-flex items-center bg-white leading-none rounded-full p-2 pl-4 shadow text-teal text-sm group/edit">
          <button className="inline-flex border border-gray-700 text-white rounded-full h-5 w-5 hover:w-6 hover:h-6 justify-center items-center hover:transition-all hover:duration-300 group/item mr-1">
            <BiCheckDouble className="hidden group-hover/item:block hover:text-xl text-green-500 hover:transition-all hover:duration-500" />
          </button>
          <span className="text-lg inline-flex px-2 text-gray-700">
            Im a sexy badge and you can use me everyday at every hour. Im a sexy
            badge and you can use me everyday at every hour.
          </span>

          {/* <button className="ml-auto mr-3"></button> */}

          <Dropdown className="ml-20">
            <Dropdown.Button
              css={{
                borderRadius: "$xs",
                border: "$space$1 solid transparent",
                background: "$pink800",
                color: "$purple600",
                "&:hover": {
                  color: "$blue600",
                  color: "$blue600",
                },
              }}
              className="ml-auto"
            >
              <span className auto onClick={handler}>
                <BiCommentDetail className="text-primary text-2xl" />
              </span>
            </Dropdown.Button>

            <Dropdown.Menu aria-label="Actions" variant="light">
              <Dropdown.Item key="edit" color="warning">
                <span className="flex items-center">
                  <MdRemoveDone /> Undone
                </span>
              </Dropdown.Item>
              <Dropdown.Item key="delete" color="error">
                <span className="flex items-center">
                  <AiOutlineDelete /> Delete
                </span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      {/* Comment modal */}

      <Modal
        closeButton
        preventClose
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text b size={18}>
            Comment
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Textarea
            color="secondary"
            bordered
            labelPlaceholder="Write a comment"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button color="" auto onClick={closeHandler}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CompletedTasks;
