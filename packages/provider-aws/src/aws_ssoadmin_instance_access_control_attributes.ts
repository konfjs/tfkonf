import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSsoadminInstanceAccessControlAttributesArgsattributevalue {
  source: string[];
}
export interface AwsSsoadminInstanceAccessControlAttributesArgsattribute {
  key: string;
  value: AwsSsoadminInstanceAccessControlAttributesArgsattributevalue;
}
export interface AwsSsoadminInstanceAccessControlAttributesArgs {
  instance_arn: string;
  attribute: AwsSsoadminInstanceAccessControlAttributesArgsattribute;
}
export class aws_ssoadmin_instance_access_control_attributes extends TerraformResource {
  readonly id?: string;
  readonly status!: string;
  readonly status_reason!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSsoadminInstanceAccessControlAttributesArgs) {
    super(config, "resource", args, resourceName, "aws_ssoadmin_instance_access_control_attributes");
  }
}