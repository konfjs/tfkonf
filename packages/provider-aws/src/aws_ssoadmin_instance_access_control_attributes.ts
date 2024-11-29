import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsSsoadminInstanceAccessControlAttributesArgsAttributeValue {
  source: string[];
}
export interface AwsSsoadminInstanceAccessControlAttributesArgsAttribute {
  key: string;
  value: AwsSsoadminInstanceAccessControlAttributesArgsAttributeValue;
}
export interface AwsSsoadminInstanceAccessControlAttributesArgs {
  instance_arn: string;
  attribute: AwsSsoadminInstanceAccessControlAttributesArgsAttribute;
}
export class aws_ssoadmin_instance_access_control_attributes extends TerraformResource {
  readonly id?: string;
  readonly status!: string;
  readonly status_reason!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSsoadminInstanceAccessControlAttributesArgs) {
    super(config, "resource", args, resourceName, "aws_ssoadmin_instance_access_control_attributes");
  }
}