import { TerraformConfig, TerraformResource } from "tfs";
export interface EncryptionConfiguration {
  encryption_type?: string;
}
export interface ImageScanningConfiguration {
  scan_on_push: boolean;
}
export interface Timeouts {
  delete?: string;
}
export interface AwsEcrRepositoryArgs {
  force_delete?: boolean;
  image_tag_mutability?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  encryption_configuration: EncryptionConfiguration;
  image_scanning_configuration: ImageScanningConfiguration;
  timeouts: Timeouts;
}
export class aws_ecr_repository extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly registry_id!: string;
  readonly repository_url!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsEcrRepositoryArgs) {
    super(config, "resource", args, resourceName, "aws_ecr_repository");
  }
}