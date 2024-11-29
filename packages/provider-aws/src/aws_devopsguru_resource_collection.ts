import { TerraformConfig, TerraformResource } from "tfs";
export interface Cloudformation {
  stack_names: string[];
}
export interface Tags {
  app_boundary_key: string;
  tag_values: string[];
}
export interface AwsDevopsguruResourceCollectionArgs {
  type: string;
  cloudformation: Cloudformation;
  tags: Tags;
}
export class aws_devopsguru_resource_collection extends TerraformResource {
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDevopsguruResourceCollectionArgs) {
    super(config, "resource", args, resourceName, "aws_devopsguru_resource_collection");
  }
}