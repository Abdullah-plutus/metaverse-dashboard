import React, { useMemo } from "react";
import { Text, Spinner, Flex, VStack, Image } from "@chakra-ui/react";
import { DropEvent, FileRejection, useDropzone } from "react-dropzone";
import { MdInsertDriveFile } from "react-icons/md";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  height: "100%",
  width: "350px",
  // borderWidth: 2,
  borderRadius: "25px",
  // borderColor: "#808080",
  //  borderStyle: "dashed",
  backgroundColor: "#131536",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#51D55E",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

interface DropzoneProps {
  fileUploadLoading: boolean;
  onDrop: (
    acceptedFiles: File[],
    fileRejections?: FileRejection[],
    event?: DropEvent
  ) => void;
  fileName?: string;
  file?: string | File;
}

export default function Dropzone(props: DropzoneProps) {
  const { onDrop, fileUploadLoading, fileName, file } = props;
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: { "image/*": [".jpeg", ".jpg", ".png"] },
    onDrop,
    disabled: fileUploadLoading,
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  //@ts-ignore
  const url =
    typeof file !== "string" && typeof file !== "undefined"
      ? URL.createObjectURL(file)
      : file;

  return (
    <div>
      {/*  @ts-ignore */}
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <Text textAlign="center">
          {fileUploadLoading ? (
            <Flex justify="center" alignItems="center">
              <Spinner color="brand" thickness="2px" size="md" />
            </Flex>
          ) : (
            <VStack color="brand.200">
              {file ? <Image src={url} /> : <MdInsertDriveFile size={72} />}

              <Text
                casing="uppercase"
                fontSize="sm"
                rounded="lg"
                px="3"
                py="1.5"
                bg="brand"
                color="#676895"
              >
                {fileName ? fileName : "Drop or click to select file"}
              </Text>
            </VStack>
          )}
        </Text>
      </div>
    </div>
  );
}
