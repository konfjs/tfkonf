import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRedshiftParameterGroupArgsParameter {
  name: string;
  value: string;
}

export interface AwsRedshiftParameterGroupArgs {
  description?: string;
  family: string;
  name: string;
  tags?: { [key: string]: string };
  parameter: AwsRedshiftParameterGroupArgsParameter;
}

export class aws_redshift_parameter_group extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsRedshiftParameterGroupArgs) {
    super(config, "resource", args, resourceName, "aws_redshift_parameter_group");
  }
}
