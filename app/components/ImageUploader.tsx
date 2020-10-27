import { InputLabel } from "@material-ui/core"
import { uploadFile } from "integrations/cloudinary"
import React, { useCallback } from "react"
import { useDropzone } from "react-dropzone"
interface Props {
  label?: string
}

const ImageUploader: React.FC<Props> = ({ label }) => {
  const onDrop = useCallback((acceptedFiles) => {
    uploadFile(acceptedFiles[0])
  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div className="dropzone-container">
        <InputLabel className="dropzone-label">{label}</InputLabel>
      </div>
    </div>
  )
}
ImageUploader.defaultProps = {
  label: "Label",
}
export default ImageUploader
