import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRekognitionCollectionArgsTimeouts {
  create?: string;
}

export interface AwsRekognitionCollectionArgs {
  collection_id: string;
  tags?: { [key: string]: string };
  timeouts?: AwsRekognitionCollectionArgsTimeouts;
}

export class aws_rekognition_collection extends TerraformResource {
  readonly arn!: string;
  readonly face_model_version!: string;
  readonly id!: string;
  readonly tags_all!: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsRekognitionCollectionArgs) {
    super(config, "resource", args, resourceName, "aws_rekognition_collection");
  }
}
