import { Injectable, OnModuleInit } from "@nestjs/common";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryResponse } from "./cloudinary-response.interface";
import streamifier = require("streamifier");

@Injectable()
export class CloudinaryService {
  uploadFile(file: Express.Multer.File): Promise<CloudinaryResponse> {
    return new Promise<CloudinaryResponse>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: "club-management" },
        (error, result) => {
          if (error) return reject(error);
          resolve(result as CloudinaryResponse);
        }
      );

      streamifier
        .createReadStream(Buffer.from((file!.buffer as any).data))
        .pipe(uploadStream);
    });
  }
}
