import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsResourcegroupsGroupArgsconfigurationparameters {
  name: string;
  values: string[];
}
export interface AwsResourcegroupsGroupArgsconfiguration {
  type: string;
  parameters: AwsResourcegroupsGroupArgsconfigurationparameters;
}
export interface AwsResourcegroupsGroupArgsResourceQuery {
  query: string;
  type?: string;
}
export interface AwsResourcegroupsGroupArgstimeouts {
  create?: string;
  update?: string;
}
export interface AwsResourcegroupsGroupArgs {
  description?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  configuration: AwsResourcegroupsGroupArgsconfiguration;
  resource_query: AwsResourcegroupsGroupArgsResourceQuery;
  timeouts: AwsResourcegroupsGroupArgstimeouts;
}
export class aws_resourcegroups_group extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsResourcegroupsGroupArgs) {
    super(config, "resource", args, resourceName, "aws_resourcegroups_group");
  }
}