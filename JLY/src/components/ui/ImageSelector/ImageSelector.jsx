import { Fragment, useState, useEffect, useCallback } from "react";
import "./ImageSelector.css";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import ImageList from "../../Dropzone/ImageList/ImageList";
import Dropzone from "../../Dropzone/Dropzone";
import cuid from "cuid";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
const ImageSelector = (props) => {
  const navigate = useNavigate();

  const [images, setImages] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    // Loop through accepted files
    acceptedFiles.map((file) => {
      console.log(file);
      // Initialize FileReader browser API
      const reader = new FileReader();

      reader.onload = function (e) {
        console.log(e.target);
        setImages((prevState) => [
          ...prevState,
          {
            cid: cuid(),
            src: e.target.result,
            name: file.name,
            type: file.type,
            t: file,
          },
        ]);
      };
      // Read the file as Data URL)
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  const uploadImages = async () => {
    console.log(images);
    let formData = new FormData();
    images.forEach((image) => {
      console.log(image.src);
      const cutOff = "data:image/jpeg;base64,";
      const srcData = image.src.replace(cutOff, "");
      console.log(srcData);

      // const blob = new Blob([image.src], { type: image.type });
      const blob = new Blob([srcData], { type: image.type });

      console.log(blob);
      // console.log(image.src);
      formData.append("ImageFile", image.t, image.name);
    });

    formData.append("name", "dff");
    await axios.post("http://localhost:5173/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  const handleImageUpload = () => {
    try {
      toast.promise(uploadImages(), {
        pending: {
          render() {
            return "Loading";
          },
          icon: false,
        },
        success: {
          render() {
            return "Successfully Uploaded!";
          },
          onClose: () => {
            navigate(0);
          },
          icon: "📚",
        },
        error: {
          render(err) {
            // When the promise reject, data will contains the error
            return `Error: ${err.data.response.data.msg}`;
          },
        },
      });
    } catch (err) {}
  };
  const [imageData, setImageData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5173/getupload")
      .then((res) => setImageData(res.data))
      .catch((err) => console.log(err));
  }, []);

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <Fragment>
      <main className="image-overlay-container">
        {imageData.map((file) => {
          console.log(file);
          const base64String = btoa(
            new Uint8Array(file.image.data.data).reduce(function (data, byte) {
              return data + String.fromCharCode(byte);
            }, "")
          );

          return (
            <div key={file._id} className="image-section-container">
              <img
                className="image-section-image"
                src={`data:image/png;base64,${base64String}`}
                width="300"
              />
            </div>
          );
        })}

        <div onClick={openModal} className="image-section-container">
          <PlusIcon className="plus-icon" />
        </div>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="modal" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="modal-w" />
            </Transition.Child>

            <div className="modal-w-c">
              <div className="modal-c">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="modal-cover">
                    <Dialog.Title as="h3" className="modal-Title">
                      Image Drop
                    </Dialog.Title>

                    <div style={{ marginTop: "8px" }}>
                      {/*  */}

                      <Dropzone onDrop={onDrop} accept={"image/*"} />
                      <ImageList images={images} />
                    </div>

                    <div style={{ marginTop: "16px" }}>
                      <button
                        type="button"
                        className="modal-button"
                        onClick={handleImageUpload}
                      >
                        Submit
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </main>{" "}
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Fragment>
  );
};

export default ImageSelector;
