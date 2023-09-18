import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
    Typography,
  } from "@material-tailwind/react";
  
  import React from "react";
  import "react-toastify/dist/ReactToastify.css";
  import { ToastContainer, toast } from "react-toastify";
  import { verifyEmployer } from "../../../../features/axios/api/admin/adminVerifyEmployer";
  
  interface ViewIdProofProps {
    idImg: any;
    EmployerId: string;
  }
  
  const ViewIdProof: React.FC<ViewIdProofProps> = ({ idImg, EmployerId }) => {
  
  
    const notify = (msg: string, type: string) => {
      type === "error"
        ? toast.error(msg, { position: toast.POSITION.TOP_RIGHT })
        : toast.success(msg, { position: toast.POSITION.TOP_RIGHT });
    };
    const verification = async (status: Boolean, EmployerId: string) => {
      if(status){
        await verifyEmployer(EmployerId)
        .then((response) => {
          notify("Agent successfully verified", "success");
          setTimeout(() => {
             // eslint-disable-next-line no-restricted-globals
             location.replace('/admin/admin-verification')
          }, 2000);
        })
        .catch((error: any) => {
          notify(error.message, "error");
        });
      }else{
        notify('Okay! agent still in the same state', 'error')
      }
     
      
    };
    return (
      <Popover>
        <PopoverHandler>
          <Button>view document</Button>
        </PopoverHandler>
        <PopoverContent className="w-100 bg-white p-0 overflow-hidden flex z-[999]">
          <div className="p-4 m-0">
            <img
              src={idImg}
              alt="image"
              className="w-70 h-60 object-cover mt-4 mx-auto"
            />
            <div className="pt-2 mt-2 pb-3 flex justify-center">
              <a href="#" className="inline-block">
                <Button
                  size="sm"
                  variant="text"
                  className="flex items-center gap-1 capitalize text-green-900"
                  onClick={() => {
                    verification(true, EmployerId);
                  }}
                >
                  <Typography>Accept</Typography>
                </Button>
              </a>
              <a href="#" className="inline-block">
                <Button
                  size="sm"
                  variant="text"
                  className="flex items-center gap-1 capitalize text-red-600"
                  onClick={() => {
                    verification(false, EmployerId);
                  }}
                >
                  <Typography>Reject</Typography>
                </Button>
              </a>
            </div>
            <ToastContainer />
          </div>
        </PopoverContent>
      </Popover>
    );
  };
  
  export default ViewIdProof;
  