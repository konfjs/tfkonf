import { TerraformConfig, TerraformResource } from "tfs";
export interface Value {
  source: string[];
}
export interface Attribute {
  key: string;
  value: Value;
}
export interface AwsSsoadminInstanceAccessControlAttributesArgs {
  instance_arn: string;
  attribute: Attribute;
}
export class aws_ssoadmin_instance_access_control_attributes extends TerraformResource {
  readonly id?: string;
  readonly status!: string;
  readonly status_reason!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSsoadminInstanceAccessControlAttributesArgs) {
    super(config, "resource", args, resourceName, "aws_ssoadmin_instance_access_control_attributes");
  }
}