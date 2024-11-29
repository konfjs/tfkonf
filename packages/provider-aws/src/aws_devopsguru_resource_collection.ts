import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDevopsguruResourceCollectionArgscloudformation {
  stack_names: string[];
}
export interface AwsDevopsguruResourceCollectionArgstags {
  app_boundary_key: string;
  tag_values: string[];
}
export interface AwsDevopsguruResourceCollectionArgs {
  type: string;
  cloudformation: AwsDevopsguruResourceCollectionArgscloudformation;
  tags: AwsDevopsguruResourceCollectionArgstags;
}
export class aws_devopsguru_resource_collection extends TerraformResource {
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDevopsguruResourceCollectionArgs) {
    super(config, "resource", args, resourceName, "aws_devopsguru_resource_collection");
  }
}