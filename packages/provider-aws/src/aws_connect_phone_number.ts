import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsConnectPhoneNumberArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsConnectPhoneNumberArgs {
  country_code: string;
  description?: string;
  prefix?: string;
  tags?: { [key: string]: string };
  target_arn: string;
  type: string;
  timeouts?: AwsConnectPhoneNumberArgsTimeouts;
}

export class aws_connect_phone_number extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly phone_number!: string;
  readonly status!: any[];
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsConnectPhoneNumberArgs) {
    super(config, "resource", args, resourceName, "aws_connect_phone_number");
  }
}
