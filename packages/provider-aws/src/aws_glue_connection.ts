import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsGlueConnectionArgsPhysicalConnectionRequirements {
  availability_zone?: string;
  security_group_id_list?: string[];
  subnet_id?: string;
}
export interface AwsGlueConnectionArgs {
  connection_properties?: {
    [key: string]: string;
  };
  connection_type?: string;
  description?: string;
  match_criteria?: string[];
  name: string;
  tags?: {
    [key: string]: string;
  };
  physical_connection_requirements: AwsGlueConnectionArgsPhysicalConnectionRequirements;
}
export class aws_glue_connection extends TerraformResource {
  readonly arn!: string;
  readonly catalog_id?: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsGlueConnectionArgs) {
    super(config, "resource", args, resourceName, "aws_glue_connection");
  }
}