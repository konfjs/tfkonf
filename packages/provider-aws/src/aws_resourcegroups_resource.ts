import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsResourcegroupsResourceArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsResourcegroupsResourceArgs {
  group_arn: string;
  resource_arn: string;
  timeouts?: AwsResourcegroupsResourceArgsTimeouts;
}

export class aws_resourcegroups_resource extends TerraformResource {
  readonly id?: string;
  readonly resource_type!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsResourcegroupsResourceArgs) {
    super(config, "resource", args, resourceName, "aws_resourcegroups_resource");
  }
}
