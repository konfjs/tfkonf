import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsResourcegroupsGroupArgsConfigurationParameters {
  name: string;
  values: string[];
}

export interface AwsResourcegroupsGroupArgsConfiguration {
  type: string;
  parameters: AwsResourcegroupsGroupArgsConfigurationParameters;
}

export interface AwsResourcegroupsGroupArgsResourceQuery {
  query: string;
  type?: string;
}

export interface AwsResourcegroupsGroupArgsTimeouts {
  create?: string;
  update?: string;
}

export interface AwsResourcegroupsGroupArgs {
  description?: string;
  name: string;
  tags?: { [key: string]: string };
  configuration: AwsResourcegroupsGroupArgsConfiguration;
  resource_query: AwsResourcegroupsGroupArgsResourceQuery;
  timeouts?: AwsResourcegroupsGroupArgsTimeouts;
}

export class aws_resourcegroups_group extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsResourcegroupsGroupArgs) {
    super(config, "resource", args, resourceName, "aws_resourcegroups_group");
  }
}
