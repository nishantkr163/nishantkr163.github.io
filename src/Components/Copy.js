import React from "react";
import { styled } from "styled-components";
import copy from 'clipboard-copy';

const Copy = () => {

    const handleCopyClick = () => {
        const textToCopy = '+91 8987366488';
    
        copy(textToCopy)
          .then(() => {
            console.log("OK")
          })
          .catch((error) => {
            console.error('Copy failed: ', error);
          });
      };

  return (
    <DIV>
      <div class="centralize">
        <div>
          <button onClick={handleCopyClick} >
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="black">
                  <path d="M15.24 2h-3.894c-1.764 0-3.162 0-4.255.148c-1.126.152-2.037.472-2.755 1.193c-.719.721-1.038 1.636-1.189 2.766C3 7.205 3 8.608 3 10.379v5.838c0 1.508.92 2.8 2.227 3.342c-.067-.91-.067-2.185-.067-3.247v-5.01c0-1.281 0-2.386.118-3.27c.127-.948.413-1.856 1.147-2.593c.734-.737 1.639-1.024 2.583-1.152c.88-.118 1.98-.118 3.257-.118h3.07c1.276 0 2.374 0 3.255.118A3.601 3.601 0 0 0 15.24 2Z" />
                  <path d="M6.6 11.397c0-2.726 0-4.089.844-4.936c.843-.847 2.2-.847 4.916-.847h2.88c2.715 0 4.073 0 4.917.847c.843.847.843 2.21.843 4.936v4.82c0 2.726 0 4.089-.843 4.936c-.844.847-2.202.847-4.917.847h-2.88c-2.715 0-4.073 0-4.916-.847c-.844-.847-.844-2.21-.844-4.936v-4.82Z" />
                </g>
              </svg>
            </span>
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#22c55e"
                  d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59L21 7Z"
                />
              </svg>
            </span>
          </button>
          {/* <div>
            <div class="description">
              <p>Click to see what happens</p>
              <div>
                <div></div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </DIV>
  );
};

export default Copy;

const DIV = styled.div`
  button {
    background-color: #f2f7fa;
    width: 50px;
    height: 30px;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    overflow: hidden;
    transition-duration: 700ms;
  }

  button span:first-child {
    color: #0e418f;
    position: absolute;
    transform: translate(-50%, -50%);
  }

  button span:last-child {
    position: absolute;
    color: #b5ccf3;
    opacity: 0;
    transform: translateY(100%) translateX(-50%);
    height: 14px;
    line-height: 13px;
  }

  button:focus {
    background-color: #0e418f;
    width: 70px;
    height: 40px;
    transition-delay: 100ms;
    transition-duration: 500ms;
  }

  button:focus span:first-child {
    color: #b5ccf3;
    transform: translateX(-50%) translateY(-150%);
    opacity: 0;
    transition-duration: 500ms;
  }

  button:focus span:last-child {
    transform: translateX(-50%) translateY(-50%);
    opacity: 1;
    transition-delay: 300ms;
    transition-duration: 500ms;
  }

  button:focus:end {
    background-color: #ffffff;
    width: 120px;
    height: 40px;
    transition-duration: 900ms;
  }

  .centralize {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .description {
    margin-top: 10px;
    color: #b5ccf3;
  }
`;
