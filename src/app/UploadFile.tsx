import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { Bucket } from "sst/node/bucket";

const s3 = new S3Client();

export const UploadFile = async () => {
  async function uploadFile(formData: FormData) {
    "use server";

    const file = formData.get("file") as File;

    const command = new PutObjectCommand({
      ACL: "public-read",
      Key: crypto.randomUUID(),
      Bucket: Bucket.public.bucketName,
      Body: file,
    });

    s3.send(command);
  }

  return (
    <form action={uploadFile} className="mt-10">
      <input name="file" type="file" accept="image/png, image/jpeg" />
      <button
        type="submit"
        className="px-3 py-2 bg-blue-700 text-white rounded"
      >
        Upload
      </button>
    </form>
  );
};
