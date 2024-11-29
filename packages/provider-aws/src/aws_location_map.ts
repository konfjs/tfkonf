import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsLocationMapArgsconfiguration {
  style: string;
}
export interface AwsLocationMapArgs {
  description?: string;
  map_name: string;
  tags?: {
    [key: string]: string;
  };
  configuration: AwsLocationMapArgsconfiguration;
}
export class aws_location_map extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly map_arn!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLocationMapArgs) {
    super(config, "resource", args, resourceName, "aws_location_map");
  }
}