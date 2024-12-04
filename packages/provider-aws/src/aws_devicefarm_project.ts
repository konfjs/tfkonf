import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDevicefarmProjectArgs {
  default_job_timeout_minutes?: number;
  name: string;
  tags?: { [key: string]: string };
}

export class aws_devicefarm_project extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsDevicefarmProjectArgs) {
    super(config, "resource", args, resourceName, "aws_devicefarm_project");
  }
}
