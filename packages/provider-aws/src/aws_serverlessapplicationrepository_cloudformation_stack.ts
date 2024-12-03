import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsServerlessapplicationrepositoryCloudformationStackArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsServerlessapplicationrepositoryCloudformationStackArgs {
  application_id: string;
  capabilities: string[];
  name: string;
  tags?: {
    [key: string]: string;
  };
  timeouts?: AwsServerlessapplicationrepositoryCloudformationStackArgsTimeouts;
}
export class aws_serverlessapplicationrepository_cloudformation_stack extends TerraformResource {
  readonly id?: string;
  readonly outputs!: {
    [key: string]: string;
  };
  readonly parameters?: {
    [key: string]: string;
  };
  readonly semantic_version?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsServerlessapplicationrepositoryCloudformationStackArgs) {
    super(config, "resource", args, resourceName, "aws_serverlessapplicationrepository_cloudformation_stack");
  }
}