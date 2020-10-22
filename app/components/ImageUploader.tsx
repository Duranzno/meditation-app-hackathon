import { uploadFile } from 'integrations/cloudinary'
import React, { useCallback } from 'react'
import Form from 'react-bootstrap/Form'
import { useDropzone } from 'react-dropzone'
interface Props {
  label?: string,
}

const ImageUploader: React.FC<Props> = ({ label }) => {
  const onDrop = useCallback(
    acceptedFiles => {
      uploadFile(acceptedFiles[0])
    },
    [],
  )
  const { getRootProps, getInputProps, } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()}>

      <input {...getInputProps()} />
      <div className="dropzone-container">
        <Form.Label className="dropzone-label">{label}</Form.Label>
      </div>
    </div>
  )
}
ImageUploader.defaultProps = {
  label: "Label"
}
export default ImageUploader
