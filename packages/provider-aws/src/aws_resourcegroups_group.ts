import { TerraformConfig, TerraformResource } from "tfs";
export interface Parameters {
  name: string;
  values: string[];
}
export interface Configuration {
  type: string;
  parameters: Parameters;
}
export interface ResourceQuery {
  query: string;
  type?: string;
}
export interface Timeouts {
  create?: string;
  update?: string;
}
export interface AwsResourcegroupsGroupArgs {
  description?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  configuration: Configuration;
  resource_query: ResourceQuery;
  timeouts: Timeouts;
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