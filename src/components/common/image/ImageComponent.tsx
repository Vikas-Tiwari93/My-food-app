import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getRequest } from '../../../services/APIservices/AxiosServices';

const urlImage='https://dev191213.service-now.com/api/now/attachment/74adb83993c502106635f7718bba105c/file'

function ImagePreviewer() {
  const [previewUrl, setPreviewUrl] = useState('');
  useEffect(()=>{
    previewImage()
},[])

  const previewImage = async() => {
     const result = await getRequest(urlImage,{basicAuth:true});
     const contentType=result.headers["content-type"]
let binaryString = result.data.text()
let fileType= contentType ||"image/jpeg"
let base64
//
console.log(binaryString)
//
if(typeof contentType ==="string"){
  fileType= contentType.split(";")[0]
}
  let bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  const blob = new Blob([bytes], { type: fileType });
  const reader = new FileReader();
reader.readAsDataURL(blob);
reader.onloadend = () => {
  const base64String = reader.result; 
  base64=base64String as string
  console.log(base64)
  setPreviewUrl(base64)
};

  };

  return (
    <div>
      {previewUrl && <img src={previewUrl} alt="Preview" style={{ maxWidth: '100%' }} />}
    </div>
  );
}

export default ImagePreviewer;