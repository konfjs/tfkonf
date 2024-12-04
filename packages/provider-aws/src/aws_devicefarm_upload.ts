import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDevicefarmUploadArgs {
  content_type?: string;
  name: string;
  project_arn: string;
  type: string;
}

export class aws_devicefarm_upload extends TerraformResource {
  readonly arn!: string;
  readonly category!: string;
  readonly id?: string;
  readonly metadata!: string;
  readonly url!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsDevicefarmUploadArgs) {
    super(config, "resource", args, resourceName, "aws_devicefarm_upload");
  }
}
