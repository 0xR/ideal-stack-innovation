import { ListObjectsCommand, S3Client } from "@aws-sdk/client-s3";
import { Bucket } from "sst/node/bucket";
import { unstable_cache as cache } from "next/cache";
import Image from "next/image";

const s3 = new S3Client();

export const getImages = cache(
  async () => {
    // @ts-ignore
    const bucketName = Bucket.public.bucketName;
    const command = new ListObjectsCommand({
      Bucket: bucketName,
    });

    const response = await s3.send(command);
    const images = response.Contents?.map((item) => item.Key);

    return { images: images || [], bucketName };
  },
  ["images"],
  {
    tags: ["images"],
  }
);

export const Gallery = async () => {
  const { images, bucketName } = await getImages();

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {images.map((imageKey) => (
        <Image
          key={imageKey}
          src={`${bucketName}.s3.amazonaws.com/${imageKey}`}
          alt={imageKey || "lame image"}
          width={100}
          height={100}
          className="object-cover w-full h-32 rounded-md shadow-md"
        />
      ))}
    </div>
  );
};
