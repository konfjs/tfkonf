import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDevopsguruResourceCollectionArgsCloudformation {
  stack_names: string[];
}

export interface AwsDevopsguruResourceCollectionArgsTags {
  app_boundary_key: string;
  tag_values: string[];
}

export interface AwsDevopsguruResourceCollectionArgs {
  type: string;
  cloudformation: AwsDevopsguruResourceCollectionArgsCloudformation;
  tags: AwsDevopsguruResourceCollectionArgsTags;
}

export class aws_devopsguru_resource_collection extends TerraformResource {
  readonly id!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsDevopsguruResourceCollectionArgs) {
    super(config, "resource", args, resourceName, "aws_devopsguru_resource_collection");
  }
}
