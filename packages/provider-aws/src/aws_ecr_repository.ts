import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEcrRepositoryArgsEncryptionConfiguration {
  encryption_type?: string;
}
export interface AwsEcrRepositoryArgsImageScanningConfiguration {
  scan_on_push: boolean;
}
export interface AwsEcrRepositoryArgsTimeouts {
  delete?: string;
}
export interface AwsEcrRepositoryArgs {
  force_delete?: boolean;
  image_tag_mutability?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  encryption_configuration: AwsEcrRepositoryArgsEncryptionConfiguration;
  image_scanning_configuration: AwsEcrRepositoryArgsImageScanningConfiguration;
  timeouts: AwsEcrRepositoryArgsTimeouts;
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